import { ArrowRight, ArrowDownToLine } from 'lucide-react';
import { Section } from '@/components/site/Section';
import { ScrollReveal } from '@/components/site/ScrollReveal';
import { profile } from '@/content/portfolio';

export function Contact() {
	return (
		<Section id='contact'>
			<ScrollReveal className='mx-auto flex max-w-2xl flex-col items-center text-center'>
				<div className='flex items-center gap-2.5'>
					<span className='size-2 rounded-full bg-primary' aria-hidden />
					<span className='label text-muted-foreground'>Contact</span>
				</div>

				<h2 className='title mt-6 text-balance text-foreground'>
					Got a project or role in mind? Let&apos;s build it.
				</h2>

				<p className='lead mt-5 text-pretty text-muted-foreground'>
					I&apos;m open to software roles, research collaborations, and
					freelance work, wherever good engineering makes an impact.
				</p>

				<div className='mt-9 flex flex-wrap justify-center gap-4'>
					<a
						href={profile.linkedin}
						target='_blank'
						rel='noreferrer'
						className='group label inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-background transition hover:opacity-90'>
						Get in touch
						<ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5' />
					</a>
					<a
						href={profile.cv}
						target='_blank'
						rel='noreferrer'
						className='group label inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-foreground transition-colors hover:border-foreground/40'>
						Download CV
						<ArrowDownToLine className='size-4 transition-transform group-hover:translate-y-0.5' />
					</a>
				</div>
			</ScrollReveal>
		</Section>
	);
}
