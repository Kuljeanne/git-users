import { FaSpinner } from "react-icons/fa";

import * as S from "./Spinner.style";

export const Spinner = () => {
  return (
    <S.Container>
      <FaSpinner size="10rem" />
      <S.Text>Загрузка...</S.Text>
    </S.Container>
  );
};
