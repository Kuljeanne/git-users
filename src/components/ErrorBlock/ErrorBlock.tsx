import styles from "./ErrorBlock.module.css";

type ErrorProps = {
  text: string;
};

export const ErrorBlock = ({ text }: ErrorProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.mist}>Случилось такое: {text}</p>
      <p className={styles.quote}>
        "Ошибки всегда прощаются, если есть смелость признать их." - Брюс Ли
      </p>
    </div>
  );
};
