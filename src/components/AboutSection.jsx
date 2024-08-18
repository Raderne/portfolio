import Reveal from "./Reveal";

const AboutSection = () => {
  return (
    <div
      className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0 lg:items-center screen-max-width"
      id="about"
    >
      <div className="">
        <Reveal>
          <h1 className="headers">
            About Me<span className="text-orange-600">.</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mb-4 fira-regular">
            Hey! I&apos;m{" "}
            <span className="text-orange-600 font-bold text-4xl"> Reda</span>,
            if you haven&apos;t already gathered that by now. I&apos;m a
            developer from Rabat, Morocco. I specialize in the front-end, and of
            course I know my way around the back-end too. I love creating
            beautiful and interactive experiences for the web. I&apos;m
            passionate about learning new technologies and improving my skills.
            I mostly work with JavaScript and its frameworks, but love building
            with whatever tools are right for the job.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-4">
            Outside of Programming, I love to draw and paint. I have been
            learning how to draw for a few years. Learning how to design
            websites has ignited my passion for art and design again after many
            years of neglect.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-4">
            I have an Associate Degree in Computer Science from the Isparta
            Applied Sciences University in Turkey. I&apos;m always looking for
            new opportunities to learn and grow as a developer. I&apos;m
            currently looking for a new role, so if you think I&apos;d be a good
            fit for your team, please get in touch.
          </p>
        </Reveal>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AboutSection;
