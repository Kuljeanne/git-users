import { keyframes } from "styled-components";
import { styled } from "styled-components";

const rotate = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 2rem;
  >svg {
    animation: ${rotate} 1.5s linear infinite
  }
`

export const Text = styled.p`
  font-size: 1.8rem;
`

