import React from "react";

import Button from "../Button";
import styles from "./Pagination.module.css";

type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  } | null;
};

const Pagination = ({
  nav = null,
  disable,
  onNextPageClick,
  onPrevPageClick,
}: PaginationProps) => {
  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className={styles.paginator}>
      <Button
        type="pagination"
        className={styles.arrow}
        onClick={handlePrevPageClick}
        disabled={disable.left}
        text="<"
      />
      {nav && (
        <span className={styles.navigation}>
          {nav.current} / {nav.total}
        </span>
      )}
      <Button
        type="pagination"
        className={styles.arrow}
        onClick={handleNextPageClick}
        disabled={disable.right}
        text=">"
      />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Pagination);
