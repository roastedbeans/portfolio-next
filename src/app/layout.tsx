import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const plexSans = IBM_Plex_Sans({
	variable: '--font-plex-sans',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
});

const plexMono = IBM_Plex_Mono({
	variable: '--font-plex-mono',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	display: 'swap',
});

// Academic serif — used for publication titles (same family as Sans/Mono).
const plexSerif = IBM_Plex_Serif({
	variable: '--font-plex-serif',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
	display: 'swap',
});

// Update to the production domain when deployed.
const siteUrl = 'https://vincentabella.dev';
const title = 'Vincent Abella · Software Developer & Cybersecurity Researcher';
const description =
	'Vincent Dominguito Abella, a software engineer and cybersecurity researcher building web products and securing 4G/5G networks. Based in Cebu, Philippines and Seoul, South Korea.';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: title,
		template: '%s · Vincent Abella',
	},
	description,
	keywords: [
		'Vincent Abella',
		'Software Developer',
		'Full-Stack Developer',
		'Cybersecurity Researcher',
		'Next.js',
		'React',
		'TypeScript',
		'5G Security',
		'Cebu',
		'Seoul',
	],
	authors: [{ name: 'Vincent Dominguito Abella' }],
	creator: 'Vincent Dominguito Abella',
	openGraph: {
		type: 'website',
		url: siteUrl,
		title,
		description,
		siteName: 'Vincent Abella',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
	},
	icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${plexSans.variable} ${plexMono.variable} ${plexSerif.variable}`}>
			<body className='antialiased'>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
