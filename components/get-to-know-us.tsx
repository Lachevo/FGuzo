"use client"

import { useRef } from "react"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function GetToKnowUs() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  // Removed GSAP scroll-triggered animations to avoid conflicts with Framer Motion
  // Framer Motion handles whileInView animations reliably across desktop and mobile.

  const benefits = [
    "95% and above success rates",
    "Trusted Expertise",
    "Proven Results",
    "Comprehensive, End-to-End Support",
  ]

  return (
    <section className="py-20 bg-white relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="/images/image3.jpg"
                  alt="Immigration consultants helping a client"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Decorative dot */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-300 rounded-full opacity-50 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase mb-3">Get to know us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Partner for
              <br />
                Visa Solutions
            </h2>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed">
              When you work with us, you're not just submitting an application; you're taking a step toward a new life abroad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
