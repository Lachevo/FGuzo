"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FlagMarquee() {
    const flags = Array(20).fill(null)

    return (
        <div className="w-full bg-white/30 backdrop-blur-sm border-b border-slate-100 overflow-hidden py-2 whitespace-nowrap flex items-center">
            <motion.div
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-12 items-center"
            >
                {flags.map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Image
                            src="/images/canadaFlag.png"
                            alt="Canada Flag"
                            width={32}
                            height={16}
                            className="shadow-sm object-contain"
                        />
                        <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest opacity-80">
                            Trusted Partners
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
