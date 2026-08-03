const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

interface Props {
  endpoint: string;
  options?: RequestInit;
}

export async function fetchBackend({ endpoint, options }: Props) {
  const url = `${BACKEND_API}/${endpoint}`;

  try {
    const result = await fetch(url, options);

    if (result.status === 204) {
      return null;
    }

    const contentType = result.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const bodyText = await result.text();
      console.error(
        `fetchBackend: unexpected content-type from ${url}`,
        "status:",
        result.status,
        "contentType:",
        contentType,
        "body:",
        bodyText,
      );
      throw new Error(`unexpected response (status ${result.status})`);
    }

    const data = await result.json();

    if (!result.ok) {
      console.error(
        `fetchBackend: request failed for ${url}`,
        "status:",
        result.status,
        "data:",
        data,
      );
      throw new Error(data.error?.msg || "Request failed");
    }

    return data;
  } catch (err) {
    console.error(`fetchBackend error for ${url}:`, err);
    throw err;
  }
}
