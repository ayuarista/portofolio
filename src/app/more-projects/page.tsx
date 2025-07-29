import { data } from "../section/projects/data";
import { ProjectCard } from "../section/projects/project-card";

export default function MoreProjects() {
  return (
    <section className="mx-8 lg:mx-36 mt-5">

      {/* <div className="text-4xl text-center">
        <h1 className="">My Latest <span className="font-bold">Project</span></h1>
        <p className="text-gray-500 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}

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
    </section>
  );
}