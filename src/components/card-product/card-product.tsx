"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { toast } from "sonner";
import {
  ButtonStyled,
  Buy,
  CardStyled,
  Description,
  H3Styled,
  ImageContainer,
  Price,
  PriceContainer,
  ProductNamePrice
} from "./style";

type CardProductProps = {
  onClick: (item: Product) => void;
  countItens: number;
} & Product;

export function CardProduct(props: CardProductProps) {
  const { id, name, photo, price, onClick } = props;

  const handleAddToCart = () => {
    onClick({ id, photo, price, name });

    toast.success(`${name} adicionado ao carrinho!`, {
      position: "top-right",
      duration: 2000
    });
  };

  return (
    <div>
      <CardStyled>
        <ImageContainer>
          <Image
            src={photo}
            alt={name}
            width={111}
            height={138}
            priority={true}
          />
        </ImageContainer>
        <ProductNamePrice>
          <H3Styled>
            {name}
          </H3Styled>
          <PriceContainer>
            <Price>
              R${parseFloat(price)}
            </Price>
          </PriceContainer>
        </ProductNamePrice>
        <Description>
          Redesigned from scratch and completely revised.
        </Description>
      </CardStyled>
      <ButtonStyled onClick={handleAddToCart}>
        <Image src="/bag.svg" width={12} height={13} alt="sacola icon" />
        <Buy>COMPRAR</Buy>
      </ButtonStyled>
    </div>
  );
}
