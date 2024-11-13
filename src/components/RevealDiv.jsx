import Reveal from "./Reveal";

// eslint-disable-next-line react/prop-types
const RevealDiv = ({ children, classStyles }) => {
  if (window.innerWidth < 640) {
    return <Reveal>{children}</Reveal>;
  }

  return <div className={classStyles}>{children}</div>;
};

export default RevealDiv;
