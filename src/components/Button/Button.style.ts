import { styled } from "styled-components";

export const Btn = styled.button`
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  color: #fff;

  &.search {
    font-size: 1.8rem;
    width: 20rem;
    background-color: blue;
  }

  &.userInfo {
    font-size: 1.4rem;
    background-color: transparent;
  }

  &.pagination {
    font-size: 1.4rem;
    background-color: blue;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  &:disabled {
    background-color: #aeaeae;
    color: #888;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
