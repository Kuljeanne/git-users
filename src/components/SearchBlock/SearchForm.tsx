import { FormEvent } from "react";

import { CLICK_BTNS } from "../../utils/constants";
import Button from "../Button";
import SearchInput from "../SearchInput";
import styles from "./SearchForm.module.css";

type SearchpRrops = {
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({ title, onSubmit}: SearchpRrops) => {

  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.inputBox}>
        <SearchInput />
        <Button type="search" text={CLICK_BTNS.search} />
      </div>
    </form>
  );
};
