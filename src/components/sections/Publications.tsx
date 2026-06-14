import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { publications } from '@/content/portfolio';

export function Publications() {
	return (
		<Section id='publications'>
			<SectionHeading
				label='Research'
				title='Publications'
				aside='Six peer-reviewed papers on 5G core-network security, intrusion detection, and mobile-network research.'
			/>

			<div className='grid gap-5 sm:grid-cols-2'>
				{publications.map((pub, i) => (
					<ScrollReveal key={pub.title} delay={i * 70} className='h-full'>
						<a
							href={pub.href}
							target='_blank'
							rel='noopener noreferrer'
							className='group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition duration-300 hover:border-foreground/30 hover:shadow-[0_18px_44px_-30px_rgba(34,34,34,0.45)] sm:p-7'>
							{/* Masthead — venue · year */}
							<div className='flex items-baseline justify-between gap-4 border-b border-border pb-4'>
								<span className='tag text-muted-foreground'>
									{pub.venueShort ?? pub.journal}
								</span>
								<span className='mono shrink-0 text-sm text-foreground'>
									{pub.year}
								</span>
							</div>

							{/* Title — academic serif */}
							<h3 className='serif mt-5 text-pretty text-xl font-medium leading-snug text-foreground sm:text-[1.4rem]'>
								{pub.title}
							</h3>

							{/* Full venue */}
							<p className='caption mt-3 text-muted-foreground'>{pub.journal}</p>

							{/* Footer — DOI · read */}
							<div className='mt-auto flex items-center justify-between gap-4 border-t border-border pt-4'>
								{pub.doi ? (
									<span className='mono truncate text-xs text-muted-foreground'>
										DOI {pub.doi}
									</span>
								) : (
									<span />
								)}
								<span className='label inline-flex shrink-0 items-center gap-1.5 text-foreground'>
									Read
									<ArrowUpRight className='size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
								</span>
							</div>
						</a>
					</ScrollReveal>
				))}
			</div>
		</Section>
	);
}
