import { endPoints } from "@/config/endPoints";

export async function getProduct(productId: string) {
  const res = await fetch(endPoints.product(productId));
  
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  
  const product = await res.json();
  return product;
}