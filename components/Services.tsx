'use client';

import { motion } from 'motion/react';
import { Sparkles, Activity, Layers, Smile, Aperture, Syringe, Baby, Droplets, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Root Canal Treatment',
      description: 'Painless microscopic root canal therapy to save infected teeth quickly and efficiently.',
      icon: <Activity className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent, natural-looking tooth replacements that restore your smile and chewing ability.',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-brand-50 text-brand-600',
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional laser whitening to brighten your teeth by several shades in just one sitting.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Braces & Aligners',
      description: 'Traditional braces and invisible aligners to straighten crooked or misaligned teeth.',
      icon: <Aperture className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Smile Designing',
      description: 'Custom ceramic veneers and crowns for a flawless, Hollywood-style smile makeover.',
      icon: <Smile className="w-6 h-6" />,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Tooth Extraction',
      description: 'Safe and comfortable removal of badly decayed teeth or impacted wisdom teeth.',
      icon: <Syringe className="w-6 h-6" />,
      color: 'bg-slate-100 text-slate-600',
    },
    {
      title: 'Kids Dentistry',
      description: 'Gentle, friendly dental care to build healthy oral habits and protect little smiles.',
      icon: <Baby className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Dental Cleaning',
      description: 'Thorough ultrasonic scaling and polishing to remove plaque and prevent gum disease.',
      icon: <Droplets className="w-6 h-6" />,
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Treatments
          </h2>
          <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">
            Comprehensive Dental Solutions for Your Family
          </h3>
          <p className="text-lg text-slate-600">
            From routine checkups to full mouth rehabilitations, we offer state-of-the-art procedures in a relaxing environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#appointment" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
