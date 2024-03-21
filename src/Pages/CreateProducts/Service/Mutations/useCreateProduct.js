import { useMutation } from "react-query";
import { request } from "../../../../Config/request";

const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["products"],
    mutationFn: (data) =>
      request.post(`/${data?.datakey}`, data).then((res) => res.data),
  });
};

export default useCreateProduct;
