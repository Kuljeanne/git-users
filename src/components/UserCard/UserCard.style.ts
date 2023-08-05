import { styled } from "styled-components";

export const Card = styled.div`
  max-width: 740px;
  box-sizing: border-box;
  border: 1px solid #00f;
  padding: 1rem 2rem;
  font-size: 2rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;
  > button {
    grid-column: -1;
  }
`;

export const Login = styled.span`
  grid-column: 1/3;
`;

export const MoreInfo = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: flex-end;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  margin-right: 1rem;
  max-width: 10rem;
  border-radius: 1rem;
  box-shadow: -3px 3px 10px 3px #fff;
`;

export const Repo = styled.p`
  font-size: 1.8rem;
`;
