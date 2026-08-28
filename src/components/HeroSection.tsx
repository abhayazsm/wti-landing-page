import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Users, Globe, Building2, CalendarDays, MapPin, Sparkles } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '+', prefix = '', duration = 2.2 }: CounterProps) {
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

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const metrics = [
    { 
      icon: Users, 
      value: 50000, 
      suffix: '+',
      label: 'Global Trade Buyers',
      color: 'text-brand-blue-400',
      bgGlow: 'from-brand-blue-600/20 to-brand-blue-900/10',
      borderColor: 'group-hover:border-brand-blue-500/40'
    },
    { 
      icon: Building2, 
      value: 1200, 
      suffix: '+',
      label: 'Exhibiting Manufacturers',
      color: 'text-brand-saffron-400',
      bgGlow: 'from-brand-saffron-600/20 to-orange-950/20',
      borderColor: 'group-hover:border-brand-saffron-500/40'
    },
    { 
      icon: Globe, 
      value: 45, 
      suffix: '+',
      label: 'Participating Nations',
      color: 'text-brand-emerald-400',
      bgGlow: 'from-emerald-600/20 to-emerald-950/20',
      borderColor: 'group-hover:border-emerald-500/40'
    },
    { 
      icon: CalendarDays, 
      value: 10000, 
      suffix: '+',
      label: 'Pre-Scheduled B2B Meets',
      color: 'text-brand-maroon-400',
      bgGlow: 'from-rose-600/20 to-brand-maroon-950/20',
      borderColor: 'group-hover:border-rose-500/40'
    },
  ];

  return (
    <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-brand-navy-950">
      {/* Hero Panoramic Image Background & Atmospheric Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Panoramic Banner Photo */}
        <img 
          src="/hero-banner.png" 
          alt="World Textile India Global Exhibition & Sourcing Ecosystem" 
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1] saturate-[1.15] scale-105" 
        />

        {/* Multi-tier Gradient Overlays for High Legibility & Brand Mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-950/90 via-brand-navy-950/60 to-brand-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/95 via-transparent to-brand-navy-950/95" />

        {/* Electric Azure & Saffron Ambient Glows */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-brand-blue-600/25 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brand-saffron-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-brand-maroon-800/20 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Pill Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel-glow border-brand-blue-500/30 text-brand-blue-300 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-[0_0_20px_rgba(2,132,199,0.2)]">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-saffron-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-brand-saffron-500"></span>
            </span>
            <span className="truncate max-w-[200px] sm:max-w-none">Bengaluru Int'l Exhibition Centre (BIEC)</span>
            <span className="text-white/40">•</span>
            <span className="text-brand-saffron-400 font-bold whitespace-nowrap">2026 Edition</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 font-['Outfit']"
          >
            Connecting the World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 via-sky-300 to-brand-saffron-400">
              Through Indian Textiles
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-normal px-2"
          >
            The pinnacle mega-summit uniting yarn spinners, apparel powerhouses, sustainable innovators, and global retail brands under one visionary roof.
          </motion.p>

          {/* Key Event Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-slate-300 mb-6 sm:mb-8"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-saffron-400" />
              <span>BIEC, Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue-400" />
              <span>1,000,000+ Sq. Ft. Exhibition Area</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
          >
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-saffron-500 via-orange-500 to-brand-saffron-600 hover:from-brand-saffron-400 hover:to-orange-400 text-brand-navy-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] border border-brand-saffron-300/40"
            >
              Book Your Stall (Early Bird Discount)
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#floor-plan"
              className="w-full sm:w-auto flex items-center justify-center gap-2 glass-panel hover:bg-white/10 border-brand-blue-500/30 text-white hover:text-brand-blue-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-sm"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue-400" />
              Download Floorplan & Brochure
            </a>
          </motion.div>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 sm:mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className={`group relative glass-panel rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1.5 border border-white/10 ${metric.borderColor} overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 rounded-xl flex items-center justify-center mb-3 sm:mb-4 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${metric.color}`} />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1 font-['Outfit'] tracking-tight">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2.2} />
                  </div>
                  <div className="text-[11px] sm:text-sm font-semibold text-slate-300 leading-snug">{metric.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

