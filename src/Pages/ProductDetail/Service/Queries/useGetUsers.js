import { useQuery } from "react-query";
import { request } from "../../../../Config/request";

const useGetUsers = ({ id }) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return request.get("/users", { params: { id } }).then((res) => res.data);
    },
  });
};

export default useGetUsers;
