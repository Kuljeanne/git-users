import cn from "classnames";
import styles from "./Button.module.css";

type BtnProps = {
  type: "search" | "userInfo";
  text: string;
  onClick?: () => void;
  classes?: string;
};

export const Button = ({ type, text, onClick, ...classes }: BtnProps) => {
  const cls = cn(styles.btn, styles[type], classes);

  return (
    <button className={cls} onClick={onClick}>
      {text}
    </button>
  );
};
