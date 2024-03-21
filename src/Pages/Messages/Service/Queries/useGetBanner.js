import { useQuery } from "react-query";
import { request } from "../../../../Config/request";

const useGetBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () => {
      return request.get("/banners").then((res) => res.data);
    },
  });
};

export default useGetBanner;
