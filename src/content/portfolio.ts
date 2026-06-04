/**
 * Single source of truth for the portfolio.
 * All section components read from this file — update content here only.
 * Privacy: personal phone number and references are intentionally omitted.
 */

export interface SocialLink {
	label: string;
	href: string;
	handle: string;
}

export interface NavItem {
	label: string;
	href: string;
}

export interface ExperienceItem {
	role: string;
	company: string;
	href?: string;
	location: string;
	period: string;
	current?: boolean;
	tags: string[];
	highlights: string[];
}

export interface Stat {
	value: string;
	label: string;
}

export interface Project {
	name: string;
	href?: string;
	category: string;
	year: string;
	location?: string;
	award?: string;
	image?: string;
	stack: string[];
	description: string;
}

export interface SkillGroup {
	title: string;
	items: string[];
}

export interface EducationItem {
	degree: string;
	school: string;
	href?: string;
	location: string;
	period: string;
}

export interface Award {
	title: string;
	org: string;
	year: string;
	note?: string;
}

export interface Certificate {
	title: string;
	issuer: string;
	meta?: string;
}

export interface Organization {
	name: string;
	role: string;
	href?: string;
	location: string;
	period: string;
	note?: string;
	highlight?: boolean;
}

export const profile = {
	name: 'Vincent Dominguito Abella',
	shortName: 'Vincent Abella',
	initials: 'VA',
	role: 'Software Developer & Cybersecurity Researcher',
	locations: ['Cebu, Philippines', 'Seoul, South Korea'],
	available: true,
	tagline:
		'I build independent web products and secure next-generation 4G/5G mobile networks.',
	bio: 'I build independent web products and research the security of 4G/5G mobile networks, leading teams and shipping solutions that make a meaningful impact.',
	email: 'vinceabella05@gmail.com',
	cv: '/assets/portfolio.pdf',
	greeting: 'Hello',
	intro:
		"I'm Vincent Abella, a software developer and cybersecurity researcher.",
	stats: [
		{ value: '4+', label: 'Years building' },
		{ value: '6', label: 'Projects shipped' },
		{ value: '4', label: 'Awards won' },
	] as Stat[],
	facts: [
		'MS Cybersecurity, Kookmin University, Seoul',
		'Researcher, Mobile Internet Security Lab',
		'Co-lead, OWASP Cebu Chapter',
		'Based between Cebu & Seoul',
	],
};

