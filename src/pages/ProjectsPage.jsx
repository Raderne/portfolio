import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectsData, skills } from "../constants";
import { useRef, useState } from "react";
import { BsProjectorFill } from "react-icons/bs";
import ProjectCard from "../components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectsPage = () => {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const [currentSkill, setCurrentSkill] = useState("all");
  const [startX, setStartX] = useState(null);

  const scroll = (scrollOffset) => {
    const maxScrollLeft =
      skillsRef.current.scrollWidth - skillsRef.current.clientWidth;

    if (scrollOffset <= 0 && skillsRef.current.scrollLeft + scrollOffset <= 0) {
      skillsRef.current.scrollLeft = 0;
    } else if (
      scrollOffset > 0 &&
      skillsRef.current.scrollLeft + scrollOffset > maxScrollLeft
    ) {
      skillsRef.current.scrollLeft = maxScrollLeft;
    } else {
      skillsRef.current.scrollLeft += scrollOffset;
    }
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [currentSkill]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const touchX = e.touches[0].clientX;
      const diff = startX - touchX;
      scroll(diff);
      setStartX(touchX);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <section className="max-md:max-w-[500px] max-lg:max-w-[700px] screen-max-width w-full my-10 space-y-10 scroll-smooth">
      <button className="absolute max-lg:-top-8 top-0 left-0 bg-transparent text-white px-4 py-2 fira-semibold flex items-center gap-2">
        <FaChevronLeft className="text-sm" />
        <a href="/">Home</a>
      </button>
      <h2 className="text-center headers underline decoration-orange-600 max-sm:pt-8">
        My Projects
      </h2>

      {/* skills section */}
      <div
        className="h-fit max-sm:gap-2 w-full relative flex items-center gap-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={() => scroll(-300)} className="max-sm:hidden">
          <FaChevronLeft className="text-2xl" />
        </button>

        <div
          className="w-full overflow-hidden flex items-center gap-2 scroll-smooth"
          ref={skillsRef}
        >
          <div
            className={`min-w-fit h-10 max-sm:h-8 px-4 py-2 max-sm:px-2 max-sm:py-1 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 ${
              currentSkill === "all"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setCurrentSkill("all")}
          >
            <BsProjectorFill className="max-sm:text-lg text-2xl" />
            <p className="fira-semibold max-sm:text-sm tracking-wider">All</p>
          </div>
          {skills.map((skill, index) => (
            <div
              className={`min-w-fit h-10 max-sm:h-8 px-4 py-2 max-sm:px-2 max-sm:py-1 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-300
                 ${
                   currentSkill === skill.name
                     ? "bg-orange-600 text-white"
                     : "bg-gray-200 text-black"
                 }`}
              key={index}
              onClick={() => setCurrentSkill(skill.name)}
            >
              {skill.logo}
              <p className="fira-semibold max-sm:text-sm">{skill.name}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll(300)} className="max-sm:hidden">
          <FaChevronRight className="text-2xl" />
        </button>
      </div>

      {/* projects section */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={projectsRef}
      >
        {projectsData
          .filter((project) => {
            if (currentSkill === "all") return true;

            return project.skills.includes(currentSkill);
          })
          .map((project, index) => (
            <ProjectCard key={index + currentSkill} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
