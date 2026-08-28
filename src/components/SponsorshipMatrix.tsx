import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Eye, 
  Handshake, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  Globe, 
  Check, 
  Minus, 
  Crown, 
  Sparkles, 
  Building2, 
  Mic2, 
  Ticket, 
  Share2, 
  UtensilsCrossed, 
  CalendarDays,
  ArrowRight
} from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  useLocale?: boolean;
}

function AnimatedCounter({ end, suffix = '+', prefix = '', duration = 2.2, useLocale = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Smooth cubic ease out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, duration]);

  const displayValue = useLocale ? count.toLocaleString('en-US') : count;

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function SponsorshipMatrix() {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [mobileActiveTier, setMobileActiveTier] = useState<number>(0);

  const whySponsor = [
    {
      icon: Eye,
      title: "MAXIMUM VISIBILITY",
      desc: "Showcase your brand to a global audience of industry leaders, buyers and decision makers.",
      color: "text-brand-saffron-400",
      border: "border-brand-saffron-500/30",
      bgGlow: "from-brand-saffron-500/20 to-orange-950/20",
    },
    {
      icon: Handshake,
      title: "HIGH-QUALITY NETWORKING",
      desc: "Connect with key stakeholders, build valuable relationships and generate strong leads.",
      color: "text-brand-blue-400",
      border: "border-brand-blue-500/30",
      bgGlow: "from-brand-blue-500/20 to-sky-950/20",
    },
    {
      icon: Award,
      title: "BRAND RECOGNITION",
      desc: "Enhance your brand image and position your company as an industry leader.",
      color: "text-brand-emerald-400",
      border: "border-brand-emerald-500/30",
      bgGlow: "from-brand-emerald-500/20 to-emerald-950/20",
    },
    {
      icon: TrendingUp,
      title: "BUSINESS GROWTH",
      desc: "Explore new markets, discover opportunities and drive long-term business growth.",
      color: "text-brand-maroon-400",
      border: "border-brand-maroon-500/30",
      bgGlow: "from-rose-500/20 to-brand-maroon-950/20",
    },
    {
      icon: Lightbulb,
      title: "PRODUCT SHOWCASE",
      desc: "Launch new products, highlight innovations and demonstrate your expertise.",
      color: "text-amber-400",
      border: "border-amber-500/30",
      bgGlow: "from-amber-500/20 to-yellow-950/20",
    },
    {
      icon: Globe,
      title: "GLOBAL EXPOSURE",
      desc: "Gain exposure across 30+ countries and establish your presence on a global platform.",
      color: "text-sky-400",
      border: "border-sky-500/30",
      bgGlow: "from-sky-500/20 to-blue-950/20",
    }
  ];

  const packages = [
    {
      name: "TITLE SPONSOR",
      price: "INR 25 LAKHS",
      usdPrice: "$30,000",
      headerBg: "bg-gradient-to-br from-brand-navy-900 to-brand-blue-950 border-brand-blue-400/50",
      badgeColor: "bg-brand-blue-500 text-white shadow-blue-500/30",
      isPopular: true,
      booth: "Prime 10m x 10m",
      visibility: "Logo on all event collaterals",
      speaking: "Keynote Address",
      passes: "10 Passes",
      logoMedia: true,
      marketing: true,
      networking: "VIP Networking Dinner"
    },
    {
      name: "PLATINUM SPONSOR",
      price: "INR 15 LAKHS",
      usdPrice: "$18,000",
      headerBg: "bg-gradient-to-br from-slate-900 to-slate-950 border-slate-400/40",
      badgeColor: "bg-slate-300 text-brand-navy-950 shadow-slate-300/30",
      isPopular: false,
      booth: "Prime 9m x 6m",
      visibility: "Logo on major collaterals",
      speaking: "Panel Discussion",
      passes: "6 Passes",
      logoMedia: true,
      marketing: true,
      networking: "Exclusive Meet"
    },
    {
      name: "GOLD SPONSOR",
      price: "INR 10 LAKHS",
      usdPrice: "$12,000",
      headerBg: "bg-gradient-to-br from-amber-950/80 to-brand-saffron-950 border-brand-saffron-500/50",
      badgeColor: "bg-gradient-to-r from-amber-400 to-brand-saffron-500 text-brand-navy-950 font-black shadow-amber-500/30",
      isPopular: false,
      booth: "Standard 6m x 6m",
      visibility: "Logo on select collaterals",
      speaking: "Session Speaker",
      passes: "4 Passes",
      logoMedia: true,
      marketing: true,
      networking: "Priority Networking"
    },
    {
      name: "SILVER SPONSOR",
      price: "INR 5 LAKHS",
      usdPrice: "$6,000",
      headerBg: "bg-gradient-to-br from-slate-900 to-slate-950 border-slate-600/40",
      badgeColor: "bg-slate-400 text-brand-navy-950",
      isPopular: false,
      booth: "Standard 3m x 3m",
      visibility: "Logo on website & print",
      speaking: "—",
      passes: "2 Passes",
      logoMedia: true,
      marketing: false,
      networking: "Standard Access"
    },
    {
      name: "ASSOCIATE SPONSOR",
      price: "INR 2.5 LAKHS",
      usdPrice: "$3,000",
      headerBg: "bg-gradient-to-br from-orange-950/60 to-brand-navy-950 border-orange-700/40",
      badgeColor: "bg-orange-800 text-orange-100",
      isPopular: false,
      booth: "Shared Space",
      visibility: "Logo on website",
      speaking: "—",
      passes: "1 Pass",
      logoMedia: true,
      marketing: false,
      networking: "Standard Access"
    }
  ];

  const benefitsList = [
    { key: 'booth', label: 'Premium Booth Location', icon: Building2 },
    { key: 'visibility', label: 'Brand Visibility & Promotions', icon: Share2 },
    { key: 'speaking', label: 'Speaking Opportunity', icon: Mic2 },
    { key: 'passes', label: 'Complimentary Passes', icon: Ticket },
    { key: 'logoMedia', label: 'Logo on Website, Print & Digital Media', icon: Globe },
    { key: 'marketing', label: 'Pre & Post Event Marketing', icon: Sparkles },
    { key: 'networking', label: 'Exclusive Networking Opportunities', icon: UtensilsCrossed },
  ];

  const bottomStats = [
    { icon: Globe, end: 30, suffix: "+", label: "COUNTRIES", useLocale: false },
    { icon: Building2, end: 300, suffix: "+", label: "EXHIBITORS", useLocale: false },
    { icon: Ticket, end: 15000, suffix: "+", label: "TRADE VISITORS", useLocale: true },
    { icon: CalendarDays, end: 4, suffix: " DAYS", label: "OF OPPORTUNITIES", useLocale: false },
  ];

  return (
    <section id="sponsorship" className="py-16 sm:py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-herringbone">
      {/* Ambient Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-brand-saffron-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-saffron-500/10 border border-brand-saffron-500/30 text-brand-saffron-400 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5" />
            04 SPONSORSHIP BENEFITS
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-['Outfit'] tracking-tight leading-tight">
              WORLD TEXTILE <span className="text-brand-saffron-400 drop-shadow-[0_2px_20px_rgba(249,115,22,0.45)]">INDIA 2026</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-blue-500 via-brand-saffron-500 to-brand-emerald-500 rounded-full my-3.5" />
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider text-brand-blue-300">
              A Global Platform for the Textile Value Chain
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 1: WHY SPONSOR WTI 2026? (6 Feature Cards) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-brand-saffron-500/50" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-['Outfit'] tracking-wider uppercase flex items-center gap-2">
              <span className="text-brand-saffron-400">♦</span> Why Sponsor WTI 2026? <span className="text-brand-saffron-400">♦</span>
            </h3>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-brand-saffron-500/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySponsor.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className={`group relative glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/10 ${item.border} hover:border-white/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Circle Icon Badge */}
                    <div className="w-16 h-16 rounded-2xl bg-brand-navy-900 border border-white/15 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    
                    <h4 className="text-lg font-extrabold text-white mb-2 font-['Outfit'] tracking-wide group-hover:text-brand-saffron-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 2: SPONSORSHIP PACKAGES (5-Tier Comparison Matrix) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/30 text-brand-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                Tiered Partnerships
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                Sponsorship Packages
              </h3>
            </div>

            {/* Mobile View Toggle */}
            <div className="flex md:hidden glass-panel p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-brand-blue-600 text-white' : 'text-slate-300'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-brand-saffron-500 text-brand-navy-950' : 'text-slate-300'
                }`}
              >
                Card View
              </button>
            </div>
          </div>

          {/* Desktop & Mobile Scrollable Table View */}
          <div className={`overflow-x-auto pb-4 rounded-3xl border border-white/10 glass-panel shadow-2xl ${viewMode === 'cards' ? 'hidden md:block' : 'block'}`}>
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="p-5 sm:p-6 bg-brand-navy-950/90 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider font-['Outfit'] w-1/4 border-r border-white/10">
                    <span className="px-3 py-1 bg-brand-blue-600/30 border border-brand-blue-400/40 rounded-lg text-brand-blue-300 text-xs inline-block">
                      BENEFITS
                    </span>
                  </th>
                  {packages.map((pkg, i) => (
                    <th key={i} className={`p-4 sm:p-5 text-center border-r border-white/10 last:border-r-0 ${pkg.headerBg} relative`}>
                      {pkg.isPopular && (
                        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-b-md shadow-md">
                          Most Preferred
                        </div>
                      )}
                      <div className="text-xs sm:text-sm font-black text-white font-['Outfit'] uppercase tracking-wider pt-2">
                        {pkg.name}
                      </div>
                      <div className="text-base sm:text-lg font-black text-brand-saffron-400 mt-1 font-['Outfit']">
                        {pkg.price}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {pkg.usdPrice}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {benefitsList.map((benefit, bIdx) => {
                  const Icon = benefit.icon;
                  return (
                    <tr key={bIdx} className="hover:bg-white/[0.03] transition-colors">
                      {/* Benefit Title Row Header */}
                      <td className="p-4 sm:p-5 font-bold text-white bg-brand-navy-950/80 border-r border-white/10 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-brand-saffron-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="leading-snug">{benefit.label}</span>
                      </td>

                      {/* Values across 5 packages */}
                      {packages.map((pkg, pIdx) => {
                        const val = pkg[benefit.key as keyof typeof pkg];
                        return (
                          <td key={pIdx} className="p-4 text-center border-r border-white/10 last:border-r-0 text-slate-200">
                            {typeof val === 'boolean' ? (
                              val ? (
                                <span className="w-6 h-6 rounded-full bg-brand-emerald-500/20 text-brand-emerald-400 border border-brand-emerald-500/40 inline-flex items-center justify-center font-bold">
                                  <Check className="w-4 h-4" />
                                </span>
                              ) : (
                                <span className="w-6 h-6 rounded-full bg-slate-800/40 text-slate-500 inline-flex items-center justify-center">
                                  <Minus className="w-3.5 h-3.5" />
                                </span>
                              )
                            ) : val === '—' ? (
                              <span className="text-slate-500 font-bold">—</span>
                            ) : (
                              <span className={`font-semibold ${
                                String(val).includes('Prime') || String(val).includes('Keynote') || String(val).includes('VIP') 
                                  ? 'text-brand-saffron-300 font-bold' 
                                  : 'text-slate-200'
                              }`}>
                                {val}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/15 bg-brand-navy-950/90">
                  <td className="p-5 font-bold text-slate-400 text-xs border-r border-white/10">
                    Application Action
                  </td>
                  {packages.map((pkg, i) => (
                    <td key={i} className="p-4 text-center border-r border-white/10 last:border-r-0">
                      <a
                        href="#contact"
                        className={`w-full block py-2.5 px-3 rounded-xl font-bold text-xs transition-all hover:scale-105 active:scale-95 ${
                          pkg.isPopular 
                            ? 'bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 font-extrabold shadow-md' 
                            : 'bg-white/10 hover:bg-brand-blue-500/20 text-white border border-white/10 hover:border-brand-blue-400/40'
                        }`}
                      >
                        Inquire Now
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile Card Carousel View (when Card View is selected on phone) */}
          <div className={`md:hidden ${viewMode === 'cards' ? 'block' : 'hidden'}`}>
            {/* Quick selector pills on mobile */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              {packages.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileActiveTier(idx)}
                  className={`py-2 px-1 rounded-xl text-[11px] font-bold transition-all truncate ${
                    mobileActiveTier === idx 
                      ? 'bg-brand-saffron-500 text-brand-navy-950 shadow-md font-extrabold' 
                      : 'bg-brand-navy-900 border border-white/10 text-slate-300'
                  }`}
                >
                  {p.name.replace(' SPONSOR', '')}
                </button>
              ))}
            </div>

            {/* Selected Card Details */}
            {(() => {
              const pkg = packages[mobileActiveTier];
              return (
                <div className={`glass-panel rounded-3xl p-6 border-2 relative overflow-hidden ${pkg.headerBg}`}>
                  {pkg.isPopular && (
                    <div className="absolute top-3 right-3 bg-brand-saffron-500 text-brand-navy-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                      ★ Most Preferred
                    </div>
                  )}

                  <div className="text-xs font-semibold text-slate-400 uppercase">Package Tier</div>
                  <h4 className="text-2xl font-black text-white font-['Outfit'] mt-1">{pkg.name}</h4>
                  <div className="text-3xl font-black text-brand-saffron-400 mt-2 font-['Outfit']">
                    {pkg.price} <span className="text-xs text-slate-400 font-normal">({pkg.usdPrice})</span>
                  </div>

                  <div className="mt-6 space-y-3.5 border-t border-white/10 pt-4 text-xs">
                    {benefitsList.map((b, i) => {
                      const val = pkg[b.key as keyof typeof pkg];
                      return (
                        <div key={i} className="flex items-start justify-between gap-2">
                          <span className="text-slate-400 flex items-center gap-2">
                            <b.icon className="w-3.5 h-3.5 text-brand-saffron-400 shrink-0" />
                            {b.label}:
                          </span>
                          <span className="text-right font-bold text-white">
                            {typeof val === 'boolean' ? (
                              val ? <span className="text-brand-emerald-400 font-bold">Included ✓</span> : <span className="text-slate-500">Not Included</span>
                            ) : val === '—' ? (
                              <span className="text-slate-500">—</span>
                            ) : (
                              val
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="#contact"
                    className="w-full mt-6 py-3.5 rounded-xl font-extrabold text-sm text-center block bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 shadow-lg"
                  >
                    Inquire for {pkg.name}
                  </a>
                </div>
              );
            })()}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 3: BOTTOM EVENT HIGHLIGHTS STRIP & MOTTO RIBBON */}
        {/* ------------------------------------------------------------- */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 bg-brand-navy-950/90 shadow-2xl relative overflow-hidden">
          {/* Subtle gold mesh accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-600/10 via-brand-saffron-500/10 to-brand-emerald-500/10 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center relative z-10">
            {bottomStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-saffron-400 mb-3 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      useLocale={stat.useLocale}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-blue-300 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* One Platform Banner */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white font-['Outfit'] uppercase tracking-wider">
                ONE PLATFORM • COUNTLESS CONNECTIONS • INFINITE GROWTH
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Join international delegations, trade ministers, and premier mills at South Asia's flagship textile expo.
              </div>
            </div>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 font-extrabold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              <span>Download Prospectus</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Gold Decorative Motto Ribbon */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-brand-saffron-400">
              CONNECT &bull; COLLABORATE &bull; INNOVATE &bull; GROW
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
