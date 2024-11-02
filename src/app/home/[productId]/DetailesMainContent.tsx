import CustomImage from "@/components/shared/CustomImage";
import { ProductType } from "@/types/list";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProductActions from "./ProductActions";

const ProductDetails = ({ product }: { product: ProductType }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <AiFillStar className="w-5 h-5 text-yellow-400" />
        ) : (
          <AiOutlineStar className="w-5 h-5 text-gray-300" />
        )}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <CustomImage
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {product.title}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {renderStars(product.rating.rate)}
              </div>
              <span className="text-gray-600">
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold text-gray-900">
                ${product.price}
              </div>
              <div className="text-lg text-gray-600">Per Unit</div>
            </div>
            <ProductActions product={product} />
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-4">
                Product Details:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>30-day return policy</li>
                <li>Designed and sold by Hafeez Center</li>
                <li>Made in the United States</li>
                <li>Satisfaction Guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
