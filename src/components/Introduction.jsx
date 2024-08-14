import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Marquee from "./Marquee";

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
      markers: true,
      onUpdate: (self) => {
        const scaleValue = 1 + self.progress / 2; // Scale from 1 to 2 as user scrolls
        gsap.to(".marquee__inner", {
          scale: scaleValue,
          duration: 3,
          ease: "linear",
        });
      },
    });
  }, []);

  return (
    <div className="fixed top-0 w-screen h-screen bg-blue">
      <div className="relative overflow-hidden text-rc-rocket text-[12rem] tracking-wide">
        <Marquee direction="left" />
        <Marquee direction="right" />
        <Marquee direction="left" />
        <Marquee direction="right" />
      </div>
    </div>
  );
};

export default Introduction;
