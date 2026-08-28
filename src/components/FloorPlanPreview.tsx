import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function FloorPlanPreview() {
  const [activeZone, setActiveZone] = useState<string | null>('hall-a');

  const zones = [
    { 
      id: 'hall-a', 
      shortName: 'Hall A',
      category: 'Fibers & Yarns',
      name: 'Hall A (Fibers, Yarns & Raw Materials)', 
      color: 'bg-brand-emerald-500/20 border-brand-emerald-500/60 hover:bg-brand-emerald-500/35', 
      textColor: 'text-brand-emerald-400',
      top: '6%', 
      left: '6%', 
      width: '44%', 
      height: '44%', 
      status: '85% Booked',
      capacity: '320+ Exhibitor Stalls',
      desc: 'Prime zone for yarn spinners, natural/synthetic fiber mills, and raw material innovators.'
    },
    { 
      id: 'hall-b', 
      shortName: 'Hall B',
      category: 'Apparel & Garments',
      name: 'Hall B (Apparel, Garments & Fashion)', 
      color: 'bg-brand-blue-500/20 border-brand-blue-500/60 hover:bg-brand-blue-500/35', 
      textColor: 'text-brand-blue-400',
      top: '6%', 
      left: '52%', 
      width: '42%', 
      height: '52%', 
      status: 'Fast Filling',
      capacity: '450+ Stalls & Runway Access',
      desc: 'Mega hall for knitwear, woven apparel, denim manufacturers, and private-label producers.'
    },
    { 
      id: 'lounge', 
      shortName: 'VIP Lounge',
      category: 'Buyer Suites',
      name: 'VIP International Buyer Lounge', 
      color: 'bg-brand-saffron-500/20 border-brand-saffron-500/60 hover:bg-brand-saffron-500/35', 
      textColor: 'text-brand-saffron-400',
      top: '54%', 
      left: '6%', 
      width: '32%', 
      height: '40%', 
      status: 'Delegates Only',
      capacity: 'Private B2B Meeting Suites',
      desc: 'Exclusive air-conditioned business lounge equipped with meeting rooms and multilingual support.'
    },
    { 
      id: 'stage', 
      shortName: 'Plenary Stage',
      category: 'Innovation Arena',
      name: 'Plenary Stage & Innovation Arena', 
      color: 'bg-brand-maroon-600/20 border-brand-maroon-500/60 hover:bg-brand-maroon-500/35', 
      textColor: 'text-brand-maroon-300',
      top: '62%', 
      left: '40%', 
      width: '54%', 
      height: '32%', 
      status: 'Live Summit Hub',
      capacity: '1,500 Seater Auditorium',
      desc: 'Main stage for inaugurations, global keynote speeches, CEO panels, and nightly awards.'
    },
  ];

  const selectedZoneData = zones.find(z => z.id === activeZone);

  return (
    <section id="floor-plan" className="py-16 sm:py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-loom">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-blue-900/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/30 text-brand-blue-400 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
            <Compass className="w-3.5 h-3.5" />
            Exhibition Layout
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 font-['Outfit'] px-2">
            Interactive BIEC Floor Plan
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Spanning 1,000,000+ sq. ft. across Bengaluru International Exhibition Centre. Select any hall below to preview stall availability and layout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Interactive Map Canvas Container */}
          <div className="lg:col-span-2 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative border border-white/10 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-emerald-400 animate-ping"></span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-300">Live Spatial Layout • BIEC Halls 1-5</span>
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-slate-400">Click any hall</span>
            </div>

            {/* Mobile quick-select pill tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 lg:hidden">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center border text-center ${
                    activeZone === z.id 
                      ? 'bg-brand-blue-600/30 border-brand-blue-400 text-white shadow-md ring-1 ring-brand-blue-400' 
                      : 'bg-brand-navy-900/80 border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="leading-tight">{z.shortName}</span>
                  <span className={`text-[10px] font-semibold mt-0.5 ${z.textColor}`}>{z.status}</span>
                </button>
              ))}
            </div>

            {/* Map Canvas */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[260px] sm:min-h-[380px] border border-white/10 rounded-xl sm:rounded-2xl bg-brand-navy-900/90 overflow-hidden p-2 sm:p-4 shadow-inner">
              {/* Floor grid pattern */}
              <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none"></div>

              {/* Interactive Zones */}
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onClick={() => setActiveZone(zone.id)}
                  className={`absolute rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-1.5 sm:p-3 text-center ${zone.color} ${
                    activeZone === zone.id ? 'scale-[1.02] z-20 shadow-2xl ring-2 ring-white/50' : 'z-10'
                  }`}
                  style={{ top: zone.top, left: zone.left, width: zone.width, height: zone.height }}
                >
                  <div className="backdrop-blur-md bg-brand-navy-950/85 p-1.5 sm:p-3 rounded-lg sm:rounded-xl border border-white/10 shadow-lg w-full max-w-[95%] sm:max-w-[90%] overflow-hidden">
                    <span className="block text-white font-extrabold text-[11px] sm:text-sm md:text-base font-['Outfit'] leading-tight truncate">
                      <span className="sm:hidden">{zone.shortName}</span>
                      <span className="hidden sm:inline">{zone.name}</span>
                    </span>
                    <span className="hidden xs:block text-[9px] sm:text-xs font-semibold text-slate-300 truncate">
                      {zone.category}
                    </span>
                    <span className={`text-[9px] sm:text-xs font-bold mt-0.5 block ${zone.textColor} truncate`}>
                      {zone.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hall Info & Venue Card */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between">
            
            {/* Dynamic Zone Details Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-brand-blue-500/20 bg-brand-navy-950/90 shadow-xl min-h-[200px] sm:min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {selectedZoneData ? (
                  <motion.div
                    key={selectedZoneData.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-extrabold uppercase px-2.5 py-1 bg-brand-saffron-500 text-brand-navy-950 rounded-full">
                        {selectedZoneData.status}
                      </span>
                      <span className="text-xs font-bold text-slate-300">{selectedZoneData.capacity}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white mb-2 font-['Outfit']">
                      {selectedZoneData.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                      {selectedZoneData.desc}
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-saffron-400 hover:text-brand-saffron-300 transition-colors"
                    >
                      Inquire for stalls in this hall <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-center p-4 text-slate-400"
                  >
                    <Info className="w-7 h-7 sm:w-8 sm:h-8 text-brand-blue-400 mb-2" />
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">Hover or Tap any Hall</h4>
                    <p className="text-xs text-slate-400">View real-time booking status, pavilion details, and stall allocations.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Venue Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-brand-navy-950/80">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-blue-500/20 rounded-xl flex items-center justify-center text-brand-blue-400 mb-3 border border-brand-blue-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white mb-1 font-['Outfit']">Bengaluru Int'l Exhibition Centre</h3>
              <p className="text-slate-300 text-xs mb-3">10th Mile, Tumkur Road, Madavara, Bengaluru 562123</p>
              
              <ul className="text-xs text-slate-300 space-y-2 border-t border-white/10 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-emerald-400 shrink-0" />
                  <span>Direct Namma Metro connectivity (Green Line)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-emerald-400 shrink-0" />
                  <span>45 mins express highway drive from BLR Airport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-emerald-400 shrink-0" />
                  <span>5,000+ car parking with dedicated VIP ingress</span>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

