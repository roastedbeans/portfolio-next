import { cn } from '@/lib/utils';

export function Tag({
	className,
	children,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'tag inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:text-foreground',
				className,
			)}
			{...props}>
			{children}
		</span>
	);
}
