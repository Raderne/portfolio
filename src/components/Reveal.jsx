import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, styles }) => {
  const ref = useRef(null);

  useGSAP(() => {
    let scrollTriggerOptions =
      window.innerWidth < 640
        ? {
            start: "-100px 97%",
            end: "+=150",
          }
        : {
            start: "-100px 97%",
            end: "+=100",
          };

    gsap.from(ref.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: scrollTriggerOptions.start,
        end: scrollTriggerOptions.end,
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className={styles} ref={ref}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.string,
};

export default Reveal;
