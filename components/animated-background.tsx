"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white">
            <svg
                className="absolute inset-0 w-full h-full opacity-40"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(148, 163, 184, 0.3)" />
                        <stop offset="100%" stopColor="rgba(148, 163, 184, 0)" />
                    </linearGradient>
                </defs>

                {/* Waves with simplified animation to avoid path errors */}
                <motion.path
                    d="M-400 600 Q 200 300 600 600 T 1400 600 T 2200 600"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="300"
                    strokeLinecap="round"
                    animate={{
                        d: [
                            "M-400 600 Q 200 300 600 600 T 1400 600 T 2200 600",
                            "M-400 500 Q 200 600 600 500 T 1400 500 T 2200 500",
                            "M-400 600 Q 200 300 600 600 T 1400 600 T 2200 600",
                        ],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M-400 300 Q 400 600 800 300 T 1800 300"
                    fill="none"
                    stroke="url(#grad2)"
                    strokeWidth="400"
                    strokeLinecap="round"
                    animate={{
                        d: [
                            "M-400 300 Q 400 600 800 300 T 1800 300",
                            "M-400 400 Q 400 100 800 400 T 1800 400",
                            "M-400 300 Q 400 600 800 300 T 1800 300",
                        ],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M1800 800 Q 1000 500 600 800 T -400 800"
                    fill="none"
                    stroke="rgba(191, 219, 254, 0.2)"
                    strokeWidth="350"
                    strokeLinecap="round"
                    animate={{
                        d: [
                            "M1800 800 Q 1000 500 600 800 T -400 800",
                            "M1800 700 Q 1000 900 600 700 T -400 700",
                            "M1800 800 Q 1000 500 600 800 T -400 800",
                        ],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>

            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        </div>
    )
}
