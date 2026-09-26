import Link from "next/link";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Internships",
    href: "/internships",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1128] text-slate-400">
      <div className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              Intern<span className="text-sky-400">Atlas.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6">
              Helping students discover and apply to internship
              opportunities.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-xs">
            © {new Date().getFullYear()} InternAtlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}