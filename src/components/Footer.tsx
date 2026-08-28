import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Building } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/world-textile-india-wti-a14177424',
      icon: Linkedin,
      color: 'hover:text-sky-400 hover:border-sky-500/40'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/worldtextileindia/',
      icon: Instagram,
      color: 'hover:text-pink-400 hover:border-pink-500/40'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/WorldTexIndia',
      icon: Twitter,
      color: 'hover:text-brand-blue-400 hover:border-brand-blue-500/40'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@WorldTextileIndia',
      icon: Youtube,
      color: 'hover:text-red-400 hover:border-red-500/40'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61591887164370',
      icon: Facebook,
      color: 'hover:text-blue-400 hover:border-blue-500/40'
    }
  ];
  return (
    <footer className="bg-brand-navy-950 bg-textile-twill pt-20 pb-10 border-t border-brand-blue-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo, Description & Supported By Logos */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img 
                src="/logo.png" 
                alt="World Textile India 2026 Logo" 
                className="h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)]" 
              />
            </div>
            
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              The premier international B2B textile sourcing mega-exposition uniting 1,200+ global mills, manufacturers, and buyers at BIEC Bengaluru.
            </p>

            {/* Supported By Section below logo */}
            <div className="mb-6 pt-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-white block mb-2">
                SUPPORTED BY
              </span>
              <div className="flex items-center gap-2.5">
                <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-center h-11 border border-white/20 min-w-[85px]">
                  <img src="/ministry-of-textiles.png" alt="Ministry of Textiles" className="h-7 w-auto object-contain max-w-[90px]" />
                </div>
                <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-center h-11 border border-white/20 min-w-[85px]">
                  <img src="/aepc-logo.png" alt="AEPC" className="h-7 w-auto object-contain max-w-[90px]" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 ${item.color} transition-all hover:scale-110 shadow-sm`}
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider font-['Outfit'] border-l-2 border-brand-saffron-500 pl-3">
              Exhibition Hub
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About the Mega Summit', href: '#about' },
                { label: '5 Sourcing Pavilions', href: '#sourcing' },
                { label: 'Interactive BIEC Map', href: '#floor-plan' },
                { label: 'Concurrent Events & Runway', href: '#highlights' },
                { label: 'Sponsorship Opportunities', href: '#sponsorship' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 hover:text-brand-saffron-400 transition-colors text-sm font-medium flex items-center gap-1.5">
                    <span className="text-brand-blue-400 text-xs">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Delegate Info */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider font-['Outfit'] border-l-2 border-brand-blue-500 pl-3">
              Delegates & Media
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'VIP Buyer Program', href: '#contact' },
                { label: 'Early Bird Stall Booking', href: '#contact' },
                { label: 'Press & Media Accreditation', href: '#contact' },
                { label: 'Hotel & Travel Partner Concierge', href: '#floor-plan' },
                { label: 'Privacy Policy & Terms', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 hover:text-brand-blue-400 transition-colors text-sm font-medium flex items-center gap-1.5">
                    <span className="text-brand-saffron-400 text-xs">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider font-['Outfit'] border-l-2 border-brand-emerald-500 pl-3">
              Contact & Secretariat
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-saffron-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block">Event Venue:</strong>
                  KTPO Whitefield, Bengaluru, Karnataka, India
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block">Registered Office:</strong>
                  World Textile Trade Federation<br/>
                  4th Floor, 400-A, Bharat Udyam Seva Kendra, Yusuf Sarai Commercial Complex, New Delhi 110016
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-saffron-400 shrink-0" />
                <a href="tel:+919567365566" className="text-slate-300 hover:text-brand-saffron-300 transition-colors text-xs sm:text-sm font-semibold">
                  +91 95673 65566
                </a>
              </li>
              <li className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-4 h-4 text-brand-blue-400 shrink-0" />
                  <a href="mailto:support@worldtextileindia.com" className="text-slate-300 hover:text-brand-blue-300 transition-colors">
                    support@worldtextileindia.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-4 h-4 text-brand-emerald-400 shrink-0" />
                  <a href="mailto:info@worldtextileindia.com" className="text-slate-300 hover:text-brand-emerald-300 transition-colors">
                    info@worldtextileindia.com
                  </a>
                </div>
              </li>
              <li className="pt-2 text-[11px] text-brand-saffron-400 font-bold">
                GST Entity: Budyam Seva Private Limited
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            &copy; 2026 <strong className="text-white">World Textile India</strong> &bull; World Textile Trade Federation. All Rights Reserved. Organised with the official support of Ministry of Textiles & AEPC.
          </p>
          
          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-brand-navy-900/90 rounded-xl border border-brand-blue-500/20 shadow-md">
            <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">Supported by</span>
            <div className="bg-white rounded p-0.5 h-6 flex items-center shadow-sm">
              <img src="/ministry-of-textiles.png" alt="Ministry of Textiles" className="h-4 w-auto object-contain" />
            </div>
            <div className="bg-white rounded p-0.5 h-6 flex items-center shadow-sm">
              <img src="/aepc-logo.png" alt="AEPC" className="h-4 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


