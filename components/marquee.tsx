"use client";

import { motion } from "framer-motion";

const marqueeText = "STONKS • GRILL DADDY • CEO JONG UN • CEO ZADDY TRUMP • BONK • CEO WAIFU • CEO KAWAI •  CEO GRILL •";

export default function Marquee() {
	return (
		<div className='relative overflow-hidden border-y border-border/50 bg-card/30 py-3'>
			{/* Subtle glow line */}
			<div className='absolute inset-0 bg-linear-to-r from-transparent via-accent-purple/5 to-transparent' />

			<motion.div
				className='flex whitespace-nowrap'
				animate={{ x: [0, -1500] }}
				transition={{
					duration: 30,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			>
				{[...Array(6)].map((_, i) => (
					<span key={i} className='text-muted-foreground/60 font-medium text-sm tracking-widest mx-2'>
						{marqueeText}
					</span>
				))}
			</motion.div>
		</div>
	);
}
