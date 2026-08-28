import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EventHighlights() {
  const highlights = [
    {
      title: "Global Runway & Fashion Showcases",
      desc: "Experience high-octane runway shows featuring international couturiers and top Indian sustainable design luminaries.",
      img: "/runway-showcase.jpg",
      tag: "Live Runway",
      tagStyle: "bg-brand-saffron-500 text-brand-navy-950 shadow-orange-500/30",
      accentBorder: "group-hover:border-brand-saffron-500/50"
    },
    {
      title: "World Textile Sustainability & Innovation Awards",
      desc: "Honoring global trailblazers in waterless dyeing, closed-loop circularity, net-zero mills, and regenerative agriculture.",
      img: "/awards-gala.jpg",
      tag: "Gala & Awards",
      tagStyle: "bg-brand-emerald-500 text-brand-navy-950 shadow-emerald-500/30",
      accentBorder: "group-hover:border-brand-emerald-500/50"
    },
    {
      title: "CXO Knowledge Conclave & Global Policy Roundtables",
      desc: "High-level dialogues between Ministry delegates, export council chiefs, and Fortune 500 CEOs on global supply chain resilience.",
      img: "/cxo-roundtable.jpg",
      tag: "Leadership Summit",
      tagStyle: "bg-brand-blue-500 text-white shadow-blue-500/30",
      accentBorder: "group-hover:border-brand-blue-500/50"
    }
  ];

  return (
    <section id="highlights" className="py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-twill">
      {/* Background Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-brand-saffron-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-brand-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron-500/10 border border-brand-saffron-500/30 text-brand-saffron-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Concurrent Mega Events
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-['Outfit']">
              Beyond the Exhibition Floor
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Engage, learn, and network at signature summits designed to shape the future of global textile trade.
            </p>
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-brand-saffron-400 font-bold hover:text-brand-saffron-300 transition-colors whitespace-nowrap group"
          >
            <span>View 3-Day Agenda</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden glass-panel min-h-[500px] h-[520px] flex flex-col justify-between p-5 sm:p-6 border border-white/15 transition-all duration-500 ${item.accentBorder} hover:shadow-2xl`}
            >
              {/* Background Photo & Dark Vignette */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] contrast-[1.08]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/75 via-50% to-brand-navy-950/30" />
              </div>
              
              {/* Top Tag */}
              <div className="relative z-10 flex items-start justify-between">
                <span className={`inline-flex items-center px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider rounded-full shadow-lg border border-white/20 backdrop-blur-md ${item.tagStyle}`}>
                  {item.tag}
                </span>
              </div>
              
              {/* Bottom Frosted Glass Content Panel for Maximum Legibility */}
              <div className="relative z-10 glass-panel bg-brand-navy-950/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/15 shadow-2xl transition-all duration-300 group-hover:border-white/30 group-hover:bg-brand-navy-950/95">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 font-['Outfit'] group-hover:text-brand-saffron-300 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

