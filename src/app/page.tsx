import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Recognition } from '@/components/sections/Recognition';
import { Community } from '@/components/sections/Community';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Recognition />
				<Community />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
