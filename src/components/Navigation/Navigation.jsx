import { Nav, NavLinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Shop</NavLinkStyled>
      <NavLinkStyled to="/cart">Shopping Cart</NavLinkStyled>
      <NavLinkStyled to="/history">History</NavLinkStyled>
      <NavLinkStyled to="/coupons">Coupons</NavLinkStyled>
    </Nav>
  );
};

export default Navigation;
