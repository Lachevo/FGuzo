import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import BackToTop from '../components/back-to-top'
import FloatingContact from '../components/floating-contact'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FastGuzo',
  description: 'FastGuzo is a trusted immigration consultancy — visas, applications, and end-to-end immigration support for students, families, and skilled migrants. Personalized guidance, expert documentation assistance, and local expertise.',
  generator: 'FastGuzo',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Provide multiple larger favicon sizes for crisper/larger display */}
        <link rel="icon" type="image/png" sizes="64x64" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <BackToTop />
        <FloatingContact />
      </body>
    </html>
  )
}
