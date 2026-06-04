import { cn } from '@/lib/utils';

export function Container({
	className,
	children,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn('mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10', className)}
			{...props}>
			{children}
		</div>
	);
}
