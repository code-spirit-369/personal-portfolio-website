import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact-me";
import Experiences from "@/components/experiences";

export default function Home() {
  return (
    <main>
      <section className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section className="snap-start">
        <Skills />
      </section>

      <section className="snap-start">
        <Experiences />
      </section>

      <section className="snap-start">
        <Projects />
      </section>

      <section className="snap-start">
        <ContactMe />
      </section>
    </main>
  );
}
