import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteDrugs, selectListCart } from "../../redux/selectors";
import {
  addToFavorites,
  removeFromFavorites,
  addToListCart,
} from "../../redux/drugsSlice";
import HeartIcon from "../HeartIcon/HeartIcon";
import {
  DivImgStyled,
  ImgStyled,
  BtnFavorite,
  BtnAddCart,
} from "./DrugCard.styled";

const DrugCard = ({ drug }) => {
  const dispatch = useDispatch();
  const favoriteDrugs = useSelector(selectFavoriteDrugs);
  const listCart = useSelector(selectListCart);
  const [addedToCart, setAddedToCart] = useState(false);

  const { name, price, foto } = drug;

  useEffect(() => {
    // Перевіряємо, чи даний товар був доданий до корзини
    const isDrugInCart = listCart.some((item) => item._id === drug._id);
    setAddedToCart(isDrugInCart);
  }, [listCart, drug._id]);

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

  const handleAddToListCart = () => {
    if (!addedToCart) {
      // Перевіряємо, чи товар ще не був доданий до корзини
      dispatch(addToListCart(drug));
      setAddedToCart(true); // Встановлюємо стан "додано до корзини" у true
    }
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
      <BtnAddCart
        type="button"
        onClick={handleAddToListCart}
        disabled={addedToCart}
      >
        {!addedToCart ? "add to Cart" : "added to Cart"}
      </BtnAddCart>
    </div>
  );
};

export default DrugCard;
