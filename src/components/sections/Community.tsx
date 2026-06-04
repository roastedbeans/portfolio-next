import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { cn } from '@/lib/utils';
import { organizations } from '@/content/portfolio';

export function Community() {
	return (
		<Section id='community'>
			<SectionHeading index='07' label='Community' title='Where I show up' />

			<ul className='grid gap-6 sm:grid-cols-2'>
				{organizations.map((org, i) => (
					<li key={org.name} className='h-full'>
						<ScrollReveal delay={i * 80} className='h-full'>
							<div
								className={cn(
									'group flex h-full flex-col rounded-2xl border bg-card p-7 transition duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-24px_rgba(20,19,18,0.20)]',
									org.highlight
										? 'border-primary/40 hover:border-primary/60'
										: 'border-border hover:border-foreground/20',
								)}>
								<div className='flex items-start justify-between gap-4'>
								{org.href ? (
									<a
										href={org.href}
										target='_blank'
										rel='noreferrer'
										className='group/link inline-flex items-start gap-1.5 text-foreground'>
										<span className='subheading link-underline'>{org.name}</span>
										<ArrowUpRight className='mt-1 size-4 shrink-0 opacity-50 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100' />
									</a>
								) : (
									<h3 className='subheading text-foreground'>{org.name}</h3>
								)}

								{org.highlight && (
									<span className='tag shrink-0 text-primary'>Co-lead</span>
								)}
							</div>

							<p className='label mt-4 text-primary'>{org.role}</p>
							<p className='mono mt-2 text-sm text-muted-foreground'>
								{org.period}
							</p>

								{org.note && (
									<p className='body mt-4 text-muted-foreground'>{org.note}</p>
								)}
							</div>
						</ScrollReveal>
					</li>
				))}
			</ul>
		</Section>
	);
}
