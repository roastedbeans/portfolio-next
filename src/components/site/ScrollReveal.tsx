'use client';

import { motion, useReducedMotion } from 'motion/react';
import { EASE } from '@/lib/motion';

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	/** Stagger delay in milliseconds. */
	delay?: number;
	/** 'rise' = fade + rise (default). 'heading' = adds a blur-in for display text. */
	variant?: 'rise' | 'heading';
	/** Replay every time it enters view instead of once. */
	repeat?: boolean;
}

/**
 * Reveals children once they scroll into view, on a slow expo-out curve.
 * Falls back to no animation when the user prefers reduced motion.
 */
export function ScrollReveal({
	children,
	className,
	delay = 0,
	variant = 'rise',
	repeat = false,
}: ScrollRevealProps) {
	const reduce = useReducedMotion();
	if (reduce) return <div className={className}>{children}</div>;

	const heading = variant === 'heading';

	return (
		<motion.div
			className={className}
			initial={
				heading
					? { opacity: 0, y: 26, filter: 'blur(12px)' }
					: { opacity: 0, y: 16 }
			}
			whileInView={
				heading ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 1, y: 0 }
			}
			viewport={{ once: !repeat, amount: 'some' }}
			transition={{
				duration: heading ? 0.95 : 0.7,
				ease: EASE,
				delay: delay / 1000,
			}}>
			{children}
		</motion.div>
	);
}
