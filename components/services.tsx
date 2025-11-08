"use client"

import { motion } from "framer-motion"

export default function Services() {

  const services = [
    {
      key: "student",
      title: "Student Visa",
      description: "End-to-End support to students for making a well-informed career decision of studying abroad.",
    },
    {
      key: "tourist",
      title: "Tourists Visa",
      description: "Seamless assistance for travelers in obtaining a tourist visa for hassle-free international trips.",
    },
    {
      key: "permanent",
      title: "Permanent Residency",
      description: "Guiding individuals through the process of obtaining permanent residency for a secure future abroad.",
    },
    {
      key: "work",
      title: "Work Visa",
      description: "Comprehensive support for professionals seeking international work opportunities through a seamless process.",
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase mb-3">how we help clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Level with great visa serving

            <br />
            policies
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {services.map((service, index) => {
            return (
              <motion.article
                key={service.key}
                className="group p-8 rounded-xl shadow-sm border transition-all duration-300 transform bg-white text-slate-700 border-slate-100 hover:shadow-lg hover:-translate-y-2 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-sm shrink-0`}>
                    {/* simple icon: paper plane */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-current">
                      <path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-white/90">{service.description}</p>
                  </div>
                </div>

                <div className="mt-6 border-t pt-4">
                  <a className="text-blue-600 hover:text-blue-700 group-hover:text-white inline-flex items-center gap-2 text-sm font-medium" href="#">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-current">
                      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
