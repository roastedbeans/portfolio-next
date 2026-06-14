import Image from 'next/image';
import { Section, SectionHeading } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { CircleArrow } from '@/components/site/CircleArrow';
import { Tag } from '@/components/site/Tag';
import { projects, type Project } from '@/content/portfolio';

export function Projects() {
	const featured = projects.filter(
		(p): p is Project & { image: string } => Boolean(p.image),
	);
	const more = projects.filter((p) => !p.image);

	return (
		<Section id='work'>
			<SectionHeading
				label='Selected Work'
				title="Things I've built"
				aside="Full-stack products I've designed and shipped, from conference and event platforms to booking systems and AI tools."
			/>

			{/* Featured — image-led cards */}
			<ul className='grid gap-6 sm:grid-cols-2'>
				{featured.map((project, i) => (
					<ScrollReveal
						key={project.name}
						delay={(i % 2) * 80}
						className='h-full'>
						<li className='h-full list-none'>
							<article className='group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_24px_50px_-28px_rgba(20,19,18,0.28)]'>
								{project.href && (
									<a
										href={project.href}
										target='_blank'
										rel='noreferrer'
										aria-label={`Visit ${project.name}`}
										className='absolute inset-0 z-10'
									/>
								)}

								{/* Mockup stage */}
								<div className='relative overflow-hidden bg-secondary p-5 sm:p-7'>
									<Image
										src={project.image}
										alt={`${project.name} interface`}
										width={2880}
										height={1800}
										sizes='(max-width: 640px) 100vw, 45vw'
										priority={i === 0}
										className='h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]'
									/>
									<span className='absolute right-4 top-4'>
										<CircleArrow size='sm' />
									</span>
								</div>

								{/* Meta */}
								<div className='flex flex-1 flex-col p-7'>
									<div className='flex items-center justify-between gap-3'>
										<span className='label text-primary'>
											{project.category}
										</span>
										<span className='mono text-sm text-muted-foreground'>
											{project.year}
										</span>
									</div>

									<h3 className='subheading mt-3 text-foreground'>
										{project.name}
									</h3>

									{project.award && (
										<p className='mt-3'>
											<span className='tag inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-primary'>
												{project.award}
											</span>
										</p>
									)}

									<p className='body mt-3 flex-1 text-muted-foreground'>
										{project.description}
									</p>

									<ul className='mt-6 flex flex-wrap gap-2'>
										{project.stack.map((tech) => (
											<li key={tech}>
												<Tag>{tech}</Tag>
											</li>
										))}
									</ul>
								</div>
							</article>
						</li>
					</ScrollReveal>
				))}
			</ul>

			{/* More projects — compact list */}
			{more.length > 0 && (
				<div className='mt-16 sm:mt-20'>
					<ScrollReveal>
						<h3 className='label text-muted-foreground'>More projects</h3>
					</ScrollReveal>
					<ul className='mt-4'>
						{more.map((project, i) => (
							<ScrollReveal key={project.name} delay={i * 60}>
								<li className='grid gap-x-8 gap-y-3 border-t border-border py-7 md:grid-cols-[1fr_auto] md:items-start'>
									<div className='max-w-2xl'>
										<div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
											<h4 className='subheading text-foreground'>
												{project.name}
											</h4>
											<span className='mono text-sm text-muted-foreground'>
												{project.year}
											</span>
										</div>
										<p className='label mt-1 text-primary'>
											{project.category}
										</p>
										{project.award && (
											<p className='mt-3'>
												<span className='tag inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-primary'>
													{project.award}
												</span>
											</p>
										)}
										<p className='body mt-3 text-muted-foreground'>
											{project.description}
										</p>
									</div>
									<ul className='flex flex-wrap gap-2 md:justify-end'>
										{project.stack.map((tech) => (
											<li key={tech}>
												<Tag>{tech}</Tag>
											</li>
										))}
									</ul>
								</li>
							</ScrollReveal>
						))}
					</ul>
				</div>
			)}
		</Section>
	);
}
