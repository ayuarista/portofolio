import { MarqueeSkills } from "./marquee-skills"
import { BsFire } from "react-icons/bs";
import Image from "next/image";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function AboutMe() {
    return (
        <section className="mx-8 lg:mx-36 mt-10">
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
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 mt-16">
                <div className="relative w-[330px] h-[350px]">
                    <div className="absolute -top-6 -right-8 w-full h-full rotate-3 rounded-md bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 -z-10"></div>

                    <Image
                        src="/profile.jpg"
                        width={330}
                        height={350}
                        alt="Profile picture"
                        className="object-cover w-full h-full rounded-md"
                        placeholder="blur"
                        blurDataURL="/profile-blur.jpg"
                    />
                </div>

                <div className="max-w-xl">
                    <div>
                        <h1 className="text-3xl">
                            About <b className="font-bold">Me!</b>
                        </h1>
                        <p className="border-t-4 border-indigo-500 w-12 mt-1"></p>
                    </div>
                    <div className="text-gray-500 text-[16px] text-pretty text-justify mt-6">
                        <p className="font-mono">
                            As a dedicated twelve grade student in Software Engineering at Vocational High School, I am passionate about web development and actively expanding my technical skills in front-end technologies. Currently building a strong foundation in web development, I have gained practical experience with core technologies including HTML, CSS, JS, React.js, and Tailwind CSS.
                        </p>
                        <p className="mt-3">
                            My journey in web development is fueled by a passion for technology and a desire to create intuitive digital experiences. As a junior developer, I am actively learning and exploring front-end technologies, with a strong motivation to transform creative ideas into functional, user-friendly web interfaces.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
