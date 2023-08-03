import { CLICK_BTNS } from "../../enums";
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

export const Pagination = ({
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
        text={CLICK_BTNS.pagination_prev}
      />
      {nav && (
        <div className={styles.navigation} data-testid="nav">
          <span>{nav.current}</span> / <span>{nav.total}</span>
        </div>
      )}
      <Button
        type="pagination"
        className={styles.arrow}
        onClick={handleNextPageClick}
        disabled={disable.right}
        text={CLICK_BTNS.pagination_next}
      />
    </div>
  );
};
