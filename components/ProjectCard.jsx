import Link from "next/link";
import { Card } from "./ui/card";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex items-center gap-x-4 border-blue-400">
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 top-4 left-5">
          {project.category}
        </Badge>
        <div className="flex gap-x-8 justify-between">
          <h4 className="h4 mb-1">{project.name}</h4>
          <div className="flex gap-x-8">
            <Link href={project.link}>
              <RiLink
                className="hover:text-primary transition-all text-foreground"
                size={28}
              />
            </Link>
            <Link href={project.github}>
              <RiGithubLine
                className="hover:text-primary transition-all text-foreground"
                size={28}
              />
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
