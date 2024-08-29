import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectItem = ({ project, index }) => {
  const { name, description, skills, code, demo, images, phone, icon } =
    project;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentPhoneImage, setCurrentPhoneImage] = useState(phone[0]);

  useEffect(() => {
    const interval = setInterval(() => {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, images, phone, currentPhoneImage]);

  return (
    <div
      className={`flex flex-col gap-4 projects__item
        ${index === 0 ? "flex-grow" : ""}
      `}
    >
      <div className="flex items-center gap-2 project-title">
        {icon}
        <h2 className="text-4xl font-semibold text-white/40">{name}</h2>
      </div>
      <div className="w-full h-full space-y-8">
        <div className="flex items-stretch gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="skill px-3 py-2">
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-300 max-w-xl z-50">{description}</p>
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

        {images.length > 0 && (
          <div
            className={`absolute ${
              phone.length != 0
                ? "-right-[10px] bottom-[10%] max-w-[44vw]"
                : "-right-[7%] top-[15%] max-w-[49vw]"
            } w-full z-40 project-image`}
          >
            <img
              src={currentImage}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        {phone.length > 0 && (
          <div
            className={`absolute ${
              images.length != 0
                ? "-right-[10%] -top-[5%]"
                : "right-[7%] top-[40%] -translate-y-1/2"
            } flex h-full max-h-[80vh] z-30 project-image`}
          >
            <img
              src={currentPhoneImage}
              alt={name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
