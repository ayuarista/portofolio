import { GoGoal } from "react-icons/go";
import ExperienceCard from "./experience-card";
import { data } from "./experience-data";
import { AuroraText } from "@/components/magicui/aurora-text";
export default function Experience() {
    return (
        <section className="mx-8 lg:mx-36 mt-20">
            <div className="text-3xl text-left">
                <h1 className="inline-flex gap-2"><span className="text-indigo-500"><GoGoal /></span>My <span className="font-bold">Experience</span></h1>
                <p className="text-gray-500 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="mt-10">
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {data.map((project, id) => (
                  <ExperienceCard
                    key={id}
                    initial={project.initial}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    image={project.image}
                    // links={project.links}
                  />
              ))}
            </ul>
            </div>
        </section>
    );
}


