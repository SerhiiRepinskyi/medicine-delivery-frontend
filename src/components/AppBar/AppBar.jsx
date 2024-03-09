import Navigation from "../Navigation";
import { Link } from "react-router-dom";
// import { Header, ContainerHeader, LinkStyled } from "./AppBar.styled";

const AppBar = () => {
  return (
    <header>
      <div>
        <Navigation />

        <Link to="/">Shop - Button</Link>
      </div>
    </header>
  );
};

export default AppBar;
