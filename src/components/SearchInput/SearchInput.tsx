import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

import * as S from "./SearchInput.style";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Label>
      <S.Icon>
        <FaSearch color="#fff" size="2rem" />
      </S.Icon>
      <S.Input
        name="search"
        value={value}
        placeholder="Поиск..."
        onChange={(e) => handleInput(e)}
        data-testid="input-search"
      />
    </S.Label>
  );
};
