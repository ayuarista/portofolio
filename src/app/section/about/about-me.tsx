import { MarqueeSkills } from "./marquee-skills"
import { BsFire } from "react-icons/bs";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="mx-8 lg:mx-36 mt-7">
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
                <div className="relative w-52 md:w-64 lg:w-80 rounded-tl-xl rounded-br-xl p-1 bg-gradient-to-r from-[#7928CA] via-[#0070F3] to-[#38bdf8] shadow-2xl">
                    <div className="rounded-tl-xl rounded-br-xl bg-white dark:bg-black p-1">
                        <Image
                            src="/profilee.jpg"
                            alt="Profile"
                            className="rounded-tl-xl aspect-square object-cover rounded-br-xl"
                            width={320}
                            height={320}
                            placeholder="blur"
                            blurDataURL="/profile-blur.jpg"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-3xl">About <b>Me</b></h1>
                        <p className="border-t-4 border-indigo-500 w-12 mt-1"></p>
                    </div>
                    <div className="text-gray-500 text-[16px] text-pretty text-justify mt-6">
                        <p>
                            As a dedicated eleventh-grade student in Software Engineering at Vocational High School, I am passionate about web development and actively expanding my technical skills in front-end technologies. Currently building a strong foundation in web development, I have gained practical experience with core technologies including HTML, CSS, JS, React.js, and Tailwind CSS.
                        </p>
                        <p className="mt-2">
                            My journey in web development is fueled by a passion for technology and a desire to create intuitive digital experiences. As a junior developer, I am actively learning and exploring front-end technologies, with a strong motivation to transform creative ideas into functional, user-friendly web interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
