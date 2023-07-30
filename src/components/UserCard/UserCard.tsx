import { useState } from "react";

import Button from "../Button";
import styles from "./UsderCard.module.css";

type UserCardType = {
  login: string;
  avatar: string;
  linkHTML: string;
};

export const UserCard = ({ login, avatar, linkHTML }: UserCardType) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const handleClick = () => {
    setIsInfoVisible(!isInfoVisible);
  };
  return (
    <div className={styles.card}>
      <span className={styles.login}>{login}</span>
      <Button
        text={isInfoVisible ? "Скрыть" : "Показать больше"}
        type="userInfo"
        onClick={handleClick}
        disabled={false}
        className={styles.btn}
      />
      {isInfoVisible ? (
        <div className={styles.moreInfo}>
          <img src={avatar} alt={login} className={styles.img} />
          <p className={styles.repo}>
            Перейти в репозиторий{" "}
            <a href={linkHTML} target="_blank">
              по ссылке
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
};
