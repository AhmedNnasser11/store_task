"use client";
import React, { useContext } from "react";
import NextImage from "next/image";
import { CartContext } from "@/context/CartContext";
import { ProductType } from "@/types/list";
import { useRouter } from "next-nprogress-bar";
import { routes } from "@/config/routes";

const ProductCard = ({ product }: { product: ProductType }) => {
  const route = useRouter();
  const { addProduct, isInCart, removeFromCart } = useContext(CartContext);
  const { image: src, title, description, price } = product;

  return (
    <div
      onClick={() => route.push(routes.product(product?.id))}
      className="w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <div className="relative h-48 w-full">
        <NextImage
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 title={title} className="text-lg font-semibold mb-2 line-clamp-1">
          {title}
        </h2>
        <p
          title={description}
          className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-blue-600">${price}</span>
          </div>
          {isInCart(product.id) ? (
            <button
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                removeFromCart(product?.id);
              }}>
              Remove from Cart
            </button>
          ) : (
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                addProduct(product);
              }}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
