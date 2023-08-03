import { useState } from "react";

import { CLICK_BTNS } from "../../enums";
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
        text={isInfoVisible ? CLICK_BTNS.hideUserInfo : CLICK_BTNS.showUserInfo}
        type="userInfo"
        onClick={handleClick}
        disabled={false}
        className={styles.btn}
      />
      {isInfoVisible ? (
        <div className={styles.moreInfo}>
          <img src={avatar} alt={login} className={styles.img} />
          <p className={styles.repo}>
            Открыть репозиторий в новой вкладке:{' '}
            <a href={linkHTML} target="_blank">
              {login}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
};
