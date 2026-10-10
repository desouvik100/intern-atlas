import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";

async function getUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  if (!sessionCookie) {
    return null;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/auth/me`, {
      headers: {
        cookie: `session=${sessionCookie.value}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.user;
  } catch {
    return null;
  }
}

export default async function EmployerDashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "employer") {
    redirect("/student/dashboard");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome back, {user.name || "Employer"}!
          </h1>
          <p className="text-text-secondary">
            You're logged in as an employer ({user.email})
          </p>
          <p className="text-sm text-amber-700 mt-2 bg-amber-50 p-3 rounded-lg">
            Your account is pending verification. Full features will be available once verified.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/employer/profile"
            className="bg-white rounded-xl shadow-card p-6 hover:shadow-hover transition"
          >
            <h2 className="text-lg font-bold text-text-primary mb-2">Company Profile</h2>
            <p className="text-sm text-text-secondary">
              Update your company information
            </p>
          </Link>

          <div className="bg-slate-50 rounded-xl p-6 opacity-60">
            <h2 className="text-lg font-bold text-text-primary mb-2">Post Internships</h2>
            <p className="text-sm text-text-secondary">
              Create and manage internship postings (coming soon)
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 opacity-60">
            <h2 className="text-lg font-bold text-text-primary mb-2">Applications</h2>
            <p className="text-sm text-text-secondary">
              Review and manage applications (coming soon)
            </p>
          </div>
        </div>

        <div className="mt-8">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-200 transition"
            >
              Log out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
