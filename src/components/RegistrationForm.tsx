import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Building, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import { useForm as useHookForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
};

export default function RegistrationForm() {
  const [type, setType] = useState<'exhibitor' | 'buyer'>('exhibitor');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useHookForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    console.log("Registration submitted:", { type, ...data });
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-brand-navy-950 bg-textile-knit">
      {/* Background glow effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-blue-600/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-saffron-500/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-brand-blue-500/20 shadow-2xl relative overflow-hidden bg-brand-navy-950/85">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                <div className="text-center mb-6 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-brand-saffron-500/10 border border-brand-saffron-500/30 text-brand-saffron-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Priority Registration
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3 font-['Outfit'] px-2">
                    Register Your Official Participation
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-2">
                    Join over 50,000 textile leaders in Bengaluru. Complete the form to secure your early bird stall allocation or free VIP buyer pass.
                  </p>
                </div>

                {/* Role Switcher */}
                <div className="flex bg-brand-navy-900/90 p-1 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 max-w-md mx-auto border border-white/10 shadow-inner w-full">
                  <button
                    type="button"
                    onClick={() => setType('exhibitor')}
                    className={`flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                      type === 'exhibitor' 
                        ? 'bg-gradient-to-r from-brand-saffron-500 to-orange-500 text-brand-navy-950 shadow-lg' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Exhibitor / Stall</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('buyer')}
                    className={`flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 ${
                      type === 'buyer' 
                        ? 'bg-gradient-to-r from-brand-blue-500 to-sky-600 text-white shadow-lg' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>VIP Buyer Pass</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Full Name *</label>
                      <input 
                        {...register("fullName", { required: true })}
                        className="w-full bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm"
                        placeholder="e.g. Rajesh Kumar / John Smith"
                      />
                      {errors.fullName && <span className="text-rose-400 text-xs mt-1 block">Full name is required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Corporate Email *</label>
                      <input 
                        type="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm"
                        placeholder="e.g. name@company.com"
                      />
                      {errors.email && <span className="text-rose-400 text-xs mt-1 block">Valid corporate email is required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Mobile / WhatsApp *</label>
                      <div className="flex gap-2">
                        <select className="w-24 sm:w-32 bg-brand-navy-900/90 border border-white/10 rounded-xl px-2 sm:px-3 py-3 sm:py-3.5 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-blue-400 shrink-0">
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (UAE)</option>
                          <option value="+49">+49 (DE)</option>
                          <option value="+880">+880 (BD)</option>
                          <option value="+86">+86 (CN)</option>
                        </select>
                        <input 
                          {...register("phone", { required: true })}
                          className="flex-1 min-w-0 bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm"
                          placeholder="98765 43210"
                        />
                      </div>
                      {errors.phone && <span className="text-rose-400 text-xs mt-1 block">Phone number is required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Company / Enterprise Name *</label>
                      <input 
                        {...register("company", { required: true })}
                        className="w-full bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm"
                        placeholder="e.g. Apex Global Apparels Pvt Ltd"
                      />
                      {errors.company && <span className="text-rose-400 text-xs mt-1 block">Company name is required</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Primary Industry Segment</label>
                    <select 
                      {...register("industry")}
                      className="w-full bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm"
                    >
                      <option value="yarns">Yarns, Fibers & Raw Materials</option>
                      <option value="apparel">Apparel & Garment Manufacturing</option>
                      <option value="machinery">Textile Machinery, AI & Automation</option>
                      <option value="trims">Trims, Accessories & Packaging</option>
                      <option value="handloom">Handlooms, Silk & GI Heritage Textiles</option>
                      <option value="retail">Global Brand / Retail Sourcing Office</option>
                      <option value="other">Other / Allied Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">Specific Requirements / Stall Size (Optional)</label>
                    <textarea 
                      {...register("message")}
                      rows={3}
                      className="w-full bg-brand-navy-900/90 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all resize-none text-sm"
                      placeholder="e.g. Inquiring for 18 sqm corner stall in Hall A / Seeking certified organic cotton vendors"
                    />
                  </div>

                  <div className="flex items-start sm:items-center gap-2 text-xs text-slate-400 pb-2">
                    <ShieldCheck className="w-4 h-4 text-brand-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                    <span>Your privacy is protected. Data is processed exclusively by WTI Organizing Secretariat.</span>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-saffron-500 via-orange-500 to-brand-saffron-600 hover:from-brand-saffron-400 hover:to-orange-400 text-brand-navy-950 font-extrabold text-sm sm:text-base py-3.5 sm:py-4 px-4 rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 border border-brand-saffron-300/30"
                  >
                    {isSubmitting ? 'Processing Application...' : (
                      <>
                        <span>Confirm Registration Details</span> <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 sm:py-12 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-emerald-500/20 border border-brand-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-brand-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-3 font-['Outfit']">Registration Confirmed</h3>
                <p className="text-slate-300 max-w-md mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                  Thank you for registering for <strong className="text-white">World Textile India 2026</strong>. Our official trade desk has sent a confirmation email with your pass & prospectus details.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 glass-panel text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Submit Another Application
                  </button>
                  <a 
                    href="#floor-plan"
                    className="w-full sm:w-auto px-6 py-3 bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-bold rounded-xl transition-all text-sm shadow-md"
                  >
                    View Floor Plan
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