export const socials: SocialLink[] = [
	{ label: 'Email', href: 'mailto:vinceabella05@gmail.com', handle: 'vinceabella05@gmail.com' },
	{ label: 'GitHub', href: 'https://github.com/roastedbeans', handle: 'roastedbeans' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinch05/', handle: 'in/vinch05' },
];

export const navItems: NavItem[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Work', href: '#work' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
];

export const experience: ExperienceItem[] = [
	{
		role: 'Cybersecurity Researcher',
		company: 'Mobile Internet Security Lab',
		tags: ['5G / LTE', 'Android', 'Kubernetes', 'Security'],
		location: 'Seoul, South Korea',
		period: '2024–Present',
		current: true,
		highlights: [
			"Developed a testbed generating datasets for integrated authentication in South Korea's financial services and tested intrusion-detection systems.",
			'Built a 5G global-roaming testbed in a Kubernetes cloud environment using Open5GS and PacketRusher.',
			'Developed an Android app collecting signal strength and layer-3 protocol data from 4G/5G networks on rooted Android 11+ devices.',
			'Built an Android app detecting false base stations using specification-based and AI-based intrusion-detection systems.',
		],
	},
	{
		role: 'Web Chair',
		company: 'EBISION (IFIP WG 8.4)',
		tags: ['Next.js', 'Full-Stack', 'Dashboard'],
		href: 'https://ebision.ifip-wg84.org/',
		location: 'Seoul, South Korea',
		period: '2025–Present',
		current: true,
		highlights: [
			'Designed and developed the website for the EBISION IFIP WG 8.4 international conference.',
			'Built the conference-management system: analytics dashboard, paper submissions, payments, attendance, online poster, email notifications, and certificate generation.',
		],
	},
	{
		role: 'Web Developer',
		company: 'Techflow.ai',
		tags: ['WeWeb', 'OpenAI', 'No-Code'],
		location: 'Germany (Remote)',
		period: '2024–Present',
		current: true,
		highlights: [
			'Developed a full-stack no-code dashboard with WeWeb to manage an internal payment system.',
			'Built a full-stack e-commerce website using WeWeb, Make automations, and OpenAI.',
		],
	},
	{
		role: 'Full-Stack Software Engineer',
		company: 'Mod Technologies LLC',
		tags: ['Next.js', 'TypeScript', 'GraphQL'],
		location: 'New Hudson, Michigan, USA (Remote)',
		period: '2024–2025',
		highlights: [
			'Developed frontend and backend features for the business website using Next.js, TypeScript, and Tailwind CSS with responsive design across platforms.',
			'Migrated a legacy React.js codebase to the Next.js framework.',
			'Integrated GraphQL queries into the frontend application.',
		],
	},
	{
		role: 'Web Developer',
		company: "Today's Carolinian",
		tags: ['Nuxt.js', 'PrimeVue'],
		location: 'Cebu City, Philippines',
		period: '2023–2024',
		highlights: [
			'Developed the frontend of the intramurals sports-scoring system using Nuxt.js, PrimeVue, and Tailwind CSS with responsive design across platforms.',
		],
	},
	{
		role: 'Digital Solutions Specialist (Internship)',
		company: 'CodeLikeUs Technologies, Inc.',
		tags: ['Automation', 'Networking'],
		location: 'Cebu City, Philippines',
		period: '2024',
		highlights: [
			'Developed an automation script for an inventory-tracking system.',
			'Provided network-setup solutions for in-store devices.',
		],
	},
	{
		role: 'Freelance Web Developer',
		company: 'Virgorous',
		tags: ['Next.js', 'NextUI'],
		location: 'Cebu City, Philippines',
		period: '2023',
		highlights: [
			'Built an admin interface using Next.js, TypeScript, NextUI, and Tailwind CSS with responsive design for multiple platforms.',
			'Resolved application bugs and maintained codebase stability.',
		],
	},
	{
		role: 'Software Developer',
		company: 'Purple Cow',
		tags: ['React', 'Material UI', 'Figma'],
		location: 'Cebu City, Philippines',
		period: '2023',
		highlights: [
			'Developed frontend architecture using React.js, TypeScript, Tailwind CSS, and Material UI with responsive design across platforms.',
			'Designed UI/UX in Figma.',
		],
	},
];

export const projects: Project[] = [
	{
		name: 'Archway',
		category: 'Conference Management Platform',
		year: '2025',
		location: 'Seoul, South Korea',
		image: '/projects/archway-project.png',
		stack: ['Next.js', 'TypeScript', 'Supabase'],
		description:
			'A conference-management system supporting research organizations across the full workflow: paper submissions, peer review, payments, analytics, email notifications, QR-based attendance, certificate generation, and session scheduling.',
	},
	{
		name: 'Chelo',
		category: 'Event Organization Platform',
		year: '2024',
		location: 'Cebu City, Philippines',
		image: '/projects/chelo-project.png',
		stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Supabase'],
		description:
			'A full-stack event-organization platform letting organizers create custom registration forms and process participant payments end to end.',
	},
	{
		name: 'EBISION 2025',
		href: 'https://ebision.ifip-wg84.org/',
		category: 'Conference Website & System',
		year: '2025',
		location: 'Seoul, South Korea',
		image: '/projects/ebision-project.png',
		stack: ['Next.js', 'TypeScript', 'Dashboard'],
		description:
			'The official site and management system for the EBISION IFIP WG 8.4 international symposium: paper submissions, payments, QR check-in, online posters, and certificate generation.',
	},
	{
		name: 'OWASP Cebu',
		category: 'Community Website',
		year: '2024',
		location: 'Cebu City, Philippines',
		image: '/projects/owasp-project.png',
		stack: ['Next.js', 'Tailwind CSS', 'Security'],
		description:
			'The website for the OWASP Cebu chapter, a local community dedicated to web-application security, showcasing chapter projects, events and workshops, and security resources.',
	},
	{
		name: 'Project Taytayan',
		category: 'Social-Impact Web App',
		year: '2024',
		location: 'Cebu City, Philippines',
		award: 'Google Solutions Challenge 2024',
		stack: ['Next.js', 'Flowbite React', 'Firebase Firestore'],
		description:
			'A web application centralizing training, workshops, and employment opportunities for out-of-school youth, with an admin dashboard offering full CRUD over Firebase Firestore.',
	},
	{
		name: 'EZ-Forms',
		category: 'AI Form Automation',
		year: '2023',
		location: 'Cebu City, Philippines',
		stack: ['Next.js', 'OpenAI', 'shadcn/ui'],
		description:
			'A full-stack application that automates generation of activity forms, cutting manual creation time with dynamic form-generation logic driven by configurable templates.',
	},
	{
		name: 'BOOKIP',
		category: 'Booking & Finance System',
		year: '2023',
		location: 'Surigao City, Philippines',
		stack: ['React.js', 'Node.js', 'Express', 'MySQL', 'shadcn/ui'],
		description:
			'A full-stack booking system for small-business lodging houses with automated reservation management and a financial-tracking module covering transaction history, cashflow monitoring, and tax calculation.',
	},
	{
		name: 'Grocery Optimization Simulation',
		category: 'ML Research Simulation',
		year: '2023',
		location: 'Cebu City, Philippines',
		stack: ['Unity', 'C#', 'Python'],
		description:
			'A top-down supermarket simulation integrated with a machine-learning-driven sorting algorithm over socket communication, with Python-generated performance graphs validating efficiency across shopping scenarios.',
	},
];

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		items: ['TypeScript', 'JavaScript', 'Python', 'C', 'C#', 'PHP'],
	},
	{
		title: 'Frontend',
		items: ['React.js', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'Material UI', 'PrimeVue'],
	},
	{
		title: 'Backend',
		items: ['Node.js', 'Express.js', 'Laravel', 'GraphQL', 'Apollo Client/Server'],
	},
	{
		title: 'Mobile',
		items: ['Native Android', 'Rooted Devices', 'Qualcomm Baseband', 'Chaquopy', 'Security Policies'],
	},
	{
		title: 'Networking & Security',
		items: [
			'4G / 5G Networks',
			'LTE',
			'Kubernetes',
			'Telecom Core Networks',
			'Intrusion Detection',
			'AI Threat Detection',
			'False Base Station Detection',
			'IPv4 / IPv6',
		],
	},
	{
		title: 'Databases',
		items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
	},
	{
		title: 'Tools & Methods',
		items: ['Git', 'GitHub', 'Agile', 'Notion', 'Trello', 'Unity', 'AI Model Testing'],
	},
	{
		title: 'Core Concepts',
		items: ['Data Structures', 'Algorithms', 'Embedded Systems', 'Computer Architecture'],
	},
];

