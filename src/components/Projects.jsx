import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      // Hide all projects initially except the first one
      if (index !== 0) {
        gsap.set(project, { flexGrow: 0 });
        gsap.set(project.lastElementChild, { display: "none", opacity: 0 });
      }

      let firstProjectOp = index === 0 ? 1 : 0;
      let displayFirstPr = index === 0 ? "block" : "none";

      ScrollTrigger.create({
        trigger: ".projects__items",
        start: () => `${index * 20 + 10}% 100`, // Adjust start point as needed
        end: () => `${index * 20 + 22}% 100`,
        onEnter: () => {
          gsap.to(project, {
            flexGrow: 1,
            duration: 0.5,
          });
          gsap.to(project.lastElementChild, {
            opacity: 1,
            duration: 0.5,
            display: "block",
          });
        },
        onEnterBack: () => {
          gsap.to(project, {
            flexGrow: 1,
            duration: 0.5,
          });
          gsap.to(project.lastElementChild, {
            opacity: 1,
            duration: 0.5,
            display: "block",
          });
        },
        onLeave: () => {
          gsap.to(project, {
            flexGrow: 0,
            duration: 0.5,
          });

          gsap.to(project.lastElementChild, {
            opacity: index === projects.length - 1 ? 1 : 0,
            duration: 0.5,
            display: index === projects.length - 1 ? "block" : "none",
          });
        },
        onLeaveBack: () => {
          gsap.to(project, {
            flexGrow: firstProjectOp,
            duration: 0.5,
          });

          gsap.to(project.lastElementChild, {
            // opacity: index === projects.length - 1 ? 0 : 1,
            opacity: firstProjectOp,
            duration: 0.5,
            // display: index === projects.length - 1 ? "none" : "block",
            display: displayFirstPr,
          });
        },
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
          <div className="flex flex-col gap-4 projects__item flex-grow">
            <h2 className="text-4xl font-semibold">Project 1</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 projects__item">
            <h2 className="text-4xl font-semibold">Project 2</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 projects__item">
            <h2 className="text-4xl font-semibold">Project 3</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 projects__item">
            <h2 className="text-4xl font-semibold">Project 4</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 projects__item">
            <h2 className="text-4xl font-semibold">Project 5</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 projects__item">
            <h2 className="text-4xl font-semibold">Project 6</h2>
            <div className="">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
