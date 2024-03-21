import { useMutation } from "react-query";
import { request } from "../../../../Config/request";

const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
  });
};

export default useRegister;
