import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseMiddlewareClient } from "./config/supabase/middleware";
import { fetchBackend } from "./service/utils/fetchBackend";

export default async function proxy(req: NextRequest) {
  const { supabase, getResponse } = getSupabaseMiddlewareClient(req);
  const pathname = req.nextUrl.pathname;

  const { data } = await supabase.auth.getClaims();
  const isLoggedIn = !!data?.claims;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData.session?.access_token;

  let username: string | null = null;

  try {
    const backendRes = await fetchBackend({
      endpoint: `username/${data.claims.sub}`,
      options: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    username = backendRes ?? null;
  } catch (err) {
    console.error("fetchBackend failed in proxy:", err);
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  if (pathname.startsWith("/onboarding") && username) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  if (!pathname.startsWith("/onboarding") && !username) {
    return NextResponse.redirect(new URL("/onboarding", req.nextUrl.origin));
  }

  return getResponse();
}

export const config = {
  matcher: ["/onboarding/:path*", "/dashboard/:path*", "/admin/:path*"],
};
