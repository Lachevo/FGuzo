"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const floatRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Dynamically import GSAP and ScrollTrigger to avoid adding them to the initial client bundle.
    let ctx: any = null
    let gsap: any = null

    ;(async () => {
      const gsapModule = await import("gsap")
      const scrollTrigger = await import("gsap/dist/ScrollTrigger")
      gsap = gsapModule.default ?? gsapModule
      gsap.registerPlugin(scrollTrigger.ScrollTrigger)

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".testimonial-card")
        // animate vertical entrance but do not touch opacity — framer-motion handles opacity
        gsap.from(cards, {
          y: 30,
          // keep opacity alone to framer-motion so GSAP doesn't leave cards invisible if trigger misses
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        })

        if (floatRef.current) {
          gsap.to(floatRef.current, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          })
        }
      }, containerRef)
    })()

    return () => {
      try {
        if (ctx) ctx.revert()
      } catch (e) {
        // ignore revert errors
      }
    }
  }, [])

  const testimonials = [
    {
      text: "FastGuzo helped me through the entire visa process — fast, clear, and professional. I couldn't be happier.",
      author: "Kebash Tadesse",
      role: "client",
      image: "/images/avatar1.jpg",
      rating: 5,
    },
    {
      text: "Where trustworthiness meets quality of service. FastGuzo made our relocation effortless.",
      author: "Meron Alemayehu",
      role: "Business Owner",
      image: "/images/avatar2.jpg",
      rating: 5,
    },
    {
      text: "Excellent support and friendly staff — FastGuzo goes above and beyond.",
      author: "Selamawit Bekele",
      role: "Student",
      image: "/images/avatar3.jpg",
      rating: 5,
    },
    {
      text: "The team at FastGuzo made my immigration application process seamless. Their expertise and attention to detail are unmatched.",
      author: "Yonas Getachew",
      role: "Graduate Student",
      image: "/images/avatar1.jpg",
      rating: 5,
    },
    {
      text: "I was impressed by how quickly FastGuzo processed my visa application. Professional service from start to finish.",
      author: "Hanna Tesfaye",
      role: "Applicant",
      image: "/images/avatar2.jpg",
      rating: 5,
    },
    {
      text: "FastGuzo's customer service is outstanding. They answered all my questions and guided me through every step.",
      author: "Daniel Mekonnen",
      role: "Student",
      image: "/images/avatar3.jpg",
      rating: 5,
    },
    {
      text: "Thanks to FastGuzo, I got my visa approved on time. Their knowledge and support made all the difference.",
      author: "Marta Haile",
      role: "Professional",
      image: "/images/avatar1.jpg",
      rating: 5,
    },
  ]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full"></div>
      </div>
  <div ref={floatRef} className="absolute -right-8 top-8 w-40 h-40 bg-blue-600 rounded-full opacity-20 pointer-events-none" />

  <div ref={containerRef} className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-300 font-semibold text-sm uppercase mb-3">Customer Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Customers Say About FastGuzo
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[400px]">
          <div className="flex gap-8 items-center justify-center relative px-12 md:px-16">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all cursor-pointer border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="text-white" size={28} strokeWidth={2.5} />
            </button>

            {/* Testimonial Card */}
            <motion.div
              className="testimonial-card bg-white text-slate-900 p-8 rounded-xl shadow-2xl max-w-md mx-auto transition-all duration-300 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src={testimonials[current].image}
                    alt={`${testimonials[current].author} avatar`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonials[current].author}</p>
                  <p className="text-sm text-slate-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all cursor-pointer border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="text-white" size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current ? "bg-white w-8" : "bg-white bg-opacity-40 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
