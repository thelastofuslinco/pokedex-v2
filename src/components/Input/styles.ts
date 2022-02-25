import styled from "styled-components";

export const InputContainer = styled.div`
  width: 300px;
  height: 30px;
`;

export const InputContent = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding-left: 1rem;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid black;
  }
`;