export const education: EducationItem[] = [
	{
		degree: 'MS in Cybersecurity',
		school: 'Kookmin University',
		href: 'https://www.kookmin.ac.kr/',
		location: 'Seoul, South Korea',
		period: '2024–Present',
	},
	{
		degree: 'BS in Computer Engineering',
		school: 'University of San Carlos',
		href: 'https://www.usc.edu.ph/',
		location: 'Cebu City, Philippines',
		period: 'Present',
	},
];

export const awards: Award[] = [
	{
		title: '1st Place, GDSC Visayas Solve 2024',
		org: 'Google Developer Student Clubs Visayas',
		year: '2024',
	},
	{
		title: '1st Place, Startup Weekend Bohol 2024',
		org: 'Startup Weekend Bohol',
		year: '2024',
		note: 'A 54-hour event for forming teams, building products, and launching businesses.',
	},
	{
		title: '1st Place, Regional ICpEP Quiz Bowl',
		org: 'Institute of Computer Engineers of the Philippines',
		year: '2023',
	},
	{
		title: 'Best Poster Paper',
		org: '8th International Conference on Mobile Internet Security',
		year: '2024',
	},
];

export const certificates: Certificate[] = [
	{
		title: 'Graph Developer, Associate',
		issuer: 'Apollo GraphQL',
		meta: 'GraphQL · schema design · useQuery hooks',
	},
	{
		title: 'CCNA: Introduction to Networks',
		issuer: 'Cisco',
		meta: 'Jan 2023',
	},
	{
		title: 'Fundamentals of Digital Marketing',
		issuer: 'Google Digital Garage',
		meta: 'Apr 2023',
	},
];

export const organizations: Organization[] = [
	{
		name: 'OWASP Cebu',
		role: 'Co-lead',
		location: 'Cebu City, Philippines',
		period: 'Present',
		note: 'Local community chapter dedicated to web-application security.',
		highlight: true,
	},
	{
		name: 'CoDE, University of San Carlos',
		role: 'Events Coordinator · Frontend Web · VEX',
		location: 'Cebu City, Philippines',
		period: '2023–Present',
	},
	{
		name: "Today's Carolinian",
		role: 'Web Developer',
		location: 'Cebu City, Philippines',
		period: '2023–Present',
	},
	{
		name: 'USC Computer Engineering Council',
		role: 'Councilor',
		location: 'Cebu City, Philippines',
		period: '2022–2023',
	},
];
