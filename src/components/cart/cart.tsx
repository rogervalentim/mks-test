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
  Total,
  TotalContainer,
  TotalPrice
} from "./style";

export function Cart() {
  const { cart, total, ClearCart, setShowCart } = useCartContext();

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
          {cart.map(item => <CardCart {...item} key={item.id} />)}
        </CartProductsContainer>

        <TotalContainer>
          <Total>Total:</Total>
          <TotalPrice>
            R${total}
          </TotalPrice>
        </TotalContainer>
        <CheckoutButton>Finalizar a compra</CheckoutButton>
      </CartContainer>
    </CartWrapper>
  );
}
