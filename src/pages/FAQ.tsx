import React from 'react';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

function FAQItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  return (
    <div className="bg-white border border-sandstone p-8 rounded-lg shadow-sm mb-6 hover:border-primary/50 transition-colors">
      <h3 className="text-xl font-bold text-ink mb-4 flex items-start gap-3">
        <HelpCircle className="text-primary shrink-0 mt-1" size={20} />
        {question}
      </h3>
      <div className="text-ink/80 font-medium leading-relaxed pl-8 space-y-4">
        {answer}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="flex flex-col bg-bg-light">
      <section className="bg-ink text-bg-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-[20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-sandstone/90 font-medium leading-relaxed">
              Common questions from Hedland businesses about booking, pricing, compliance and workplace equipment safety.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10 border-b-2 border-primary pb-4 inline-block">Do we actually need Test &amp; Tag?</h2>

            <FAQItem
              question="Does our workplace actually need Test & Tag?"
              answer={
                <>
                  <p>Australian workplace health and safety laws require employers to ensure electrical equipment used in the workplace is safe. For most workplaces, Test & Tag is the most straightforward way to meet that duty.</p>
                  <p>There are three practical reasons many workplaces do it:</p>
                  <ul className="list-none space-y-3">
                    <li><strong>Safety</strong> — Faulty electrical equipment can cause fires or electric shock. Regular testing catches issues you can't see from the outside, like worn internal wiring or a loose earth connection.</li>
                    <li><strong>Clear records</strong> — A digital test record shows what was tested, when, and what needs attention. That makes ongoing workplace compliance easier to manage and easier to show if someone ever asks.</li>
                    <li><strong>Avoidable incidents</strong> — Most workplace electrical incidents are preventable. Regular testing is one of the simplest ways to reduce the risk of something going wrong in the first place.</li>
                  </ul>
                  <p>Most workplaces don't do it because inspectors are coming — they do it because it means equipment stays safer and records stay clear. The chance of a serious incident is small, but the cost of one is large.</p>
                </>
              }
            />

            <FAQItem
              question="No one checks us regularly. Why should we still do it?"
              answer={
                <>
                  <p>Because the real issue isn't routine inspection. It's workplace safety, clear records, and being able to show what's been done if something ever goes wrong.</p>
                  <p>Regular testing helps catch faulty equipment early, reduces the risk of electric shock or equipment-related incidents, and keeps a clear record of what was tested and when.</p>
                  <ul className="list-none space-y-3">
                    <li><strong>Landlords and head contractors often require it.</strong> Many commercial leases and larger sites ask for current Test & Tag records before letting you on site or renewing a lease.</li>
                    <li><strong>Insurers may ask.</strong> After an electrical incident, insurers sometimes ask whether regular safety checks were in place. Records help that conversation.</li>
                  </ul>
                  <p>Test & Tag isn't about being caught. It's about having something to show the day something goes wrong — and reducing the chance it goes wrong in the first place.</p>
                </>
              }
            />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10 border-b-2 border-primary pb-4 inline-block">Pricing & Services</h2>
            
            <FAQItem 
              question="What's included in the Base Package?"
              answer={<p>The Base Package is $160 + GST and includes your first 15 standard items, plus onsite visit, testing and tagging, digital compliance report and reminder service. It keeps standard jobs simple, clear and easy to budget.</p>}
            />
            
            <FAQItem 
              question="What counts as a standard item?"
              answer={<p>Standard pricing applies to standard 240V plug-in equipment: extension leads, power boards, chargers, portable appliances and power tools. If you're unsure whether an item is standard or specialised, send us a photo or description before booking.</p>}
            />
            
            <FAQItem 
              question="What items are charged at the specialised rate?"
              answer={<p>Specialised items are $13.00 each + GST and include 3-phase equipment testing, portable RCD testing, microwave leakage testing, and fixed RCD / safety switch testing. Fixed RCD / safety switch testing is subject to safe access and switchboard isolation being available on site, and may require scheduled downtime.</p>}
            />
            
            <FAQItem 
              question="Do you charge hourly rates?"
              answer={<p>For standard jobs, no. We use clear package pricing so you know what to expect before we arrive. For remote locations outside Hedland, special access requirements such as inductions or permits, or extended waiting times, any extra charges are confirmed before booking.</p>}
            />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10 border-b-2 border-primary pb-4 inline-block">Compliance & Reporting</h2>
            
            <FAQItem 
              question="Are your technicians qualified to carry out Test & Tag?"
              answer={<p>Yes. Testing is carried out by a trained competent person using calibrated digital PAT equipment, in accordance with relevant WA workplace requirements.</p>}
            />
            
            <FAQItem 
              question="Why are digital reports important?"
              answer={<p>Proper Test & Tag isn't just about putting a label on a piece of equipment. Audit-ready digital reports help you keep clear records, track due dates and stay compliant. Good reporting makes it easier to show what equipment was tested, when it was tested, what requires attention, and what's due next.</p>}
            />
            
            <FAQItem 
              question="What happens if equipment fails testing?"
              answer={<p>If an item doesn't pass, we clearly identify the item, record the result in your report, and apply an appropriate Out of Service / Danger tag where required. This helps prevent faulty equipment from being accidentally returned to use.</p>}
            />
            
            <FAQItem 
              question="Are your tags suitable for Pilbara conditions?"
              answer={<p>Yes. We use heavy-duty, UV-resistant, industrial-grade tags suited to harsh Pilbara workplace and site conditions.</p>}
            />
            
            <FAQItem 
              question="Are you insured?"
              answer={<p>Yes. Red Earth Compliance holds QBE $20M Public & Products Liability Insurance.</p>}
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-10 border-b-2 border-primary pb-4 inline-block">Technical Questions</h2>
            
            <FAQItem 
              question="What is testing and tagging?"
              answer={<p>Testing and tagging is the inspection and electrical safety testing of workplace equipment that is already in service, has been repaired, or is being returned to service. It involves inspecting equipment, testing electrical safety, identifying faults, and keeping clear records of the results. All testing is carried out in accordance with AS/NZS 3760.</p>}
            />
            
            <FAQItem 
              question="What's the difference between Class I and Class II equipment?"
              answer={<p>Class I equipment relies on an earth connection for safety and is commonly fitted with a 3-pin plug. Class II equipment has double insulation and does not rely on an earth connection in the same way — it's commonly identified by the double-square symbol.</p>}
            />
            
            <FAQItem 
              question="How often should equipment be retested?"
              answer={
                <>
                  <p>Retest intervals depend on the environment and level of risk. As a general guide:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Construction sites: every 3 months</li>
                    <li>Workshops: every 6 months</li>
                    <li>Kitchens, tea rooms and wet areas: every 12 months</li>
                    <li>Low-risk office environments: every 5 years</li>
                  </ul>
                  <p className="mt-2">Actual intervals can vary depending on site rules, risk level, and how the equipment is used.</p>
                </>
              }
            />
            
            <FAQItem 
              question="Do repaired or serviced items need retesting?"
              answer={<p>Yes. If repair or servicing could have affected the electrical safety of the equipment, it should be inspected and tested before being returned to service. The same applies to second-hand equipment before it is put into use.</p>}
            />
            
            <FAQItem 
              question="What are the tag colours on construction and demolition sites?"
              answer={
                <>
                  <p>Tag colour systems can vary depending on site rules and contractor requirements. Where colour coding is used, a commonly recognised sequence is:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong className="text-[#D32F2F]">Red</strong> — December, January, February</li>
                    <li><strong className="text-[#388E3C]">Green</strong> — March, April, May</li>
                    <li><strong className="text-[#1976D2]">Blue</strong> — June, July, August</li>
                    <li><strong className="text-[#FBC02D]">Yellow</strong> — September, October, November</li>
                  </ul>
                  <p className="mt-2">Tags should also clearly show the name of the person or company who performed the test and the test or re-test date.</p>
                </>
              }
            />
            
            <FAQItem 
              question="Do you test outside normal business hours?"
              answer={<p>Where possible, yes. Standard bookings are arranged Monday to Friday, 7:30am – 3:00pm. After-hours or weekend site visits can be arranged by request at the time of booking. Availability and any additional charges are confirmed upfront.</p>}
            />
          </div>
          
        </div>
      </section>
      
      {/* Footer CTA */}
       <section className="bg-sandstone/30 py-16 border-y border-sandstone">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <h3 className="text-2xl font-bold text-ink">Still have a question?</h3>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="tel:0458722965" className="bg-primary hover:bg-[#E04F00] text-white transition-all duration-300 px-8 py-4 rounded font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                <Phone size={18} /> Call or SMS 0458 722 965
              </a>
              <a href={mailtoLink} className="bg-white border text-ink border-sandstone hover:border-ink transition-all duration-300 px-8 py-4 rounded font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                <Mail size={18} /> Book by Email
              </a>
           </div>
         </div>
      </section>
    </div>
  );
}
