import Link from "next/link";

const FOOTER_GROUPS = [
  {
    title: "Opportunities",
    links: [
      ["Internships", "/internships"],
      ["Jobs", "/jobs"],
      ["Competitions", "/competitions"],
      ["Hackathons", "/hackathons"],
      ["Scholarships", "/scholarships"],
      ["Workshops", "/workshops"],
      ["College Festivals", "/college-festivals"],
      ["Cultural Events", "/cultural-events"],
    ],
  },
  {
    title: "For Students",
    links: [
      ["Career resources", "/resources"],
      ["Resume tips", "/resources"],
      ["Interview prep", "/resources"],
      ["Success stories", "/"],
      ["Blog", "/"],
      ["Help center", "/"],
    ],
  },
  {
    title: "For Colleges",
    links: [
      ["Post opportunities", "/employer/internships/new"],
      ["Partner with us", "/employer/profile"],
      ["Campus outreach", "/employer/profile"],
      ["College dashboard", "/employer/internships"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "/"],
      ["Careers", "/jobs"],
      ["Contact", "/"],
      ["Terms", "/"],
      ["Privacy", "/"],
      ["Cookies", "/"],
    ],
  },
];

function SocialIcon({
  kind,
  size = 16,
}: {
  kind: "linkedin" | "x" | "instagram" | "youtube";
  size?: number;
}) {
  const paths = {
    linkedin: <path d="M5 3.5A1.5 1.5 0 1 1 2 3.5a1.5 1.5 0 0 1 3 0ZM2.25 8h2.5v10h-2.5V8Zm4 0h2.4v1.37h.04c.33-.63 1.15-1.62 2.9-1.62 3.1 0 3.66 2.04 3.66 4.7V18h-2.5v-4.93c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V18h-2.5V8Z" />,
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.258 2.25H8.084l4.713 6.231 5.447-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />,
    instagram: <path d="M7 2.75h10A4.25 4.25 0 0 1 21.25 7v10A4.25 4.25 0 0 1 17 21.25H7A4.25 4.25 0 0 1 2.75 17V7A4.25 4.25 0 0 1 7 2.75Zm0 2A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17V7A2.25 2.25 0 0 0 17 4.75H7Zm5 2.5A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Zm5.5-2.25a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25Z" />,
    youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", kind: "linkedin" as const },
  { label: "X", href: "#", kind: "x" as const },
  { label: "Instagram", href: "#", kind: "instagram" as const },
  { label: "YouTube", href: "#", kind: "youtube" as const },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#102653] text-white">
      <div className="mx-auto w-full px-6 py-5 sm:px-[4vw] sm:py-6">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))] sm:gap-6 lg:gap-[5vw]">
          <div className="col-span-4 sm:col-span-1">
            <Link href="/" className="text-[25px] font-extrabold tracking-tight">
              Intern<span className="text-[#6ad4e4]">Atlas.</span>
            </Link>

            <p className="mt-2 max-w-[250px] text-[13px] leading-5 text-white/70">
              Opportunities for every ambitious student.
            </p>

            <div className="mt-4 flex items-center gap-5">
              {SOCIAL_LINKS.map(({ label, href, kind }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white transition hover:text-[#6ad4e4]"
                >
                  <SocialIcon kind={kind} size={16} />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-[10px] font-bold leading-4 text-white sm:text-sm sm:leading-6">
                {group.title}
              </h2>
              <ul className="mt-1 space-y-0.5">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[9px] leading-4 text-white/80 transition hover:text-white sm:text-[13px] sm:leading-6"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-3 text-[13px] text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Intern Atlas. All rights reserved.</p>
          <p className="flex items-center gap-1.5 sm:mr-1">
            Made for India
            <span aria-label="India" role="img" className="text-sm leading-none">
              🇮🇳
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}