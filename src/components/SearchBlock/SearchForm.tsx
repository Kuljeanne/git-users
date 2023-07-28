import cn from "classnames";
import { FormEvent } from "react";

import { CLICK_BTNS } from "../../utils/constants";
import Button from "../Button";
import SearchInput from "../SearchInput";
import styles from "./SearchForm.module.css";

type SearchpRrops = {
  title: string;
  inputPlaceholder: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  classes?: string;
};

export const SearchForm = ({ title, onSubmit, ...classes }: SearchpRrops) => {
  const cls = cn(styles.form, classes);

  return (
    <form onSubmit={(e) => onSubmit(e)} className={cls}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.inputBox}>
        <SearchInput />
        <Button type="search" text={CLICK_BTNS.search} />
      </div>
    </form>
  );
};
