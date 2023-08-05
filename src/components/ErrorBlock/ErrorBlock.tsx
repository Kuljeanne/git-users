import * as S from "./ErrorBlock.style";

type ErrorProps = {
  text: string;
};

export const ErrorBlock = ({ text }: ErrorProps) => {
  return (
    <S.Container>
      <S.Mist>Случилось такое: {text}</S.Mist>
      <S.Quote>
        "Ошибки всегда прощаются, если есть смелость признать их." - Брюс Ли
      </S.Quote>
    </S.Container>
  );
};
