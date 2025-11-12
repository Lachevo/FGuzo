"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Phone, Mail, ArrowRight, PhoneCall } from "lucide-react"

export default function CallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email subject and body
    const subject = encodeURIComponent("Contact Request from FastGuzo Website")
    const body = encodeURIComponent(
      `Hello FastGuzo Team,\n\nI would like to get in touch with you.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Please contact me at your earliest convenience.\n\nThank you!`
    )
    
    // Open email client
    window.location.href = `mailto:fastguzoglobalservice@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" })
    }, 500)
  }

  const features = [
    {
      image: "/images/image6.jpg",
      title: "Expert Guidance",
    },
    {
      image: "/images/globalReach.jpg",
      title: "Global Reach",
    },
    {
      image: "/images/trust.jpg",
      title: "Trusted Service",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here for you",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
  ]

  return (
  <section id="contact" className="py-24 pb-32 md:pb-24 pr-4 md:pr-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Features Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {feature.image ? (
                  <>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm md:text-base">{feature.title}</h3>
                    </div>
                  </>
                ) : (
                  <div className={`w-full h-full ${feature.bgColor} flex flex-col items-center justify-center p-6 text-white`}>
                    {feature.icon && (
                      <feature.icon className="w-12 h-12 mb-4 opacity-90" />
                    )}
                    <h3 className="font-bold text-lg md:text-xl text-center mb-2">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-sm text-white/90 text-center">{feature.description}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote and CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 italic mb-8 leading-relaxed"
          >
            "With FastGuzo, every immigration plan is handled with expertise and care."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to start your immigration application?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById("contact-form")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact our team
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Contact Form Section */}
  <div id="contact-form" className="max-w-full md:max-w-5xl mx-0 md:mx-auto">
    <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-12 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request a Call Back</h2>
                <p className="text-lg text-slate-600 mb-8">Feel free to let us call you back. We're here to help.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-semibold text-slate-900">0928929394</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Alternate</p>
                      <p className="font-semibold text-slate-900">0952434344</p>
                    </div>
                  </div>

                  <a
                    href="mailto:Fastguzoglobalservice@gmail.com"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Fastguzoglobalservice@gmail.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg shadow-md"
                >
                  SEND NOW
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
