import cn from "classnames";

import styles from "./Button.module.css";

type BtnProps = {
  type: "search" | "userInfo" | "pagination";
  text: string;
  onClick?: () => void;
  disabled: boolean;
  className?: string;
};

export const Button = ({
  type,
  text,
  onClick,
  disabled,
  className,
}: BtnProps) => {
  const cls = cn(styles.btn, styles[type], className);

  return (
    <button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      data-testid="pagination-check"
    >
      {text}
    </button>
  );
};
