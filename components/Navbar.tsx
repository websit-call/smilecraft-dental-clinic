'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Dr. Rahul', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-brand-600 transition-colors">
              SC
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-slate-900 leading-tight">SmileCraft</h1>
              <p className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917076583424"
              className="flex items-center gap-2 text-slate-700 font-medium text-sm hover:text-brand-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              <span>+91 70765 83424</span>
            </a>
            <a
              href="#appointment"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-700 transition-all shadow-sm hover:shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-brand-600 p-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          <a
            href="tel:+917076583424"
            className="flex items-center justify-center gap-2 text-slate-700 font-medium py-3 border border-slate-200 rounded-xl"
          >
            <Phone className="w-4 h-4 text-brand-500" />
            <span>+91 70765 83424</span>
          </a>
          <a
            href="#appointment"
            className="bg-brand-600 text-white text-center py-3 rounded-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
