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
            <ButtonPlus type="button" onClick={() => AddItemCart(props)}>
              <Plus width={10} height={10} color="#000000" />
            </ButtonPlus>
            <Separator />
            <Amount>
              {amount}
            </Amount>
            <Separator />
            <ButtonMinus type="button" onClick={() => RemoveItemCart(props)}>
              <Minus width={10} height={10} color="#000000" />
            </ButtonMinus>
          </ButtonsContainer>
        </Container>

        <Price>
          {parseFloat(price)}
        </Price>
      </CardStyled>
    </PositionButton>
  );
}
