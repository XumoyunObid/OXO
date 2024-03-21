import { useInfiniteQuery } from "react-query";
import { request } from "../../../../Config/request";

const useGetProducts = () => {
  return useInfiniteQuery({
    queryKey: ["productsloop"],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return request
        .get("/all", { params: { _page: pageParam, _limit: 10 } })
        .then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages, params) => {
      // console.log(lastPage, 'lastPage');
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });
};

export default useGetProducts;
