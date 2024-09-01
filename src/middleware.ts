import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const specialPath = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  const cookie = request.cookies.get("photography_token");
  const {
    nextUrl: { pathname },
  } = request;
  if (!cookie?.value) {
    if (specialPath.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (specialPath.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/map", "/profile/:id*", "/login", "/register"],
};
