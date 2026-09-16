import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  opportunities: [
    { label: "Internships", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Competitions", href: "#" },
    { label: "Hackathons", href: "#" },
    { label: "Scholarships", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "College Festivals", href: "#" },
    { label: "Cultural Events", href: "#" },
  ],
  students: [
    { label: "Career resources", href: "#" },
    { label: "Resume tips", href: "#" },
    { label: "Interview prep", href: "#" },
    { label: "Success stories", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help center", href: "#" },
  ],
  colleges: [
    { label: "Post opportunities", href: "#" },
    { label: "Partner with us", href: "#" },
    { label: "Campus outreach", href: "#" },
    { label: "College dashboard", href: "#" },
  ],
  company: [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1128] text-slate-400" aria-label="Site footer">
      <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-6">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6 lg:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" aria-label="InternAtlas home" className="flex items-center">
              <span className="text-[24px] font-extrabold tracking-tight text-white">
                Intern<span className="text-[#38BDF8]">Atlas.</span>
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed">
              Opportunities for every ambitious student.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((Social, i) => (
                <Link key={i} href={Social.href} className="text-slate-400 transition-colors hover:text-white">
                  <Social.icon size={20} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="grid grid-cols-4 gap-2 sm:gap-8 lg:col-span-4">
            <div>
              <h4 className="mb-3 sm:mb-5 text-[11px] sm:text-[14px] font-bold text-white leading-tight">Opportunities</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {FOOTER_LINKS.opportunities.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-[10px] sm:text-[13px] hover:text-white transition-colors leading-tight block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 sm:mb-5 text-[11px] sm:text-[14px] font-bold text-white leading-tight">For Students</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {FOOTER_LINKS.students.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-[10px] sm:text-[13px] hover:text-white transition-colors leading-tight block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 sm:mb-5 text-[11px] sm:text-[14px] font-bold text-white leading-tight">For Colleges</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {FOOTER_LINKS.colleges.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-[10px] sm:text-[13px] hover:text-white transition-colors leading-tight block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 sm:mb-5 text-[11px] sm:text-[14px] font-bold text-white leading-tight">Company</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {FOOTER_LINKS.company.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-[10px] sm:text-[13px] hover:text-white transition-colors leading-tight block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-slate-800 pt-6 pb-0 sm:flex-row relative z-10">
          <p className="text-[12px]">© {new Date().getFullYear()} Intern Atlas. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-6 sm:mt-0">
            <span className="flex items-center gap-2 text-[12px] text-white">
              Made for India <span role="img" aria-label="India flag">🇮🇳</span>
            </span>
          </div>
        </div>

      </div>

      {/* Massive Brand Footer Text (like antimattr) */}
      <div className="w-full overflow-hidden flex justify-center items-end bg-[#0A1128] pt-0 pb-8 -mt-10 select-none pointer-events-none">
        <span 
          className="text-[clamp(80px,19vw,450px)] font-bold tracking-[-0.06em] text-white whitespace-nowrap"
          style={{ lineHeight: '0.8' }}
        >
          internatlas
        </span>
      </div>
    </footer>
  );
}
