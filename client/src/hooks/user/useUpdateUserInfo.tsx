import { useMutation } from "@tanstack/react-query";
import { fetchBackend } from "@/service/utils/fetchBackend";
import { UserInfo } from "../../../../types/types";

const putUser = async (userInfo: UserInfo) => {
  try {
    const data = await fetchBackend({
      endpoint: "/user",
      options: { method: "PUT", body: JSON.stringify(userInfo) },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

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
