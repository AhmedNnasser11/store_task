"use client";
import { ProductType } from "@/types/list";
import { createContext, useState } from "react";

interface CartContextType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  addProduct: (product: ProductType) => void;
  removeFromCart: (id: string | number) => void;
  isInCart: (id: string | number) => boolean;
  updateQuantity: (id: string | number, quantity: number) => void;
}

const defaultValue: CartContextType = {
  products: [],
  setProducts: () => {},
  addProduct: () => {}, // Adjust to void return
  removeFromCart: () => {},
  isInCart: () => false,
  updateQuantity: () => {},
};

export const CartContext = createContext<CartContextType>(defaultValue);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const isInCart = (id: string | number) => {
    return products.some(product => product.id === id);
  };

  const removeFromCart = (id: string | number) => {
    setProducts(prevProducts =>
      prevProducts.filter(product => product.id !== id)
    );
  };

  const addProduct = (product: ProductType) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      setProducts(prevProducts => [...prevProducts, { ...product }]);
    }
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ products, setProducts, addProduct, removeFromCart, isInCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
