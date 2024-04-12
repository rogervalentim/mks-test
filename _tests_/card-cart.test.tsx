import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CartProvider from "@/context/cart-context";
import { CardCart } from "@/components/card-cart/card-cart";

describe("CardCart component", () => {
  test("renders with correct props and triggers remove button onClick", () => {
    const product = {
      id: 1,
      name: "Product Name",
      photo: "/photo.jpg",
      price: "10.00",
      amount: 1,
      total: 1
    };

    const { getByText, getByTestId } = render(
      <CartProvider>
        <CardCart {...product} />
      </CartProvider>
    );

    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText("Qtd:")).toBeInTheDocument();
    expect(getByText("R$10")).toBeInTheDocument();
    expect(getByTestId("remove-button")).toBeInTheDocument();

    fireEvent.click(getByTestId("remove-button"));
  });
});
