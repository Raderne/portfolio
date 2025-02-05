import { LuArrowRight } from "react-icons/lu";
import { links, skills } from "../constants";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import AboutLink from "./AboutLink";

const AboutSection = () => {
	return (
		<section
			className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0 lg:items-start screen-max-width max-sm:mt-20"
			id="about"
		>
			<div className="block">
				<Reveal>
					<h1 className="headers">
						AboutMe<span className="text-orange-600">.</span>
					</h1>
				</Reveal>

				<Reveal>
					<p className="mb-6 fira-regular">
						Hey! I&apos;m{" "}
						<span className="text-orange-600 font-bold text-2xl"> Reda</span>, a
						developer from Rabat, Morocco. I specialize in the front-end, and of
						course I know my way around the back-end too. I enjoy creating
						functional and interactive web experiences and work mainly with C#,
						JavaScript and their frameworks, but I&apos;m open to using the best
						tools for the job.
					</p>
				</Reveal>
				<Reveal>
					<p className="mb-6">
						Outside of programming, I enjoy drawing and painting, which
						I&apos;ve been learning for a few years. Exploring web design
						reignited my interest in art and design after a long break.
					</p>
				</Reveal>
				<Reveal>
					<p className="mb-6">
						I hold an Associate Degree in Computer Science from Isparta Applied
						Sciences University in Turkey. I&apos;m always eager to learn and
						grow as a developer and am currently seeking a new role. If you
						think I&apos;d be a good fit for your team, feel free to reach out.
					</p>
				</Reveal>
				<Reveal>
					<div className="flex items-center gap-3 pb-4">
						<p className="fira-semibold text-orange-600 text-2xl">My Links</p>
						<LuArrowRight className="text-orange-600 text-3xl" />
						{links.map((link, index) => (
							<AboutLink
								key={index}
								link={link}
							/>
						))}
					</div>
				</Reveal>
			</div>
			<div className="block">
				<Reveal>
					<h1 className="headers">
						Skills<span className="text-orange-600">.</span>
					</h1>
				</Reveal>
				<div>
					<Reveal>
						<p className="fira-regular">
							Here are a few{" "}
							<span className="text-orange-600 font-bold text-2xl">
								technologies
							</span>{" "}
							I&apos;ve been working with recently:
							<br />
							You can click on the skill to see my projects.
						</p>
					</Reveal>
					<div className="grid max-sm:grid-cols-2 grid-cols-3 gap-4 mt-4">
						{skills.map((skill, index) => (
							<Reveal key={index}>
								{skill.HasProjects ? (
									<Link to={`/projects?skill=${skill.name}`}>
										<div className="flex items-center justify-center max-sm:p-2 p-4 bg-gray-800 rounded-lg fira-semibold">
											{skill.logo}
											<p className="ml-2 max-sm:text-sm">{skill.name}</p>
										</div>
									</Link>
								) : (
									<div className="flex items-center justify-center max-sm:p-2 p-4 bg-gray-800 rounded-lg fira-semibold">
										{skill.logo}
										<p className="ml-2 max-sm:text-sm">{skill.name}</p>
									</div>
								)}
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
