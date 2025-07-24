import { AnimatedText } from "@/components/animated-text"
import { AuroraText } from "@/components/magicui/aurora-text"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function HeroHeading() {
    return (
        <div className="text-center lg:text-left">
            <AnimatedText />
            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extralight">
                Hello I&apos;m {" "}
                <AuroraText className="font-bold">
                    Ayu Arista
                </AuroraText>
            </h1>
            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-1">
                Junior{" "}
                <span className="font-extralight">
                    Developer
                </span>
            </h1>
            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extralight mt-1">
                Based In <span className="font-bold">Indonesia.</span>
            </h1>
            <p
                className="text-gray-500 text-[14px] md:text-sm lg:text-base max-w-xl mt-4 text-center lg:text-justify mb-4"
            >
                Hi! as a dedicated twelve-grade student in Software Engineering at
                Vocational High School, I am passionate about web development and
                actively expanding my technical skills in front-end technologies.
            </p>
            <InteractiveHoverButton>Explore now!</InteractiveHoverButton>
        </div>
    )
}