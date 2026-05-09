'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Heart, ShieldPlus, Stethoscope } from 'lucide-react';

export default function AboutDoctor() {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, title: 'BDS, MDS Qualified' },
    { icon: <Stethoscope className="w-5 h-5" />, title: '10+ Years Experience' },
    { icon: <Heart className="w-5 h-5" />, title: 'Patient-First Approach' },
    { icon: <ShieldPlus className="w-5 h-5" />, title: 'Modern Painless Methods' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl max-w-md mx-auto">
              <Image 
                src="https://picsum.photos/seed/indian-doctor-2/600/800"
                alt="Dr. Rahul Chatterjee"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background block */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-100 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Meet Your Dentist
            </h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">
              Dr. Rahul Chatterjee
            </h3>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                With over a decade of clinical excellence, Dr. Rahul Chatterjee is a highly reputed dental surgeon known for his precise, painless, and aesthetic approach to dentistry.
              </p>
              <p>
                Specializing in Cosmetic Dentistry and modern Root Canal Treatments, Dr. Chatterjee has restored thousands of smiles across Kolkata. His clinic, SmileCraft Dental, was built on a simple philosophy: <strong>dental care doesn&apos;t have to be intimidating.</strong>
              </p>
              <p>
                Through strict sterilization protocols and state-of-the-art equipment, every patient receives a hygienic, highly personalized, and comfortable treatment experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">{item.title}</span>
                </div>
              ))}
            </div>

            <Image 
              src="https://picsum.photos/seed/signature/200/80" 
              alt="Dr. Rahul Chatterjee Signature" 
              width={160} 
              height={60}
              className="opacity-60 grayscale mix-blend-multiply" 
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
