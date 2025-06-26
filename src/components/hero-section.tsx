import { Code, Cpu, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-12 duration-500">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Bhavya Singh
                </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto mb-6">
                B.Tech CSE + AI Student @ AKTU
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6 text-foreground/70">
                <div className="flex items-center gap-2">
                    <Cpu size={20} className="text-accent"/>
                    <span>Exploring AI</span>
                </div>
                <div className="h-6 w-px bg-border"></div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-accent"/>
                    <span>Cybersecurity</span>
                </div>
                <div className="h-6 w-px bg-border"></div>
                 <div className="flex items-center gap-2">
                    <Code size={20} className="text-accent"/>
                    <span>Building & Growing</span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
