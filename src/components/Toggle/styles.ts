import styled from "styled-components";

export interface Props {
  secondLabelWidth?: number;
  secondLabelLeft?: number;
  firstLabelLeft?: number;
  firstLabelWidth?: number;
}

export const ToggleButton = styled.div<Props>`
  > input {
    display: none;
    &:checked + button:before {
      width: ${(props) => props.secondLabelWidth}px;
      left: ${(props) => props.secondLabelLeft}px;
    }
    &:checked + button > span {
      &:first-child {
        color: #000;
      }
      &:nth-child(2) {
        color: #fff;
      }
    }
    &:checked + button:disabled {
      background-color: darkgray;
      &:before {
        background-color: gray;
      }
    }
  }
  > button {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem;
    background-color: lightgray;
    outline: none;
    border-radius: 2rem;
    border: 1px solid black;
    outline: none;
    > span {
      transition: 0.56s;
      padding: 0 1rem;
      cursor: pointer;
      z-index: 2;
      &:first-child {
        color: #fff;
      }
      &:nth-child(2) {
        color: #000;
      }
    }
    &:before {
      content: "";
      transition: 0.56s;
      transition-timing-function: ease-out;
      position: absolute;
      left: ${(props) => props.firstLabelLeft}px;
      height: 1.5rem;
      width: ${(props) => props.firstLabelWidth}px;
      background: red;
      border-radius: 2rem;
      box-shadow: 1px 1px gray;
      z-index: 1;
    }
    &:disabled {
      background-color: darkgray;
      &:before {
        background-color: gray;
      }
    }
  }
`;
