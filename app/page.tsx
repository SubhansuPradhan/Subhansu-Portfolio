import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import More from "@/components/More";
import Contact from "@/components/Contact";
import SceneBackground from "@/components/SceneBackground";

export default function Home() {
  return (
      <main id="top" className="relative">
      <SceneBackground />
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <More />
      <Contact />
    </main>
  );
}
