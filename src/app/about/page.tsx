import Link from "next/link"

export default function About () {
    return(
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="text-lg">I am a passionate developer with a love for creating dynamic web applications.</p>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
            </footer>
        </div>
    )
}