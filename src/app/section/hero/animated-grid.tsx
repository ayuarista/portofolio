import { GridPattern } from "@/components/magicui/grid-pattern"
import { cn } from "@/lib/utils"
export default function AnimatedGrid(){
    return(
        <GridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]",
          "h-[240%] w-full inset-x-0 inset-y-[-30%]",
        )}
      />
    )
}