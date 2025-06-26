import PageHeader from "@/components/page-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ConnectSection from "@/components/connect-section";
import PageFooter from "@/components/page-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <PageHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <PageFooter />
    </div>
  );
}
