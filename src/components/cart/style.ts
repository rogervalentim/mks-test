import { motion } from "framer-motion";
import styled from "styled-components";

export const CartWrapper = styled.section`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  transition: all 1s ease-in-out;
`;

export const CartContainer = styled(motion.div)`
  height: 100vh;
  width: 486px;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;
  float: right;
  position: relative;
  padding-top: 36px;
  padding-right: 22px;

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

export const CartTitleCloseContainer = styled.div`
  padding-left: 47px;
  display: flex;
  justify-content: space-between;
`;

export const CartTitle = styled.h3`
  color: #ffffff;
  font-size: 27px;
  width: 180px;
`;

export const ButtonClose = styled.button`
  width: 38px;
  height: 38px;
  background-color: #000000;
  border-radius: 38px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

export const CartProductsContainer = styled.div`
  padding-top: 70px;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 28px;
  max-height: 300px;
  overflow-y: auto;
`;

export const CheckoutButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 97px;
  background-color: #000000;
  cursor: pointer;
  border: none;
  width: 100%;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  transform: translateX(-50%);
`;

export const TotalContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 47px;
  padding-right: 63px;
`;

export const Total = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const TotalPrice = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const FeedbackCart = styled.p `
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
