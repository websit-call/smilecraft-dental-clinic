'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    'Painless Procedures using advanced micro-dentistry.',
    'Modern Equipment including digital X-rays and intraoral cameras.',
    'Strict Sterilization protocols for absolute safety.',
    'Experienced Specialists for every branch of dentistry.',
    'Emergency Support available for immediate relief.',
    'Affordable EMI Options for major treatments.'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Why Choose SmileCraft
            </h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6 text-balance">
              We Don&apos;t Just Treat Teeth, We Care For People.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Choosing the right dentist is crucial for your long-term oral health. At SmileCraft Dental, we break the stereotype of scary dental visits. Our clinic is designed to make you feel relaxed, informed, and completely safe.
            </p>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <a 
              href="#appointment"
              className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-800 transition-all shadow-lg"
            >
              Start Your Smile Journey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image src="https://picsum.photos/seed/dental-tech/500/600" alt="Modern dental equipment" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                  <Image src="https://picsum.photos/seed/happy-patient/500/500" alt="Happy dental patient" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                  <Image src="https://picsum.photos/seed/dentist-smiling/500/500" alt="Dentist smiling" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image src="https://picsum.photos/seed/clean-clinic/500/600" alt="Clean clinic room" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-full shadow-2xl border border-white/20 hidden md:block">
              <div className="w-24 h-24 rounded-full border-4 border-brand-100 flex items-center justify-center flex-col text-brand-600">
                <span className="text-2xl font-bold font-heading">98%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">Patient<br/>Satisfaction</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
