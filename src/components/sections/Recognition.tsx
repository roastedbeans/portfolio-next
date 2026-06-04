import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { awards, certificates } from '@/content/portfolio';

export function Recognition() {
	return (
		<Section id='recognition'>
			<SectionHeading
				index='06'
				label='Recognition'
				title='Awards & certificates'
			/>

			<div className='grid gap-x-12 gap-y-12 md:grid-cols-2'>
				{/* BLOCK A — Awards */}
				<ScrollReveal>
					<h3 className='label text-muted-foreground'>Awards</h3>
					<ul className='mt-2'>
						{awards.map((award, i) => (
							<ScrollReveal
								key={award.title}
								delay={i * 80}
								className='border-t border-border py-5'>
								<li>
									<h4 className='subheading text-foreground'>
										{award.title}
									</h4>
									<div className='mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1'>
										<span className='caption text-muted-foreground'>
											{award.org}
										</span>
										<span className='mono text-primary'>{award.year}</span>
									</div>
									{award.note && (
										<p className='caption mt-2 max-w-prose text-muted-foreground'>
											{award.note}
										</p>
									)}
								</li>
							</ScrollReveal>
						))}
					</ul>
				</ScrollReveal>

				{/* BLOCK B — Certificates */}
				<ScrollReveal delay={120}>
					<h3 className='label text-muted-foreground'>Certificates</h3>
					<ul className='mt-2'>
						{certificates.map((cert, i) => (
							<ScrollReveal
								key={cert.title}
								delay={i * 80}
								className='border-t border-border py-5'>
								<li>
									<h4 className='subheading text-foreground'>{cert.title}</h4>
									<p className='caption mt-2 text-muted-foreground'>
										{cert.issuer}
									</p>
									{cert.meta && (
										<p className='mono mt-1 text-sm text-muted-foreground'>
											{cert.meta}
										</p>
									)}
								</li>
							</ScrollReveal>
						))}
					</ul>
				</ScrollReveal>
			</div>
		</Section>
	);
}
