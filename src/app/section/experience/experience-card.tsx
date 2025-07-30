import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    initial?: string;
    dates: string;
    image?: string;
    links?: readonly {
        icon: React.ReactNode;
        title: string;
        href: string;
    }[];
}

function getPastelColor(input: string): string {
    const pastelColors = [
        "bg-red-100 text-red-800",
        "bg-orange-100 text-orange-800",
        "bg-yellow-100 text-yellow-800",
        "bg-green-100 text-green-800",
        "bg-teal-100 text-teal-800",
        "bg-sky-100 text-sky-800",
        "bg-blue-100 text-blue-800",
        "bg-indigo-100 text-indigo-800",
        "bg-purple-100 text-purple-800",
        "bg-pink-100 text-pink-800",
    ];

    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % pastelColors.length;
    return pastelColors[index];
}


export default function ExperienceCard({
    title,
    description,
    dates,
    image,
    initial,
    links,
}: Props) {
    return (
        <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                    <AvatarImage src={image} alt={title} className="object-contain" />
                    <AvatarFallback className={`${getPastelColor(initial ?? title)} font-semibold`}>
                        {(initial ?? title[0]).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-1 flex-col justify-start gap-1">
                {dates && (
                    <time className="text-xs text-muted-foreground">{dates}</time>
                )}
                <h2 className="font-semibold text-lg leading-none">{title}</h2>
                {description && (
                    <p className="prose dark:prose-invert text-sm/6 text-justify text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            {links && links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                    {links?.map((link, idx) => (
                        <Link href={link.href} key={idx}>
                            <Badge key={idx} title={link.title} className="flex gap-2">
                                {link.icon}
                                {link.title}
                            </Badge>
                        </Link>
                    ))}
                </div>
            )}
        </li>
    )
}