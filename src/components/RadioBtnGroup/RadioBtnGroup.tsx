import { ChangeEvent } from "react";

import { SORT_BTNS } from "../../constants";
import RadioBtn from "../RadioBtn";
import * as S from "./RadioBtnGroup.style";

type RadioGroupProps = {
  name: string;
  checked: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioBtnGroup = ({ name, checked, onChange }: RadioGroupProps) => {
  const btns = Object.entries(SORT_BTNS);
  return (
    <S.Group>
      {btns.map((btn, index) => (
        <RadioBtn
          key={index}
          index={index}
          text={btn[1]}
          value={btn[0]}
          name={name}
          checked={btn[0] === checked}
          onChange={onChange}
        />
      ))}
    </S.Group>
  );
};
