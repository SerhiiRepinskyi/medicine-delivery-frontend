// import { Nav, NavLinkStyled } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/cart">Shopping Cart</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/coupons">Coupons</NavLink>
    </nav>
  );
};

export default Navigation;
