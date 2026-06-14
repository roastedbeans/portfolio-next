'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EASE } from '@/lib/motion';
import { Container } from './Container';
import { navItems, profile } from '@/content/portfolio';

function subscribeScroll(callback: () => void) {
	window.addEventListener('scroll', callback, { passive: true });
	return () => window.removeEventListener('scroll', callback);
}

export function Nav() {
	const scrolled = useSyncExternalStore(
		subscribeScroll,
		() => window.scrollY > 16,
		() => false,
	);
	const [open, setOpen] = useState(false);
	const reduce = useReducedMotion();

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<motion.header
			initial={reduce ? false : { y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
			className={cn(
				'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
				scrolled
					? 'border-border bg-background/80 backdrop-blur-md'
					: 'border-transparent',
			)}>
			<Container className='flex h-16 items-center justify-between sm:h-20'>
				<a
					href='#top'
					className='tag font-semibold text-foreground transition-opacity hover:opacity-70'>
					{profile.shortName}
				</a>

				<nav className='hidden items-center gap-8 md:flex'>
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className='label link-underline text-muted-foreground transition-colors hover:text-foreground'>
							{item.label}
						</a>
					))}
					<a
						href={profile.linkedin}
						target='_blank'
						rel='noreferrer'
						className='group label inline-flex items-center gap-1.5 text-foreground'>
						<span className='link-underline'>Get in touch</span>
						<ArrowUpRight className='size-3.5 opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100' />
					</a>
				</nav>

				<button
					type='button'
					onClick={() => setOpen(true)}
					className='focus-ring -mr-2 p-2 text-foreground md:hidden'
					aria-label='Open menu'>
					<Menu className='size-6' />
				</button>
			</Container>

			{open && (
				<div className='fixed inset-0 z-50 bg-background md:hidden'>
					<Container className='flex h-16 items-center justify-between sm:h-20'>
						<span className='tag font-semibold text-foreground'>
							{profile.shortName}
						</span>
						<button
							type='button'
							onClick={() => setOpen(false)}
							className='focus-ring -mr-2 p-2 text-foreground'
							aria-label='Close menu'>
							<X className='size-6' />
						</button>
					</Container>
					<nav className='flex flex-col px-6 pt-6 sm:px-8'>
						{navItems.map((item, i) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className='heading flex items-baseline gap-4 border-b border-border py-5 text-foreground'>
								<span className='label text-primary'>
									{String(i + 1).padStart(2, '0')}
								</span>
								{item.label}
							</a>
						))}
						<a
							href={profile.cv}
							target='_blank'
							rel='noreferrer'
							onClick={() => setOpen(false)}
							className='label mt-8 inline-flex items-center gap-2 self-start rounded-full bg-foreground px-5 py-3 text-background'>
							Download CV
							<ArrowDownToLine className='size-4' />
						</a>
					</nav>
				</div>
			)}
		</motion.header>
	);
}
