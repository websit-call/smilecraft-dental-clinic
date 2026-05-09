'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Priya Sen',
      text: 'Dr. Rahul is extremely patient and polite. I had a painless root canal here. The clinic is very clean and maintains great hygiene. Highly recommended!',
    },
    {
      name: 'Amit Roy',
      text: 'Got my teeth whitening done at SmileCraft. The results are amazing! The staff is friendly and the best part was that there was absolutely no sensitivity.',
    },
    {
      name: 'Sagnik Das',
      text: 'I was very scared of dental treatments but Dr. Chatterjee made me feel at ease. State of the art equipment and zero pain extraction.',
    },
    {
      name: 'Neha Kapoor',
      text: 'One of the best dental clinics in Kolkata. From appointment booking to the actual procedure, everything was smooth. The EMI option helped me a lot for my implants.',
    },
    {
      name: 'Arijit Dutta',
      text: 'Took my 6-year-old daughter for her first checkup. The doctor is excellent with kids. She wasn’t scared at all. Very happy with the experience.',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Patient Stories
          </h2>
          <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">
            Real Experiences From Our Patients
          </h3>
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <span className="font-bold text-slate-900">4.9/5</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span>based on 500+ Google Reviews</span>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl min-w-[300px] md:min-w-[400px] snap-center shrink-0 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-100 opacity-50" />
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold font-heading">
                  {review.name.charAt(0)}
                </div>
                <div className="font-semibold text-slate-900">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
