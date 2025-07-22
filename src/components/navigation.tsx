"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold text-blue-400 mr-4" : "mr-4 text-blue-40"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold text-blue-400 mr-4" : "mr-4 text-blue-40"}>About</Link>
            <Link href="/products/1" className={pathname.startsWith("/products/1") ? "font-bold text-blue-400 mr-4" : "mr-4 text-blue-40"}>Products</Link>
        </nav>
    )
}