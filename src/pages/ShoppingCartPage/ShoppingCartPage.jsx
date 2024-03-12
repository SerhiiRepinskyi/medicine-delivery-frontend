import { useSelector } from "react-redux";
import { selectListCart } from "../../redux/selectors";
import DrugCardToCart from "../../components/DrugCardToCart/DrugCardToCart";
import {
  Container,
  FormStyled,
  BtnSubmit,
  DivDrugsCart,
  ListDrugs,
} from "./ShoppingCartPage.styled";

const ShoppingCartPage = () => {
  const listCart = useSelector(selectListCart);

  const isShowListCart = listCart.length > 0;

  return (
    <section>
      <Container>
        <FormStyled>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <BtnSubmit type="submit">Submit</BtnSubmit>
        </FormStyled>

        <DivDrugsCart>
          {isShowListCart && (
            <ListDrugs>
              {listCart.map((drug) => (
                <li key={drug._id}>
                  <DrugCardToCart drug={drug} />
                </li>
              ))}
            </ListDrugs>
          )}

          {!isShowListCart && (
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 500,
                margin: "100px auto 0",
              }}
            >
              There are no drugs in the Shopping Cart yet!
            </div>
          )}
        </DivDrugsCart>
      </Container>
    </section>
  );
};

export default ShoppingCartPage;
