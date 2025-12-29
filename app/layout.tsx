import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import BackToTop from '../components/back-to-top'
import FloatingContact from '../components/floating-contact'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'FastGuzo',
  description: 'FastGuzo is a trusted immigration consultancy — visas, applications, and end-to-end immigration support.',
  generator: 'FastGuzo',
  alternates: {
    canonical: 'https://fastguzo.com/',
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'FastGuzo',
    description: 'Trusted immigration consultancy — visas, applications, and end-to-end immigration support.',
    images: [
      {
        url: 'https://fastguzo.com/images/primary-logo-colored.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'theme-color': '#0f172a',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <BackToTop />
        <FloatingContact />
      </body>
    </html>
  )
}
