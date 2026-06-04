import { ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { navItems, profile, socials } from '@/content/portfolio';

export function Footer() {
	return (
		<footer className='bg-dark text-dark-foreground'>
			<Container className='py-14 sm:py-16'>
				{/* Big email + socials */}
				<div className='flex flex-col gap-8 border-b border-dark-border pb-10 md:flex-row md:items-end md:justify-between'>
					<div>
						<span className='label text-dark-muted'>Get in touch</span>
						<a
							href={`mailto:${profile.email}`}
							className='group link-underline link-underline-light mt-3 flex items-center gap-3 text-dark-foreground'>
							<span className='heading'>{profile.email}</span>
							<ArrowUpRight className='size-5 shrink-0 opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:size-6' />
						</a>
					</div>

					<div className='flex flex-wrap gap-x-6 gap-y-2'>
						{socials.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target={s.href.startsWith('http') ? '_blank' : undefined}
								rel='noreferrer'
								className='label text-dark-muted transition-colors hover:text-dark-foreground'>
								{s.label}
							</a>
						))}
					</div>
				</div>

				{/* Bottom bar */}
				<div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<span className='caption text-dark-muted'>
						© 2026 Vincent Abella
					</span>
					<nav className='flex flex-wrap gap-x-6 gap-y-2'>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className='label text-dark-muted transition-colors hover:text-dark-foreground'>
								{item.label}
							</a>
						))}
					</nav>
					<span className='caption text-dark-muted'>
						Designed &amp; built with Next.js
					</span>
				</div>
			</Container>
		</footer>
	);
}
