import { ChangeEvent, FormEvent, useState } from "react";

import ErrorBlock from "./components/ErrorBlock";
import NotFound from "./components/NotFound";
import Pagination from "./components/Pagination";
import RadioBtnGroup from "./components/RadioBtnGroup";
import SearchForm from "./components/SearchBlock";
import Spinner from "./components/Spinner";
import StartBlock from "./components/StartBlock";
import UsersLists from "./components/UsersLists";
import { USER_RESPONSE } from "./constants";

const ROWS_PER_PAGE = 6;

const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

function App() {
  const [data, setData] = useState<USER_RESPONSE[] | null>(null);
  const [sort, setSort] = useState<string>("desc");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (searchString: string, sort: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchString}&sort=repositories&order=${sort}`
      );
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

  const handleNextPageClick = () => {
    const current = page;
    const next = current + 1;
    const total = data ? getTotalPageCount(data?.length) : current;

    setPage(next <= total ? next : current);
  };

  const handlePrevPageClick = () => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchString = String(formData.get("search"));
    setLoading(true);
    fetchData(searchString, sort);
    setPage(1);
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
        <>
          <UsersLists users={data} page={page} perPage={ROWS_PER_PAGE} />
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: page === 1,
              right: page === getTotalPageCount(data.length),
            }}
            nav={{
              current: page,
              total: getTotalPageCount(data.length),
            }}
          />
        </>
      ) : data && data.length === 0 ? (
        <NotFound />
      ) : (
        <StartBlock />
      )}
    </div>
  );
}

export default App;
