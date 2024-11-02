"use client";
import { routes } from "@/config/routes";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Header = () => {
  const { products } = useContext(CartContext);
  const pathname = usePathname();
  return (
    <header className=" bg-black py-4 text-white sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div>
          <Link href={routes.home}>logo</Link>
        </div>
        {pathname !== routes.home && (
          <div className="flex gap-1 items-center">
            <IoMdArrowRoundBack />
            <Link href={routes.home}>Home</Link>
          </div>
        )}
        <Link href={routes.cart} className="cursor-pointer relative">
          <RiShoppingCart2Fill className=" text-white z-0" size={30} />
          <div className="w-4 h-4 bg-red-500 rounded-full absolute -top-1 -right-1 z-10 flex items-center justify-center text-xs">
            {products?.length}
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
