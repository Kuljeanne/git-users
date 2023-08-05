import { ChangeEvent, FormEvent, useState } from "react";

import ErrorBlock from "./components/ErrorBlock";
import NotFound from "./components/NotFound";
import PaginatedUsersLists from "./components/PaginatedUsersLists";
import RadioBtnGroup from "./components/RadioBtnGroup";
import SearchForm from "./components/SearchBlock";
import Spinner from "./components/Spinner";
import StartBlock from "./components/StartBlock";
import { USER_RESPONSE } from "./types";

function App() {
  const [data, setData] = useState<USER_RESPONSE[] | null>(null);
  const [sort, setSort] = useState<string>("desc");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (searchString: string, sort: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchString}&sort=repositories&order=${sort}`
      );
      if (response.status >= 400 && response.status <= 499) {
        throw new Error('Что-то пошло не так, возможно введены некоректные данные');
      }
      const data = await response.json();

      setData(data.items);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unknown Error: api.github.com/search/users"
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchString = String(formData.get("search"));
    fetchData(searchString, sort);
  };

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <SearchForm
        title="Поиск пользователей GITHUB"
        btnDisable={isLoading}
        onSubmit={(e) => handleSubmit(e)}
      />
      <RadioBtnGroup
        name="sort"
        checked={sort}
        onChange={(e) => handleSortChange(e)}
      />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorBlock text={error} />
      ) : data && data.length > 0 ? (
        <PaginatedUsersLists users={data} />
      ) : data && data.length === 0 ? (
        <NotFound />
      ) : (
        <StartBlock />
      )}
    </div>
  );
}

export default App;
