import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  const { name, description, code, demo, Icon } = project;

  return (
    <div className="w-full py-9 px-4 min-h-44 h-full bg-transparent border rounded-lg project-card">
      <div className="w-full h-full flex flex-col items-center space-y-6">
        <div className="!text-white flex items-center gap-2">
          <Icon className="text-4xl" />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-start text-gray-300 line-clamp-5">{description}</p>
        <div className="self-start flex gap-4">
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
    </div>
  );
};

export default ProjectCard;
