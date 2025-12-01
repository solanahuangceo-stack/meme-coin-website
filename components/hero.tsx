"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<section className='relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden'>
			{/* Subtle background glow */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px]' />
				<div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[100px]' />
			</div>

			{/* Main headline */}
			<motion.h1
				className='text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 relative z-10 font-[family-name:var(--font-space-grotesk)]'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<span className='text-gradient'>Welcome to $CEO</span>
			</motion.h1>

			<motion.p
				className='text-xl md:text-2xl text-center text-foreground/80 mb-2 font-medium tracking-tight'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.15 }}
			>
				The Premium Meme Coin Experience
			</motion.p>

			<motion.p
				className='text-base md:text-lg text-muted-foreground text-center max-w-xl mb-12'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				Powered by vibes, memes, and an alarming amount of confidence.
				<br />
				<span className='text-foreground/60 italic'>Degen fintech... but make it premium.</span>
			</motion.p>

			{/* Mascot */}
			<motion.div
				className='relative w-56 h-56 md:w-72 md:h-72 mb-12'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				<motion.div
					className='relative'
					animate={{ y: [0, -8, 0] }}
					transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<div className='absolute inset-0 bg-accent-purple/20 rounded-full blur-2xl scale-110' />
					<Image
						src='/ceo/CEO.jpg'
						alt='$CEO Mascot'
						width={288}
						height={288}
						className='relative z-10 drop-shadow-2xl'
					/>
				</motion.div>
			</motion.div>

			{/* CTA Buttons */}
			<motion.div
				className='flex flex-wrap gap-4 justify-center'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6 }}
			>
				<motion.button
					className='px-8 py-3.5 bg-gradient-to-r from-accent-purple to-accent-teal text-white font-semibold text-base rounded-xl glow-subtle'
					whileHover={{ scale: 1.03, y: -2 }}
					whileTap={{ scale: 0.98 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					Buy $CEO
				</motion.button>

				<motion.button
					className='px-8 py-3.5 border border-border bg-card/50 text-foreground font-semibold text-base rounded-xl hover:border-accent-purple/50 hover:bg-card transition-colors'
					whileHover={{ scale: 1.03, y: -2 }}
					whileTap={{ scale: 0.98 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					Join Community
				</motion.button>
			</motion.div>
		</section>
	);
}
