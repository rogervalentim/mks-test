"use client";

import Image from "next/image";
import { Cart } from "../cart/cart";
import { useCartContext } from "@/context/use-cart-context";
import {
  ContainerCartButton,
  H1Styled,
  HeaderStyled,
  LogoContainer,
  SpanCart,
  SpanStyled
} from "./style";

export function Navbar() {
  const { cartItemCount, showCart, setShowCart } = useCartContext();

  return (
    <HeaderStyled>
      <LogoContainer>
        <H1Styled>MKS</H1Styled>
        <SpanStyled>Sistemas</SpanStyled>
      </LogoContainer>
      <ContainerCartButton type="button" onClick={() => setShowCart(true)}>
        <Image src="./cart.svg" alt="carrinho icon" width={18} height={18} />
        <SpanCart>
          {cartItemCount}
        </SpanCart>
      </ContainerCartButton>

      {showCart && <Cart />}
    </HeaderStyled>
  );
}
