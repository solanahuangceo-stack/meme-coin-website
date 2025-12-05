'use client';

import { motion, useInView } from 'framer-motion';
import { ClipboardCopyIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { toast } from 'sonner';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ADDRESS = 'NEWCAADDRESSHERE!!';
  
  return (
    <section ref={ref} className="relative px-4 py-24">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-accent-purple/5 absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full blur-[100px]" />
        <div className="bg-accent-teal/5 absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          className="text-muted-foreground mb-4 text-center text-sm tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.p>

        <motion.h2
          className="mb-16 text-center font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">WTF is $CEO?</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-md text-foreground/90 mb-4 leading-relaxed">
              Jensen Huang was 30 years old when he founded NVIDIA in 1993. $CEO is an ode to the dream of dreams;
              putting every part of yourself on the line to create the most successful company in the history of the
              human race.
              <br />
              <br />
              Solana is home. It's where community thrives, where generational wealth is made and where movements are
              born from memetic culture like the world has never seen before.
              <br />
              <br />
              What better person is there to lead as the $CEO of Solana?
            </p>
            {/* <p className='text-lg text-foreground/90 leading-relaxed mb-4'>
							Of all the things that I value most about $CEO, intelligence is not top of that list. My ability to
							endure pain and suffering, my ability to work on something for a very, very long period of time, my
							ability to handle setbacks and see the opportunity just around the corner, I consider to be my
							memetic superpowers.
						</p>
						<p className='text-lg font-light text-right text-foreground/90 leading-relaxed'>- Jensen Huang</p> */}
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats grid */}
            <div className="grid h-full grid-cols-1 gap-4">
              {[
                { label: 'Gigachads Engaged', value: '69,420+' },
                { label: 'Memes Made', value: 'Infinite' },
                { label: "CEO's Created", value: '100+' },
                { label: 'Immaculate', value: 'Vibes' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="h-full rounded-xl bg-linear-to-br from-transparent to-neutral-800 p-px text-center transition-colors duration-300 hover:from-blue-500 hover:to-purple-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="bg-background flex h-full flex-col items-center justify-center rounded-xl">
                    <div className="text-gradient text-xl font-bold md:text-2xl">{stat.value}</div>
                    <div className="text-muted-foreground mt-1 text-xs tracking-wider uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="glass border-accent-purple/20 rounded-xl border p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-center text-sm">
            <span className="text-accent-purple text-lg font-semibold">Not financial advice</span>
            <br />
            <br />
            When it comes to memetic impulse, please do your due-dilligence in making decisions related to on-chain
            activity- your favorite $CEO
          </p>
        </motion.div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 pt-10 sm:gap-8 lg:flex-row lg:gap-12">
        <div className="border-accent aspect-[16/10] w-full overflow-hidden rounded-lg border-4 shadow-2xl sm:aspect-[16/9]">
          <iframe
            src="https://dexscreener.com/solana/6v8vmorspb7qyg34gnq6bcxituhuu2rs6drjggeevzcx?embed=1&amp;theme=dark&amp;trades=0&amp;info=0"
            className="h-full w-full"
            title="DexScreener Live Chart"
            allowFullScreen
          />
        </div>
        <div>
          <Image src="/ceo/collection/ceo-40.webp" alt="CEO STONKS" width={640} height={360} className="rounded-md" />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 pt-10 sm:gap-8 lg:flex-row lg:gap-12">
        <div className="border-accent bg-background/70 flex w-fit flex-row gap-2 rounded-md border-2 px-4 py-2 shadow-lg">
          <h1>CA: ${ADDRESS}</h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText(ADDRESS);
              toast.success('Contract address copied to clipboard!');
            }}
            className="hover:bg-accent-purple/10 rounded-md p-1 transition"
          >
            <ClipboardCopyIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
