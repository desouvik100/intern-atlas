import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, MonitorPlay, Ticket, Music, Library } from "lucide-react";

const CARDS = [
  { id: "c1", title: "Scholarships", desc: "Fund your dreams", bg: "bg-gradient-to-br from-[#1E293B] to-[#0F172A]", icon: GraduationCap, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
  { id: "c2", title: "Workshops", desc: "Learn from experts", bg: "bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]", icon: MonitorPlay, img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" },
  { id: "c3", title: "College Festivals", desc: "Be part of campus life", bg: "bg-gradient-to-br from-[#312E81] to-[#1E1B4B]", icon: Ticket, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" },
  { id: "c4", title: "Cultural Events", desc: "Express. Perform. Belong.", bg: "bg-gradient-to-br from-[#4C1D95] to-[#2E1065]", icon: Music, img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop" },
  { id: "c5", title: "Study Resources", desc: "Tools for your growth", bg: "bg-gradient-to-br from-[#022C22] to-[#064E3B]", icon: Library, img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
];

export function BeyondJobs() {
  return (
    <section className="bg-transparent pt-2 lg:pt-3 pb-0" aria-label="Beyond Jobs">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="mb-2 text-[18px] font-bold uppercase tracking-widest text-blue">
              EXPLORE MORE
            </span>
            <h2 className="text-[28px] font-extrabold text-primary tracking-tight leading-tight">
              Opportunities <span className="font-serif italic font-normal text-editorial-red">beyond jobs.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-blue cursor-pointer hover:text-blue-hover">
              View all <ArrowRight size={16} />
            </span>
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted hover:border-cyan-light hover:bg-background transition-colors"><ChevronLeft size={18} /></button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary hover:border-cyan-light hover:bg-background transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative flex h-[180px] w-full flex-col justify-end overflow-hidden rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-card border border-border hover:shadow-hover hover:border-cyan-light`}
            >
              {/* Background Image */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110" 
              />

              {/* Gradient overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Section: Text */}
              <div className="relative z-10">
                <h3 className="text-[15px] font-bold text-white tracking-tight leading-snug">{card.title}</h3>
                <p className="text-[12px] font-medium text-slate-200/90 leading-tight mt-0.5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
