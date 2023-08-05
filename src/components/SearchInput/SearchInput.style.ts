import { styled } from "styled-components";

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  padding: 0.5rem;
  padding-left: 2.6rem;
  font-size: 2rem;
  color: #fff;
  width: 50rem;
  &::placeholder {
    color: #fff;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  padding: 0.5rem 0;
  cursor: pointer;
`;
