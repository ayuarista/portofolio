import Image from "next/image";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AnimatedText } from "@/components/animated-text";

export default function Home() {
  return (
    <section className="flex items-center min-h-screen">
      <div className="w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center mx-4 gap-10">
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
              Frontend{" "}
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
          <div className="flex justify-center items-end">
            <Image
              src="/profilee.jpg"
              alt="Profile"
              className="w-52 md:w-64 lg:w-80 rounded-tl-xl rounded-br-xl border-8 border-white shadow-xl"
              width={320}
              height={320}
            />
          </div>
        </div>
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "h-full w-full",
          )}
        />
      </div>
    </section>
  );
}
