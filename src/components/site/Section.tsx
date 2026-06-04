import { cn } from '@/lib/utils';
import { Container } from './Container';
import { ScrollReveal } from './ScrollReveal';

export function Section({
	id,
	className,
	containerClassName,
	children,
	...props
}: React.ComponentProps<'section'> & { containerClassName?: string }) {
	return (
		<section
			id={id}
			className={cn('scroll-mt-24 py-20 sm:py-28 lg:py-36', className)}
			{...props}>
			<Container className={containerClassName}>{children}</Container>
		</section>
	);
}

interface SectionHeadingProps {
	/** Optional — kept for callers; not rendered in the dot style. */
	index?: string;
	label: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	/** Optional intro paragraph rendered to the right of the title (reference layout). */
	aside?: React.ReactNode;
	className?: string;
}

export function SectionHeading({
	label,
	title,
	description,
	aside,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn('mb-12 lg:mb-16', className)}>
			<ScrollReveal>
				<div className='flex items-center gap-2.5'>
					<span className='size-2 rounded-full bg-primary' aria-hidden />
					<span className='label text-muted-foreground'>{label}</span>
				</div>
			</ScrollReveal>

			{aside ? (
				<div className='mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12'>
					{title && (
						<ScrollReveal variant='heading' delay={90}>
							<h2 className='title max-w-2xl text-balance text-foreground'>
								{title}
							</h2>
						</ScrollReveal>
					)}
					<ScrollReveal delay={200}>
						<div className='body max-w-sm text-pretty text-muted-foreground md:pb-2'>
							{aside}
						</div>
					</ScrollReveal>
				</div>
			) : (
				<>
					{title && (
						<ScrollReveal variant='heading' delay={90} className='mt-6'>
							<h2 className='title max-w-3xl text-balance text-foreground'>
								{title}
							</h2>
						</ScrollReveal>
					)}
					{description && (
						<ScrollReveal delay={200} className='mt-5'>
							<p className='lead max-w-2xl text-pretty text-muted-foreground'>
								{description}
							</p>
						</ScrollReveal>
					)}
				</>
			)}
		</div>
	);
}
