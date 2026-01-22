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
  metadataBase: new URL('https://fastguzo.com'),
  title: {
    default: 'FastGuzo | Trusted Immigration Consultancy',
    template: '%s | FastGuzo',
  },
  description: 'FastGuzo provides expert immigration consultancy — visa applications, documentation guidance, and end-to-end support for students, families, and skilled migrants.',
  keywords: ['Immigration', 'Visa Consultancy', 'Study Abroad', 'Work Visa', 'FastGuzo', 'Ethiopia Immigration', 'Travel Agency', 'Visa Application'],
  generator: 'FastGuzo',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'FastGuzo' }],
  creator: 'FastGuzo',
  publisher: 'FastGuzo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'FastGuzo',
    description: 'Trusted immigration consultancy — visas, applications, and end-to-end immigration support.',
    url: 'https://fastguzo.com',
    siteName: 'FastGuzo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/primary-logo-colored.png',
        width: 1200,
        height: 630,
        alt: 'FastGuzo Primary Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastGuzo',
    description: 'Trusted immigration consultancy — visas, applications, and end-to-end immigration support.',
    images: ['/images/primary-logo-colored.png'],
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
