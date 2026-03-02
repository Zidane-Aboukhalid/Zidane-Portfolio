import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s — Zidane Aboukhalid',
    default: 'Zidane Aboukhalid — Full Stack Developer',
  },
  description:
    'Full Stack Developer specialising in .NET, React, Next.js, and DevOps. Building scalable, modern web applications with clean, performant code.',
  keywords: [
    'Full Stack Developer',
    '.NET',
    'React',
    'Next.js',
    'DevOps',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Zidane Aboukhalid — Full Stack Developer',
    description:
      'Full Stack Developer specialising in .NET, React, Next.js, and DevOps.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
