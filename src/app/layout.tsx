import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Zidane — Full Stack Developer',
    default: 'Zidane — Full Stack Developer',
  },
  description:
    'Full Stack Developer specialising in .NET, React, Next.js, and DevOps. Building scalable, modern web applications with clean, performant code.',
  keywords: ['Full Stack Developer', '.NET', 'React', 'Next.js', 'DevOps', 'TypeScript', 'Portfolio'],
  openGraph: {
    title: 'Zidane — Full Stack Developer',
    description: 'Full Stack Developer specialising in .NET, React, Next.js, and DevOps.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
