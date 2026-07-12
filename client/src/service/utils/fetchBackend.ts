const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

interface Props {
  endpoint: string;
  options?: RequestInit;
}

export async function fetchBackend({ endpoint, options }: Props) {
  try {
    const result = await fetch(`${BACKEND_API}/${endpoint}`, options);

    if (result.status === 204) {
      return null;
    }

    const contentType = result.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("unexpected error");
    }

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.error?.msg || "Request failed");
    }
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
