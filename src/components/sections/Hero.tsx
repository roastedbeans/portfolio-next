'use client';

import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/site/Container';
import { profile } from '@/content/portfolio';
import { blurRise, fadeRise, staggerContainer } from '@/lib/motion';

export function Hero() {
	const reduce = useReducedMotion();
	const { scrollY } = useScroll();
	const portraitY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -48]);

	const container = staggerContainer(0.08, 0.12);

	return (
		<section
			id='top'
			className='relative flex min-h-[84svh] flex-col justify-center pt-28 pb-14 sm:pt-32'>
			<span
				className='label pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-muted-foreground lg:block'
				aria-hidden>
				Portfolio / 2026
			</span>

			<Container>
				<motion.div
					className='grid items-center gap-12 lg:grid-cols-12 lg:gap-8'
					variants={container}
					initial={reduce ? 'show' : 'hidden'}
					animate='show'>
					{/* LEFT — content */}
					<div className='lg:col-span-7'>
						<motion.div
							variants={fadeRise}
							className='flex flex-wrap items-center gap-x-4 gap-y-2'>
							{profile.available && (
								<span className='label inline-flex items-center gap-2 text-foreground'>
									<span className='relative flex size-2'>
										<span className='absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70' />
										<span className='relative inline-flex size-2 rounded-full bg-primary' />
									</span>
									Available for work
								</span>
							)}
							<span className='h-px w-6 bg-border' aria-hidden />
							<span className='label text-muted-foreground'>
								{profile.locations.join('  /  ')}
							</span>
						</motion.div>

						<motion.h1 className='mt-7' variants={blurRise}>
							<span className='block font-sans text-[clamp(4.5rem,15vw,10.5rem)] font-light leading-[0.82] tracking-[-0.04em] text-foreground'>
								{profile.greeting}
								<span className='text-primary'>.</span>
							</span>
							<span className='lead mt-6 block max-w-xl text-pretty font-normal text-muted-foreground'>
								{profile.intro}
							</span>
						</motion.h1>

						<motion.div
							variants={fadeRise}
							className='mt-10 flex flex-wrap gap-x-12 gap-y-6'>
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

						<motion.div
							variants={fadeRise}
							className='mt-10 flex flex-wrap items-center gap-4'>
							<a
								href='#contact'
								className='group label inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-background transition-colors hover:bg-primary'>
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
					</div>

					{/* RIGHT — portrait (swap the monogram for a real grayscale photo) */}
					<motion.div variants={fadeRise} className='lg:col-span-5'>
						<motion.div style={{ y: portraitY }}>
							<div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[#d7d5d0] via-[#bcbab4] to-[#8f8d87] lg:max-w-none'>
								{/*
									Replace this placeholder with a real portrait:
									<Image src="/assets/portrait.jpg" alt="Vincent Abella" fill priority className="object-cover grayscale" />
								*/}
								<div className='absolute inset-0 grid place-items-center'>
									<span className='font-sans text-[7rem] font-light leading-none tracking-tight text-white/70'>
										{profile.initials}
									</span>
								</div>
								<div className='absolute inset-x-5 bottom-5 flex items-center justify-between'>
									<span className='label text-white/80'>Software Developer</span>
									<span className='size-2 rounded-full bg-white/80' aria-hidden />
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
}
