import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const priceExamples = [
    { count: 15, price: 135 },
    { count: 20, price: 180 },
    { count: 30, price: 270 },
    { count: 40, price: 360 },
    { count: 50, price: 450 },
    { count: 60, price: 540 },
    { count: 70, price: 630 },
    { count: 80, price: 720 },
    { count: 90, price: 810 },
    { count: 100, price: 900 },
    { count: 150, price: 1350 },
    { count: 200, price: 1800 },
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
              Straightforward package pricing for Test &amp; Tag jobs across Port Hedland, South Hedland and Wedgefield. <span className="text-primary font-bold">You know the rates before we book.</span>
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
                      <span className="text-5xl font-black text-white">$135</span>
                      <span className="text-ink font-bold">+ GST</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="font-bold text-ink mb-6 pb-6 border-b border-sandstone">Includes up to 15 test items, plus:</p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Onsite visit</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Inspection, testing and tagging</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Digital compliance report</li>
                      <li className="flex items-center gap-3 text-ink/80 font-medium"><CheckCircle2 className="text-primary" size={20}/> Reminder service</li>
                    </ul>

                    <div className="bg-sandstone/30 rounded p-6 text-center border border-sandstone">
                      <p className="text-sm font-bold uppercase tracking-widest text-ink/60 mb-1">Additional Test Items</p>
                      <p className="text-2xl font-black text-ink"><span className="text-primary">$9.00</span> <span className="text-base font-bold text-ink/60">+ GST</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-ink p-8 rounded-xl relative overflow-hidden">
                  <h3 className="text-xl font-bold text-bg-light mb-4 flex items-center gap-2">Ready to book?</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/contact" className="bg-primary text-white p-4 rounded hover:-translate-y-0.5 transition-transform flex items-center justify-center text-center w-full shadow-md">
                      <span className="text-[16px] lg:text-[18px] font-extrabold tracking-tight">Request Booking</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Tables and Notes */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">How pricing works</h2>

              <div className="bg-white border text-lg border-sandstone p-8 rounded shadow-sm mb-12">
                <p className="text-ink/80 font-medium mb-6">
                  Base Package covers up to 15 test items for $135 + GST. Additional Test Items after the first 15 are $9.00 each + GST.
                </p>
                <div className="space-y-6">
                  <div className="pl-6 border-l-4 border-primary">
                    <p className="font-bold text-ink mb-1">Formula</p>
                    <p className="font-mono text-ink/70">15 test items or fewer &rarr; $135 + GST</p>
                    <p className="font-mono text-ink/70">More than 15 &rarr; $135 + (extra test items &times; $9.00) + GST</p>
                    <p className="text-sm text-ink/60 font-medium mt-3">When all 15 included items are tested, the Base Package works out to <span className="text-primary font-bold">$9.00 + GST per test item</span>.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <div className="bg-bg-light p-4 rounded border border-sandstone">
                      <p className="font-bold text-ink text-sm uppercase tracking-wide mb-2">Example: 30 items</p>
                      <ul className="text-sm space-y-1 font-mono text-ink/80 mb-2">
                        <li>Base Package: $135</li>
                        <li>Extra test items: 15 &times; $9.00 = $135</li>
                      </ul>
                      <p className="font-bold text-ink">Total: $270 + GST</p>
                    </div>
                    <div className="bg-bg-light p-4 rounded border border-sandstone">
                      <p className="font-bold text-ink text-sm uppercase tracking-wide mb-2">Example: 100 items</p>
                      <ul className="text-sm space-y-1 font-mono text-ink/80 mb-2">
                        <li>Base Package: $135</li>
                        <li>Extra test items: 85 &times; $9.00 = $765</li>
                      </ul>
                      <p className="font-bold text-ink">Total: $900 + GST</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-8">Price examples</h2>
              <div className="bg-white border text-lg border-sandstone rounded shadow-sm mb-6 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-sandstone/30 border-b border-sandstone">
                      <th className="py-4 px-6 font-bold text-ink uppercase tracking-wider text-sm">Test item count</th>
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

              {/* Why competitive */}
              <div className="border-t-4 border-ink pt-12">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-6">Why is Red Earth pricing competitive?</h2>
                <div className="space-y-6 text-lg font-medium text-ink/80 leading-relaxed">
                  <p>
                    Some Test &amp; Tag pricing models include separate hourly rates, labour fees, per-tag rates, report / asset register fees and call-out fees. In the Pilbara, this can often work out around $10&ndash;$16+ per test item, and reporting may not always be included.
                  </p>
                  <p>
                    Red Earth Compliance focuses on Test &amp; Tag only. By using an efficient, high-volume workflow and digital reporting process, we can keep pricing simple and competitive &mdash; with digital compliance reporting, asset records and re-test tracking included.
                  </p>
                  <p>
                    Our Base Package is $135 + GST and includes up to 15 test items, which works out to $9.00 + GST per test item when all 15 included items are tested. Additional test items are charged at $9.00 + GST each.
                  </p>
                </div>
              </div>

              <div className="mt-16 border-t border-sandstone pt-12">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-6 flex items-center gap-3">
                  <AlertCircle className="text-primary" /> Pricing Notes
                </h2>

                <div className="space-y-6 text-lg font-medium text-ink/80 leading-relaxed">
                  <p>
                    Base package pricing applies within Port Hedland, South Hedland and Wedgefield, where items are ready for testing and reasonably accessible.
                  </p>

                  <p>
                    Additional Test Items are charged at $9.00 each + GST after the first 15 test items.
                  </p>

                  <p>
                    Fixed RCD / safety switch testing is subject to safe access and isolation being available.
                  </p>

                  <p>
                    Site time beyond the first 15 minutes is charged at $80 + GST per 30 minutes or part thereof for waiting, inductions, permits, restricted access, escort requirements or site coordination.
                  </p>

                  <p>
                    Mining sites, remote sites and camp work are quoted separately where full inductions, escort access, remote travel or shutdown coordination are required.
                  </p>

                  <p>
                    Rates are confirmed before booking. Final invoices are based on the actual test items completed and any confirmed site access or waiting time requirements.
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
