import type { Variants } from 'motion/react';

/** Expo-out — the slow-settling curve that reads as "expensive". */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Gentle fade + rise for content blocks. */
export const fadeRise: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Blur + rise for display headings — the premium signature. */
export const blurRise: Variants = {
	hidden: { opacity: 0, y: 26, filter: 'blur(12px)' },
	show: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: { duration: 0.95, ease: EASE },
	},
};

/** Parent that releases its children in sequence. */
export function staggerContainer(stagger = 0.09, delayChildren = 0.1): Variants {
	return {
		hidden: {},
		show: { transition: { staggerChildren: stagger, delayChildren } },
	};
}
