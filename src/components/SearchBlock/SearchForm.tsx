import { FormEvent } from "react";

import { CLICK_BTNS } from "../../enums";
import Button from "../Button";
import SearchInput from "../SearchInput";
import * as S from './SearchForm.style'

type SearchpRrops = {
  title: string;
  btnDisable: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({ title, btnDisable, onSubmit }: SearchpRrops) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <S.Title>{title}</S.Title>
      <S.InputBox>
        <SearchInput />
        <Button type="search" text={CLICK_BTNS.search} disabled={btnDisable} />
      </S.InputBox>
    </form>
  );
};
