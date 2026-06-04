import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { education } from '@/content/portfolio';

export function Education() {
	return (
		<Section id='education'>
			<SectionHeading index='05' label='Education' title='Studies' />

			<ul>
				{education.map((item, i) => (
					<li key={`${item.degree}-${item.school}`}>
						<ScrollReveal
							delay={i * 80}
							className='grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-[11rem_1fr]'>
							<span className='mono text-muted-foreground'>{item.period}</span>

							<div>
								<h3 className='subheading text-foreground'>{item.degree}</h3>

								{item.href ? (
									<a
										href={item.href}
										target='_blank'
										rel='noreferrer'
										className='group body link-underline mt-1 inline-flex items-center gap-1.5 text-foreground'>
										{item.school}
										<ArrowUpRight className='size-4 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100' />
									</a>
								) : (
									<p className='body mt-1 text-foreground'>{item.school}</p>
								)}

								<p className='caption mt-2 text-muted-foreground'>
									{item.location}
								</p>
							</div>
						</ScrollReveal>
					</li>
				))}
			</ul>
		</Section>
	);
}
