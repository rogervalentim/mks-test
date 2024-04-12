"use client";

import { X } from "lucide-react";
import { useCartContext } from "@/context/use-cart-context";
import { CardCart } from "../card-cart/card-cart";
import {
  ButtonClose,
  CartContainer,
  CartProductsContainer,
  CartTitle,
  CartTitleCloseContainer,
  CartWrapper,
  CheckoutButton,
  FeedbackCart,
  Total,
  TotalContainer,
  TotalPrice
} from "./style";
import { useState } from "react";
import Image from "next/image";

export function Cart() {
  const { cart, total, ClearCart, setShowCart } = useCartContext();
  
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);


  function finalizarCompra() {
   
    setPurchaseCompleted(true);
    ClearCart();
  }
  
  return (
    <CartWrapper>
      <CartContainer
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ type: "tween" }}
        className="item"
      >
        <CartTitleCloseContainer>
          <CartTitle>Carrinho de compras</CartTitle>
          <ButtonClose type="button" onClick={() => setShowCart(false)}>
            <X width={15} height={20} color="#FFFFFF" />
          </ButtonClose>
        </CartTitleCloseContainer>

        <CartProductsContainer>
          {cart.length === 0 && !purchaseCompleted ? (
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}> 
            <Image src="./empty-cart.svg" alt="carrinho vazio"  width={130} height={130} />
            <FeedbackCart>o seu carrinho está vazio</FeedbackCart>
            </div>
          )  : (
            <>
            {cart.map(item => <CardCart {...item} key={item.id} />)}
            </>
          )
  }
        </CartProductsContainer>
         
        {purchaseCompleted && (
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}> 
        <Image src="./purchase-completed.svg" width={130} height={130} alt="imagem de compra realizada com sucesso" />
        <FeedbackCart>Compra concluída com sucesso!</FeedbackCart>
         </div>
)}


        {cart.length > 0  ?
        <>
        <TotalContainer>
          <Total>Total:</Total>
          <TotalPrice>
            R${total}
          </TotalPrice>
        </TotalContainer>
        <CheckoutButton onClick={finalizarCompra}>Finalizar a compra</CheckoutButton> 
        </> 
        : 
        <div />
      }
      </CartContainer>
    </CartWrapper>
  );
}
