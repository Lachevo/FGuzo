"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  {
    src: "/images/newFastGuzoImage/IMG_5188.JPEG",
    alt: "FastGuzo Success Story - Happy Clients",
  },
  {
    src: "/images/newFastGuzoImage/photo_2026-05-13_22-01-56.jpg",
    alt: "FastGuzo Success Story - Visa Approved",
  },
  {
    src: "/images/newFastGuzoImage/photo_2026-05-13_22-03-19.jpg",
    alt: "FastGuzo Success Story - Dream Achieved",
  },
  {
    src: "/images/newFastGuzoImage/photo_2026-05-13_22-03-25.jpg",
    alt: "FastGuzo Success Story - Travel Ready",
  },
  {
    src: "/images/newFastGuzoImage/photo_2026-05-13_22-03-30.jpg",
    alt: "FastGuzo Success Story - New Beginnings",
  },
  {
    src: "/images/newFastGuzoImage/photo_2026-05-13_22-03-37.jpg",
    alt: "FastGuzo Success Story - Visa Success",
  },
]

export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let ctx: any = null
    let gsap: any = null

      ; (async () => {
        const gsapModule = await import("gsap")
        const scrollTrigger = await import("gsap/dist/ScrollTrigger")
        gsap = gsapModule.default ?? gsapModule
        gsap.registerPlugin(scrollTrigger.ScrollTrigger)

        ctx = gsap.context(() => {
          const items = gsap.utils.toArray(".success-story-item")
          gsap.from(items, {
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          })
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

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase mb-3 tracking-wider">
            Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Our Success Stories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            See the joy of our clients as their dreams of traveling, studying, and working abroad become a reality.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="success-story-item relative group rounded-2xl overflow-hidden shadow-lg aspect-[9/16] bg-slate-200"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-medium px-4 text-center">
                  Dream Achieved
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
