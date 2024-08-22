import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.to(".bar-process-bg", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      "--percentage": "100%",
      ease: "none",
    });

    gsap.to(".dot", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      "--percentage": "100%",
      ease: "none",
    });
  }, []);

  return (
    <div className="flex gap-8 mt-20 max-h-screen h-[90vh] sticky top-[5%] projects">
      <div className="relative">
        <div className="h-full w-[1px] bar-process-bg z-10"></div>
        <div className="dot z-30"></div>
      </div>
      <div className="flex-1">
        <div className="h-full w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-2xl font-semibold">Project 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio vitae nunc.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Project 2</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio vitae nunc.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Project 3</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio vitae nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
