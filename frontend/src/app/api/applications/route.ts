import { postApplicationResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return postApplicationResponse(request);
}
