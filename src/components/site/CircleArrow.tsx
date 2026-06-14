import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SIZES = {
	sm: { box: 'size-9', icon: 'size-4' },
	md: { box: 'size-12', icon: 'size-5' },
	lg: { box: 'size-16', icon: 'size-6' },
} as const;

/**
 * Signature circular arrow button (reference design). Decorative <span> —
 * place inside a link/card with a `group` class; the arrow rotates on hover.
 */
export function CircleArrow({
	size = 'md',
	className,
}: {
	size?: keyof typeof SIZES;
	className?: string;
}) {
	const s = SIZES[size];
	return (
		<span
			aria-hidden
			className={cn(
				'inline-flex shrink-0 items-center justify-center rounded-full bg-foreground text-background transition duration-300 ease-out group-hover:rotate-45 group-hover:opacity-90',
				s.box,
				className,
			)}>
			<ArrowUpRight className={s.icon} />
		</span>
	);
}
