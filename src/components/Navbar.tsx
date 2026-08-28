import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Sourcing Zones', href: '#sourcing' },
    { name: 'Floor Plan', href: '#floor-plan' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Sponsorship', href: '#sponsorship' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-brand-blue-500/20 bg-brand-navy-950/90 backdrop-blur-2xl shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Main Logo (Larger Size with Premium Glow) */}
          <a href="#" className="flex-shrink-0 flex items-center group py-1">
            <img 
              src="/logo.png" 
              alt="World Textile India 2026 Logo" 
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(2,132,199,0.45)]" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-300 hover:text-brand-blue-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-brand-blue-500 after:to-brand-saffron-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Actions & Supported By Logos */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            
            <a 
              href="#contact" 
              className="text-sm font-bold text-slate-200 hover:text-brand-blue-400 px-2 py-2 rounded-lg transition-colors"
            >
              Buyer Pass
            </a>

            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-gradient-to-r from-brand-saffron-500 via-orange-500 to-brand-saffron-600 hover:from-brand-saffron-400 hover:to-orange-400 text-brand-navy-950 px-4 py-2.5 rounded-xl text-sm font-extrabold shadow-[0_0_25px_-5px_rgba(249,115,22,0.5)] transition-all hover:scale-105 active:scale-95 border border-brand-saffron-400/40"
            >
              <Sparkles className="w-4 h-4 text-brand-navy-950" />
              <span>Book a Stall</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="h-9 w-[1px] bg-white/15 mx-1" />

            {/* SUPPORTED BY Section - On Right Side After Book a Stall with Very Small Font */}
            <div className="flex flex-col items-center">
              <span className="text-[8.5px] uppercase font-extrabold tracking-widest text-slate-300 mb-1">
                SUPPORTED BY
              </span>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl px-2.5 py-1.5 h-11 min-w-[88px] flex items-center justify-center shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/ministry-of-textiles.png" 
                    alt="Ministry of Textiles" 
                    className="h-8 w-auto object-contain max-w-[90px]" 
                  />
                </div>
                <div className="bg-white rounded-xl px-2.5 py-1.5 h-11 min-w-[88px] flex items-center justify-center shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105">
                  <img 
                    src="/aepc-logo.png" 
                    alt="AEPC" 
                    className="h-8 w-auto object-contain max-w-[90px]" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Mobile menu button & Mobile Supported By */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="text-[7.5px] uppercase font-black tracking-wider text-slate-300 mb-0.5">
                SUPPORTED BY
              </span>
              <div className="flex items-center gap-1.5">
                <div className="bg-white rounded-lg px-1.5 py-1 h-8 min-w-[58px] flex items-center justify-center shadow-md">
                  <img src="/ministry-of-textiles.png" alt="Ministry of Textiles" className="h-5 w-auto object-contain max-w-[58px]" />
                </div>
                <div className="bg-white rounded-lg px-1.5 py-1 h-8 min-w-[58px] flex items-center justify-center shadow-md">
                  <img src="/aepc-logo.png" alt="AEPC" className="h-5 w-auto object-contain max-w-[58px]" />
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-brand-saffron-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-brand-blue-500/20 bg-brand-navy-950/95 backdrop-blur-2xl">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-semibold text-slate-200 hover:text-brand-saffron-400 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Supported By Section */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-center">
              <span className="text-[9px] uppercase font-black tracking-widest text-slate-300 mb-2">
                SUPPORTED BY
              </span>
              <div className="flex items-center justify-center gap-2.5 mb-4 w-full">
                <div className="bg-white rounded-xl p-2 h-12 flex-1 max-w-[140px] flex items-center justify-center shadow-lg border border-white/20">
                  <img src="/ministry-of-textiles.png" alt="Ministry of Textiles" className="h-8 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-xl p-2 h-12 flex-1 max-w-[140px] flex items-center justify-center shadow-lg border border-white/20">
                  <img src="/aepc-logo.png" alt="AEPC" className="h-8 w-auto object-contain" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 text-sm font-bold text-white border border-brand-blue-500/40 rounded-xl hover:bg-brand-blue-500/10 transition-colors"
                >
                  Register as Buyer
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 text-sm font-extrabold rounded-xl shadow-lg hover:brightness-110 transition-all"
                >
                  Book a Stall (Early Bird)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


