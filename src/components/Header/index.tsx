import { HeaderContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => {
  return <HeaderContainer {...props} />;
};
