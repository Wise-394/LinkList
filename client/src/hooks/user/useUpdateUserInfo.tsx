import { useMutation } from "@tanstack/react-query";
import { fetchBackend } from "@/service/utils/fetchBackend";
import { Link } from "../../../../types/types";

interface Params {
  name: string;
  bio: string;
  profileImage: File; //fix add validations
  coverImage: File;
  links: Link[];
  userID: string;
  accessToken: string;
}

const putUser = async (userInfo: Params) => {
  try {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: userInfo.name,
        bio: userInfo.bio,
        links: userInfo.links,
      }),
    );
    if (userInfo.profileImage) {
      formData.append("profileImage", userInfo.profileImage);
    }
    if (userInfo.coverImage) {
      formData.append("coverImage", userInfo.coverImage);
    }

    const data = await fetchBackend({
      endpoint: `user/${userInfo.userID}`,
      options: {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
        body: formData,
      },
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
