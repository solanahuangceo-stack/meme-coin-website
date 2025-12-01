"use client"

import { motion } from "framer-motion"

const socialLinks = [
  { name: "Twitter", icon: "X" },
  { name: "Discord", icon: "D" },
  { name: "Telegram", icon: "T" },
]

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border/50 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="text-2xl font-bold mb-6 text-gradient font-[family-name:var(--font-space-grotesk)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          $CEO
        </motion.div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href="#"
              className="w-10 h-10 rounded-lg border border-border bg-card/50 flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent-purple/50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-2">{new Date().getFullYear()} $CEO. All rights reserved (lol not really).</p>

        <p className="text-xs text-muted-foreground/60">Made with questionable financial decisions</p>
      </div>
    </footer>
  )
}
