import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



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
              Need to book Test &amp; Tag for your workplace or job site? Send your site details and estimated item count, and we'll confirm pricing and availability before booking.
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
              <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-4">Get in touch</h2>
                <p className="text-ink/70 font-medium mb-8 leading-relaxed">Call, SMS or email for bookings, pricing questions or general enquiries.</p>

                <div className="flex flex-col gap-4 mb-8">
                  <a href="mailto:info@redearthcompliance.com.au" className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-6 py-4 rounded shadow-lg w-full flex flex-col items-center justify-center gap-1">
                    <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-2"><Mail size={16} /> Email</span>
                    <span className="text-base font-bold tracking-wide">info@redearthcompliance.com.au</span>
                  </a>
                  <a href="tel:0458722965" className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-6 py-4 rounded shadow-lg w-full flex flex-col items-center justify-center gap-1">
                    <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-2"><Phone size={16} /> Call / SMS</span>
                    <span className="text-base font-bold tracking-wide">0458 722 965</span>
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
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">Send these details</h2>
              <div className="bg-white border border-sandstone p-8 rounded shadow-sm mb-12">
                <p className="text-ink/80 font-medium mb-6">To make a booking, please send:</p>
                <ul className="space-y-3 mb-6">
                  {['Contact name and business name', 'Mobile number and email address', 'Site location and preferred time', 'What needs testing and estimated item count'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-ink/90 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-ink/60 font-medium">If your site has inductions, permits or access restrictions, please mention this when you contact us.</p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">What happens next</h2>
              <div className="space-y-4">
                {[
                  { title: "We review your details", text: "We check the item count, site location and preferred time." },
                  { title: "We confirm pricing and availability", text: "You'll know the rates and booking time before we attend." },
                  { title: "We complete the job and send your report", text: "Inspection, testing, tagging and digital reporting are completed after the visit." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start bg-bg-light p-5 rounded border border-sandstone">
                    <div className="w-8 h-8 bg-ink text-white font-bold rounded flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-ink mb-1">{step.title}</p>
                      <p className="text-ink/80 font-medium leading-relaxed">{step.text}</p>
                    </div>
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
