import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: '$CEO — Huangonsol Token',
  description: "Welcome to $CEO. The Infinity CEO you've always wanted",

  icons: {
    icon: [
      {
        url: '/ceo/CEO.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ceo/CEO.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ceo/CEO.webp',
        type: 'image/jpeg',
      },
    ],
    apple: '/ceo/CEO.webp',
  },
};

export const viewport: Viewport = {
  themeColor: '#1c1c1e',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
