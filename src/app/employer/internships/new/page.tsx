import { redirect } from "next/navigation";
import { getCurrentEmployer } from "@/lib/employer-session";
import { PostInternshipForm } from "./PostInternshipForm";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function PostInternshipPage() {
  const employer = await getCurrentEmployer();

  if (!employer) {
    redirect("/employer/login");
  }

  if (!employer.profileCompleted) {
    redirect("/employer/profile");
  }

  return <PostInternshipForm companyName={employer.companyName} />;
}
