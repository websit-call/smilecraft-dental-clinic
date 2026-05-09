'use client';

import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Accepting New Patients in Kolkata
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
              Advanced Dental Care With A <span className="text-brand-600">Gentle Touch</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Experience painless, world-class dentistry at SmileCraft. 
              Led by Dr. Rahul Chatterjee, we combine modern technology with 
              compassionate care to give you the perfect smile you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#appointment" 
                className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/917076583424" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-slate-900 text-lg">4.9</span>
                </div>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Google Rating</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-brand-600">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-slate-900 text-lg">500+</span>
                </div>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Happy Patients</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-accent-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-slate-900 text-lg">10+ Yrs</span>
                </div>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto ring-1 ring-black/5">
              <Image 
                src="https://picsum.photos/seed/dental-hero/800/1000"
                alt="Modern Dental Clinic"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-heading">100% Painless</h3>
                    <p className="text-sm text-slate-600">Advanced microscopic dentistry</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
