'use client';

import { motion } from 'framer-motion';
import { X } from './socials/x';
import { Telegram } from './socials/telegram';

const socialLinks = [
  { name: 'https://x.com/solanasceo', icon: <X width={24} /> },
  { name: 'https://t.me/solanasceo', icon: <Telegram width={24} /> },
];

export default function Footer() {
  return (
    <footer className="border-border/50 relative border-t px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          className="text-gradient mb-6 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          $CEO
        </motion.div>

        {/* Social links */}
        <div className="mb-8 flex justify-center gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href="#"
              className="border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-accent-purple/50 flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium transition-colors"
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

        <p className="text-muted-foreground mb-2 text-sm">{new Date().getFullYear()} $CEO. All rights reserved.</p>

        <p className="text-muted-foreground/60 text-xs">Welcome to the management team</p>
      </div>
    </footer>
  );
}
