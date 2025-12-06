'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Telegram } from './socials/telegram';
import { ShineBorder } from './ui/shine-border';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85dvh] flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Subtle background glow */}

      {/* Main headline */}
      <motion.h1
        className="relative z-10 mb-6 text-center font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-gradient">Welcome to $CEO</span>
      </motion.h1>

      <motion.p
        className="text-foreground/80 mb-2 text-center text-xl font-medium tracking-tight md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        The Infinity CEO you've always wanted
      </motion.p>

      <motion.p
        className="text-muted-foreground mb-12 max-w-xl text-center text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I've created more billionaires on my management team than any CEO in the world.
        <br />
        <span className="text-foreground/60 italic">Memetics on Solana, Internet Capital Markets.</span>
      </motion.p>

      {/* Mascot */}
      <motion.div
        className="relative mb-12 h-56 w-56 md:size-96"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        >
          <div className="bg-accent-purple/20 absolute inset-0 scale-110 rounded-full blur-2xl" />
          <Image
            src="/ceo/CEO.webp"
            alt="$CEO Mascot"
            width={500}
            height={288}
            className="relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          key={'buy-button'}
          className="from-accent-purple group to-accent-teal glow-subtle relative cursor-pointer rounded-xl bg-gradient-to-r px-8 py-3.5 text-base font-semibold text-white"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          onClick={() => {
            document.querySelector('#buy-ceo')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ShineBorder
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          />
          Buy $CEO
        </motion.button>

        <motion.a
          href="https://t.me/solanasceo"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border bg-card/50 text-foreground hover:border-accent-purple/50 hover:bg-card relative rounded-xl border px-8 py-3.5 text-base font-semibold transition-colors"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          Join Community <Telegram width={20} className="-mt-1 ml-2 inline-block" />
        </motion.a>
      </motion.div>
    </section>
  );
}
