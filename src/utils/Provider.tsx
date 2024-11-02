import NextProgress from "@/components/shared/next-progress";
import CartContextProvider from "@/context/CartContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartContextProvider>
      <NextProgress />
      {children}
    </CartContextProvider>
  );
};
export default Provider;
