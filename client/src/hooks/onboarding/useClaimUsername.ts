import { fetchBackend } from "@/service/utils/fetchBackend";
import { useMutation } from "@tanstack/react-query";
import { getTokenClient } from "@/service/utils/getToken";
import { useRouter } from "next/navigation";

async function postUsername(username: string) {
  const token = await getTokenClient();

  if (!token) {
    throw new Error("unauthorized");
  }

  return fetchBackend({
    endpoint: "username",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    },
  });
}

export function useClaimUsername() {
  const router = useRouter();
  const { isPending, error, mutate } = useMutation({
    mutationFn: postUsername,
    onSuccess: () => router.replace("/"),
  });
  return { isPending, error, claimUsername: mutate };
}
