import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

const ProductsContext = createContext({
  products: [],
});

function ProductsProvider({ children }) {
  const [products] = useState(PRODUCTS);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
