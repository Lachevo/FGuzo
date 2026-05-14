"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [

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

        {/* Unified Success Story Flow */}
        <div className="max-w-7xl mx-auto relative z-10 pb-20 px-4">

          <div className="bg-blue-600 rounded-[2.5rem] shadow-2xl overflow-hidden mb-20 border border-blue-500/20">
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-10 h-1 bg-white/40 rounded-full"></span>
                  <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Our Promise</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">We Kept Our Word.</h3>
                <p className="text-blue-50 text-lg md:text-xl leading-relaxed">
                  At FastGuzo, our greatest pride is seeing our clients succeed. We promise transparent, reliable guidance, and these stories are a testament to our commitment. Your journey is our priority.
                </p>
              </div>

              {/* The Anchor Image - Full-bleed portrait image */}
              <div className="lg:w-1/2 bg-blue-600 overflow-hidden">
                <img
                  src="/images/newFastGuzoImage/IMG_5188.JPEG"
                  alt="We Kept Our Word - FastGuzo Team"
                  className="w-full h-auto lg:h-full lg:object-cover block"
                />
              </div>
            </div>
          </div>

          {/* The Success Stories Aligned Equally */}
          <div className="mt-8 border-t border-slate-100 pt-16">
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Client Success Gallery</h4>
              <p className="text-slate-500">A glimpse into the journeys we've been honored to support.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 pb-12">
              {images.map((image, index) => {
                return (
                  <motion.div
                    key={index}
                    className="success-story-item relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100 border-4 border-white"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-bold tracking-wide px-4">
                          Dream Achieved
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
