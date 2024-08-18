import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children }) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 97%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden" ref={ref}>
      <div className="">{children}</div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reveal;
