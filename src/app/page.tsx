import HeroImage from "./section/hero/hero-image";
import HeroHeading from "./section/hero/hero-heading";
import AnimatedGrid from "./section/hero/animated-grid";
import AboutMe from "./section/about/about-me";
import Experience from "./section/experience/experience";
import Project from "./section/projects/projects";
export default function Home() {
  return (
    <section className="flex items-center min-h-screen">
      <div className="w-full">
        <section className="flex flex-col-reverse min-h-0 lg:min-h-[90vh] lg:flex-row justify-center items-center mx-4 gap-12">
          <HeroHeading />
          <HeroImage />
        </section>
        <AnimatedGrid />
        <AboutMe />
        <Experience/>
        <Project/>
      </div>
    </section>
  );
}
