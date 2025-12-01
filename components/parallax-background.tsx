"use client"

import { motion, useScroll, useTransform } from "framer-motion"

const shapes = [
  { size: "w-80 h-80", x: "5%", y: "10%", speed: 0.15 },
  { size: "w-64 h-64", x: "75%", y: "30%", speed: 0.2 },
  { size: "w-48 h-48", x: "15%", y: "60%", speed: 0.25 },
  { size: "w-72 h-72", x: "80%", y: "75%", speed: 0.1 },
]

function ParallaxShape({
  shape,
  index,
}: {
  shape: (typeof shapes)[0]
  index: number
}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 2000], [0, 400 * shape.speed])

  return (
    <motion.div
      className={`absolute ${shape.size} rounded-full blur-[100px]`}
      style={{
        left: shape.x,
        top: shape.y,
        y,
        background: index % 2 === 0 ? "oklch(0.65 0.12 280 / 0.04)" : "oklch(0.6 0.1 200 / 0.03)",
      }}
    />
  )
}

export default function ParallaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <ParallaxShape key={index} shape={shape} index={index} />
      ))}
    </div>
  )
}
