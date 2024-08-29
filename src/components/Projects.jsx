import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../constants";
import ProjectItem from "./ProjectItem";
import { BsProjectorFill } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.to(".bar-process-bg", {
      scrollTrigger: {
        trigger: ".project-scroll",
        start: "top+=100 top",
        end: "bottom center",
        scrub: 1,
      },
      "--percentage": "100%",
      ease: "none",
    });

    gsap.to(".dot", {
      scrollTrigger: {
        trigger: ".project-scroll",
        start: "top+=100 top",
        end: "bottom center",
        scrub: 1,
        // markers: {
        //   startColor: "green",
        //   endColor: "red",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        // },
      },
      "--percentage": "100%",
      ease: "none",
    });

    const projects = gsap.utils.toArray(".projects__item");

    projects.forEach((project, index) => {
      if (index !== 0) {
        gsap.set(project, { flexGrow: 0 });
        gsap.set(project.lastElementChild, { display: "none", opacity: 0 });
      }

      let firstProjectOp = index === 0 ? 1 : 0;
      let displayFirstPr = index === 0 ? "block" : "none";

      ScrollTrigger.create({
        trigger: ".projects__items",
        start: () => `${index * 35 + 10}% 100`,
        end: () => `${index * 35 + 22}% 100`,
        onEnter: () => {
          gsap.to(project, {
            flexGrow: 1,
            duration: 0.5,
            ease: "power4.out",
          });
          gsap.to(project.lastElementChild, {
            opacity: 1,
            duration: 0.5,
            display: "block",
          });
          // add class name to the project item
          project.classList.add("project-active");

          // animate in images
          const images = project.querySelectorAll(".project-image");
          images.forEach((image, idx) => {
            if (index === 0) return;

            gsap.from(image, {
              right: idx % 2 === 0 ? "20%" : "-20%",
              opacity: 0,
              duration: 0.5,
              delay: idx * 0.2,
            });
          });
        },
        onEnterBack: () => {
          gsap.to(project, {
            flexGrow: 1,
            duration: 0.5,
            ease: "power4.out",
          });
          gsap.to(project.lastElementChild, {
            opacity: 1,
            duration: 0.5,
            display: "block",
          });
          // add class name to the project item
          project.classList.add("project-active");

          // animate in images
          const images = project.querySelectorAll(".project-image");
          images.forEach((image, idx) => {
            gsap.from(image, {
              right: idx % 2 === 0 ? "20%" : "-20%",
              opacity: 0,
              duration: 0.5,
              delay: idx * 0.2,
            });
          });
        },
        onLeave: () => {
          gsap.to(project, {
            flexGrow: 0,
            duration: 0.5,
            ease: "power4.out",
          });

          gsap.to(project.lastElementChild, {
            opacity: index === projects.length - 1 ? 1 : 0,
            duration: 0.5,
            display: index === projects.length - 1 ? "block" : "none",
          });
          // remove class name from the project item
          project.classList.remove("project-active");
        },
        onLeaveBack: () => {
          gsap.to(project, {
            flexGrow: firstProjectOp,
            duration: 0.5,
            ease: "power4.out",
          });

          gsap.to(project.lastElementChild, {
            opacity: firstProjectOp,
            duration: 0.5,
            display: displayFirstPr,
          });
          // remove class name from the project item
          project.classList.remove("project-active");
        },
        // markers: {
        //   startColor: "green",
        //   endColor: "red",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        // },
      });
    });
  }, []);

  return (
    <div className="flex gap-8 mt-20 min-h-screen sticky top-[5%] projects">
      <div className="relative">
        <div className="h-full w-[1px] bar-process-bg z-10"></div>
        <div className="dot z-30"></div>
      </div>
      <div className="flex-1">
        <div className="h-full w-full flex flex-col gap-8 projects__items">
          {projectsData.slice(0, 5).map((project, index) => {
            return <ProjectItem key={index} project={project} index={index} />;
          })}
          <div className="flex flex-col gap-4 projects__item">
            <div className="flex items-center gap-2">
              <BsProjectorFill className="text-4xl text-white/40" />
              <h2 className="text-4xl font-semibold text-white/40">
                More Projects
              </h2>
            </div>
            <div className="relative w-full h-full space-y-8">
              <p className="text-gray-300 max-w-xl">
                You can find more of my projects on my GitHub page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
