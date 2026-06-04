import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { Tag } from '@/components/site/Tag';
import { experience } from '@/content/portfolio';

export function Experience() {
	return (
		<Section id='experience'>
			<SectionHeading
				label='Experience'
				title='Explore my journey'
				aside='Eight roles across web engineering and mobile-network security, from Cebu to Seoul.'
			/>

			<ul>
				{experience.map((item, i) => (
					<ScrollReveal key={`${item.company}-${item.period}`} delay={i * 60}>
						<li className='group grid gap-6 border-t border-border py-8 md:grid-cols-[11rem_1fr] sm:py-10'>
							{/* LEFT meta column */}
							<div className='flex flex-col gap-2'>
								<span className='mono text-muted-foreground'>{item.period}</span>
								<span className='caption text-muted-foreground'>
									{item.location}
								</span>
								{item.current && (
									<span className='label inline-flex items-center gap-2 text-primary'>
										<span className='size-1.5 rounded-full bg-primary' aria-hidden />
										Now
									</span>
								)}
							</div>

							{/* RIGHT content column */}
							<div>
								<div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
									<div>
										<h3 className='subheading text-foreground'>{item.role}</h3>
										{item.href ? (
											<a
												href={item.href}
												target='_blank'
												rel='noreferrer'
												className='label link-underline mt-2 inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground'>
												{item.company}
												<ArrowUpRight className='size-3.5 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100' />
											</a>
										) : (
											<p className='label mt-2 text-muted-foreground'>
												{item.company}
											</p>
										)}
									</div>

									<ul className='flex flex-wrap gap-2 sm:justify-end'>
										{item.tags.map((tag) => (
											<li key={tag}>
												<Tag>{tag}</Tag>
											</li>
										))}
									</ul>
								</div>

								<ul className='mt-5 flex flex-col gap-3'>
									{item.highlights.map((highlight) => (
										<li
											key={highlight}
											className='body list flex gap-3 text-muted-foreground'>
											<span className='select-none text-primary' aria-hidden>
												–
											</span>
											<span className='flex-1'>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ScrollReveal>
				))}
			</ul>
		</Section>
	);
}
