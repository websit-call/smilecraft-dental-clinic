'use client';

import { motion } from 'motion/react';
import { Users, Star, Award, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Happy Patients', value: '12K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Google Reviews', value: '500+', icon: <Star className="w-6 h-6" /> },
    { label: 'Average Rating', value: '4.9/5', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section className="py-16 bg-brand-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-brand-100 mb-4 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-brand-100 font-medium text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
