"use client"

import { ShieldCheck, Users, Globe, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function Affiliations() {
  const items = [
    {
      title: "Canada Immigration Office",
      desc: "Official certification — we are authorized to assist clients with Canadian immigration services.",
      icon: ShieldCheck,
      href: "#certification",
    },
    {
      title: "Visa Processing Offices",
      desc: "Close collaboration with trusted visa processing offices to speed up your application.",
      icon: Globe,
      href: "#callback",
    },
    {
      title: "Education & Student Services",
      desc: "Dedicated student advisors and partner institutions to support study visas and placements.",
      icon: BookOpen,
      href: "#get-to-know-us",
    },
    {
      title: "Immigration Advisors Network",
      desc: "A vetted network of professional immigration advisors and consultants.",
      icon: Users,
      href: "#callback",
    },
  ]

  return (
    <section id="affiliations" className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">Affiliations & Recognitions</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Working closely with immigration offices and trusted partners</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <motion.a
                key={idx}
                href={it.href}
                className="group block bg-white p-5 rounded-2xl shadow hover:shadow-lg border border-slate-100 transition"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{it.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
                    <span className="mt-3 inline-block text-sm text-blue-600 group-hover:underline">Learn more →</span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
