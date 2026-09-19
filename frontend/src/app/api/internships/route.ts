import {
  getInternshipsResponse,
  postInternshipResponse,
} from "@internatlas/backend/api";

export const runtime = "nodejs";

export async function GET() {
  return getInternshipsResponse();
}

export async function POST(request: Request) {
  return postInternshipResponse(request);
}
