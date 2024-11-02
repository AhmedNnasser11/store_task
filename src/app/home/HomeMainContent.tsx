import HeaderTitle from "@/components/cors/HeaderTitle";
import ProductCard from "@/components/shared/ProductCard";
import { ProductType } from "@/types/list";

export default function HomeMainContent({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div>
      <HeaderTitle>Our Products</HeaderTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
