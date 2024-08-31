import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Marquee from "./Marquee";
import { BsMouse } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const ref = useRef(null);

  // Animate the marquee
  useGSAP(() => {
    const marqueeParts = gsap.utils.toArray(
      ".marquee__part, .marquee__part_inverse"
    );

    marqueeParts.forEach((marquee) => {
      const direction = marquee.classList.contains("marquee__part")
        ? -100
        : 100;
      gsap.to(marquee, {
        xPercent: direction * -1,
        duration: 50,
        ease: "linear",
        repeat: -1,
        modifiers: {
          duration: () => 60 - window.scrollY * 0.175, // Decrease duration as user scrolls
        },
      });
    });

    ScrollTrigger.create({
      trigger: ".marquee__inner",
      start: "50vh top",
      end: "800vh bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const scaleValue = 1 + self.progress / 2;
        gsap.to(".marquee__inner", {
          scale: scaleValue,
          duration: 5,
          ease: "linear",
        });
      },
    });

    gsap.set(".marquee__inner", { xPercent: -50 });
  }, []);

  // Animate the title, subtitle, icon, and button
  useGSAP(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".hero-subtitle", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".hero-icon", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.fromTo(
      ".btn",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.25,
        ease: "ease-in-out",
      }
    );
  }, []);

  // scale up the view-box on scroll and remove the marquee
  useGSAP(() => {
    gsap.set(".view-box", {
      scale: 1,
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
    });

    animateWithGsap(
      ".view-box",
      {
        scale: 2,
        ease: "linear",
      },
      { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1 }
    );

    animateWithGsap(
      ".view-box > div",
      { opacity: 0, ease: "linear" },
      { trigger: ref.current, start: "top top", end: "200vh top", scrub: 1 }
    );

    animateWithGsap(
      ref.current,
      { opacity: 0, display: "none", ease: "linear" },
      { trigger: ref.current, start: "bottom top", end: "bottom top", scrub: 1 }
    );
  }, []);

  return (
    <div
      className="fixed top-0 max-sm:w-full max-sm:h-full w-screen h-screen bg-blue z-50"
      ref={ref}
    >
      <div className="relative overflow-hidden text-rc-rocket text-[12rem] tracking-wide select-none max-sm:hidden">
        <Marquee direction="left" />
        <Marquee direction="right" />
        <Marquee direction="left" />
        <Marquee direction="right" />
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>

      <div className="max-sm:min-w-[100vw] max-sm:w-full max-sm:h-full view-box max-sm:relative max-sm:top-0 max-sm:left-0 max-sm:!translate-x-0 max-sm:!translate-y-0 absolute-center overflow-hidden min-w-[60vw] min-h-[70vh] bg-gray-1 min-sm:rounded-xl max-sm:px-4 px-24 py-12">
        <div className="flex flex-col justify-between min-h-[60vh] h-full w-full max-sm:justify-center max-sm:space-y-7">
          <h1 className="hero-title text-rc-rocket headers text-black tracking-wide">
            Hello<span className="text-orange-600">.</span>
          </h1>
          <p className="hero-subtitle text-4xl max-sm:text-2xl text-black text-wrap fira-regular">
            My name is <span className="text-orange-600">REDA</span>, a
            developer who loves to create beautiful and interactive experiences.
            I&apos;m passionate about learning new techs and improving my skills
            every day.
          </p>
          <div className="hero-icon mt-6 flex items-center justify-center gap-3">
            <BsMouse className="text-4xl text-orange-600" />
            <p className="text-2xl font-bold text-blue text-wrap">
              Scroll down
            </p>
          </div>
          <button className="flex-center absolute max-sm:right-2 max-sm:top-0 right-20 top-12 btn opacity-0">
            My Resume
            <CiImport className="text-2xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
