import { MarqueeSkills } from "./marquee-skills"
import { BsFire } from "react-icons/bs";
import Image from "next/image";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function AboutMe() {
    return (
        <section id="about-me" className="mx-8 lg:mx-36 mt-10">
            <div className="mt-7 flex flex-col gap-4">
                <div className="text-3xl text-left flex items-center gap-2 ">
                    <span className="text-indigo-500 text-4xl">
                        <BsFire />
                    </span>
                    <span className="">
                        My <b className="font-bold">Skills</b>
                    </span>
                </div>
                <MarqueeSkills />
            </div>


            <section className="mt-16">
                <h1 className="text-3xl mb-6">
                    About <b className="font-bold text-indigo-500">Me!</b>
                </h1>

                <div className="grid grid-cols-3 grid-rows-2 gap-3 auto-rows-fr">
                    <div className="row-span-2 col-start-3 row-start-1 relative">
                        <div className="absolute -top-4 -right-4 w-full h-full rotate-2 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 dark:from-indigo-600 dark:via-blue-600 dark:to-cyan-500 -z-10"></div>
                        <Image
                            src="/profile.jpg"
                            width={330}
                            height={350}
                            alt="Profile picture"
                            className="object-cover w-full h-full rounded-xl"
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>

                    <div className="col-span-2 col-start-1 row-start-2 bg-muted rounded-xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        <p>
                            My journey in web development is fueled by a passion for technology and a desire to create intuitive digital experiences. As a junior developer, I am actively learning and exploring front-end technologies, with a strong motivation to transform creative ideas into functional, user-friendly web interfaces.
                        </p>
                    </div>

                    <div className="col-start-1 row-start-1 bg-muted rounded-xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        <h2 className="text-xl font-bold text-indigo-500 mb-1">
                            Student Developer
                        </h2>
                        <p className="text-pretty text-justify">
                            Dedicated grade 12 Software Engineering student at Vocational High School. Focused on building solid fundamentals in web development.
                        </p>
                    </div>

                    {/* 7. Tech stack */}
                    <div className="col-start-2 row-start-1 bg-muted rounded-xl p-6 text-sm md:text-base text-gray-700 dark:text-gray-300 flex flex-col justify-between">
                        <h2 className="text-xl font-bold text-indigo-500 mb-2">
                            Tech Stack
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React.js & Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                </div>
            </section>

        </section>
    )
}
