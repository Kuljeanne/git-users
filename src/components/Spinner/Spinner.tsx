import { FaSpinner } from "react-icons/fa";

import styles from "./Spinner.module.css";
export const Spinner = () => {
  return (
    <div className={styles.container}>
      <FaSpinner size="10rem" className={styles.animation}/>
      <p className={styles.text}>Загрузка...</p>
    </div>
  );
};
