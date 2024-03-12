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

export const FormStyled = styled.form`
  min-width: 400px;
  height: 740px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`;

export const DivDrugsCart = styled.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`;

export const BtnSubmit = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 160px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
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
`;

export const ListDrugs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`;
