import React, { MouseEventHandler, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<Props> = (props) => {
  return <ButtonContainer {...props} />;
};
