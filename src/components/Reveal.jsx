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
        start: "-100px 97%",
        end: "+=100",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="" ref={ref}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reveal;
