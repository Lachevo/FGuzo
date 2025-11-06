"use client"

import { useEffect, useState } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: "📚",
      title: "Visa & Application Assistance",
      description:
        "Our visa experts guide you through the paperwork, ensuring your application is flawless and ready for approval.",
    },
    {
      icon: "💰",
      title: "Scholarship & Financial Aid",
      description:
        "We help you find scholarships and financial aid opportunities that make your dream education affordable.",
    },
    {
      icon: "✈️",
      title: "Flight Bookings & Coordination",
      description:
        "We make sure your flights are booked quickly and at competitive rates, helping you save time and money.",
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase mb-3">Get to know us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Trusted Partner for
            <br />
            Education and Visa Solutions
          </h2>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-2">
            <p className="text-3xl font-bold text-blue-600">98%</p>
            <p className="text-slate-600">and above success rates</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-blue-600">✓</p>
            <p className="text-slate-600">Trusted Expertise</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-blue-600">✓</p>
            <p className="text-slate-600">Proven Results</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-blue-600">✓</p>
            <p className="text-slate-600">Comprehensive, End-to-End Support</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <p className="text-4xl mb-4">{service.icon}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
