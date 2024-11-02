"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductType } from "@/types/list";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { CartContext } from "@/context/CartContext";

const ProductActions = ({ product }: { product: ProductType }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProduct, removeFromCart, isInCart, updateQuantity } =
    useContext(CartContext);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    updateQuantity(product.id, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const totalPrice = product.price * quantity;

  return (
    <>
      <div className="flex flex-col gap-3">
        <label className="font-medium text-gray-900">Quantity:</label>
        <div className="flex items-center gap-4">
          <button
            onClick={decreaseQuantity}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <AiOutlineMinus className="w-5 h-5" />
          </button>
          <span className="text-xl font-medium w-12 text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <AiOutlinePlus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900">
            Total Price:
          </span>
          <span className="text-2xl font-bold text-blue-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {isInCart(product.id) ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addProduct({ ...product, quantity })}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <AiOutlineShoppingCart className="w-5 h-5" />
            Add {quantity} to Cart
          </button>
        )}

        <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductActions;
