import { ProjectCard } from "./project-card";
import { data } from "./data";
import Link from "next/link";
import { SiNounproject } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Project() {
  return (
    <section className="mx-8 lg:mx-36 mt-10" id="projects">

      <div className="text-4xl text-center">
        <SiNounproject className="inline-block text-7xl text-indigo-500" />
        <h1 className="">My Latest <span className="font-bold">Project</span></h1>
        <p className="text-gray-500 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {data.map((project, id) => (
            <ProjectCard
              key={id}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.tags}
              image={project.image}
              links={project.links}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="mt-5 mb-5">
          <Link href="/more-projects">
            See more projects!
          </Link>
        </Button>
      </div>
    </section>
  );
}