import Hero from "@/components/hero";
import Bio from "@/components/bio";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Bio />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}