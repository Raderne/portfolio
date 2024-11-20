import PropTypes from "prop-types";

const Marquee = ({ direction }) => {
  const classNameDirection =
    direction === "left" ? "marquee__part" : "marquee__part_inverse";

  return (
    <div className="marquee__inner flex flex-auto w-fit leading-[0.95] -translate-x-2/4">
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span className="pr-6 transparent-text">REDA</span>
        <span className="pr-6">EL</span>
        <span className="pr-6 transparent-text">MARZOUKI</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>DEVELOPER</span>
        <span className="px-6 transparent-text">JS</span>
        <span>HTML</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span className="pr-6 transparent-text">REDA</span>
        <span className="pr-6">EL</span>
        <span className="pr-6 transparent-text">MARZOUKI</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>UI/UX</span>
        <span className="px-6 transparent-text">JAVA</span>
        <span>SCRIPT</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span className="pr-6 transparent-text">REDA</span>
        <span className="pr-6">EL</span>
        <span className="pr-6 transparent-text">MARZOUKI</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>UI/UX</span>
        <span className="px-6 transparent-text">JAVA</span>
        <span>SCRIPT</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span className="pr-6 transparent-text">REDA</span>
        <span className="pr-6">EL</span>
        <span className="pr-6 transparent-text">MARZOUKI</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>DEVELOPER</span>
        <span className="px-6 transparent-text">JS</span>
        <span>HTML</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>REDA</span>
        <span className="px-6 transparent-text">EL</span>
        <span>MARZOUKI</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>HTML</span>
        <span className="px-6 transparent-text">CSS</span>
        <span>JAVASCRIPT</span>
      </div>
      <div className={classNameDirection + " px-4 flex items-center shrink-0"}>
        <span>REDA</span>
        <span className="px-6 transparent-text">EL</span>
        <span>MARZOUKI</span>
      </div>
    </div>
  );
};

Marquee.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default Marquee;
