"use client"

import { motion } from "framer-motion"

// Minimal, low-opacity floating elements
const floatingItems = [
  { char: "◇", x: "8%", y: "15%", size: "text-2xl", opacity: 0.08 },
  { char: "○", x: "88%", y: "20%", size: "text-xl", opacity: 0.06 },
  { char: "△", x: "92%", y: "55%", size: "text-lg", opacity: 0.07 },
  { char: "□", x: "5%", y: "65%", size: "text-2xl", opacity: 0.05 },
  { char: "◇", x: "90%", y: "80%", size: "text-xl", opacity: 0.08 },
  { char: "○", x: "12%", y: "85%", size: "text-lg", opacity: 0.06 },
]

export default function FloatingObjects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} text-accent-purple`}
          style={{ left: item.x, top: item.y, opacity: item.opacity }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {item.char}
        </motion.div>
      ))}
    </div>
  )
}
