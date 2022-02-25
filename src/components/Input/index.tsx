import React, { ChangeEventHandler } from "react";
import { InputContainer, InputContent } from "./styles";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  className?: string;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <InputContent {...props} />
    </InputContainer>
  );
};
