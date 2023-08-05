import { styled } from "styled-components";

export const Paginator = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
`;

export const Navigation = styled.div`
  width: 10rem;
  text-align: center;
  > span {
    display: inline-block;
    width: 20%;
  }
`;
