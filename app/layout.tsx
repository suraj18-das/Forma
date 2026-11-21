import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import "./globals.css";
import "./forma-redesign.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FORMA — Homes shaped by light',
  description: 'Exceptional residences where architecture, nature and everyday life find a more human harmony.',
  openGraph: {
    title: 'FORMA — Homes shaped by light',
    description: 'Exceptional residences for a brighter tomorrow.',
    type: 'website',
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
