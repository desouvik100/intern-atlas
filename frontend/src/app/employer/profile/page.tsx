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

async function getEmployerProfile(id: number, sessionValue: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/employers/${id}`, {
      headers: {
        cookie: `session=${sessionValue}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}

export default async function EmployerProfilePage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "employer") {
    redirect("/student/dashboard");
  }

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");
  const profile = sessionCookie ? await getEmployerProfile(user.id, sessionCookie.value) : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link
            href="/employer/dashboard"
            className="text-sm text-blue-600 hover:underline font-semibold"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8">
          <h1 className="text-3xl font-bold text-text-primary mb-6">
            Company Profile
          </h1>

          {profile ? (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Email</h3>
                  <p className="text-text-primary">{profile.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Contact Name</h3>
                  <p className="text-text-primary">{profile.name || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Company Name</h3>
                  <p className="text-text-primary">{profile.companyName || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Verification Status</h3>
                  <p className="text-text-primary">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      profile.verificationStatus === "VERIFIED"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {profile.verificationStatus}
                    </span>
                  </p>
                </div>
              </div>

              {profile.companyDescription && (
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Company Description</h3>
                  <p className="text-text-primary">{profile.companyDescription}</p>
                </div>
              )}

              {(profile.industry || profile.companyType || profile.companySize) && (
                <div className="grid gap-6 md:grid-cols-3">
                  {profile.industry && (
                    <div>
                      <h3 className="text-sm font-semibold text-text-secondary mb-1">Industry</h3>
                      <p className="text-text-primary">{profile.industry}</p>
                    </div>
                  )}
                  {profile.companyType && (
                    <div>
                      <h3 className="text-sm font-semibold text-text-secondary mb-1">Company Type</h3>
                      <p className="text-text-primary">{profile.companyType}</p>
                    </div>
                  )}
                  {profile.companySize && (
                    <div>
                      <h3 className="text-sm font-semibold text-text-secondary mb-1">Company Size</h3>
                      <p className="text-text-primary">{profile.companySize}</p>
                    </div>
                  )}
                </div>
              )}

              {(profile.city || profile.state || profile.country) && (
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-1">Location</h3>
                  <p className="text-text-primary">
                    {[profile.city, profile.state, profile.country].filter(Boolean).join(", ")}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t">
                <p className="text-sm text-text-secondary">
                  Profile editing interface coming soon. Contact support to update your profile.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-text-secondary">Unable to load profile.</p>
          )}
        </div>
      </div>
    </div>
  );
}
