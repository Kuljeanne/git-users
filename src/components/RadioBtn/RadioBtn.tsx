import { ChangeEvent } from "react";

import * as S from "./RadioBtn.style";

type RadioBtnProps = {
  name: string;
  value: string;
  text: string;
  index: number;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioBtn = ({
  name,
  value,
  text,
  index,
  checked,
  onChange,
}: RadioBtnProps) => {
  return (
    <S.Label htmlFor={`${index}`}>
      <S.Input
        type="radio"
        name={name}
        value={value}
        id={`${index}`}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {text}
    </S.Label>
  );
};
