import React from "react";
import { useCartContext } from "@/context/use-cart-context";
import { ProductWithTotal } from "@/types/product-with-total";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import {
  Amount,
  ButtonMinus,
  ButtonPlus,
  ButtonsContainer,
  CardStyled,
  Container,
  NameProduct,
  PositionButton,
  Price,
  QtdText,
  RemoveProductButton,
  Separator
} from "./style";

export function CardCart(props: ProductWithTotal) {
  const { amount, id, photo, price, name } = props;
  const {
    AddItemCart,
    RemoveItemCart,
    removeProductFromCart
  } = useCartContext();

  return (
    <PositionButton>
      <RemoveProductButton
        type="button"
        onClick={() => removeProductFromCart({ id, photo, name, price })}
        data-testid="remove-button"
      >
        <X color="#ffffff" height={17} width={8} fontSize={14} />
      </RemoveProductButton>
      <CardStyled key={id}>
        <Image src={photo} alt={name} width={46} height={57} priority={true} />
        <NameProduct>
          {name}
        </NameProduct>

        <Container>
          <QtdText>Qtd:</QtdText>
          <ButtonsContainer>
            {amount &&
              <ButtonPlus
                data-testid="plus-button"
                type="button"
                onClick={() => AddItemCart(props)}
              >
                <Plus width={10} height={10} color="#000000" />
              </ButtonPlus>}
            <Separator />
            <Amount>
              {amount}
            </Amount>
            <Separator />
            <ButtonMinus
              type="button"
              onClick={() => RemoveItemCart(props)}
              data-testid="minus-button"
            >
              <Minus width={10} height={10} color="#000000" />
            </ButtonMinus>
          </ButtonsContainer>
        </Container>

        <Price>
          {price
            ? `R$${parseFloat(price).toFixed(0)}`
            : "Preço indisponível"}{" "}
        </Price>
      </CardStyled>
    </PositionButton>
  );
}
