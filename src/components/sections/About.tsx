import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { profile } from '@/content/portfolio';

const ACCENT_PHRASE = 'meaningful impact.';

export function About() {
	const accentIndex = profile.bio.lastIndexOf(ACCENT_PHRASE);
	const lead = accentIndex >= 0 ? profile.bio.slice(0, accentIndex) : profile.bio;
	const accent = accentIndex >= 0 ? profile.bio.slice(accentIndex) : '';

	return (
		<Section id='about' className='pt-10! sm:pt-14! lg:pt-16!'>
			<SectionHeading index='01' label='About' />

			<ScrollReveal delay={0}>
				<p className='heading max-w-4xl text-balance font-normal text-foreground'>
					{lead}
					{accent && <span className='text-primary'>{accent}</span>}
				</p>
			</ScrollReveal>

			<ScrollReveal delay={160} className='mt-14 lg:mt-20'>
				<ul className='grid border-border sm:grid-cols-2'>
					{profile.facts.map((fact) => (
						<li
							key={fact}
							className='flex items-start gap-3 border-t border-border py-4'>
							<span className='label mt-1 text-primary' aria-hidden>
								/
							</span>
							<span className='body text-foreground'>{fact}</span>
						</li>
					))}
				</ul>
			</ScrollReveal>
		</Section>
	);
}
