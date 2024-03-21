import { useMutation } from "react-query";
import { request } from "../../../../Config/request";

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};

export default useLogin;
