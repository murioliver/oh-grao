import { motion } from "framer-motion";
import styled from "styled-components";

export const StartContainer = styled.main`
  gap: 4rem;
  display: grid;
  padding: 8rem 0;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled(motion.div)`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  img {
    width: 10rem;
    height: 10rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 120%;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 539px) {
    img {
      width: 8rem;
      height: 8rem;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 120%;
    }
  }
`;

export const Form = styled(motion.form)`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.625rem;
  }

  > div {
    gap: 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 539px) {
    h2 {
      font-size: 1.375rem;
    }

    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;

  label {
    color: #5b6f7e;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    display: flex;
    outline: none;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background-color: #2E3F49;
    border: 2px solid #2E3F49;
    color: #FFEBE4;

    &::placeholder {
      color: #8e9faf;
    }

    &:focus {
      border: 2px solid #5b6f7e;
    }
  }

  @media (max-width: 767px) {
    input {
      padding: 1.125rem 1rem;
    }
  }
`;
