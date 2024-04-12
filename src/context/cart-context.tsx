"use client";

import React, { createContext } from "react";

import { useCart } from "./use-cart";
import { ProductWithTotal } from "../types/product-with-total";
import { Product } from "../types/product";

type ICart = {
  cart: Array<ProductWithTotal>;
  total: number;
  cartItemCount: number;
  AddItemCart: (newItem: Product) => void;
  RemoveItemCart: (Item: Product) => void;
  purchaseCompleted: boolean;
  setPurchaseCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  removeProductFromCart: (Item: Product) => void;
  ClearCart: () => void;
};

export const CartContext = createContext<ICart>({} as ICart);

function CartProvider({
  children
}: React.PropsWithChildren): React.JSX.Element {
  const {
    showCart,
    setShowCart,
    AddItemCart,
    RemoveItemCart,
    cart,
    total,
    cartItemCount,
    purchaseCompleted,
    setPurchaseCompleted,
    removeProductFromCart,
    ClearCart
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        setShowCart,
        showCart,
        total,
        AddItemCart,
        RemoveItemCart,
        cartItemCount,
        purchaseCompleted,
        setPurchaseCompleted,
        removeProductFromCart,
        ClearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
