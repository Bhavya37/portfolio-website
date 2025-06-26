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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary animate-in fade-in slide-in-from-bottom-12 duration-500">
              About Me
            </h2>
            <div className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-4">
              <p className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: '150ms' }}>
                  As a proactive B.Tech student specializing in CSE with a focus on AI, I am passionate about the intersection of technology, security, and innovation.
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: '250ms' }}>
                  My journey is driven by a strong curiosity for Cybersecurity and Ethical Hacking, complemented by a rigorous practice in Data Structures & Algorithms using C++.
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: '350ms' }}>
                  I thrive on building efficient, scalable software and solving complex problems to create impactful solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-8">
            <div className="flex justify-center animate-in fade-in zoom-in-75 duration-500 delay-300">
              <Image
                src="/profile.jpg"
                width={400}
                height={400}
                alt="Bhavya Singh"
                className="rounded-full object-cover border-4 border-primary/30 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-primary/20"
              />
            </div>
            <div className="w-full max-w-md space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-card border-primary/20 animate-in fade-in slide-in-from-bottom-12 duration-500 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2" style={{animationDelay: `${index * 150 + 500}ms`}}>
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
