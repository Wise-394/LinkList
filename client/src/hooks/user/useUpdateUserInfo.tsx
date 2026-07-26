import { useMutation } from "@tanstack/react-query";
import { fetchBackend } from "@/service/utils/fetchBackend";

const putUser = async () => {};

export const UseUpdateUserInfo = () => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: putUser,
  });
  return {
    updateUserInfo: mutate,
    isPendingUserInfo: isPending,
    errorUserInfo: error,
  };
};
