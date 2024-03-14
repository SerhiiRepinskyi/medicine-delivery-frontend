import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteDrugs, selectListCart } from "../../redux/selectors";
import {
  addToFavorites,
  removeFromFavorites,
  removeFromListCart,
  updateQuantityInCart,
} from "../../redux/drugsSlice";
import HeartIcon from "../HeartIcon/HeartIcon";
import {
  DivImgStyled,
  ImgStyled,
  BtnFavorite,
  BtnDelFromCart,
  DivQuantity,
  BtnDecInc,
  InputQuantity,
} from "./DrugCardToCart.styled";

const DrugCardToCart = ({ drug }) => {
  const dispatch = useDispatch();
  const favoriteDrugs = useSelector(selectFavoriteDrugs);
  const listCart = useSelector(selectListCart);

  const cartItem = listCart.find((item) => item._id === drug._id) || {};
  const quantity = cartItem.quantityUser || 1;

  const { name, price, shop, foto } = drug;

  const drugIsFavorite = favoriteDrugs.some(
    (favoriteDrug) => favoriteDrug._id === drug._id
  );

  const handleToggleFavorite = () => {
    if (drugIsFavorite) {
      dispatch(removeFromFavorites(drug));
    } else {
      dispatch(addToFavorites(drug));
    }
  };

  const handleRemoveFromListCart = () => {
    dispatch(removeFromListCart(drug));
  };

  const incrementQuantity = () => handleQuantityChange(quantity + 1);
  const decrementQuantity = () =>
    handleQuantityChange(Math.max(quantity - 1, 1));

  const handleQuantityChange = (newQuantity) => {
    dispatch(
      updateQuantityInCart({ drugId: drug._id, quantityUser: newQuantity })
    );
  };

  return (
    <div>
      <DivImgStyled>
        <ImgStyled src={foto} alt={name} />
        <BtnFavorite
          type="button"
          onClick={handleToggleFavorite}
          aria-label={
            drugIsFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <HeartIcon isActive={drugIsFavorite} />
        </BtnFavorite>
      </DivImgStyled>

      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Shop: {shop}</p>
      <DivQuantity>
        <BtnDecInc onClick={decrementQuantity}>–</BtnDecInc>
        <InputQuantity type="number" value={quantity} readOnly />
        <BtnDecInc onClick={incrementQuantity}>+</BtnDecInc>
      </DivQuantity>
      <BtnDelFromCart type="button" onClick={handleRemoveFromListCart}>
        remove from Cart
      </BtnDelFromCart>
    </div>
  );
};

export default DrugCardToCart;
