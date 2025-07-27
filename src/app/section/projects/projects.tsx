import { GoGoal } from "react-icons/go";
import { ProjectCard } from "./project-card";
import { data } from "./data";
export default function Project() {
    return (
        <section className="mx-8 lg:mx-36 mt-20">
            <div className="text-3xl text-left">
                <h1 className="inline-flex gap-2"><span className="text-indigo-500"><GoGoal /></span>My <span className="font-bold">Project</span></h1>
                <p className="text-gray-500 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="mt-10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {data.map((project, id) => (
                <ProjectCard
                  key={id}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.tags}
                  image={project.image}
                //   video={project.video}
                  links={project.links}
                />
            ))}
          </div>
            </div>
        </section>
    );
}