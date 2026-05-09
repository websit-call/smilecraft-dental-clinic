import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-brand-600 transition-colors">
                SC
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-white leading-tight">SmileCraft</h1>
                <p className="text-[10px] uppercase tracking-wider text-brand-400 font-semibold">Dental Clinic</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium dental care in Kolkata. Advanced treatments, gentle approach, and stunning results. Experience dentistry like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Dr. Rahul', 'Our Treatments', 'Patient Reviews', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Treatments</h4>
            <ul className="space-y-3">
              {['Root Canal Treatment', 'Dental Implants', 'Teeth Whitening', 'Invisible Aligners', 'Smile Designing'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Park Street Area, Kolkata,<br />West Bengal 700016, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="tel:+917076583424" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                  +91 70765 83424
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-slate-400 text-sm">Mon-Sat: 10AM-2PM, 5PM-9PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SmileCraft Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
