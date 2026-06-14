'use client';

import { ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/site/Container';
import { profile, socials } from '@/content/portfolio';
import { blurRise, fadeRise, staggerContainer } from '@/lib/motion';

export function Hero() {
	const reduce = useReducedMotion();
	const container = staggerContainer(0.08, 0.12);

	return (
		<section
			id='top'
			className='relative flex min-h-[88svh] flex-col justify-center pt-28 pb-16 sm:pt-32'>
			<span
				className='label pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-muted-foreground lg:block'
				aria-hidden>
				Portfolio / 2026
			</span>

			<Container>
				<motion.div
					className='max-w-5xl'
					variants={container}
					initial={reduce ? 'show' : 'hidden'}
					animate='show'>
					{/* META — availability + location */}
					<motion.div
						variants={fadeRise}
						className='flex flex-wrap items-center gap-x-4 gap-y-2'>
						{profile.available && (
							<span className='label inline-flex items-center gap-2 text-foreground'>
								<span className='relative flex size-2'>
									<span className='absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70' />
									<span className='relative inline-flex size-2 rounded-full bg-primary' />
								</span>
							</span>
						)}
						<span className='label text-muted-foreground'>
							{profile.locations.join('  /  ')}
						</span>
					</motion.div>

					{/* HEADLINE — oversized greeting */}
					<motion.h1 className='mt-8' variants={blurRise}>
						<span className='block font-sans text-[clamp(4.5rem,15vw,10.5rem)] font-light leading-[0.82] tracking-[-0.04em] text-foreground'>
							{profile.greeting}
							<span className='text-muted-foreground'>.</span>
						</span>
					</motion.h1>

					{/* LEAD — intro */}
					<motion.p
						variants={fadeRise}
						className='lead mt-8 max-w-2xl text-pretty text-muted-foreground'>
						{profile.intro}
					</motion.p>

					{/* STATS */}
					<motion.div
						variants={fadeRise}
						className='mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8'>
						{profile.stats.map((stat) => (
							<div key={stat.label}>
								<div className='mono text-3xl font-medium text-foreground sm:text-4xl'>
									{stat.value}
								</div>
								<div className='caption mt-1 text-muted-foreground'>
									{stat.label}
								</div>
							</div>
						))}
					</motion.div>

					{/* CTAs */}
					<motion.div
						variants={fadeRise}
						className='mt-10 flex flex-wrap items-center gap-4'>
						<a
							href={profile.linkedin}
							target='_blank'
							rel='noreferrer'
							className='group label inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-background transition hover:opacity-90'>
							Get in touch
							<ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5' />
						</a>
						<a
							href={profile.cv}
							target='_blank'
							rel='noreferrer'
							className='group label inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-foreground transition-colors hover:border-foreground/40'>
							Download CV
							<ArrowDownToLine className='size-4 transition-transform group-hover:translate-y-0.5' />
						</a>
					</motion.div>

					{/* SOCIALS */}
					<motion.ul
						variants={fadeRise}
						className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-2'>
						{socials
							.filter((s) => s.label !== 'Email')
							.map((s) => (
								<li key={s.label}>
									<a
										href={s.href}
										target='_blank'
										rel='noreferrer'
										className='group label inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground'>
										<span className='link-underline'>{s.label}</span>
										<ArrowUpRight className='size-3.5 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100' />
									</a>
								</li>
							))}
					</motion.ul>
				</motion.div>
			</Container>
		</section>
	);
}
