import { Metadata } from "next";
import DetailesMainContent from "./DetailesMainContent";
import { getProduct } from "@/services/getProduct";

type Props = {
  params: Promise<{ productId: string }> | { productId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.productId);

  return {
    title: product.title,
    description: product.description,
  };
}

async function Page(props: Props) {
  const { params } = props;
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.productId);
  return <DetailesMainContent product={product} />;
}

export default Page;
