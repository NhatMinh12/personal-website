"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    category: "fullstack",
    name: "Athletic Data Dashboard",
    description: "A comprehensive dashboard designed to track and analyze athletic performance data, providing insights for athletes and coaches",
    link: "/",
    github: "/",
  },
  {
    category: "fullstack",
    name: "SStrong",
    description: "An emergency response website built at MHacks 15 featuring Twilio, Firebase, OpenStreetMap, and Google Cloud",
    link: "https://github.com/nguyenhuykhang/SStrong-",
    github: "https://github.com/nguyenhuykhang/SStrong-",
  },
  {
    category: "fullstack",
    name: "Club Fair 2021",
    description: "A full-stack application to organize my high school's annual Club Fair, featuring interactive schedules and club information",
    link: "https://clubfair2021.web.app/",
    github: "https://github.com/NhatMinh12/ClubFair2021",
  },
  {
    category: "vanilla js",
    name: "Ams' Got Talent XIII",
    description: "An event management platform to handle registrations, voting, and results for the Ams' Got Talent XIII competition",
    link: "http://ams-got-talent-official.vercel.app/",
    github: "https://github.com/trangiabach/ams-got-talent-official",
  },
  {
    category: "react js",
    name: "Web Reader Extension",
    description: "A browser extension using GPT-3.5 model to provide contextual information, summaries, and clarifications about the current webpage",
    link: "https://github.com/NhatMinh12/Web-Reader-Extension",
    github: "https://github.com/NhatMinh12/Web-Reader-Extension",
  },
  {
    category: "next js",
    name: "Personal Website",
    description: "My personal portfolio website showcasing my projects, skills, and experiences, built with Next JS for optimal scalability",
    link: "/",
    github: "https://github.com/NhatMinh12/personal-website",
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
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
                return <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
    // flex flex-col gap-y-4
  );
};

export default Projects;
