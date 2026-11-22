import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Awards } from "@/components/Awards";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";

// One page, but a real framework build: every section is its own
// component, content lives in lib/data.ts, and motion is split by owner
// (GSAP owns these Reveal wrappers; scramble/number/tilt own their nodes).
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <GitHubActivity />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Certifications />
        </Reveal>
        <Reveal>
          <Awards />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
