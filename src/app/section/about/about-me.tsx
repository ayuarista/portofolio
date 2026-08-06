import { MarqueeSkills } from "./marquee-skills"
import { FaRegFileCode } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about-me" className="mx-8 lg:mx-36 mt-12">
            <div className="mt-7 flex flex-col gap-4">
                <div className="text-2xl md:text-3xl text-left flex items-center gap-2 ">
                    <span className="text-indigo-500 text-4xl">
                        <BsFire />
                    </span>
                    <span className="">
                        About <b className="font-bold">Me!</b>
                    </span>
                </div>
            </div>
            <section className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                    <div className="col-span-3 col-start-1 row-start-1
                        rounded-xl p-5 text-justify text-sm/6 md:text-[15px]/7 border-gray-950/[.3] bg-gray-950/[.05] hover:bg-gray-950/[.07] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                        <p className="mt-2">
                            Hello! My name is Ayu Arista, a 12th grade student.
                            Throughout my studies, I have built a solid foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS, and I am also familiar with using GitHub and Figma for collaboration. <br />
                            I’ve worked on various projects, including UI/UX design, frontend development, and backend development. These experiences, along with participating in competitions, have given me valuable insights into how to turn ideas into functional digital solutions.
                            Looking forward, I aspire to grow as a Junior Developer while continuing to sharpen both my frontend and backend skills.
                        </p>
                    </div>
                    <div className="hidden md:block col-start-3 row-start-2 relative">
                        {/* <div className="absolute -top-4 -right-4 w-full h-full rotate-2 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 dark:from-indigo-600 dark:via-blue-600 dark:to-cyan-500 -z-10"></div> */}
                        <Image
                            src="/profile6.jpg"
                            width={330}
                            height={350}
                            alt="Profile picture"
                            className="object-cover aspect-square w-full h-full rounded-xl"
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>
                    <div className="col-start-2 row-start-2 rounded-xl ">
                        <Image
                            src="/juara.jpg"
                            width={330}
                            height={350}
                            alt="Profile picture"
                            className="object-cover aspect-square w-full h-full rounded-xl"
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>

                    <div className="col-start-1 row-start-2 rounded-xl">
                        <Image
                            src="/profile3.jpg"
                            width={330}
                            height={350}
                            alt="Profile picture"
                            className="object-cover object-bottom aspect-square w-full h-full rounded-xl"
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>
                </div>
            </section>
            <div className="mt-12 flex flex-col gap-4">
                <div className="text-2xl md:text-3xl text-left flex items-center justify-center gap-2 ">
                    <span className="text-indigo-500 text-3xl">
                        <FaRegFileCode />
                    </span>
                    <span className="">
                        My <b className="font-bold">Skills</b>
                    </span>
                </div>
            </div>
            <MarqueeSkills />
        </section>
    )
}
