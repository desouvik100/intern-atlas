import { postApplicationResponse } from "@internatlas/backend/api";

export const runtime = "edge";

export async function POST(request: Request) {
  return postApplicationResponse(request);
}
