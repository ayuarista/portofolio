import { MarqueeSkills } from "./marquee-skills"
import { BsFire } from "react-icons/bs";

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
                <MarqueeSkills/>
            </div>
            <div className="text-left">
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
            
        </section>
    )
}