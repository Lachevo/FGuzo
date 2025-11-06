"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PartnersSection from "@/components/partners-section"
import GetToKnowUs from "@/components/get-to-know-us"
import CompanyOverview from "@/components/company-overview"
import Testimonials from "@/components/testimonials"
import Articles from "@/components/articles"
import About from "@/components/about"
import CallbackSection from "@/components/callback-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      <Header />
      <Hero />
  <About />
      <PartnersSection />
      <GetToKnowUs />
      <CompanyOverview />
      <Testimonials />
  <Articles />
      <CallbackSection />
      <Footer />
    </main>
  )
}
