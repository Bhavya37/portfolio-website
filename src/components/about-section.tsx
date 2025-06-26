import { GraduationCap, Briefcase } from "lucide-react";
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
      description: "Focusing on Data Structures (C++), Problem Solving, AI Fundamentals, and Cybersecurity.",
    },
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hey there 👋 I’m Bhavya Singh, a B.Tech CSE + AI student from AKTU. I’m diving deep into AI fundamentals, and have a burning curiosity for Cybersecurity & Ethical Hacking. Currently focused on Data Structures (C++), while building strong foundations in problem solving and software development.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="bg-card border-primary/20 animate-in fade-in slide-in-from-right-12 duration-500" style={{animationDelay: `${index * 150}ms`}}>
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
    </section>
  );
};

export default AboutSection;
