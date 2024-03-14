import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListDrugs,
  selectIsLoading,
  selectError,
  selectSelectedShop,
} from "../../redux/selectors";
import { setSelectedShop } from "../../redux/drugsSlice";
import { fetchListDrugs } from "../../redux/drugsOperations";
import DrugCard from "../../components/DrugCard/DrugCard";
import {
  Container,
  DivShops,
  DivDrugs,
  ListDrugs,
  BtnShop,
} from "./ShopPage.styled";

const ShopPage = () => {
  const dispatch = useDispatch();
  const listDrugs = useSelector(selectListDrugs);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const selectedShop = useSelector(selectSelectedShop);

  useEffect(() => {
    dispatch(fetchListDrugs(selectedShop));
  }, [dispatch, selectedShop]);

  const handleShopChange = (shop) => {
    dispatch(setSelectedShop(shop));
  };

  const isShowList = listDrugs.length > 0;

  return (
    <section>
      <Container>
        <DivShops>
          <h3>Shops:</h3>
          <BtnShop
            onClick={() => handleShopChange("Drugs 24")}
            $isActive={selectedShop === "Drugs 24"}
          >
            Drugs 24
          </BtnShop>

          <BtnShop
            onClick={() => handleShopChange("Pharmacy")}
            $isActive={selectedShop === "Pharmacy"}
          >
            Pharmacy
          </BtnShop>

          <BtnShop
            onClick={() => handleShopChange("E-Tabletka")}
            $isActive={selectedShop === "E-Tabletka"}
          >
            E-Tabletka
          </BtnShop>

          <div>etc...</div>
        </DivShops>

        <DivDrugs>
          {isShowList && (
            <ListDrugs>
              {listDrugs.map((drug) => (
                <li key={drug._id}>
                  <DrugCard drug={drug} />
                </li>
              ))}
            </ListDrugs>
          )}

          {isLoading && !error && (
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 500,
                margin: "100px auto 0",
              }}
            >
              Request in progress...
            </div>
          )}
          {error && error}

          {!isShowList && (
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 500,
                margin: "100px auto 0",
              }}
            >
              There are no drugs in the store yet!
            </div>
          )}
        </DivDrugs>
      </Container>
    </section>
  );
};

export default ShopPage;
