import React from 'react';
import { CheckCircle2, AlertCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

export default function Pricing() {
  const priceExamples = [
    { count: 15, price: 160 },
    { count: 20, price: 190 },
    { count: 30, price: 250 },
    { count: 40, price: 310 },
    { count: 50, price: 370 },
    { count: 60, price: 430 },
    { count: 70, price: 490 },
    { count: 80, price: 550 },
    { count: 90, price: 610 },
    { count: 100, price: 670 },
    { count: 150, price: 970 },
    { count: 200, price: 1270 },
  ];

  return (
    <div className="flex flex-col bg-bg-light">
      {/* Header */}
      <section className="bg-ink text-bg-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Clear Pricing for Hedland Workplaces</h1>
            <p className="text-xl text-sandstone/90 mb-10 font-medium leading-relaxed">
              Straightforward package pricing for standard Test & Tag jobs across Port Hedland, South Hedland and Wedgefield. <span className="text-primary font-bold">You see the number before we book.</span>
            </p>
            <div className="flex flex-wrap gap-4 items-center text-sm font-semibold tracking-wide text-sandstone/70">
              <span className="px-3 py-1 bg-white/10 rounded border border-white/5">AS/NZS 3760</span>
              <span className="px-3 py-1 bg-white/10 rounded border border-white/5">Calibrated PAT equipment</span>
              <span className="px-3 py-1 bg-white/10 rounded border border-white/5">QBE $20M insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Col: Explainer */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-sandstone overflow-hidden mb-8">
                  <div className="bg-primary px-8 py-6 text-center border-b-4 border-ink">
                    <h2 className="text-xl font-bold tracking-widest uppercase text-white mb-2">Base Package</h2>
                    <div className="flex justify-center items-baseline gap-1">
                      <span className="text-5xl font-black text-white">$160</span>
                      <span className="text-ink font-bold">+ GST</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="font-bold text-ink mb-6 pb-6 border-b border-sandstone">Includes your first 15 standard items, plus:</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Onsite visit</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Testing and tagging</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Digital compliance report</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Reminder service</li>
                    </ul>
                    
                    <div className="bg-sandstone/30 rounded p-6 text-center border border-sandstone">
                      <p className="text-sm font-bold uppercase tracking-widest text-ink/60 mb-1">Additional Items</p>
                      <p className="text-2xl font-black text-ink">$6.00 <span className="text-base font-bold text-ink/60 lowercase">+ GST</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-ink p-8 rounded-xl relative overflow-hidden">
                   <h3 className="text-xl font-bold text-bg-light mb-4 flex items-center gap-2">Ready to book?</h3>
                   <div className="flex flex-col gap-4">
                      <a href="tel:0458722965" className="bg-primary text-white p-4 rounded hover:-translate-y-0.5 transition-transform flex items-center justify-center text-center w-full shadow-md">
                        <span className="text-[16px] lg:text-[18px] font-extrabold tracking-tight">Call or SMS 0458 722 965</span>
                      </a>
                      <a href={mailtoLink} className="bg-primary text-white p-4 rounded hover:-translate-y-0.5 transition-transform flex items-center justify-center text-center w-full shadow-md">
                        <span className="text-[16px] lg:text-[18px] font-extrabold tracking-tight">Book by Email</span>
                      </a>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Col: Tables and Notes */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">How pricing works</h2>
              
              <div className="bg-white border text-lg border-sandstone p-8 rounded shadow-sm mb-12">
                <p className="text-ink/80 font-medium mb-6">
                  For standard items: Base Package covers your first 15 standard items for $160 + GST. Additional standard items after the first 15 are $6.00 each + GST.
                </p>
                <div className="space-y-6">
                  <div className="pl-6 border-l-4 border-primary">
                    <p className="font-bold text-ink mb-1">Formula</p>
                    <p className="font-mono text-ink/70">15 items or fewer &rarr; $160 + GST</p>
                    <p className="font-mono text-ink/70">More than 15 &rarr; $160 + (extra items × $6.00) + GST</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <div className="bg-bg-light p-4 rounded border border-sandstone">
                      <p className="font-bold text-ink text-sm uppercase tracking-wide mb-2">Example: 30 items</p>
                      <ul className="text-sm space-y-1 font-mono text-ink/80 mb-2">
                        <li>Base (15): $160</li>
                        <li>Extra (15 × 6): $90</li>
                      </ul>
                      <p className="font-bold text-primary">Total: $250 + GST</p>
                    </div>
                    <div className="bg-bg-light p-4 rounded border border-sandstone">
                      <p className="font-bold text-ink text-sm uppercase tracking-wide mb-2">Example: 100 items</p>
                      <ul className="text-sm space-y-1 font-mono text-ink/80 mb-2">
                        <li>Base (15): $160</li>
                        <li>Extra (85 × 6): $510</li>
                      </ul>
                      <p className="font-bold text-primary">Total: $670 + GST</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">Standard price examples</h2>
              <div className="bg-white border text-lg border-sandstone rounded shadow-sm mb-6 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-sandstone/30 border-b border-sandstone">
                      <th className="py-4 px-6 font-bold text-ink uppercase tracking-wider text-sm">Standard item count</th>
                      <th className="py-4 px-6 font-bold text-ink uppercase tracking-wider text-sm">Price (ex GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceExamples.map((row, idx) => (
                      <tr key={idx} className="border-b border-sandstone/50 hover:bg-bg-light/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-ink flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                          {row.count} items
                        </td>
                        <td className="py-4 px-6 font-bold text-ink">${row.price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm font-semibold italic text-ink/60 mb-16">Volume pricing available for larger sites on request.</p>

              <div className="border-t-4 border-ink pt-12">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-6 flex items-center gap-3">
                  <AlertCircle className="text-primary" /> Pricing Notes
                </h2>
                
                <div className="space-y-6 text-lg font-medium text-ink/80 leading-relaxed">
                  <p>
                    Standard pricing applies to accessible 240V plug-in items within Port Hedland, South Hedland and Wedgefield, where items are ready for testing and reasonably accessible.
                  </p>
                  
                  <div className="bg-sandstone/30 p-6 rounded border border-sandstone">
                    <p className="font-bold text-ink mb-4"><span className="text-primary">Specialised item pricing — $13.00 each + GST</span> applies to:</p>
                    <ul className="space-y-2 list-none list-inside">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ink rounded-full"></div> 3-phase equipment testing</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ink rounded-full"></div> Portable RCD testing</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ink rounded-full"></div> Microwave radiation leakage testing</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ink rounded-full"></div> Fixed RCD / safety switch testing (subject to safe access)</li>
                    </ul>
                  </div>

                  <p>
                    <strong className="text-ink">Site time beyond 15 minutes of waiting, induction or restricted access</strong> may be charged at $80 + GST per 30 minutes or part thereof.
                  </p>

                  <p>
                    <strong className="text-ink">Mining sites, remote sites, and camp work</strong> with full induction requirements, escort access or shutdown coordination are quoted separately.
                  </p>
                  
                  <p>
                    Any extra charges are always <strong className="text-ink">confirmed before booking.</strong>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Footer link to Contact */}
      <section className="bg-sandstone/30 py-16 border-y border-sandstone">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
           <h3 className="text-2xl font-bold text-ink mb-6 sm:mb-0">Ready to lock it in?</h3>
           <Link to="/contact" className="bg-ink hover:bg-ink/80 text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm flex items-center gap-3 transition-colors shadow-lg">
             Contact Us <ArrowRight size={18} />
           </Link>
         </div>
      </section>
    </div>
  );
}
