// dummy data
import { promotions } from "../../DummyData/promotions";

function useGetAllPormotions() {
  return { data: promotions, isLoading: null, isError: null, isSuccess: true };
}

export default useGetAllPormotions;
