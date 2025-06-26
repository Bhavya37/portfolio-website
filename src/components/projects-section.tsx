"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./project-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Bhavya37/repos?sort=pushed&per_page=8");
        if (!response.ok) {
          throw new Error("Failed to fetch projects from GitHub.");
        }
        const data = await response.json();
        
        const excludedRepos = ["kaizentechcult", "Bhavya37"];
        const filteredRepos = data
          .filter((repo: Repo) => !excludedRepos.includes(repo.name))
          .slice(0, 6);

        setRepos(filteredRepos);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          My Creations
        </h2>
        
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-4 p-4 rounded-lg border">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <div className="flex gap-2 mt-2">
                   <Skeleton className="h-10 w-28" />
                   <Skeleton className="h-10 w-28" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
            <Alert variant="destructive" className="max-w-lg mx-auto">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error Fetching Projects</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {!loading && !error && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index}/>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
