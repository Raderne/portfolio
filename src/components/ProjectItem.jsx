/* eslint-disable react/prop-types */
const ProjectItem = ({ project, index }) => {
  const { name, description, skills, code, demo, images } = project;

  return (
    <div
      className={`flex flex-col gap-4 projects__item ${
        index === 0 ? "flex-grow" : ""
      }
      `}
    >
      <h2 className="text-4xl font-semibold">{name}</h2>
      <div className="relative">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae nunc.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae nunc.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae nunc.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae nunc.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
