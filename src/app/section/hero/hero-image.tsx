import Image from "next/image"

export default function HeroImage() {
    return (
        <div className="flex justify-center items-end">
            <div className="relative w-60 md:w-64 lg:w-80 rounded-tl-xl rounded-br-xl p-1 bg-gradient-to-r from-[#7928CA] via-[#0070F3] to-[#38bdf8] shadow-2xl">
                <div className="rounded-tl-xl rounded-br-xl bg-white dark:bg-black p-1">
                    <Image
                        src="/me.JPG"
                        alt="Profile"
                        className="rounded-tl-xl aspect-square object-cover rounded-br-xl"
                        width={320}
                        height={320}
                        placeholder="blur"
                        blurDataURL="/me-blur.jpg"
                    />
                </div>
            </div>
        </div>
    )
}