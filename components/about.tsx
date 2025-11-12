"use client"

import { Globe, Airplay, Users, Award, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Title animation with more movement
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        })
      }

      // Cards animation with more movement
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.9,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-20 bg-white relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div ref={titleRef} className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-600">
            Welcome to FastGuzo, your trusted immigration consultancy. We're dedicated to guiding applicants through
            visa applications, document preparation, and settlement planning. Whether you're studying, working,
            reuniting with family, or seeking permanent residency, FastGuzo helps you navigate the process with
            confidence and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el
            }}
            className="p-6 bg-slate-50 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Our Mission</h3>
            </div>
            <p className="text-slate-600">
              To make immigration accessible and reliable for everyone. At FastGuzo, our mission is to connect people
              with opportunities abroad by offering professional, transparent, and personalized immigration services —
              helping you prepare applications and settle confidently.
            </p>
          </div>

          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el
            }}
            className="p-6 bg-slate-50 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Airplay className="w-8 h-8 text-indigo-500" />
              <h3 className="text-lg font-semibold">Our Vision</h3>
            </div>
            <p className="text-slate-600">
              To become Africa's most trusted and innovative immigration consultancy, inspiring confidence in applicants
              and families seeking a better future abroad. We envision a world where every application is supported by
              expertise and care.
            </p>
          </div>

          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el
            }}
            className="p-6 bg-slate-50 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-amber-500" />
              <h3 className="text-lg font-semibold">Core Values</h3>
            </div>
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>
                  <strong>Customer First:</strong> Your happiness is our priority.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>
                  <strong>Integrity:</strong> We build trust through honesty and transparency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>
                  <strong>Innovation:</strong> We use technology to make travel faster and easier.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Choose FastGuzo</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Seamless application guidance and case management</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Personalized settlement planning and post-arrival support</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>24/7 customer support and assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Expert advice from experienced immigration consultants</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="overflow-hidden rounded-lg relative h-32">
                <Image src="/images/visaInterview.jpg" alt="Visa interview" fill className="object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg relative h-32">
                <Image src="/images/office.jpg" alt="Consultation meeting" fill className="object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg relative h-32">
                <Image src="/images/check.jpg" alt="Document review" fill className="object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg flex items-center justify-center bg-blue-100 text-sm text-slate-700">
                <span className="px-3">24/7 Support</span>
              </div>
            </div>

            <blockquote className="italic text-slate-800">“With FastGuzo, every journey is more than a trip — it’s an experience.”</blockquote>
            <div className="mt-6">
              <p className="font-semibold">Ready to start your next journey?</p>
              <a href="#" className="inline-block mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg">Contact our team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
