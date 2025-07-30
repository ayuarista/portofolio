import { ProjectCard } from "./project-card";
import { data } from "./data";

export default function Project() {
  return (
    <section className="mx-8 lg:mx-36 mt-10" id="projects">

      <div className="text-4xl text-center">
        <h1 className="font-bold">Check out my latest project! </h1>
        <p className="text-gray-500 text-sm w-1/2 mt-2 mx-auto text-center">
          Here are some of the projects I have worked on recently. Each project showcases my skills and creativity in web development and design.
        </p>
      </div>

      <div className="mt-8">
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