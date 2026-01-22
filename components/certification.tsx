"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function Certification() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-start gap-6"
        >
          <div className="flex-shrink-0 bg-blue-600/5 rounded-lg p-3">
            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-7 h-7 text-blue-600" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900">RCIC Licensed — Regulated Canadian Immigration Services</h3>

            <div className="mt-4 inline-flex items-start gap-3 bg-blue-50 border border-blue-100 text-blue-800 rounded-lg p-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-slate-900">FastGuzo operates under a Regulated Canadian Immigration Consultant (RCIC) license.</p>
                <p className="mt-1 text-slate-700">All immigration services are provided in compliance with Canadian law and are officially authorized by IRCC through regulation by the College of Immigration and Citizenship Consultants (CICC).</p>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-relaxed text-sm md:text-base">
              Our RCIC-licensed consultants follow strict professional and ethical standards. We assist clients with
              visa applications, document preparation, and settlement planning for study, work, family reunification,
              and permanent residence — always with transparency and a focus on your best outcomes.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium shadow"
              >
                Contact our certified team
              </a>
              <a
                href="mailto:Fastguzoglobalservice@gmail.com"
                className="text-sm text-slate-600 hover:text-slate-900 underline"
              >
                Email us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
