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

export default async function StudentDashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "student") {
    redirect("/employer/dashboard");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome back, {user.name || "Student"}!
          </h1>
          <p className="text-text-secondary">
            You're logged in as a student ({user.email})
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/opportunities"
            className="bg-white rounded-xl shadow-card p-6 hover:shadow-hover transition"
          >
            <h2 className="text-lg font-bold text-text-primary mb-2">Browse Opportunities</h2>
            <p className="text-sm text-text-secondary">
              Explore internships and apply to positions
            </p>
          </Link>

          <Link
            href="/events"
            className="bg-white rounded-xl shadow-card p-6 hover:shadow-hover transition"
          >
            <h2 className="text-lg font-bold text-text-primary mb-2">Upcoming Events</h2>
            <p className="text-sm text-text-secondary">
              Discover events and competitions
            </p>
          </Link>

          <Link
            href="/scholarships"
            className="bg-white rounded-xl shadow-card p-6 hover:shadow-hover transition"
          >
            <h2 className="text-lg font-bold text-text-primary mb-2">Scholarships</h2>
            <p className="text-sm text-text-secondary">
              Find scholarship opportunities
            </p>
          </Link>
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
