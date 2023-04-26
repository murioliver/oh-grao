import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid #2E3F49;
  background-color: #01907C;
  color: #FFEBE4;
  gap: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 150ms;

  &:hover {
    background-color: #12a18d;
  }

  &:focus {
    border: 2px solid #34c3af;
  }

  @media (max-width: 767px) {
    padding: 1.125rem 1rem;
  }
`