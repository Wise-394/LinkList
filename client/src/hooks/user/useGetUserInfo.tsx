import { useQuery } from "@tanstack/react-query";
import { fetchBackend } from "@/service/utils/fetchBackend";

interface Params {
  userID: string;
}

const getUserInfo = ({ userID }: Params) => {
  try {
    const data = fetchBackend({
      endpoint: `user/${userID}`,
      options: {
        method: "GET",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetUserInfo = ({ userID }: Params) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserInfo({ userID }),
    enabled: !!userID,
  });
  return { userInfo: data, isUserInfoLoading: isLoading, userInfoError: error };
};
