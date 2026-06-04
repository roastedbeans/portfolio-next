import { Section, SectionHeading } from '@/components/site/Section';
import { Tag } from '@/components/site/Tag';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { skillGroups } from '@/content/portfolio';

export function Skills() {
	return (
		<Section id='skills'>
			<SectionHeading
				index='04'
				label='Capabilities'
				title='Skills & tools'
			/>

			<div className='grid gap-x-12 gap-y-10 sm:grid-cols-2'>
				{skillGroups.map((group, i) => (
					<ScrollReveal key={group.title} delay={i * 80}>
						<h3 className='label mb-4 border-b border-border pb-3 text-primary'>
							{group.title}
						</h3>
						<ul className='flex flex-wrap gap-2'>
							{group.items.map((item) => (
								<li key={item}>
									<Tag>{item}</Tag>
								</li>
							))}
						</ul>
					</ScrollReveal>
				))}
			</div>
		</Section>
	);
}
