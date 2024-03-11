import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;

  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`;

export const DivShops = styled.div`
  min-width: 215px;
  height: 740px;

  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  padding: 32px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`;

export const DivDrugs = styled.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`;

export const ListDrugs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`;

export const BtnShop = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 160px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: var(--primary-white-color);
  // background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }

  background-color: ${(props) =>
    props.$isActive ? "var(--accent-active-color)" : "var(--accent-color)"};
`;
