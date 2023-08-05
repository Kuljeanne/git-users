import { useState } from "react";

import { ROWS_PER_PAGE } from "../../constants";
import { USER_RESPONSE } from "../../types";
import Pagination from "../Pagination";
import UserCard from "../UserCard";
import * as S from "./PaginatedUsersList.style";

type UserListsProps = {
  users: USER_RESPONSE[];
};

export const PaginatedUsersLists = ({ users }: UserListsProps) => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * ROWS_PER_PAGE;
  const end = start + ROWS_PER_PAGE;
  const paginated = [...users].slice(start, end);

  const getTotalPageCount = (rowCount: number): number =>
    Math.ceil(rowCount / ROWS_PER_PAGE);

  const handleNextPageClick = () => {
    const current = page;
    const next = current + 1;
    const total = users ? getTotalPageCount(users?.length) : current;

    setPage(next <= total ? next : current);
  };

  const handlePrevPageClick = () => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  };

  return (
    <>
      <S.Container>
        {paginated.map(({ id, login, avatar_url, html_url }) => (
          <UserCard
            key={id}
            login={login}
            avatar={avatar_url}
            linkHTML={html_url}
          />
        ))}
      </S.Container>
      <Pagination
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        disable={{
          left: page === 1,
          right: page === getTotalPageCount(users.length),
        }}
        nav={{
          current: page,
          total: getTotalPageCount(users.length),
        }}
      />
    </>
  );
};
