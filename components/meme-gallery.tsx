'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function MemeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [limit, setLimit] = useState(6);
  const memes = Array.from({ length: 43 }, (_, i) => ({ id: i + 1, query: `ceo-${i + 1}.png` }));

  return (
    <section ref={ref} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-muted-foreground mb-4 text-center text-sm tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.p>

        <motion.h2
          className="mb-16 text-center font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">Certified $CEO Memes</span>
        </motion.h2>

        {/* Meme grid */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {memes.slice(0, limit).map((meme, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              onMouseEnter={() => setHoveredId(meme.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="border-border bg-card h-full w-full overflow-hidden rounded-2xl border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src={`/ceo/collection/${encodeURIComponent(meme.query)}`}
                  alt={`Meme ${meme.id}`}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    hoveredId === meme.id ? 'scale-105 grayscale-0' : 'grayscale'
                  }`}
                />

                {/* Hover glow overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow:
                      hoveredId === meme.id
                        ? 'inset 0 0 0 2px oklch(0.65 0.15 280 / 0.5), 0 0 40px -10px oklch(0.65 0.15 280 / 0.4)'
                        : 'inset 0 0 0 1px transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {limit >= memes.length ? (
            <motion.button
              className="border-border bg-card/50 text-foreground hover:border-accent-purple/50 rounded-xl border px-6 py-3 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLimit(6)}
            >
              View Less
            </motion.button>
          ) : (
            <motion.button
              className="border-border bg-card/50 text-foreground hover:border-accent-purple/50 rounded-xl border px-6 py-3 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLimit(limit + 6)}
            >
              View More
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
