import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteDrugs } from "../../redux/selectors";
import {
  addToFavorites,
  removeFromFavorites,
  removeFromListCart,
} from "../../redux/drugsSlice";
import HeartIcon from "../HeartIcon/HeartIcon";
import {
  DivImgStyled,
  ImgStyled,
  BtnFavorite,
  BtnDelCart,
} from "./DrugCardToCart.styled";

const DrugCardToCart = ({ drug }) => {
  const dispatch = useDispatch();
  const favoriteDrugs = useSelector(selectFavoriteDrugs);

  const { name, price, foto } = drug;

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
      <BtnDelCart type="button" onClick={handleRemoveFromListCart}>
        remove from Cart
      </BtnDelCart>
    </div>
  );
};

export default DrugCardToCart;
