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
  description: 'FastGuzo makes international travel simple and reliable — flights, visas, and end-to-end support for students and travelers. Personalized service, competitive pricing, and local expertise.',
  generator: 'FastGuzo',
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
