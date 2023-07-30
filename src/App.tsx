import {
  ChangeEvent,
  FormEvent,
  useCallback,
  //useEffect,
  useState,
} from "react";

import ErrorBlock from "./components/ErrorBlock";
import NotFound from "./components/NotFound";
import Pagination from "./components/Pagination";
import RadioBtnGroup from "./components/RadioBtnGroup";
import SearchForm from "./components/SearchBlock";
import Spinner from "./components/Spinner";
import UserCard from "./components/UserCard";
import { USER_RESPONSE } from "./utils/constants";

const ROWS_PER_PAGE = 6;

const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

function App() {
  const [data, setData] = useState<USER_RESPONSE[] | null>(null);
  const [sort, setSort] = useState<string>("bigger");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (searchString: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchString}&sort=repositories`
      );
      const data = await response.json();
      if (sort === "less") setData([...data.items].reverse());
      if (sort === "bigger") setData(data.items);
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

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = data ? getTotalPageCount(data?.length) : current;

    setPage(next <= total ? next : current);
  }, [page, data]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchString = String(formData.get("search"));
    setLoading(true);
    fetchData(searchString);
  };

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);

    // если прошлое и настоящее равзные значения то сдлеать реверс
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
        onSubmit={(e) => handleSubmit(e)}
      />
      <RadioBtnGroup
        name="sort"
        checked={sort}
        onChange={(e) => handleSortChange(e)}
      />
      <div style={{ flexGrow: "1" }}>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <ErrorBlock text={error} />
        ) : data && data.length > 0 ? (
          data.map(({ id, login, avatar_url, html_url }) => (
            <UserCard
              key={id}
              login={login}
              avatar={avatar_url}
              linkHTML={html_url}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>

      <Pagination
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        disable={{
          left: page === 1,
          right: page === getTotalPageCount(data?.length || 1),
        }}
        nav={{ current: page, total: getTotalPageCount(data?.length || 1) }}
      />
    </div>
  );
}

export default App;
