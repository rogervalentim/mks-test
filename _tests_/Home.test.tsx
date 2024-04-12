import Home from "@/app/page";
import CartProvider from "@/context/cart-context";
import { render, screen } from "@testing-library/react";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({
    data: [
      {
        id: 1,
        name: "Product 1",
        photo: "/product1.jpg",
        price: "1000",
        countItens: 5
      },
      {
        id: 2,
        name: "Product 2",
        photo: "/product2.jpg",
        price: "1000",
        countItens: 3
      }
    ],
    isLoading: false
  }))
}));

describe("Home Component", () => {
  test("renders product cards correctly", () => {
    render(
      <CartProvider>
        <Home />
      </CartProvider>
    );

    const product1 = screen.getByText("Product 1");
    const product2 = screen.getByText("Product 2");
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
