import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectsData, skills } from "../constants";
import { useRef, useState } from "react";
import { BsProjectorFill } from "react-icons/bs";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const skillsRef = useRef(null);
  const [currentSkill, setCurrentSkill] = useState("all");

  const scroll = (scrollOffset) => {
    const maxScrollLeft =
      skillsRef.current.scrollWidth - skillsRef.current.clientWidth;

    if (scrollOffset <= 0 && skillsRef.current.scrollLeft + scrollOffset <= 0) {
      skillsRef.current.scrollLeft = maxScrollLeft;
    } else if (
      scrollOffset > 0 &&
      skillsRef.current.scrollLeft + scrollOffset >
        maxScrollLeft + scrollOffset / 2
    ) {
      skillsRef.current.scrollLeft = 0;
    } else {
      skillsRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="screen-max-width w-full my-10 space-y-10">
      <h2 className="text-center headers underline">My Projects</h2>

      {/* skills section */}
      <div className="h-fit w-full relative flex items-center gap-4">
        <button onClick={() => scroll(-300)}>
          <FaChevronLeft className="text-2xl" />
        </button>

        <div
          className="w-full overflow-hidden flex items-center gap-2 scroll-smooth"
          ref={skillsRef}
        >
          <div
            className={`min-w-fit h-10 px-4 py-2 rounded-lg border flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 ${
              currentSkill === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setCurrentSkill("all")}
          >
            <BsProjectorFill className="text-2xl" />
            <p className="fira-semibold tracking-wider">All</p>
          </div>
          {skills.map((skill, index) => (
            <div
              className={`min-w-fit h-10 px-4 py-2 rounded-lg border flex justify-center items-center gap-2 cursor-pointer transition-all duration-300
                 ${
                   currentSkill === skill.name
                     ? "bg-blue-500 text-white"
                     : "bg-gray-200 text-black"
                 }`}
              key={index}
              onClick={() => setCurrentSkill(skill.name)}
            >
              {skill.logo}
              <p className="fira-semibold">{skill.name}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll(300)}>
          <FaChevronRight className="text-2xl" />
        </button>
      </div>

      {/* projects section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData
          .filter((project) => {
            if (currentSkill === "all") return true;
            return project.skills.includes(currentSkill);
          })
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
