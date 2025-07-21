import Link from "next/link";

export const Navigation = () => {
    return (
        <nav>
            <Link href="/" className="mr-4 text-blue-400">Home</Link>
            <Link href="/about" className="mr-4 text-blue-400">About</Link>
            <Link href="/products/1" className="mr-4 text-blue-400">Products</Link>
        </nav>
    )
}