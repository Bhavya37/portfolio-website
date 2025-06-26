import { GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const timeline = [
    {
      icon: <GraduationCap />,
      date: "Present",
      title: "B.Tech in CSE + AI",
      description: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    },
    {
      icon: <Briefcase />,
      date: "Ongoing",
      title: "Learning & Building",
      description: "Building projects with a focus on full-stack development, while diving deep into Data Structures (C++) and exploring AI/Cybersecurity concepts.",
    },
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-12 duration-500">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a proactive B.Tech student specializing in CSE with a focus on AI, I am passionate about the intersection of technology, security, and innovation. My journey is driven by a strong curiosity for Cybersecurity and Ethical Hacking, which I complement with a rigorous practice in Data Structures & Algorithms using C++. I thrive on building efficient, scalable software and solving complex problems to create impactful solutions.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="animate-in fade-in zoom-in-75 duration-500 delay-150">
              <Image
                src="https://placehold.co/300x300.png"
                width={300}
                height={300}
                alt="Bhavya Singh"
                className="rounded-full object-cover border-4 border-primary/30 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20"
                data-ai-hint="portrait woman"
              />
            </div>
            <div className="flex flex-col gap-6 w-full max-w-md">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-card border-primary/20 animate-in fade-in slide-in-from-right-12 duration-500 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2" style={{animationDelay: `${index * 150 + 300}ms`}}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <CardTitle className="text-lg font-headline">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
