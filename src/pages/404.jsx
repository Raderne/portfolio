import { useEffect, useRef, useState } from "react";

const NoPage = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    if (ref.current) {
      ref.current.addEventListener("mouseenter", () => setCursorVisible(false));
      ref.current.addEventListener("mouseleave", () => setCursorVisible(true));
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <main className="min-h-screen flex-center overflow-hidden">
      <div
        className="fixed top-0 left-0 w-2 h-2 shadow shadow-white bg-white blur-lg rounded-full"
        style={{ transform: `translate(${cursorX}px, ${cursorY}px)` }}
      ></div>
      <div
        className={
          "text-center p-10 rounded-xl shadow-xl shadow-white/10 transition-all duration-300 " +
          (cursorVisible ? "blur-sm" : "")
        }
        ref={ref}
      >
        <h1 className="text-5xl font-bold pb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
};

export default NoPage;
