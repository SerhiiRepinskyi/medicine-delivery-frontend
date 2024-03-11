import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteDrugs } from "../../redux/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/drugsSlice";

import icon from "../../assets/sprite-icons.svg";
import {
  DivImgStyled,
  ImgStyled,
  BtnFavorite,
  SvgStyled,
  BtnAddCart,
} from "./DrugCard.styled";

const DrugCard = ({ drug }) => {
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

  const favoriteIcon = drugIsFavorite ? "heart-active" : "heart-normal";

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
          <SvgStyled width="18" height="18">
            <use href={`${icon}#${favoriteIcon}`}></use>
          </SvgStyled>
        </BtnFavorite>
      </DivImgStyled>

      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <BtnAddCart>add to Cart</BtnAddCart>
    </div>
  );
};

export default DrugCard;
