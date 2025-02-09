import Projects from "./Projects";
import Reveal from "./Reveal";

const ProjectsSection = () => {
  return (
    <section className="screen-max-width my-20 min-h-screen">
      <Reveal>
        <div className="relative w-fit">
          <h1 className="headers z-50 max-sm:mt-20">
            My Projects
            <span className="text-orange-600">.</span>
          </h1>
          <div className="absolute -bottom-[80%] left-0 rotate-[20deg] select-none -z-10">
            <img
              src="/assets/images/underline.png"
              alt="underline"
              className="w-full object-cover select-none"
            />
          </div>
        </div>
      </Reveal>

      <div className="relative sm:h-[260vh] project-scroll">
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
