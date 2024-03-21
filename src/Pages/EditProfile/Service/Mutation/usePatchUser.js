// import { useMutation } from "react-query";
// import { request } from "../../../../Config/request";

// const usePatchUser = () => {
//   return useMutation({
//     mutationKey: ["users"],
//     mutationFn: (data) => request.patch("/users", data).then((res) => res.data),
//   });
// };

// export default usePatchUser;

import { useMutation } from "react-query";
import { request } from "../../../../Config/request";
import { loadState } from "../../../../Config/storage";

const usePatchUser = () => {
  const { id } = loadState("user");

  return useMutation({
    mutationKey: ["users"],
    mutationFn: (data) => {
      return request.patch(`/users/${id}`, data).then((res) => res.data);
    },
  });
};

export default usePatchUser;
