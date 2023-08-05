import { CLICK_BTNS } from "../../enums";
import Button from "../Button";
import * as S from "./Pagination.style";

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
    <S.Paginator>
      <Button
        type="pagination"
        onClick={handlePrevPageClick}
        disabled={disable.left}
        text={CLICK_BTNS.pagination_prev}
      />
      {nav && (
        <S.Navigation data-testid="nav">
          <span>{nav.current}</span> / <span>{nav.total}</span>
        </S.Navigation>
      )}
      <Button
        type="pagination"
        onClick={handleNextPageClick}
        disabled={disable.right}
        text={CLICK_BTNS.pagination_next}
      />
    </S.Paginator>
  );
};
