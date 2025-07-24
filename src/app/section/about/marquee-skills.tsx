import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const tech = [
  {
    name: "React",
    icon: "devicon-react-original",
    color: "text-blue-500",
  },
  {
    name: "Laravel",
    icon: "devicon-laravel-plain",
    color: "text-red-500",
  },
  {
    name: "TailwindCSS",
    icon: "devicon-tailwindcss-plain",
    color: "text-cyan-500",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    color: "text-blue-600",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain",
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "text-yellow-500",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    color: "text-gray-800 dark:text-white",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain",
    color: "text-blue-500",
  },
  {
    name: "Github",
    icon: "devicon-github-plain",
    color: "text-black",
  },
  {
    name: "Figma",
    icon: "devicon-figma-plain",
    color: "text-blue-600",
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain",
    color: "text-blue-600",
  },
  {
    name: "HTML",
    icon: "devicon-html5-plain",
    color: "text-red-600",
  },
  {
    name: "Python",
    icon: "devicon-python-plain",
    color: "text-blue-700",
  },
  {
    name: "Javascript",
    icon: "devicon-javascript-plain",
    color: "text-yellow-500",
  },
];

const firstRow = tech.slice(0, tech.length / 2);
const secondRow = tech.slice(tech.length / 2);

const TechCard = ({
  icon,
  name,
  color,
}: {
  icon: string;
  name: string;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-2 flex h-24 w-24 flex-col items-center justify-center rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <i className={`${icon} text-4xl ${color}`}></i>
      <p className="mt-2 text-xs font-medium dark:text-white">{name}</p>
    </div>
  );
};

export function MarqueeSkills() {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <div className="max-w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mt-4 w-full overflow-hidden">
        <div className="max-w-full overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
