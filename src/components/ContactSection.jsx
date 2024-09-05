import Reveal from "./Reveal";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="sm:screen-max-width mt-28 min-h-screen h-full w-full flex-center relative max-sm:flex-col max-sm:justify-center"
    >
      <div className="flex flex-col gap-8 text-center items-center">
        <Reveal>
          <div className="relative w-fit">
            <h2 className="headers">
              Contact
              <span className="text-orange-600">.</span>
            </h2>
            <div className="absolute -bottom-[55%] -left-10 rotate-[20deg] select-none -z-10">
              <img
                src="/assets/images/underline.png"
                alt="underline"
                className="w-full object-cover select-none"
              />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="text-lg max-w-[700px] fira-regular max-sm:max-w-[370px]">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/reda-elmarzouki-98a89ba0/"
              rel="noreferrer"
              className="text-orange-600 fira-semibold hover:underline transition-all duration-300 ease-in-out"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              href="https://www.twitter.com"
              rel="noreferrer"
              className="text-orange-600 fira-semibold hover:underline transition-all duration-300 ease-in-out"
            >
              Twitter
            </a>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal>
          <a
            href="mailto:relmarzouki@gmail.com"
            className="text-rc-rocket text-6xl max-sm:text-5xl tracking-widest hover:text-orange-600 transition-all duration-300 ease-in-out"
          >
            Relmarzouki@gmail.com
          </a>
        </Reveal>
      </div>
      <Reveal styles="absolute right-10 top-10 max-sm:relative max-sm:top-0 max-sm:right-0">
        <button className="btn-white max-sm:mt-10">My Resume</button>
      </Reveal>
    </section>
  );
};

export default ContactSection;
