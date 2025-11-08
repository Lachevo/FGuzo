"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".partner-item")
      if (items.length > 0 && containerRef.current) {
        gsap.from(items, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const partners = [
    { name: "TeleBirr", file: "telebirr.webp" },
    { name: "Awash Bank", file: "awash_bank.webp" },
    { name: "Chapa", file: "chapa.svg" },
    { name: "Bank of Abyssinia", file: "boa.webp" },
    { name: "CBE", file: "cbe.webp" },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-500 text-sm uppercase tracking-wider font-medium mb-2">Our Trusted Partners</p>
        </div>
  <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-10 lg:gap-14 py-4 overflow-x-auto md:overflow-visible" style={{ WebkitOverflowScrolling: 'touch' }}>
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partner-item w-1/3 flex items-center justify-center md:w-auto md:flex-shrink-0 md:snap-center">
              <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center px-3 w-full md:min-w-[120px]">
                <img
                  src={`/images/partners/${partner.file}`}
                  alt={`${partner.name} logo`}
                  loading="eager"
                  className="h-full w-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-105 mx-auto"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-slate-400 text-sm font-medium text-center w-full">${partner.name}</div>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

