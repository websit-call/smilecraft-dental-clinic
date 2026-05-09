'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is root canal treatment really painful?',
      answer: 'Not at all! With modern rotary endodontics and effective local anesthesia, root canal treatments at SmileCraft are practically painless and usually completed in a single visit.',
    },
    {
      question: 'How long do dental implants last?',
      answer: 'With proper oral hygiene and regular check-ups, dental implants can last a lifetime. They are made of biocompatible titanium and function exactly like natural teeth.',
    },
    {
      question: 'Do you offer EMI options for treatments?',
      answer: 'Yes, we understand advanced dental procedures can be an investment. We offer flexible No-Cost EMI options on credit cards and financing partners for treatments like Implants and Braces.',
    },
    {
      question: 'Are invisible aligners better than braces?',
      answer: 'Aligners are virtually invisible, removable, and comfortable, making them great for adults and teens. However, complex cases may still require traditional braces. Dr. Chatterjee can help you decide during consultation.',
    },
    {
      question: 'How often should I get my teeth cleaned?',
      answer: 'We recommend professional scaling and polishing every 6 months to prevent plaque buildup, gums disease, and to catch any cavities early.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-brand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Common Queries
          </h2>
          <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
