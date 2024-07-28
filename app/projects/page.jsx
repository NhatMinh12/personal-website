"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    category: "fullstack",
    name: "Dashboard for Tennis and Volleyball Coaches",
    description: "megafone",
    link: "/",
    github: "/",
  },
  {
    category: "react js",
    name: "SStrong",
    description: "telefone",
    link: "/",
    github: "/",
  },
  {
    category: "fullstack",
    name: "Club Fair 2021",
    description: "gianluigi buffon",
    link: "/",
    github: "/",
  },
  {
    category: "vanilla js",
    name: "Ams' Got Talent XIII",
    description: "womp womp womp womp womp",
    link: "/",
    github: "/",
  },
  {
    category: "react js",
    name: "Web Reader Extension",
    description: "dot fuck em up",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex flex-col gap-y-4">
            {filteredProjects.map((project, index) => {
                return <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
