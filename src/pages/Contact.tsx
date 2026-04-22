import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

export default function Contact() {
  return (
    <div className="flex flex-col bg-bg-light">
      {/* Header */}
      <section className="bg-ink text-bg-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Contact & Booking</h1>
            <p className="text-xl text-sandstone/90 mb-10 font-medium leading-relaxed">
              Need to book Test & Tag for your workplace or job site? Get in touch to confirm pricing and arrange a suitable time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Col: Contact Info */}
            <div className="space-y-12">
              <div className="bg-white border-t-4 border-primary border-x border-b border-sandstone shadow-sm p-8 rounded">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-8">Get in touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-bg-light flex items-center justify-center shrink-0 border border-sandstone">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-ink text-sm uppercase tracking-widest mb-1">Call / SMS</p>
                      <a href="tel:0458722965" className="text-2xl md:text-3xl font-black text-ink hover:text-primary transition-colors">0458 722 965</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-bg-light flex items-center justify-center shrink-0 border border-sandstone">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-ink text-sm uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:info@redearthcompliance.com.au" className="text-lg md:text-xl font-bold text-ink hover:text-primary transition-colors break-all">info@redearthcompliance.com.au</a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="tel:0458722965" className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-6 py-3 rounded font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg w-full">
                    <Phone size={18} /> Call or SMS 0458 722 965
                  </a>
                  <a href={mailtoLink} className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-6 py-3 rounded font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg w-full">
                    <Mail size={18} /> Book by Email
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-sandstone/30 border border-sandstone p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-primary" size={20} />
                    <h3 className="font-bold text-ink uppercase tracking-wide">Service Area</h3>
                  </div>
                  <ul className="space-y-2 text-ink/80 font-medium">
                    <li>Port Hedland</li>
                    <li>South Hedland</li>
                    <li>Wedgefield</li>
                  </ul>
                </div>

                <div className="bg-sandstone/30 border border-sandstone p-6 rounded">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={20} />
                    <h3 className="font-bold text-ink uppercase tracking-wide">Hours</h3>
                  </div>
                  <div className="space-y-3 text-ink/80 font-medium text-sm">
                    <p><strong className="text-ink">On-site:</strong> Mon–Fri, 7:30am – 3:00pm</p>
                    <p><strong className="text-ink">Text/Email:</strong> anytime. Calls returned ASAP.</p>
                    <p className="italic">After-hours or weekend site visits by request.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Process */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">What to include</h2>
              <div className="bg-white border border-sandstone p-8 rounded shadow-sm mb-12">
                <p className="text-ink/80 font-medium mb-6">When you get in touch, please include:</p>
                <ul className="space-y-4 mb-6">
                  {['Contact name and business name', 'Mobile number and email address', 'Site location', 'Preferred date and time', 'What needs testing (brief description)', 'Estimated item count', 'Any site access notes — induction requirements, permits, restricted hours, remote location, etc.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-ink/90 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-bg-light p-4 rounded border-l-4 border-primary text-sm font-medium text-ink/70 italic">
                  Including access notes upfront helps us confirm the right arrival time and avoid delays on the day.
                </div>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">What happens next</h2>
              <div className="space-y-4">
                {[
                  "We review your details and confirm pricing and any variables (specialised items, access, remote site charges) before booking.",
                  "We agree on a date and time that suits your site.",
                  "We arrive onsite, complete testing and tagging, and send your digital compliance report after the job."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start bg-bg-light p-5 rounded border border-sandstone">
                    <div className="w-8 h-8 bg-ink text-white font-bold rounded flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-ink/80 font-medium leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="py-20 border-t border-sandstone bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-6">Check Pricing Before You Book</h2>
            <Link to="/pricing" className="inline-flex items-center gap-2 font-bold text-primary hover:text-ink transition-colors border-b-2 border-primary hover:border-ink pb-1">
              View Simple Pricing Packages <ArrowRight size={18}/>
            </Link>
        </div>
      </section>
    </div>
  );
}
