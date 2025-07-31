import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="dark:bg-[#0F172B] bg-[#F8FAFC] text-accent-foreground">
            <div className="flex flex-col justify-center items-center p-4">
                <div>
                    <h1 className="font-semibold text-lg text-center">Ayu Arista</h1>
                    <p className="mt-2 border px-36 dark:bg-white bg-black"></p>
                </div>
                <ul className="flex flex-col md:flex-row items-center justify-center gap-5 list-none text-[15px] mt-2">
                    <li className="hover:underline"><Link href="#about-me">About Me</Link></li>
                    <li className="hover:underline"><Link href="#experience">My Experience</Link></li>
                    <li className="hover:underline"><Link href="#projects">Latest Projects</Link></li>
                    <li className="hover:underline"><Link href="#contact">Contact</Link></li>
                </ul>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-sm mt-4">
                    <div className="flex items-center gap-2 underline">
                        <MdLocalPhone className=" text-lg" />
                        <h3>+6281337057719</h3>
                    </div>
                    <div className="flex items-center gap-2 underline">
                        <MdOutlineEmail className=" text-lg" />
                        <h3>aayuaristaa@gmail.com</h3>
                    </div>
                </div>
                <ul className="flex items-center justify-center mt-4 gap-5">
                    <li className="p-3 border border-accent-foreground hover:bg-accent-foreground hover:text-accent transition-all duration-300 rounded-full"><Link href="https://www.instagram.com/aayuaristaa/"><FaInstagram /></Link></li>
                    <li className="p-3 border border-accent-foreground hover:bg-accent-foreground hover:text-accent transition-all duration-300 rounded-full"><Link href="https://www.instagram.com/aayuaristaa/"><FaGithub /></Link></li>
                </ul>
                <p className="text-sm mt-4">
                    © {new Date().getFullYear()} Ayu Arista. All rights reserved.
                </p>
            </div>
        </footer>
    )
}