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

  if (pathname.startsWith("/onboarding")) {
    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token;

    try {
      const backendRes = await fetchBackend({
        endpoint: "/username",
        options: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      if (backendRes?.username) {
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
      }
    } catch (err) {
      console.error("fetchBackend failed in proxy:", err);
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
  }

  return getResponse();
}

export const config = {
  matcher: ["/onboarding/:path*", "/dashboard/:path*", "/admin/:path*"],
};
