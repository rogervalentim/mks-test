import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #0f52ba;
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 65px;
  padding-right: 88px;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const H1Styled = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
`;

export const SpanStyled = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
`;

export const ContainerCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const SpanCart = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
