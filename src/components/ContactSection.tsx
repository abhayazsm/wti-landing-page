import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Headphones, 
  FileText, 
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact-info" className="py-16 sm:py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-crosshatch">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-saffron-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/30 text-brand-blue-400 text-xs font-extrabold uppercase tracking-wider mb-3 sm:mb-4">
            <Compass className="w-3.5 h-3.5" />
            Direct Communications
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 font-['Outfit'] px-2">
            Get in Touch with Secretariat & Support
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Our trade desk, event management team, and delegation liaison officers are available to assist you with booth allocations, buyer passes, and logistical support.
          </p>
        </div>

        {/* 4 Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: General & Delegate Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-brand-navy-950/85 hover:border-brand-blue-400/40 transition-all shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-500/15 border border-brand-blue-500/30 flex items-center justify-center text-brand-blue-400 shadow-md group-hover:scale-105 transition-transform">
                  <Headphones className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-brand-blue-500/20 text-brand-blue-300 rounded-full border border-brand-blue-500/30">
                  Delegate Desk
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white font-['Outfit'] mb-2">
                Visitor & Delegate Support
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                For attendee pre-registration, VIP buyer passes, international buyer delegations, invitations, and seminar schedules.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <a 
                  href="mailto:support@worldtextileindia.com" 
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-blue-400 transition-colors text-xs sm:text-sm font-semibold p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">support@worldtextileindia.com</span>
                </a>

                <a 
                  href="tel:+919567365566" 
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-saffron-400 transition-colors text-xs sm:text-sm font-semibold p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-saffron-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 95673 65566</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Event Team Support & Stall Booking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-brand-navy-950/85 hover:border-brand-saffron-500/40 transition-all shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-saffron-500/15 border border-brand-saffron-500/30 flex items-center justify-center text-brand-saffron-400 shadow-md group-hover:scale-105 transition-transform">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-brand-saffron-500/20 text-brand-saffron-400 rounded-full border border-brand-saffron-500/30">
                  Exhibitor Hub
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white font-['Outfit'] mb-2">
                Event Team & Stall Inquiries
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                For exhibitor booth allocations, prime corner locations, custom bare space construction, sponsorship packages, and brand partnerships.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <a 
                  href="mailto:info@worldtextileindia.com" 
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-saffron-400 transition-colors text-xs sm:text-sm font-semibold p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-saffron-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">info@worldtextileindia.com</span>
                </a>

                <a 
                  href="tel:+919567365566" 
                  className="flex items-center gap-3 text-slate-200 hover:text-brand-saffron-400 transition-colors text-xs sm:text-sm font-semibold p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-saffron-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 95673 65566</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Official Event Venue Address */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-brand-navy-950/85 hover:border-brand-emerald-400/40 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-emerald-500/15 border border-brand-emerald-500/30 flex items-center justify-center text-brand-emerald-400 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-brand-emerald-500/20 text-brand-emerald-300 rounded-full border border-brand-emerald-500/30">
                  Exhibition Centre
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white font-['Outfit'] mb-2">
                Event Venue Address
              </h3>
              
              <div className="p-4 rounded-2xl bg-brand-navy-900/90 border border-white/10 mb-4">
                <p className="text-white font-extrabold text-sm sm:text-base leading-snug">
                  KTPO (Karnataka Trade Promotion Organization)
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Whitefield, Bengaluru, Karnataka, India
                </p>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Strategic tech and logistics corridor with direct Namma Metro access, luxury hotel clusters, and seamless airport expressway transport.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Registered Office & Legal Entity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-brand-navy-950/85 hover:border-brand-blue-400/40 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-500/15 border border-brand-blue-500/30 flex items-center justify-center text-brand-blue-400 shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-brand-blue-500/20 text-brand-blue-300 rounded-full border border-brand-blue-500/30">
                  Registered Office
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white font-['Outfit'] mb-1">
                World Textile Trade Federation
              </h3>
              <p className="text-[11px] font-bold text-brand-saffron-400 uppercase tracking-wider mb-3">
                GST Entity: Budyam Seva Private Limited
              </p>

              <div className="p-4 rounded-2xl bg-brand-navy-900/90 border border-white/10 text-xs sm:text-sm text-slate-300 space-y-1 leading-relaxed">
                <p><strong className="text-white">Floor & Flat:</strong> 4th Floor, Building No. 400-A</p>
                <p><strong className="text-white">Building:</strong> Bharat Udyam Seva Kendra</p>
                <p><strong className="text-white">Street:</strong> Yusuf Sarai Commercial Complex</p>
                <p><strong className="text-white">Landmark:</strong> Nearby Green Park Metro Station Exit-2</p>
                <p><strong className="text-white">Locality:</strong> 12th Ajith Singh House, New Delhi, Delhi – 110016</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Official Social Media Channels Strip */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-brand-navy-950/90 shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-saffron-400 block mb-1">
              Official Media Channels
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-white font-['Outfit']">
              Connect with World Textile India 2026
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Stay informed on delegation announcements, speaker lineups, exhibitor spotlights, and live runway schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/world-textile-india-wti-a14177424', color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10' },
              { name: 'Instagram', href: 'https://www.instagram.com/worldtextileindia/', color: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10' },
              { name: 'X (Twitter)', href: 'https://x.com/WorldTexIndia', color: 'hover:text-brand-blue-400 hover:border-brand-blue-500/40 hover:bg-brand-blue-500/10' },
              { name: 'YouTube', href: 'https://www.youtube.com/@WorldTextileIndia', color: 'hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10' },
              { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591887164370', color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-xl text-xs font-bold border border-white/10 glass-panel text-slate-200 transition-all hover:scale-105 shadow-sm ${social.color}`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Quick CTA */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-brand-saffron-500/30 bg-gradient-to-r from-brand-navy-900/90 via-brand-navy-950 to-brand-navy-900/90 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-emerald-500/20 border border-brand-emerald-500/40 flex items-center justify-center text-brand-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-white font-['Outfit']">
                Need Custom Pavilion or Sponsorship Assistance?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our team responds within 24 hours with floor plans, technical guidelines, and official delegation passes.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-saffron-500 to-orange-500 hover:from-brand-saffron-400 hover:to-orange-400 text-brand-navy-950 font-extrabold text-sm rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Fill Registration Form</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
