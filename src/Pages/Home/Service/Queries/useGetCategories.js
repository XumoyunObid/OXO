import { useQuery } from "react-query";
import { request } from "../../../../Config/request";

const useGetCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => {
      return request.get("/category").then((res) => res.data);
    },
  });
};

export default useGetCategories;
