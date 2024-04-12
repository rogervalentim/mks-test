import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { toast } from "sonner";
import { CardProduct } from "@/components/card-product/card-product";

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn()
  }
}));

const mockProduct = {
  id: 1,
  name: "Product 1",
  photo: "/product1.jpg",
  price: "2000"
};

test("renders product card correctly", () => {
  const onClickMock = jest.fn();
  const { getByText, getByAltText } = render(
    <CardProduct onClick={onClickMock} countItens={0} {...mockProduct} />
  );

  // Check if product name and price are rendered
  expect(getByText("Product 1")).toBeInTheDocument();
  expect(getByText("R$2000")).toBeInTheDocument();

  // Check if product image is rendered
  expect(getByAltText("Product 1")).toBeInTheDocument();

  // Check if buy button is rendered
  expect(getByText("COMPRAR")).toBeInTheDocument();
});

test("adds product to cart on click", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <CardProduct onClick={onClickMock} countItens={0} {...mockProduct} />
  );

  fireEvent.click(getByText("COMPRAR"));

  expect(onClickMock).toHaveBeenCalledWith(mockProduct);

  expect(
    toast.success
  ).toHaveBeenCalledWith("Product 1 adicionado ao carrinho!", {
    position: "top-right",
    duration: 1000
  });
});
