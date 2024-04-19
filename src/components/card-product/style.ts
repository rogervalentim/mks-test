import styled from "styled-components";

export const CardStyled = styled.div`
  width: 218px;
  height: 300px;
  box-shadow: 0px 2px 8px 0px #00000022;
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  margin-top: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 18px;
`;

export const ProductNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 11px;
  margin-top: 14px;
`;

export const H3Styled = styled.h3`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  width: 124px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373737;
  width: 64px;
  height: 26px;
  border-radius: 5px;
`;

export const Price = styled.p`
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  color: #ffffff;
`;

export const Description = styled.p`
  color: #2c2c2c;
  width: 192px;
  font-size: 10px;
  font-weight: 300;
  padding-top: 8px;
  padding-left: 14px;
`;

export const ButtonStyled = styled.button`
  background-color: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 218px;
  height: 32px;
  border-radius: 0 0 8px 8px;
  border: none;
  gap: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1180ff;
  }
`;

export const Buy = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
