import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-around;
  align-items: center;
  width: 379px;
  max-width: 100%;
  height: 95px;
  border-radius: 8px;
  background-color: #ffffff;

  
  @media screen and (max-width: 767px) {
    justify-content: center;
    width: 320px;
  }
`;

export const NameProduct = styled.p`
  font-size: 13px;
  font-weight: 400;
  width: 113px;
  color: #2c2c2c;
`;

export const Container = styled.div`
  display: grid;
  gap: 4px;
`;

export const QtdText = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  aling-items: stretch;
  margin-left: auto;
  margin-right: auto;
  border: 0.3px solid #bfbfbf;
  width: 50px;
  height: 19px;
  border-radius: 4px;
`;

export const ButtonPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonMinus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Amount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  color: #000000;
  font-weight: 400;
`;

export const Price = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #000000;

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 0.2px;
  height: 10px;
  background-color: #bfbfbf;
`;

export const PositionButton = styled.div`
  flex-shrink: 0;
  position: relative;
`;

export const RemoveProductButton = styled.button`
  position: absolute;
  top: -9px; 
  right: -9px; 
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
