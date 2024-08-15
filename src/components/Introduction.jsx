import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Marquee from "./Marquee";
import { BsMouse } from "react-icons/bs";
import { CiImport } from "react-icons/ci";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useGSAP(() => {
    const marqueeParts = gsap.utils.toArray(
      ".marquee__part, .marquee__part_inverse"
    );

    marqueeParts.forEach((marquee) => {
      const direction = marquee.classList.contains("marquee__part")
        ? -100
        : 100;
      gsap.fromTo(
        marquee,
        { xPercent: 0 },
        {
          xPercent: direction * -1,
          duration: 50,
          ease: "linear",
          repeat: -1,
          modifiers: {
            duration: () => 60 - window.scrollY * 0.175, // Decrease duration as user scrolls
          },
        }
      );
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
          duration: 3,
          ease: "linear",
        });
      },
    });
  }, []);

  useGSAP(() => {

  }, [])

  return (
    <div className="fixed top-0 w-screen h-screen bg-blue">
      <div className="relative overflow-hidden text-rc-rocket text-[12rem] tracking-wide select-none">
        <Marquee direction="left" />
        <Marquee direction="right" />
        <Marquee direction="left" />
        <Marquee direction="right" />
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>

      <div className="absolute-center w-[60vw] h-[70vh] bg-gray-1 rounded-xl px-24 py-12">
        <div className="flex flex-col justify-between h-full w-full">
          <h1 className="hero-title text-rc-rocket text-[11rem] leading-[1] text-black tracking-wide">
            Hello<span className="text-orange-600">.</span>
          </h1>
          <p className="hero-subtitle text-4xl text-black text-wrap fira-regular">
            My name is <span className="text-orange-600">REDA</span>, a developer who loves to create beautiful and
            interactive experiences. I&apos;m passionate about learning new
            technologies and improving my skills every day.
          </p>
          <div className="hero-icon flex items-center justify-center gap-3">
            <BsMouse className="text-4xl text-orange-600" />
            <p className="text-2xl font-bold text-blue text-wrap">
              Scroll down
            </p>
          </div>
        </div>
        <button className="flex-center absolute right-24 top-12 bg-blue px-6 py-3 fira-bold border border-blue rounded-lg hover:bg-gray-1 hover:text-blue hover:"
        >
          My Resume
          <CiImport className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Introduction;
