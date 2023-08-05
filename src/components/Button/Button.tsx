import * as S from "./Button.style";

type BtnProps = {
  type: "search" | "userInfo" | "pagination";
  text: string;
  onClick?: () => void;
  disabled: boolean;
};

export const Button = ({
  type,
  text,
  onClick,
  disabled,
}: BtnProps) => {

  return (
    <S.Btn
      className={type}
      onClick={onClick}
      disabled={disabled}
      data-testid="pagination-check"
    >
      {text}
    </S.Btn>
  );
};
