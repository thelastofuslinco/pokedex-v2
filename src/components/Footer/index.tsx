import React, { ReactNode } from "react";
import { FooterContainer } from "./styles";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Footer: React.FC<Props> = (props) => {
  return <FooterContainer {...props} />;
};
