"use client"

import { ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const planeControls = useAnimation()
  const [planePlaying, setPlanePlaying] = useState(false)

  useEffect(() => {
    // auto play once after load
    if (isLoaded) {
      const t = setTimeout(() => {
        setPlanePlaying(true)
        planeControls.start({ x: 300, y: -220, rotate: 12, opacity: 1, scale: 1 }, { duration: 2.2, ease: "easeOut" })
      }, 700)
      return () => clearTimeout(t)
    }
  }, [isLoaded, planeControls])

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const imgEl = imageRef.current
    const sec = sectionRef.current
    if (imgEl && sec) {
      gsap.to(imgEl, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      })
    }

    return () => {
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      } catch (e) {}
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-600 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">Discover the world your way.</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            FastGuzo
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            FastGuzo makes international travel simple and reliable — flights, visas, and end-to-end support for
            students and travelers. Personalized service, competitive pricing, and local expertise.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all hover:shadow-lg hover:scale-105">
            GET STARTED
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Right Content - Hero Image */}
        <div
          className={`relative h-[500px] md:h-[650px] lg:h-[750px] w-full transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Wavy decorative elements */}
              <svg
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-40 opacity-20"
                viewBox="0 0 400 100"
              >
                <path d="M0,50 Q100,30 200,50 T400,50" stroke="#0066CC" strokeWidth="3" fill="none" />
                <path d="M0,60 Q100,40 200,60 T400,60" stroke="#0066CC" strokeWidth="2" fill="none" />
              </svg>

              {/* Blue arc shape */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-full blur-2xl opacity-30"></div>

              {/* Main hero image (plane taking off illustration) */}
              <div ref={imageRef} className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-[110%] h-full overflow-visible">
                  <img
                    src="/images/plane.jpg"
                    alt="Plane taking off scene"
                    className="w-full h-full object-contain object-center"
                    style={{
                      mixBlendMode: 'normal',
                      filter: 'contrast(1.2) brightness(1.15)',
                      WebkitFilter: 'contrast(1.2) brightness(1.15)',
                      backgroundColor: 'transparent',
                    }}
                  />
                </div>
              </div>

              {/* Plane takeoff animation overlay */}
              <motion.div
                initial={{ x: -40, y: 40, rotate: -10, opacity: 0, scale: 0.9 }}
                animate={planeControls}
                className="absolute left-8 bottom-6 z-30 pointer-events-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56" aria-hidden="true">
                  <path fill="#ffffff" d="M2.5 19.5l19-7-7-2.5L9 3l-6.5 16.5z" opacity="0.95" />
                  <path fill="#cbd5e1" d="M9 3l3.5 7L2.5 19.5 9 3z" opacity="0.6" />
                </svg>
              </motion.div>

              {/* Plane UI control (replay) */}
              <div className="absolute right-6 bottom-6 z-40">
                <button
                  onClick={() => {
                    // replay plane animation
                    setPlanePlaying(false)
                    planeControls.set({ x: -40, y: 40, rotate: -10, opacity: 0, scale: 0.9 })
                    setTimeout(() => {
                      setPlanePlaying(true)
                      planeControls.start({ x: 300, y: -220, rotate: 12, opacity: 1, scale: 1 }, { duration: 2.2, ease: "easeOut" })
                    }, 120)
                  }}
                  aria-label="Play plane animation"
                  className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700">
                    <path fill="currentColor" d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-20 left-1/4 space-y-2 pointer-events-none">
                <div className="flex gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1 h-1 bg-blue-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
