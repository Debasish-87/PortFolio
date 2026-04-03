import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <OpenSource />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
