import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Define paths to exclude (e.g., static files, API routes, _next folder)
  const excludedPaths = ["/api/", "/_next/", "/static/", "/favicon.ico"];

  // Check if the request path is excluded
  const isExcluded = excludedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // If the request is for an excluded path, just pass through
  if (isExcluded) {
    return response;
  }

  // Check if the requested URL is the login page
  const isProducts = request.nextUrl.pathname.startsWith("/products");
  const shopId = request.cookies.get("shopId");
  // If navigating to the product page and no shopId is found, redirect to home page
  if (isProducts && !shopId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}
