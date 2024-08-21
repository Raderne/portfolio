import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiCsharp,
  SiDotnet,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    logo: <FaHtml5 className="text-2xl" />,
  },
  {
    name: "CSS3",
    logo: <FaCss3 className="text-2xl" />,
  },
  {
    name: "JavaScript",
    logo: <FaJsSquare className="text-2xl" />,
  },
  {
    name: "React",
    logo: <FaReact className="text-2xl" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="text-2xl" />,
  },
  {
    name: "Next.js",
    logo: <RiNextjsFill className="text-2xl" />,
  },
  {
    name: "Tailwind CSS",
    logo: <RiTailwindCssFill className="text-2xl" />,
  },
  {
    name: "Node.js",
    logo: <FaNodeJs className="text-2xl" />,
  },
  {
    name: "C#",
    logo: <SiCsharp className="text-2xl" />,
  },
  {
    name: "ASP.Net",
    logo: <SiDotnet className="text-2xl" />,
  },
  {
    name: "MongoDB",
    logo: <SiMongodb className="text-2xl" />,
  },
  {
    name: "MS SQL",
    logo: <SiMicrosoftsqlserver className="text-2xl" />,
  },
  {
    name: "GraphQL",
    logo: <SiGraphql className="text-2xl" />,
  },
  {
    name: "PostgreSQL",
    logo: <SiPostgresql className="text-2xl" />,
  },
  {
    name: "Android Studio",
    logo: <SiAndroidstudio className="text-2xl" />,
  },
  {
    name: "React Native",
    logo: <FaReact className="text-2xl" />,
  },
  {
    name: "Flutter",
    logo: <RiFlutterFill className="text-2xl" />,
  },
  {
    name: "GIT",
    logo: <FaGitAlt className="text-2xl" />,
  },
];

export const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reda-elmarzouki-98a89ba0/",
    logo: <FaLinkedin className="text-2xl ml-3" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Raderne",
    logo: <FaGithub className="text-2xl ml-3" />,
  },
  {
    name: "Email",
    url: "mailto:Relmarzouki@gmail.com",
    logo: <FaMailBulk className="text-2xl ml-3" />,
  },
];
