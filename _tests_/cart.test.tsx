import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cart } from "@/components/cart/cart";

jest.mock("../src/context/use-cart-context", () => ({
  useCartContext: () => ({
    cart: [],
    total: 0,
    ClearCart: jest.fn(),
    setShowCart: jest.fn()
  })
}));

describe("Cart component", () => {
  test("renders empty cart message when cart is empty", () => {
    const { getByAltText, getByText } = render(<Cart />);
    expect(getByAltText("carrinho vazio")).toBeInTheDocument();
    expect(getByText("o seu carrinho está vazio")).toBeInTheDocument();
  });
});
