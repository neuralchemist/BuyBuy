import { featuredProduct } from "../../DummyData/featuredProducts";

function useGetFeaturedProduct() {
  return {
    isLoading: null,
    isError: null,
    isSuccess: true,
    data: featuredProduct,
  };
}

export default useGetFeaturedProduct;
