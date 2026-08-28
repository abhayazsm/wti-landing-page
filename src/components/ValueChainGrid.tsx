import { motion } from 'framer-motion';
import { Scissors, Sprout, Factory, Box, Cpu, Sparkles } from 'lucide-react';

export default function ValueChainGrid() {
  const sectors = [
    {
      title: "Yarns, Fibers & Raw Materials",
      desc: "Sustainable organic cotton, recycled polyester, bamboo, regenerated cellulose and high-performance fibers from global spinneries.",
      icon: Sprout,
      span: "md:col-span-2 md:row-span-2",
      gradient: "from-brand-emerald-500/30 to-teal-950/50",
      iconBg: "bg-brand-emerald-500/20 text-brand-emerald-400 border-brand-emerald-500/40",
      borderHover: "hover:border-brand-emerald-400/80 shadow-emerald-500/20",
      badge: "Hall A • Fibers Pavilion",
      bgImg: "/fibers-pavilion.jpg"
    },
    {
      title: "Garments & Global Apparel",
      desc: "Knitwear, woven garments, denim powerhouses, athleisure, and private label giants.",
      icon: Scissors,
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-brand-blue-500/25 to-blue-950/40",
      iconBg: "bg-brand-blue-500/20 text-brand-blue-400 border-brand-blue-500/30",
      borderHover: "hover:border-brand-blue-400/60 shadow-blue-500/10",
      badge: "Hall B • Apparel Export"
    },
    {
      title: "Textile Machinery & Smart AI",
      desc: "High-speed circular knitting, robotic cutting, digital textile printing & IoT tracking.",
      icon: Cpu,
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-sky-500/25 to-indigo-950/40",
      iconBg: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      borderHover: "hover:border-sky-400/60 shadow-sky-500/10",
      badge: "Hall C • Tech Expo"
    },
    {
      title: "Trims, Embellishments & Packaging",
      desc: "Bio-degradable hangers, recycled buttons, luxury metal hardware, woven tags & eco-packaging.",
      icon: Box,
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-brand-saffron-500/25 to-orange-950/40",
      iconBg: "bg-brand-saffron-500/20 text-brand-saffron-400 border-brand-saffron-500/30",
      borderHover: "hover:border-brand-saffron-400/60 shadow-orange-500/10",
      badge: "Hall D • Accessories"
    },
    {
      title: "Heritage Handlooms & Technical Textiles",
      desc: "Geographical Indication (GI) handcrafts, defense geo-textiles, medical non-wovens & silk.",
      icon: Factory,
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-brand-maroon-600/25 to-rose-950/40",
      iconBg: "bg-brand-maroon-500/20 text-brand-maroon-400 border-brand-maroon-500/30",
      borderHover: "hover:border-brand-maroon-400/60 shadow-rose-500/10",
      badge: "Hall E • Heritage & MedTech"
    }
  ];

  return (
    <section id="sourcing" className="py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-jacquard">
      {/* Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/30 text-brand-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End Value Chain
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-['Outfit']">
            The Complete Sourcing Ecosystem
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Explore 5 specialized pavilions spanning every link of the global textile value chain—from farm to fabric to high-street fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[270px]">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative glass-panel rounded-3xl p-8 overflow-hidden transition-all duration-500 border border-white/10 hover:shadow-2xl ${sector.span} ${sector.borderHover}`}
              >
                {/* Background Image if specified */}
                {sector.bgImg && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={sector.bgImg} 
                      alt={sector.title} 
                      className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.05] saturate-[1.1] transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/70 to-brand-navy-950/40" />
                  </div>
                )}

                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} ${sector.bgImg ? 'opacity-30 group-hover:opacity-70' : 'opacity-20 group-hover:opacity-100'} transition-opacity duration-500 z-[1]`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform duration-500 ${sector.iconBg}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-brand-navy-950/85 border border-white/15 text-slate-200 backdrop-blur-md shadow-sm">
                      {sector.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-['Outfit'] group-hover:text-brand-saffron-300 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

