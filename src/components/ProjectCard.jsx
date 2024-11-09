import { useLayoutEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  const { name, description, skills, code, demo, images, phone, Icon } =
    project;
  const [allImages] = useState([...images, ...phone]);
  const [currentImage, setCurrentImage] = useState(allImages[0]);
  const cardRef = useRef(null);
  const imageEl = useRef(document.createElement("img"));

  useLayoutEffect(() => {
    const imgElement = imageEl.current;
    imgElement.style.position = "absolute";
    imgElement.style.borderRadius = "10px";
    imgElement.style.objectFit = "cover";
    imgElement.style.height = "350px";
    imgElement.style.width = "auto";

    const handleMouseEnter = () => {
      imgElement.src = currentImage;
      if (!document.body.contains(imgElement)) {
        document.body.appendChild(imgElement);
      }

      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const currentIndex = allImages.indexOf(prev);
          const nextIndex =
            currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
          imgElement.src = allImages[nextIndex];
          return allImages[nextIndex];
        });
      }, 3000);

      const handleMouseMove = (e) => {
        imgElement.style.left = `${
          e.pageX < 615 ? e.pageX + 50 : e.pageX - imgElement.width - 50
        }px`;
        imgElement.style.top = `${e.pageY - 150}px`;
      };

      const handleMouseLeave = () => {
        cardRef.current.removeEventListener("mousemove", handleMouseMove);
        if (document.body.contains(imgElement)) {
          document.body.removeChild(imgElement);
        }
        clearInterval(interval);
      };

      cardRef.current.addEventListener("mousemove", handleMouseMove);
      cardRef.current.addEventListener("mouseleave", handleMouseLeave);
    };

    cardRef.current.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [allImages, currentImage]);

  return (
    <article
      className="w-full pt-9 pb-6 px-4 min-h-44 h-full bg-transparent border rounded-lg project-card relative hover:ring-2 transition-all duration-300 ease-in-out"
      ref={cardRef}
    >
      <div className="w-full h-full flex flex-col items-center gap-y-6">
        <div className="!text-white flex items-center gap-2">
          <Icon className="text-4xl" />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-start text-gray-300 line-clamp-5">{description}</p>
        <div className="self-start flex gap-2 flex-wrap">
          {skills &&
            skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/10 text-white px-2 py-1 rounded-lg"
              >
                {skill}
              </span>
            ))}
        </div>
        <div className="self-start flex gap-4 mt-auto">
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
      </div>
    </article>
  );
};

export default ProjectCard;
