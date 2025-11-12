"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Articles() {
  const articles = [
    {
      title: "How to Prepare for Student Visas",
      excerpt:
        "A step-by-step guide to the documentation, timeline, and tips that increase your chance of success.",
      img: "/images/visaInterview.jpg",
      href: "#",
    },
    {
      title: "Top Destinations",
      excerpt: "Explore affordable and high-quality study destinations with scholarships and support services.",
      img: "/images/dest.jpg",
      href: "#",
    },
    {
      title: "Pre-departure & Settlement Checklist",
      excerpt: "A practical checklist to help you prepare documents, packing, and initial settlement steps after arrival.",
      img: "/images/check.jpg",
      href: "#",
    },
  ]

  // small animated blobs used as a dynamic background
  const blobs = [
    { w: 420, h: 420, top: -80, left: -60, bg: "linear-gradient(135deg,#60a5fa,#7c3aed)", dur: 26 },
    { w: 320, h: 320, top: 40, right: -80, bg: "linear-gradient(135deg,#f97316,#f43f5e)", dur: 18 },
    { w: 240, h: 240, bottom: -60, left: 40, bg: "linear-gradient(135deg,#34d399,#06b6d4)", dur: 22 },
  ]

  // interactive particles setup
  type Particle = { x: number; y: number; size: number; depth: number; type: "dot" | "line"; rot: number }
  const sectionRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dotRefs = useRef<Array<HTMLDivElement | null>>([])
  const particlesRef = useRef<Particle[]>(
    Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.round(3 + Math.random() * 8),
      depth: Math.random() * 0.9 + 0.1,
      type: Math.random() > 0.82 ? "line" : "dot",
      rot: Math.random() * 360,
    }))
  )

  const particleColors = ["rgba(59,130,246,0.28)", "rgba(236,72,153,0.22)", "rgba(16,185,129,0.22)"]

  useEffect(() => {
    const container = sectionRef.current || document.body

    const colors = ["rgba(59,130,246,0.85)", "rgba(236,72,153,0.75)", "rgba(16,185,129,0.75)"]

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5

      particlesRef.current.forEach((p, i) => {
        const el = dotRefs.current[i]
        if (!el) return
        const strength = 50 * p.depth
        const tx = relX * strength * (p.type === "line" ? 0.6 : 1)
        const ty = relY * strength * (p.type === "line" ? 0.3 : 1)
        const rot = p.rot + relX * 30 * p.depth
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg)`
        el.style.background = colors[i % colors.length]
        el.style.mixBlendMode = "screen"
      })
    }

    const handleLeave = () => {
      particlesRef.current.forEach((_, i) => {
        const el = dotRefs.current[i]
        if (el) {
          el.style.transform = "translate3d(0,0,0) rotate(0deg)"
          el.style.background = "transparent"
        }
      })
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0.9 }}
            animate={{
              x: [0, (i % 2 === 0 ? -120 : 120), 0],
              y: [0, (i % 2 === 0 ? -40 : 40), 0],
            }}
            transition={{ duration: b.dur, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 1 }}
            style={{
              position: "absolute",
              width: b.w,
              height: b.h,
              top: b.top,
              left: b.left as any,
              right: (b as any).right,
              bottom: (b as any).bottom,
              borderRadius: "50%",
              filter: "blur(80px)",
              background: b.bg,
              opacity: 0.7,
              transform: "translate3d(0,0,0)",
            }}
          />
        ))}
      </div>

      {/* Interactive particles (dots/lines) that react to mouse movement */}
      <div ref={(el) => { containerRef.current = el }} className="pointer-events-none absolute inset-0 -z-10">
        {particlesRef.current.map((p, i) => (
          <div
            key={i}
            ref={(el) => { dotRefs.current[i] = el }}
            className={`absolute transform-gpu`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.type === "line" ? `${p.size * 3}px` : `${p.size}px`,
              height: p.type === "line" ? `${Math.max(1, p.size / 3)}px` : `${p.size}px`,
              borderRadius: p.type === "line" ? "4px" : "50%",
              filter: "blur(0.6px)",
              opacity: p.type === "line" ? 0.85 : 0.9,
              transition: "transform 0.6s cubic-bezier(.2,.9,.2,1)",
              transform: "translate3d(0,0,0)",
              background: particleColors[i % particleColors.length],
              mixBlendMode: "screen",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase">Latest from FastGuzo</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Articles & Immigration Guides</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Helpful guides and checklists to prepare you for visa applications, interviews, and settling abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              className="relative rounded-2xl shadow-lg overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <div className="relative h-44 w-full">
                <img src={a.img} alt={a.title} className="object-cover w-full h-full" loading="lazy" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{a.excerpt}</p>
                <Link href={a.href} className="inline-flex items-center gap-2 text-blue-600 font-medium">
                  Read article
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:brightness-95">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  )
}
