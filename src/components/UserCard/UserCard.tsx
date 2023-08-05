import { useState } from "react";

import { CLICK_BTNS } from "../../enums";
import Button from "../Button";
import * as S from "./UserCard.style";

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
    <S.Card>
      <S.Login>{login}</S.Login>
      <Button
        text={isInfoVisible ? CLICK_BTNS.hideUserInfo : CLICK_BTNS.showUserInfo}
        type="userInfo"
        onClick={handleClick}
        disabled={false}
      />
      {isInfoVisible ? (
        <S.MoreInfo>
          <S.Img  src={avatar} alt={login} ></S.Img>
          <S.Repo>
            Открыть репозиторий в новой вкладке:{" "}
            <a href={linkHTML} target="_blank">
              {login}
            </a>
          </S.Repo>
        </S.MoreInfo>
      ) : null}
    </S.Card>
  );
};
