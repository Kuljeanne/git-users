import { ChangeEvent } from "react";

import { SORT_BTNS } from "../../utils/constants";
import RadioBtn from "../RadioBtn";
import styles from "./RadioBtnGroup.module.css";

type RadioGroupProps = {
  name: string;
  checked: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioBtnGroup = ({ name, checked, onChange }: RadioGroupProps) => {
  return (
    <div className={styles.group}>
      {SORT_BTNS.map((btn, index) => (
        <RadioBtn
          key={index}
          index={index}
          text={btn[1]}
          value={btn[0]}
          name={name}
          checked = {btn[0] === checked}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
