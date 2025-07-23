import HeroImage from "./section/hero/hero-image";
import HeroHeading from "./section/hero/hero-heading";
import AnimatedGrid from "./section/hero/animated-grid";
import AboutMe from "./section/about/about-me";
import { MarqueeDemo } from "@/components/marquee";
export default function Home() {
  return (
    <section className="flex items-center min-h-screen">
      <div className="w-full">
        <div className="flex flex-col-reverse min-h-0 lg:min-h-[90vh] lg:flex-row justify-center items-center mx-4 gap-12">
          <HeroHeading />
          <HeroImage />
        </div>
        <AnimatedGrid />
          <AboutMe />
          <MarqueeDemo/>
      </div>
    </section>
  );
}
