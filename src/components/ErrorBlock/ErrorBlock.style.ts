import { styled } from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url("./img/error.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1.5rem;
`;

export const Mist = styled.p` 
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;

export const Quote = styled.p` 
  font-size: 1.4rem;
  font-style: italic;
  max-width: 30rem;
`;
