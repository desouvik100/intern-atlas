import { getDatasetResponse } from "@internatlas/backend/api";

export const runtime = "nodejs";

export async function GET(request: Request) {
  return getDatasetResponse(request);
}