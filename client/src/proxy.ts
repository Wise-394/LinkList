import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseMiddlewareClient } from "./config/supabase/middleware";
import { fetchBackend } from "./service/utils/fetchBackend";

const ONBOARDING_PATH = "/onboarding";

export default async function proxy(req: NextRequest) {
  const { supabase, getResponse } = getSupabaseMiddlewareClient(req);
  const pathname = req.nextUrl.pathname;
  const homeUrl = new URL("/", req.nextUrl.origin);

  const { data: claimsData } = await supabase.auth.getClaims();
  const isLoggedIn = !!claimsData?.claims;

  if (!isLoggedIn) {
    return NextResponse.redirect(homeUrl);
  }

  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData.session?.access_token;
  const userID = claimsData!.claims.sub;

  let username: string | null = null;

  try {
    username = await fetchBackend({
      endpoint: `username/${userID}`,
      options: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  } catch (err) {
    console.error("fetchBackend failed in proxy:", err);
    return NextResponse.redirect(homeUrl);
  }

  const isOnboardingPath = pathname.startsWith(ONBOARDING_PATH);

  if (isOnboardingPath && username) {
    return NextResponse.redirect(homeUrl);
  }

  if (!isOnboardingPath && !username) {
    return NextResponse.redirect(new URL(ONBOARDING_PATH, req.nextUrl.origin));
  }

  return getResponse();
}

export const config = {
  matcher: ["/onboarding/:path*", "/dashboard/:path*", "/admin/:path*"],
};
