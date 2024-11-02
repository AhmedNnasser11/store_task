import { Metadata } from "next";
import DetailesMainContent from "./DetailesMainContent";
import { getProduct } from "@/services/getProduct";

type Props = {
  params: { productId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Metadata generation function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: product.title,
    description: product.description,
  };
}

// Page component
async function Page({ params }: Props) {
  const product = await getProduct(params.productId);
  return <DetailesMainContent product={product} />;
}

export default Page;
