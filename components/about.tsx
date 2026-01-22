"use client"

import { Globe, Airplay, Users, Award, Star, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        })
      }

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.9,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Star,
      title: "Seamless Guidance",
      description: "Expert application guidance and complete case management.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Airplay,
      title: "Settlement Planning",
      description: "Personalized post-arrival support to help you settle in.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: Award,
      title: "Expert Advice",
      description: "Consultation from experienced immigration professionals.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ]

  const carouselImages = [
    "/images/FastGuzo 11.0.jpg",
    "/images/FastGuzo 10.1.jpg",
    "/images/FastGuzo 9.0.jpg",
    "/images/fg.jpg"
  ]

  return (
    <section id="about" className="pt-0 pb-20 bg-transparent relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div ref={titleRef} className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 pb-2">
            About FastGuzo
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Welcome to FastGuzo, your trusted immigration consultancy. We're dedicated to guiding applicants through
            visa applications, document preparation, and settlement planning. Whether you're studying, working,
            reuniting with family, or seeking permanent residency, we help you navigate the process with
            confidence.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Our Mission",
              icon: Globe,
              text: "To connect people with opportunities abroad by offering professional, transparent, and personalized immigration services.",
              color: "text-blue-600"
            },
            {
              title: "Our Vision",
              icon: Airplay,
              text: "To become Africa's most trusted immigration consultancy, inspiring confidence in applicants seeking a better future.",
              color: "text-indigo-600"
            },
            {
              title: "Core Values",
              icon: Award,
              text: "Customer first, integrity in every step, and innovation to make your travel faster and easier.",
              color: "text-amber-600"
            }
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color.replace('text', 'bg')}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Split Section: Why Choose Us & Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">Why Choose FastGuzo?</h3>
              <p className="text-slate-600 text-lg">
                We make the complex immigration process simple and stress-free.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-full ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group">
                Contact our team <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
              <Carousel
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {carouselImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={src}
                          alt={`FastGuzo Highlight ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/20 text-white z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/20 text-white z-10" />
              </Carousel>

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium text-blue-200">Our Impact</span>
                </div>
                <p className="text-lg font-medium">Helping you cross borders with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
