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
          className="bg-gradient-to-r from-white/80 to-blue-50 border border-slate-100 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-start gap-6"
        >
          <div className="flex-shrink-0 bg-blue-600/5 rounded-lg p-3">
            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-7 h-7 text-blue-600" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900">Official Certification — Canada Immigration Office</h3>
            <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
              We are proud to announce that our travel agency has been officially certified by the Canada Immigration
              Office, recognizing our dedication to providing trusted and professional immigration services. This
              certification allows us to assist clients with complete confidence as they plan their journeys to Canada—whether
              for travel, study, work, or permanent settlement.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
              Our team of experienced consultants is committed to guiding you through every step of the immigration process,
              from visa applications and document preparation to travel arrangements and post-arrival support. With this
              recognition, we continue to uphold the highest standards of integrity, transparency, and care, ensuring that
              your Canadian dream begins with a trusted and certified partner.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#callback"
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
