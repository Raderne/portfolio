import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, styles }) => {
  const ref = useRef(null);

  useEffect(() => {
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

    const ctx = gsap.context(() => {
      const animations = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: scrollTriggerOptions.start,
          end: scrollTriggerOptions.end,
          scrub: 0.5,
        },
      });

      animations.from(
        ref.current,
        {
          y: 150,
          opacity: 0,
          duration: 1,
        },
        0
      );
    }, ref);
    return () => ctx.revert();
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
