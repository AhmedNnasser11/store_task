import { endPoints } from "@/config/endPoints";
import HomeMainContent from "./HomeMainContent";

export default async function Home() {
    const data = await fetch(endPoints.products)
    const products = await data.json()
  return <HomeMainContent products={products} />
}
