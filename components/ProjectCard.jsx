// import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
      <div className="flex gap-x-4">
        <Link href={project.link}>
            <RiLink />
        </Link>
        <Link href={project.github}>
            <RiGithubLine />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
