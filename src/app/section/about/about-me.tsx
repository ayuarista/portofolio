import { MarqueeSkills } from "./marquee-skills"
import { BsFire } from "react-icons/bs";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about-me" className="mx-8 lg:mx-36 mt-10">
            <div className="mt-7 flex flex-col gap-4">
                <div className="text-3xl text-left flex items-center gap-2 ">
                    <span className="text-indigo-500 text-4xl">
                        <BsFire />
                    </span>
                    <span className="">
                        About <b className="font-bold">Me!</b>
                    </span>
                </div>
                <MarqueeSkills />
            </div>


            <section className="mt-5">
                {/* <h1 className="text-4xl mb-5">
                    About <b className="font-bold text-indigo-500">Me!</b>
                </h1> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="row-span-2 col-start-3 row-start-1 relative">
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

                    <div className="col-span-2 col-start-1 row-start-1
                        rounded-xl p-5 text-justify text-sm/6 border-gray-950/[.3] bg-gray-950/[.03] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                        <p>
                        As a dedicated twelve grade student in Software Engineering at Vocational High School, I am passionate about web development and actively expanding my technical skills in front-end technologies. Currently building a strong foundation in web development, I have gained practical experience with core technologies including HTML, CSS, JS, React.js, and Tailwind CSS.
                        </p>
                    </div>

                    <div className="col-start-1 row-start-2 rounded-xl ">
                    <Image
                            src="/profile2.jpg"
                            width={330}
                            height={350}
                            alt="Profile picture"
                            className="object-cover aspect-square w-full h-full rounded-xl"
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>

                    <div className="col-start-2 row-start-2 rounded-xl">
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

        </section>
    )
}
