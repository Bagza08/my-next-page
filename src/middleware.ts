import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withAuth from "./middleware/WithAuth";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();

  return res;
}

export default withAuth(mainMiddleware, ["/product", "/about", "/profile"]);
