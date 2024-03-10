import Navigation from "../Navigation";
import { Header, ContainerHeader, LinkStyled } from "./AppBar.styled";

const AppBar = () => {
  return (
    <Header>
      <ContainerHeader>
        <Navigation />

        <LinkStyled to="/">Shop</LinkStyled>
      </ContainerHeader>
    </Header>
  );
};

export default AppBar;
