"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PartnersSection from "@/components/partners-section"
import Affiliations from "@/components/affiliations"
import GetToKnowUs from "@/components/get-to-know-us"
import CompanyOverview from "@/components/company-overview"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Certification from "@/components/certification"
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
    <Affiliations />
      <GetToKnowUs />
    <Services />
      <CompanyOverview />
  <Certification />
      <Testimonials />
  <Articles />
      <CallbackSection />
      <Footer />
    </main>
  )
}
