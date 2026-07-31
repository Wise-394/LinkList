import { useQuery } from "@tanstack/react-query";
import { fetchBackend } from "@/service/utils/fetchBackend";

interface Params {
  userID: string;
  accessToken: string;
}

const getUserInfo = ({ userID, accessToken }: Params) => {
  try {
    const data = fetchBackend({
      endpoint: `user/${userID}`,
      options: {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetUserInfo = ({ userID, accessToken }: Params) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserInfo({ userID, accessToken }),
    enabled: !!userID && !!accessToken,
  });
  return { userInfo: data, isUserInfoLoading: isLoading, userInfoError: error };
};
