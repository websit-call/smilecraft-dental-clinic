'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook, Globe, Award } from 'lucide-react';

export default function SocialProof() {
  const socialStats = [
    { label: 'Instagram Followers', value: '18K+', icon: <Instagram className="w-6 h-6" />, color: 'text-pink-500' },
    { label: 'Facebook Community', value: '7K+', icon: <Facebook className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Social Reach', value: '2M+', icon: <Globe className="w-6 h-6" />, color: 'text-brand-500' },
    { label: 'Local Accolades', value: 'Featured', icon: <Award className="w-6 h-6" />, color: 'text-amber-500' },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-slate-500 font-medium tracking-wide uppercase text-sm mb-2">
            Join Our Growing Community
          </h2>
          <h3 className="text-3xl font-heading font-bold text-slate-900">
            Trusted by Thousands Online
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold font-heading text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 italic text-sm">
            Recognized by top local healthcare media & publications in Kolkata.
          </p>
        </div>
      </div>
    </section>
  );
}
