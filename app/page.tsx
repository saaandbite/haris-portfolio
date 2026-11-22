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
import { Marquee } from "@/components/motion/Marquee";

// One page, but a real framework build: every section is its own
// component, content lives in lib/data.ts, and motion is split by owner
// (GSAP owns these Reveal wrappers; scramble/number/tilt/word-reveal
// own their nodes). The Marquee strip sits right under the hero so
// motion is visible within the first screen, on phone and desktop.
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Reveal delay={0}>
          <About />
        </Reveal>
        <Reveal delay={0.05}>
          <Projects />
        </Reveal>
        <Reveal delay={0.05}>
          <GitHubActivity />
        </Reveal>
        <Reveal delay={0.05}>
          <Experience />
        </Reveal>
        <Reveal delay={0.05}>
          <Education />
        </Reveal>
        <Reveal delay={0.05}>
          <Certifications />
        </Reveal>
        <Reveal delay={0.05}>
          <Awards />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
