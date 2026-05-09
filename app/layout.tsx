import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'SmileCraft Dental | Premium Dental Care in Kolkata',
  description: 'Advanced Dental Care With A Gentle Touch by Dr. Rahul Chatterjee in Kolkata, India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${lora.variable}`}>
      <body className="font-sans text-slate-900 antialiased selection:bg-brand-200 selection:text-brand-900 bg-brand-50 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
