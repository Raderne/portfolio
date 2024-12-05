import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import RevealDiv from "./RevealDiv";

/* eslint-disable react/prop-types */
const ProjectItem = ({ project, index }) => {
  const { name, description, skills, code, demo, images, phone, Icon } =
    project;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentPhoneImage, setCurrentPhoneImage] = useState(phone[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // if in mobile view, return
    if (window.innerWidth < 640) return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const currentIndex = images.indexOf(currentImage);
        const currentPhoneIndex = phone.indexOf(currentPhoneImage);
        setCurrentImage(
          currentIndex === images.length - 1
            ? images[0]
            : images[currentIndex + 1]
        );
        setCurrentPhoneImage(
          currentPhoneIndex === phone.length - 1
            ? phone[0]
            : phone[currentPhoneIndex + 1]
        );
        setFadeIn(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, images, phone, currentPhoneImage]);

  return (
    <RevealDiv
      classStyles={`flex flex-col gap-4 projects__item ${
        index === 0 ? "flex-grow" : ""
      }`}
    >
      <div className="flex items-center gap-2 max-sm:pb-10 project-title">
        <Icon className="text-4xl text-white/40 max-sm:text-white" />
        <h2 className="max-sm:text-2xl text-4xl font-semibold text-white/40 max-sm:text-white">
          {name}
        </h2>
      </div>
      <div className="w-full h-full space-y-8">
        <div className="flex items-stretch gap-4 max-sm:flex-wrap">
          {skills.map((skill, index) => (
            <span key={index} className="skill px-3 py-2">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-300 max-w-xl z-50 fira-regular">
          {description}
        </p>
        <div className="flex gap-4">
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all duration-300 ease-in-out"
          >
            <FaGithub className="text-2xl" />
            <span>Code</span>
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-400 transition-all duration-300 ease-in-out"
            >
              <FaExternalLinkAlt className="text-2xl" />
              <span>Demo</span>
            </a>
          )}
        </div>

        {images.length > 0 && window.innerWidth > 640 && (
          <div
            className={`absolute ${
              phone.length !== 0
                ? "-right-[10px] bottom-[10%] max-w-[44vw]"
                : "-right-[7%] top-[15%] max-w-[44vw]"
            } w-full z-40 project-image max-xl:hidden`}
          >
            <img
              src={currentImage}
              alt={name}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

        {phone.length > 0 && window.innerWidth > 640 && (
          <div
            className={`absolute ${
              images.length !== 0
                ? "-right-[10%] -top-[5%]"
                : "right-[7%] top-[40%] -translate-y-1/2"
            } flex h-full max-h-[80vh] z-30 project-image max-xl:hidden`}
          >
            <img
              src={currentPhoneImage}
              alt={name}
              className={`w-full h-full object-contain rounded-lg transition-opacity duration-500 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
        <div className="h-[1px] w-full bg-white/40 sm:hidden"></div>
      </div>
    </RevealDiv>
  );
};

export default ProjectItem;
