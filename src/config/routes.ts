export const routes = {
  home: "/home",
  product: (id: number | string) => `/home/${id}`,
  cart: "/cart",
};
