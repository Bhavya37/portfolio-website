import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, BrainCircuit, Shield } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["C++", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    skills: ["React", "Node.js"],
  },
  {
    category: "Tools",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "MySQL", "VS Code"],
  },
  {
    category: "Interests",
    icon: <Shield className="h-8 w-8 text-primary" />,
    skills: [ "AI", "ML", "DSA" , "Emerging AI Trends],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          My Tech Arsenal
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              className="bg-card border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {skillGroup.icon}
                <CardTitle className="text-2xl font-headline">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
