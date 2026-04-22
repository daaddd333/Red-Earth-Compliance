import React from 'react';
import { Zap, CheckSquare2, FileText, Briefcase, Wrench, Building2, HardHat, Phone, Mail, Cable, Shield, ShieldCheck, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

export default function Services() {
  return (
    <div className="flex flex-col bg-bg-light">
      {/* Header */}
      <section className="bg-ink text-bg-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Test & Tag for Hedland Workplaces</h1>
            <p className="text-xl text-sandstone/90 mb-10 font-medium leading-relaxed">
              <span className="text-primary font-bold">One focus. Done properly.</span> Local Test & Tag for workplaces and job sites across Port Hedland, South Hedland and Wedgefield.
            </p>
            <div className="flex gap-4 items-center text-sm font-semibold tracking-wide text-sandstone/70">
              <span className="px-3 py-1 bg-white/10 rounded">Testing to AS/NZS 3760</span>
              <span className="px-3 py-1 bg-white/10 rounded">AS/NZS 3012 where applicable for construction and site conditions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-bg-light rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Standard 240V Test & Tag</h3>
              <p className="text-ink/80 font-medium mb-6 leading-relaxed">
                We test and tag standard 240V plug-in workplace equipment — extension leads, power boards, chargers, portable appliances and power tools.
              </p>
              <div className="border-t border-sandstone/50 pt-4 mt-auto">
                <p className="text-sm font-semibold italic text-ink/60">Suited to offices, workshops, accommodation sites, staff areas and general workplaces.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-bg-light rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Cable size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">3-Phase Equipment Testing</h3>
              <p className="text-ink/80 font-medium mb-6 leading-relaxed">
                Testing of selected 3-phase equipment used in workplaces and industrial environments.
              </p>
              <div className="border-t border-sandstone/50 pt-4 mt-auto">
                <p className="text-sm font-semibold italic text-ink/60">Suited to workshops, industrial sites and workplaces using 415V equipment.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-bg-light rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Portable RCD Testing</h3>
              <p className="text-ink/80 font-medium mb-6 leading-relaxed">
                Testing of portable RCDs (safety switches) used to help protect workers and equipment on site.
              </p>
              <div className="border-t border-sandstone/50 pt-4 mt-auto">
                <p className="text-sm font-semibold italic text-ink/60">Suited to workshops, job sites and workplaces using portable electrical protection devices.</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-bg-light rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Fixed RCD / Safety Switch</h3>
              <p className="text-ink/80 font-medium mb-6 leading-relaxed">
                Testing of fixed RCDs and safety switches, subject to safe access and isolation being available.
              </p>
              <div className="border-t border-sandstone/50 pt-4 mt-auto">
                <p className="text-sm font-semibold italic text-ink/60">Suited to workplaces that require additional electrical safety checks as part of broader compliance management.</p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-bg-light rounded flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Waves size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Microwave Leakage Testing</h3>
              <p className="text-ink/80 font-medium mb-6 leading-relaxed">
                Microwave radiation leakage testing for commercial and staff environments.
              </p>
              <div className="border-t border-sandstone/50 pt-4 mt-auto">
                <p className="text-sm font-semibold italic text-ink/60">Suited to workplace kitchens, tea rooms, camp kitchens and commercial environments.</p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-ink text-bg-light border border-ink p-8 rounded-lg shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <FileText size={180} />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/10 rounded flex items-center justify-center mb-6 text-primary">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Compliance Reporting</h3>
                <p className="text-sandstone/80 font-medium leading-relaxed">
                  Every standard job includes a digital compliance report to help you keep records organised, track re-test dates and maintain clear workplace compliance records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included / Who we work with */}
      <section className="py-24 bg-sandstone/30 border-y border-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Included */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10">What's included in every standard booking</h2>
              <ul className="space-y-6 mb-10">
                {[
                  'Onsite visit',
                  'Testing and tagging',
                  'Digital compliance report',
                  'Reminder service'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl font-medium text-ink">
                    <CheckSquare2 size={24} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 border-l-4 border-primary shadow-sm rounded-r italic text-ink/80 font-medium">
                For specialised items or unusual site conditions, any additional charges are confirmed before booking.
              </div>
            </div>

            {/* Who we work with */}
            <div>
               <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10">Who we work with</h2>
               <p className="text-xl text-ink/80 font-medium mb-8">
                 We provide Test & Tag services for local businesses across Hedland, including:
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3 bg-white p-4 rounded border border-sandstone">
                    <Wrench className="text-primary" size={20} /> <span className="font-semibold text-ink">Workshops and industrial yards</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded border border-sandstone">
                    <Briefcase className="text-primary" size={20} /> <span className="font-semibold text-ink">Offices and retail businesses</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded border border-sandstone">
                    <Building2 className="text-primary" size={20} /> <span className="font-semibold text-ink">Accommodation sites and camps</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded border border-sandstone">
                    <HardHat className="text-primary" size={20} /> <span className="font-semibold text-ink">Construction and job sites</span>
                  </div>
               </div>

               <p className="text-lg font-bold text-ink mb-8 border border-sandstone rounded p-6 bg-white shadow-sm">
                 If your workplace has plug-in electrical equipment that needs testing, tagging and reporting, we can help.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/pricing" className="bg-ink hover:bg-ink/80 text-white transition-all duration-300 px-6 py-4 rounded font-bold uppercase tracking-widest text-sm text-center">
                   View Pricing
                 </Link>
                 <a href="tel:0458722965" className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-6 py-4 rounded font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                   <Phone size={18} />
                   Call or SMS 0458 722 965
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA bar */}
      <section className="bg-white border-b border-sandstone py-8 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-8">
           <span className="font-extrabold uppercase tracking-widest text-ink">Ready when you are:</span>
           <a href="tel:0458722965" className="flex items-center gap-2 font-bold text-primary hover:text-ink transition-colors">
              <Phone size={18} /> Call or SMS 0458 722 965
           </a>
           <a href={mailtoLink} className="flex items-center gap-2 font-bold text-primary hover:text-ink transition-colors">
              <Mail size={18} /> Book by Email
           </a>
           <Link to="/pricing" className="flex items-center gap-2 font-bold text-ink hover:text-primary transition-colors border-l pl-8 border-sandstone">
              View Pricing &rarr;
           </Link>
        </div>
      </section>
    </div>
  );
}
