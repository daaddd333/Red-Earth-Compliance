import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle2, ShieldCheck, MapPin, Zap, ClipboardCheck, CircleDollarSign } from 'lucide-react';
import SparksEffect from '../components/SparksEffect';
import { motion } from 'motion/react';

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-bg-light min-h-[500px] flex items-center pt-32 pb-40">
        <SparksEffect />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink/90 z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/4 flex flex-col justify-center"
          >
            <div className="text-primary uppercase tracking-[0.1em] font-bold text-[14px] mb-4">
              Built for Pilbara workplaces. Audit-ready reports. Clear pricing.
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[72px] font-extrabold tracking-[-2px] mb-6 leading-[0.9] text-white uppercase">
              Hedland's Local<br />
              Test & Tag<br />
              Specialist.
            </h1>
            
            <p className="text-[20px] text-white/80 font-normal max-w-[500px] leading-[1.4]">
              Test & Tag for Port Hedland, South Hedland and Wedgefield.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Action Grid Overlap */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-[60px] mb-12 lg:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 py-8 md:px-[80px] md:py-[40px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-t-lg lg:mx-[80px]">
          <a href="tel:0458722965" className="bg-primary text-white p-6 rounded hover:-translate-y-1 transition-transform flex items-center justify-center text-center">
            <span className="text-[20px] lg:text-[24px] font-extrabold tracking-tight">Call or SMS 0458 722 965</span>
          </a>
          <a href={mailtoLink} className="bg-primary text-white p-6 rounded hover:-translate-y-1 transition-transform flex items-center justify-center text-center">
            <span className="text-[20px] lg:text-[24px] font-extrabold tracking-tight">Book by Email</span>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-ink mb-6">One job, done properly</h2>
            <p className="text-xl text-ink/70 leading-relaxed font-medium">
              Red Earth Compliance does one job: Test & Tag for Hedland workplaces. No hourly-rate guessing on standard work — clear package pricing, durable site-ready tagging, and digital compliance reports you can pull up when audit time comes around.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-sandstone/30 border-y border-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-16 uppercase relative inline-block">
            What we offer
            <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded border border-sandstone flex items-center justify-center shadow-sm">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Hedland-based</h3>
              </div>
              <p className="text-lg text-ink/70 leading-relaxed font-medium">
                Local service, easy to reach and familiar with local site conditions.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded border border-sandstone flex items-center justify-center shadow-sm">
                  <CircleDollarSign size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Clear pricing on standard jobs</h3>
              </div>
              <p className="text-lg text-ink/70 leading-relaxed font-medium">
                $160 base for your first 15 items, $6 each after that. Pricing is explained upfront, with any variables confirmed before booking.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded border border-sandstone flex items-center justify-center shadow-sm">
                  <ClipboardCheck size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Audit-ready digital reports</h3>
              </div>
              <p className="text-lg text-ink/70 leading-relaxed font-medium">
                Every job includes a digital report you can file, track and pull up on demand — for internal records or a compliance check.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded border border-sandstone flex items-center justify-center shadow-sm">
                  <ShieldCheck size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Properly equipped and insured</h3>
              </div>
              <p className="text-lg text-ink/70 leading-relaxed font-medium">
                Calibrated digital PAT equipment, durable site-ready tagging, and QBE $20M Public & Products Liability.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Two Column Section: What we test & How it works */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* What we test */}
            <div className="bg-white p-10 rounded-lg shadow-sm border border-sandstone">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10">What we test</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <Zap size={20} /> Standard 240V items
                </h3>
                <ul className="space-y-4">
                  {['Extension leads and power boards', 'Chargers and portable appliances', 'Power tools', 'Kitchen and breakroom appliances'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-ink/30 shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <ShieldCheck size={20} /> Specialised testing
                </h3>
                <ul className="space-y-4">
                  {['Portable and fixed RCD / safety switch testing', '3-phase equipment', 'Microwave leakage testing'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-ink/30 shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How it works */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10">How it works</h2>
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
                {[
                  { title: "Get in touch", desc: "Send us your site location, estimated item count and what needs testing." },
                  { title: "Confirm your booking", desc: "We confirm pricing and arrange a suitable date and time before attending." },
                  { title: "Testing, tagging and report", desc: "Your equipment is tested, tagged and recorded. A digital compliance report is sent after the job." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-bg-light bg-primary text-white font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded border border-sandstone bg-white shadow-sm ml-4 md:ml-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl text-ink">{step.title}</h3>
                      </div>
                      <p className="text-ink/70 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Test & Tag still matters */}
      <section className="py-16 bg-white border-y border-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-6">Why Test &amp; Tag still matters</h2>
            <p className="text-lg text-ink/70 leading-relaxed font-medium mb-4">
              Most workplaces in Hedland aren't dealing with routine inspections every week. But that's not really the point. Test &amp; Tag helps reduce the risk of electric shock, catches faulty equipment before it stays in use too long, and keeps a clear record of what's been tested and when.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed font-bold mb-8">
              It's a simple, practical way to keep equipment safer, records clearer, and workplaces easier to manage.
            </p>
            <Link to="/faq" className="inline-block text-primary font-bold tracking-widest uppercase hover:text-ink transition-colors border-b-2 border-primary hover:border-ink pb-1">
              Read more in our FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-24 bg-ink text-bg-light border-y-8 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-8">Simple pricing</h2>
              <div className="space-y-8">
                <div className="bg-white/5 p-8 border border-white/10 rounded">
                  <h3 className="text-2xl font-bold mb-4 text-white">Base Package — <span className="text-primary">$160</span><span className="text-sm text-sandstone/60"> + GST</span></h3>
                  <p className="text-lg text-sandstone/80 font-medium mb-6">
                    Includes your first 15 standard items, onsite visit, testing & tagging, digital compliance report and reminder service.
                  </p>
                  <div className="h-px w-full bg-white/10 mb-6"></div>
                  <h3 className="text-xl font-bold text-white">Additional standard items — <span className="text-primary">$6.00</span><span className="text-sm text-sandstone/60"> each + GST</span></h3>
                </div>
                
                <p className="text-sandstone/70 italic font-medium">Volume pricing available for larger sites.</p>
                
                <Link to="/pricing" className="inline-block text-primary font-bold tracking-widest uppercase hover:text-white transition-colors border-b-2 border-primary hover:border-white pb-1">
                  View Full Pricing
                </Link>
              </div>
            </div>
            
            <div className="bg-bg-light text-ink p-10 rounded-lg">
              <h3 className="text-2xl font-extrabold tracking-tight mb-8 uppercase">Ready to book?</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:0458722965" className="bg-primary text-white p-6 rounded hover:-translate-y-1 transition-transform flex items-center justify-center text-center w-full shadow-lg">
                  <span className="text-[20px] lg:text-[22px] font-extrabold tracking-tight">Call or SMS 0458 722 965</span>
                </a>
                <a href={mailtoLink} className="bg-primary text-white p-6 rounded hover:-translate-y-1 transition-transform flex items-center justify-center text-center w-full shadow-lg">
                  <span className="text-[20px] lg:text-[22px] font-extrabold tracking-tight">Book by Email</span>
                </a>
                
                <div className="mt-8 pt-8 border-t border-sandstone text-center">
                  <p className="font-bold text-ink mb-4 uppercase tracking-widest text-sm">Service Area</p>
                  <p className="text-ink/80 font-medium text-lg">Port Hedland · South Hedland · Wedgefield</p>
                  <p className="text-ink/60 font-medium mt-4">
                    We work with local businesses, workshops, yards, offices, accommodation sites and job sites across the Hedland area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Standards */}
      <section className="py-20 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">Testing to AS/NZS 3760</div>
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">AS/NZS 3012 where applicable</div>
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">Calibrated PAT equipment</div>
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">Durable site-ready tagging</div>
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">Digital reporting</div>
            <div className="p-4 border border-sandstone rounded bg-white font-bold text-sm tracking-wide text-ink flex items-center justify-center h-24">QBE $20M insured</div>
          </div>
        </div>
      </section>
    </div>
  );
}
