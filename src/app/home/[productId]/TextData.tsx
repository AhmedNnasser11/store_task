"use server";
import { ProductType } from "@/types/list";

export const TextData = async ({ product }: { product: ProductType }) => {
  return (
    <div>
      <span className="text-sm font-medium text-blue-600 uppercase">
        {product.category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
    </div>
  );
};

export const DescriptionText = async ({ product }: { product: ProductType }) => {
  return (
    <p className="text-gray-600 text-lg leading-relaxed">
      {product.description}
    </p>
  );
};
