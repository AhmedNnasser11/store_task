"use client";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import ProductItem from "./ProductItem";

const CartMainContent = () => {
  const { products, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = products.reduce((total, product) => {
    const quantity = product.quantity || 1;
    return total + product.price * quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {products.map(product => {
              const quantity = product.quantity || 1;
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  quantity={quantity}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </div>

          {/* Total Price and Checkout Button */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartMainContent;
