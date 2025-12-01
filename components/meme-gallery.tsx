"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function MemeGallery() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const [limit, setLimit] = useState(6);
	const memes = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, query: `ceo-${i + 1}.png` }));

	return (
		<section ref={ref} className='py-24 px-4 relative'>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-4'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					Gallery
				</motion.p>

				<motion.h2
					className='text-3xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-space-grotesk)]'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<span className='text-gradient'>Certified Memes</span>
				</motion.h2>

				{/* Meme grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					{memes.slice(0, limit).map((meme, index) => (
						<motion.div
							key={index}
							className='relative aspect-square rounded-2xl overflow-hidden cursor-pointer group'
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredId(meme.id)}
							onMouseLeave={() => setHoveredId(null)}
						>
							<motion.div
								className='w-full h-full border border-border rounded-2xl overflow-hidden bg-card'
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<Image
									src={`/ceo/collection/${encodeURIComponent(meme.query)}`}
									alt={`Meme ${meme.id}`}
									fill
									className={`object-cover transition-all duration-500 ${
										hoveredId === meme.id ? "grayscale-0 scale-105" : "grayscale"
									}`}
								/>

								{/* Hover glow overlay */}
								<motion.div
									className='absolute inset-0 rounded-2xl pointer-events-none'
									animate={{
										boxShadow:
											hoveredId === meme.id
												? "inset 0 0 0 2px oklch(0.65 0.15 280 / 0.5), 0 0 40px -10px oklch(0.65 0.15 280 / 0.4)"
												: "inset 0 0 0 1px transparent",
									}}
									transition={{ duration: 0.3 }}
								/>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* View more button */}
				<motion.div
					className='flex justify-center mt-12'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.8 }}
				>
					{limit >= memes.length ? (
						<motion.button
							className='px-6 py-3 border border-border bg-card/50 text-foreground font-medium text-sm rounded-xl hover:border-accent-purple/50 transition-colors'
							whileHover={{ scale: 1.03, y: -2 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => setLimit(6)}
						>
							View Less
						</motion.button>
					) : (
						<motion.button
							className='px-6 py-3 border border-border bg-card/50 text-foreground font-medium text-sm rounded-xl hover:border-accent-purple/50 transition-colors'
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
