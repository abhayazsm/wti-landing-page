import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, TrendingUp, Handshake, Target, Sparkles, Presentation, ArrowRight } from 'lucide-react';

export default function DualPathways() {
  const [activeTab, setActiveTab] = useState<'exhibitor' | 'buyer'>('exhibitor');

  const content = {
    exhibitor: {
      title: "Showcase to 50,000+ Global Buyers",
      tagline: "FOR EXHIBITORS & MANUFACTURERS",
      description: "Position your manufacturing prowess before Fortune 500 retail giants, high-volume sourcing heads, and fashion brands actively seeking dependable Indian partners.",
      features: [
        { icon: Target, text: "High-value export inquiries & direct purchase orders" },
        { icon: Handshake, text: "AI-powered B2B matchmaking & confirmed 1-on-1 buyer meetings" },
        { icon: Presentation, text: "Thematic display pavilions with premium shell and bare space options" },
        { icon: TrendingUp, text: "Massive international media exposure across 45+ trading nations" },
      ],
      cta: "Book Your Exhibition Space",
      img: "/exhibitors-showcase.jpg",
      themeColor: "from-brand-saffron-500 to-orange-600",
      accentBadge: "text-brand-saffron-400 bg-brand-saffron-500/10 border-brand-saffron-500/30",
      btnClass: "bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 hover:brightness-110 shadow-[0_0_25px_rgba(249,115,22,0.4)]"
    },
    buyer: {
      title: "Source Direct from India's Premier Mills",
      tagline: "FOR INTERNATIONAL BUYERS & BRANDS",
      description: "Discover the complete Indian textile spectrum from sustainable virgin cotton & innovative silk blends to world-class technical textiles with certified compliance.",
      features: [
        { icon: CheckCircle2, text: "Mill-direct wholesale pricing with verified quality certifications" },
        { icon: Sparkles, text: "VIP Buyer Lounge access with curated hospitality & translation support" },
        { icon: Target, text: "Exclusive access to Trend Forecaster pavilions & future material science" },
        { icon: Handshake, text: "Dedicated concierge for pre-arranged factory visits across Karnataka & Tamil Nadu" },
      ],
      cta: "Register for Free VIP Buyer Pass",
      img: "/buyers-sourcing.jpg",
      themeColor: "from-brand-blue-500 to-sky-600",
      accentBadge: "text-brand-blue-400 bg-brand-blue-500/10 border-brand-blue-500/30",
      btnClass: "bg-gradient-to-r from-brand-blue-500 to-sky-500 text-white hover:brightness-110 shadow-[0_0_25px_rgba(2,132,199,0.4)]"
    }
  };

  const activeContent = content[activeTab];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-crosshatch">
      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-saffron-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-brand-saffron-400 bg-brand-saffron-500/10 px-3 py-1.5 rounded-full border border-brand-saffron-500/20">
            Tailored Experience
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 sm:mt-4 font-['Outfit'] px-2">
            Your Gateway to Textile Excellence
          </h2>
        </div>

        {/* Responsive Toggle Switch */}
        <div className="flex justify-center mb-10 sm:mb-16 px-2">
          <div className="w-full max-w-xl glass-panel p-1 sm:p-1.5 rounded-2xl grid grid-cols-2 relative border border-white/15 bg-brand-navy-950/90 shadow-2xl">
            <button
              onClick={() => setActiveTab('exhibitor')}
              className={`relative z-10 px-2 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center transition-all duration-300 ${
                activeTab === 'exhibitor' ? 'text-brand-navy-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              For Exhibitors & Mills
            </button>
            <button
              onClick={() => setActiveTab('buyer')}
              className={`relative z-10 px-2 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center transition-all duration-300 ${
                activeTab === 'buyer' ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              For Global Buyers
            </button>
            
            {/* Animated Pill Background */}
            <motion.div
              layout
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className={`absolute top-1 bottom-1 sm:top-1.5 sm:bottom-1.5 w-[calc(50%-4px)] sm:w-[calc(50%-6px)] rounded-xl shadow-lg ${
                activeTab === 'exhibitor' 
                  ? 'bg-gradient-to-r from-brand-saffron-500 to-orange-500 shadow-orange-500/30' 
                  : 'bg-gradient-to-r from-brand-blue-500 to-sky-600 shadow-blue-500/30'
              }`}
              style={{
                left: activeTab === 'exhibitor' ? '4px' : 'calc(50%)'
              }}
            />
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-navy-950/70">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-0"
            >
              <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                <span className={`inline-block w-fit text-[11px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full border mb-4 ${activeContent.accentBadge}`}>
                  {activeContent.tagline}
                </span>
                
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 font-['Outfit'] leading-tight">
                  {activeContent.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {activeContent.description}
                </p>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {activeContent.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4 text-slate-200 font-medium text-xs sm:text-sm lg:text-base">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl shrink-0 flex items-center justify-center border ${
                          activeTab === 'exhibitor' 
                            ? 'bg-brand-saffron-500/15 border-brand-saffron-500/30 text-brand-saffron-400' 
                            : 'bg-brand-blue-500/15 border-brand-blue-500/30 text-brand-blue-400'
                        }`}>
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="pt-0.5">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
                
                <div>
                  <a 
                    href="#contact"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all transform hover:scale-105 active:scale-95 ${activeContent.btnClass}`}
                  >
                    {activeContent.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/40 to-transparent z-10" />
                <img 
                  src={activeContent.img} 
                  alt={activeContent.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

