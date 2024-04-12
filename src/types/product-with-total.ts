import { Product } from "./product"

export type ProductWithTotal = Product & {
  total: number
  amount: number
}