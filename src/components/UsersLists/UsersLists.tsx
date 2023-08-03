import { USER_RESPONSE } from "../../constants";
import UserCard from "../UserCard";
import styles from "./UsersList.module.css";

type UserListsProps = {
  perPage: number;
  page: number;
  users: USER_RESPONSE[];
};

export const UsersLists = ({ page, perPage, users }: UserListsProps) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginated = [...users].slice(start, end);

  return (
    <div className={styles.container}>
      {paginated.map(({ id, login, avatar_url, html_url }) => (
        <UserCard
          key={id}
          login={login}
          avatar={avatar_url}
          linkHTML={html_url}
        />
      ))}
    </div>
  );
};
