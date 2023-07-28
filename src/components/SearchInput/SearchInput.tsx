import cn from "classnames";
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchInput.module.css";

type InputProps = {
  classes?: string;
};

export const SearchInput = ({ ...classes }: InputProps) => {
  const [value, setValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const cls = cn(styles.input, classes);
  return (
    <label className={styles.label}>
      <div className={styles.icon}>
        <FaSearch color="#fff" size="2rem" />
      </div>
      <input
        className={cls}
        value={value}
        placeholder="Поиск..."
        onChange={(e) => handleInput(e)}
      />
    </label>
  );
};
