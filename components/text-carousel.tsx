"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const statements = [
  "100% based",
  "Industry-leading vibe technology",
  "Government-proof (we think)",
  "Certified by meme scientists",
  "Not financial advice (still true)",
  "Powered by pure chaos",
  "Your portfolio's emotional support coin",
]

export default function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What makes $CEO special?
        </motion.p>

        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-2xl md:text-4xl font-semibold text-gradient font-[family-name:var(--font-space-grotesk)]"
            >
              {statements[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {statements.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-accent-purple" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
