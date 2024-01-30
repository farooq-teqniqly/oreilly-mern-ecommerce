import { useState } from "react";
import { Product } from "src/types/types";
import productsData from "src/data/products";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setProducts(productsData);
  };

  return { products, fetchProducts };
};

export default useProducts;
