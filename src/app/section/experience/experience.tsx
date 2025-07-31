import { GoGoal } from "react-icons/go";
import ExperienceCard from "./experience-card";
import { data } from "./experience-data";
export default function Experience() {
    return (
        <section className="mx-8 lg:mx-36 mt-16" id="experience">
            <div className="text-2xl md:text-3xl text-left">
                <h1 className="inline-flex gap-2"><span className="text-indigo-500"><GoGoal /></span>My <span className="font-bold">Experience</span></h1>
                <p className="text-gray-500 text-sm md:text-base">
                    Here are some of the experiences I have gained through my work and projects.
                </p>
            </div>

            <div className="mt-8">
            <ul className="ml-4 divide-y-2 divide-dashed border-l">
              {data.map((experience, id) => (
                  <ExperienceCard
                    key={id}
                    initial={experience.initial}
                    title={experience.title}
                    description={experience.description}
                    dates={experience.dates}
                    image={experience.image}
                    links={experience.links}
                  />
              ))}
            </ul>
            </div>
        </section>
    );
}


