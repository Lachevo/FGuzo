"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, FileCheck, Plane, GraduationCap, Sparkles, CheckCircle2, Hotel, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// AnimatedNumber: small client-side count-up that starts when scrolled into view
function AnimatedNumber({
  target,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  target: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (started) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
            const startTime = performance.now()
            const from = 0
            const to = target

            const easeOutQuad = (t: number) => t * (2 - t)

            function tick(now: number) {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = easeOutQuad(progress)
              const current = Math.round(from + (to - from) * eased)
              setValue(current)
              if (progress < 1) {
                requestAnimationFrame(tick)
              } else {
                setValue(to)
                obs.disconnect()
              }
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration, started])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function CompanyOverview() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const floatPlaneRef = useRef<HTMLDivElement | null>(null)
  const floatBadgeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card")
      // make the card entrance move more when scrolled
      gsap.from(cards, {
        y: 120,
        opacity: 0,
        scale: 0.85,
        stagger: 0.15,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      })
      // plane parallax
      if (floatPlaneRef.current) {
        // increase plane parallax and scrub for a stronger scroll effect
        gsap.to(floatPlaneRef.current, {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        })
      }

      // badge subtle bob
      if (floatBadgeRef.current) {
        gsap.to(floatBadgeRef.current, {
          y: -24,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 3,
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: "Visa Assistance",
      stat: "95% success",
      icon: FileCheck,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Visa & Documentation",
      stat: "Comprehensive",
      icon: BookOpen,
    },
    {
      title: "Student Support",
      stat: "Pre-departure help",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating plane and badge */}
      <div ref={floatPlaneRef} className="absolute right-10 top-10 opacity-90 pointer-events-none z-10">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Plane className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div ref={floatBadgeRef} className="absolute right-10 bottom-10 p-4 bg-white/95 backdrop-blur-sm text-sm text-slate-900 rounded-xl shadow-lg border border-slate-200 pointer-events-none z-10">
        <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="font-semibold">Global Immigration Services</span>
        </div>
      </div>
      <div ref={containerRef} className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase mb-3">Company Overview</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Immigrate Smarter, Settle Faster with FastGuzo
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              FastGuzo combines local expertise and trusted partners to make your immigration process smooth. From visa
              applications and document preparation to pre-departure support and settlement guidance, our dedicated team
              handles the details so you can focus on the next chapter.
            </p>

            {/* Stats with animated count-up */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  <AnimatedNumber className="text-3xl font-bold text-blue-600" target={7} suffix="+" />
                </div>
                <p className="text-slate-600 font-medium">Best Award</p>
                <p className="text-sm text-slate-500">Recognized for excellence</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <AnimatedNumber className="text-3xl font-bold text-blue-600" target={500} suffix="+" />
                </div>
                <p className="text-slate-600 font-medium">Happy Clients</p>
                <p className="text-sm text-slate-500">Trusted by thousands</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image and Services */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Office Image */}
            <div className="mb-8">
              <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                  src="/images/image5.jpg"
                  alt="Immigration consultancy office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Decorative element */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-300 rounded-full opacity-30 pointer-events-none"></div>
              </div>
            </div>

            {/* Services Showcase */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Smart immigration experience for you!</h3>
              {services.map((service, index) => {
                // Use Plane icon if icon is not a valid component
                const IconComponent = typeof service.icon === 'function' ? service.icon : Plane
                const iconColor = service.color || "text-blue-600"
                const iconBg = service.bgColor || "bg-blue-50"
                
                return (
                  <motion.div
                    key={index}
                    className="service-card group bg-white border-l-4 border-blue-600 p-5 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-700 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${iconBg} ${iconColor} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-900 text-base mb-1">{service.title}</p>
                        <p className="text-sm font-medium text-blue-600">{service.stat}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
