import { useInfiniteQuery, useQuery } from "react-query";
import { request } from "../../../../Config/request";

const useGetSortedProducts = (datakey, param) => {
  return useInfiniteQuery({
    queryKey: ["category", datakey, param],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return request
        .get(`/${datakey}`, {
          params: { ...param, _page: pageParam, _limit: 10 },
        })
        .then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages, params) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });
};

export default useGetSortedProducts;
