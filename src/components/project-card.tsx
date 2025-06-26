"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, PlayCircle, BrainCircuit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

interface ProjectCardProps {
  repo: Repo;
  index: number;
}

const ProjectCard = ({ repo, index }: ProjectCardProps) => {
  const { toast } = useToast();

  const handleAiSummary = () => {
    toast({
      title: "AI Feature Coming Soon!",
      description: "Personalized project summaries are currently in development.",
    });
  };
  
  // Format repository name: replace hyphens/underscores with spaces and capitalize words
  const formattedName = repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());


  return (
    <Card className="flex flex-col bg-background border-primary/20 hover:border-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-12" style={{animationDelay: `${index * 150}ms`}}>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{formattedName}</CardTitle>
        <CardDescription className="text-foreground/70 h-12">
          {repo.description || "No description available."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {repo.topics && repo.topics.length > 0 ? (
            repo.topics.map((topic) => (
              <Badge key={topic} variant="outline" className="border-accent text-accent">
                {topic}
              </Badge>
            ))
          ) : (
            <Badge variant="secondary">No Topics</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-end">
        <Button variant="ghost" size="sm" onClick={handleAiSummary}>
          <BrainCircuit className="mr-2 h-4 w-4" />
          AI Summary
        </Button>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              <PlayCircle className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
