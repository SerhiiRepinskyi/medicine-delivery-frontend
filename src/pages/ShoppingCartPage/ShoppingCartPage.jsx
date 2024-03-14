import { useSelector } from "react-redux";
import { selectListCart } from "../../redux/selectors";
import DrugCardToCart from "../../components/DrugCardToCart/DrugCardToCart";
import {
  Container,
  DivWrapper,
  FormStyled,
  BtnSubmit,
  DivDrugsCart,
  ListDrugs,
  DivSubmit,
} from "./ShoppingCartPage.styled";

const ShoppingCartPage = () => {
  const listCart = useSelector(selectListCart);

  const isShowListCart = listCart.length > 0;

  const totalPrice = listCart.reduce((total, drug) => {
    const quantity = drug.quantityUser;
    const price = drug.price;
    const totalForDrug = quantity * price;
    return total + totalForDrug;
  }, 0);

  return (
    <section>
      <Container>
        <DivWrapper>
          <FormStyled id="orderForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
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
        </DivWrapper>

        <DivSubmit>
          <p>Total price: {totalPrice}</p>
          <BtnSubmit form="orderForm" type="submit">
            Submit
          </BtnSubmit>
        </DivSubmit>
      </Container>
    </section>
  );
};

export default ShoppingCartPage;
