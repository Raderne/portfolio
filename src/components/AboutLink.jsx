/* eslint-disable react/prop-types */
const AboutLink = ({ link }) => {
  const { name, url, logo } = link;

  return (
    <div className="relative group">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="hover:text-orange-600 transition-all duration-300 ease-in-out"
      >
        {logo}
      </a>
      <div className="hidden absolute top-10 left-1/2 bg-white text-bgBlack rounded-lg text-center group-hover:inline-block px-4 py-2 transform -translate-x-1/2">
        <p className="font-semibold fira-semibold">{name}</p>
      </div>
    </div>
  );
};

export default AboutLink;
