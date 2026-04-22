/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const mailtoLink = "mailto:info@redearthcompliance.com.au?subject=Test%20%26%20Tag%20Booking%20Request&body=Hi%20Red%20Earth%20Compliance%2C%0A%0AI%27d%20like%20to%20book%20a%20Test%20%26%20Tag%20visit.%20Here%20are%20my%20details%3A%0A%0AContact%20name%3A%20%0ABusiness%20name%3A%20%0AMobile%3A%20%0AEmail%3A%20%0ASite%20location%3A%20%0APreferred%20date%20and%20time%3A%20%0AWhat%20needs%20testing%3A%20%0AEstimated%20item%20count%3A%20%0A%0AAny%20other%20notes%3A%20%0A%0AThanks.";

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Navigation */}
      <nav className="bg-bg-light/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <img 
                  src="https://i.imgur.com/sj1s0BK.png" 
                  alt="Red Earth Compliance Logo" 
                  className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-200" 
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg tracking-tight uppercase leading-tight text-ink">Red Earth</span>
                  <span className="font-semibold text-xs tracking-widest uppercase text-ink/70">Compliance</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm tracking-wide font-medium transition-colors hover:text-primary ${
                      pathname === link.path ? 'text-primary' : 'text-ink/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a href="tel:0458722965" className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                <Phone size={18} />
                <span>0458 722 965</span>
              </a>
              <a
                href={mailtoLink}
                className="bg-primary text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide uppercase hover:bg-[#E04F00] transition-colors shadow-lg shadow-primary/20"
              >
                Request Booking
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-4">
              <a href="tel:0458722965" className="text-primary hover:text-primary/80 transition-colors">
                <Phone size={20} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-ink hover:text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-sandstone bg-bg-light">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-4 text-base font-medium border-b border-sandstone tracking-wide ${
                    pathname === link.path ? 'text-primary border-primary' : 'text-ink hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3 px-3">
                <a
                  href={mailtoLink}
                  className="bg-primary w-full flex justify-center text-white px-5 py-3 rounded text-sm font-bold uppercase tracking-wide"
                >
                  Request Booking
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink text-sandstone pt-16 pb-8 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight uppercase leading-tight text-white">Red Earth</span>
                  <span className="font-semibold text-xs tracking-widest uppercase text-white/50">Compliance</span>
                </div>
              </Link>
              <p className="text-sandstone/80 font-medium max-w-sm leading-relaxed">
                Test & Tag service for Hedland workplaces and job sites.
              </p>
              <div className="flex gap-4 pt-2">
                <span className="px-3 py-1 bg-white/5 font-mono text-xs text-white/60 rounded">AS/NZS 3760</span>
                <span className="px-3 py-1 bg-white/5 font-mono text-xs text-white/60 rounded">QBE $20M Insured</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Contact</h3>
              <a href="tel:0458722965" className="flex items-center gap-3 text-sandstone/80 hover:text-primary transition-colors font-medium">
                <Phone size={18} className="text-primary shrink-0" />
                <span>0458 722 965</span>
              </a>
              <a href={mailtoLink} className="flex items-center gap-3 text-sandstone/80 hover:text-primary transition-colors font-medium">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-[13px] break-all leading-tight">info@redearthcompliance.com.au</span>
              </a>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Service Info</h3>
              <ul className="space-y-3 text-sandstone/80 font-medium">
                <li>Port Hedland</li>
                <li>South Hedland</li>
                <li>Wedgefield</li>
                <li className="pt-2 text-white/50 text-sm">On-site Mon–Fri, 7:30am – 3:00pm. Text or email anytime.</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-sandstone/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sandstone/60 font-medium">
            <p>&copy; {new Date().getFullYear()} Red Earth Compliance.</p>
            <p>ABN 82 092 832 420</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}