import CustomImage from "@/components/shared/CustomImage";
import { ProductType } from "@/types/list";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductItem = ({
  product,
  quantity,
  updateQuantity,
  removeFromCart,
}: {
  product: ProductType;
  quantity: number;
  updateQuantity: (id: string | number, quantity: number) => void;
  removeFromCart: (id: string | number) => void;
}) => {
  return (
    <div
      key={product.id}
      className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
      {/* Product Info */}
      <div className="flex items-center">
        <CustomImage
          src={product.image}
          alt={product.title}
          width={80}
          height={80}
          className="object-cover rounded"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quantity Controls and Remove Button */}
      <div className="flex items-center text-black">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-2 bg-gray-100 rounded hover:bg-gray-200"
          disabled={quantity <= 1}>
          <AiOutlineMinus />
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-2 bg-gray-100 rounded hover:bg-gray-200">
          <AiOutlinePlus />
        </button>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-4 p-2 bg-red-100 text-red-600 rounded hover:bg-red-200">
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
