import React from "react";
import { products } from "../../DummyData/products";

function useGetAllProducts() {
  return {
    isLoading: null,
    isError: null,
    isSuccess: true,
    data: products,
  };
}

export default useGetAllProducts;
