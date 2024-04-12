"use client";

import { CardProduct } from "@/components/card-product/card-product";
import { useCartContext } from "@/context/use-cart-context";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

interface ProductsProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  countItens: number;
}


const GridContainer = styled.main`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  padding-top: 116px;
  gap: 22px;
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export default function Home() {
  const { AddItemCart, cart } = useCartContext()

  const { data: products, isLoading } = useQuery<ProductsProps[]>({
    queryKey: ["get-all-products"],
    queryFn: async () => {
      const response = await fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      const data = await response.json();
      
      console.log("data", data.products)
      return data.products;
    }
  });

  if (isLoading) {
    return "...carregando";
  }

  return (
    <GridContainer>
      {products?.map((product) => (
        <CardProduct
          id={product.id}
          key={product.id} 
          photo={product.photo}
          name={product.name}
          price={product.price}
          countItens={product.countItens}
          onClick={(item) => AddItemCart(item)}
        />
      ))}
    </GridContainer>
  );
}
