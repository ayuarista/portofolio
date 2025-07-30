import { AnimatedText } from "@/components/animated-text"
import { AuroraText } from "@/components/magicui/aurora-text"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { IoDownloadOutline } from "react-icons/io5";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                className="text-gray-500 text-[14px] md:text-sm/6 max-w-xl mt-4 text-center lg:text-justify mb-4"
            >
                Hi! as a dedicated twelve-grade student in Software Engineering at
                Vocational High School, I am passionate about web development and
                actively expanding my technical skills in front-end technologies.
            </p>
            <div className="flex items-center gap-3">
                <ShimmerButton className="shadow-2xl">
                    <div className="flex items-center gap-2">
                        <p className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                            Download CV
                        </p>
                        <IoDownloadOutline className="size-5 text-white" />
                    </div>
                </ShimmerButton>
                <Link href="https://www.instagram.com/aayuaristaa/">
                    <Button className="hover:cursor-pointer">
                        <FaInstagram className="size-5 rounded-full" />
                    </Button>
                </Link>
                <Link href="https://github.com/ayuarista">
                    <Button className="hover:cursor-pointer">
                        <FaGithub className="size-5 rounded-full" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}