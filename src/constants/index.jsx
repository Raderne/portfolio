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
import {
  ecommerceImage1,
  ecommerceImage2,
  ecommerceImage3,
  ecommerceImage4,
  inkblogSc1,
  inkblogSc2,
  inkblogSc3,
  inkblogSc4,
  newsAppSc1,
  newsAppSc2,
  newsAppSc3,
  newsAppSc4,
} from "../utils";

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

export const projectsData = [
  {
    name: "Ecommerce Website with CMS / ASP.Net",
    description:
      "An ecommerce website with a CMS for managing products and orders. Built with ASP.Net amd MS SQL.",
    skills: ["ASP.Net", "MS SQL", "HTML5", "CSS3", "JavaScript", "C#"],
    code: "https://github.com/Raderne/Ecommerce-CMS",
    demo: "http://myredashop.somee.com/",
    images: [
      ecommerceImage1,
      ecommerceImage2,
      ecommerceImage3,
      ecommerceImage4,
    ],
  },
  {
    name: "News App: Haberler Toplayıcı / flutter",
    description:
      "Haber Toplayıcı is a Flutter app that allows users to conveniently gather and explore the latest news from various sources using the NewsAPI.org API. Stay informed with the latest headlines, articles, and updates in a user-friendly interface.",
    skills: ["Flutter", "Dart", "Firebase", "Node.js"],
    code: "https://github.com/Raderne/News-App-flutter",
    demo: "",
    images: [newsAppSc1, newsAppSc2, newsAppSc3, newsAppSc4],
  },
  {
    name: "News App: Haberler Toplayıcı / Android Studio & Java",
    description:
      "NewsApp-Android-Studio is an Android news application developed in Java using Android Studio. The app leverages the News API from newsapi.org to fetch and display the latest news articles. The user interface utilizes RecyclerViews for a smooth and responsive presentation of news items. One of the standout features includes the ability for users to save articles, with data storage and management handled by Firebase Realtime Database. Additionally, a custom Node.js API (Mobile-News-App-API) has been created to manage user authentication, registration, and article manipulation.",
    skills: ["Android Studio", "Java", "Firebase", "Node.js"],
    code: "https://github.com/Raderne/NewsApp-Android-Studio",
    demo: "",
    images: [newsAppSc1, newsAppSc2, newsAppSc3, newsAppSc4],
  },
  {
    name: "InkBlog Website / GraphQL",
    description:
      "the blog website is a full-stack project that allows users to create, read, update, and delete blog posts. The project consists of two main parts: the client side, built with Next.js, and the server side, built with Node.js, Express, MongoDB, and GraphQL.",
    skills: ["Next.js", "Node.js", "Express", "MongoDB", "GraphQL"],
    code: "https://github.com/Raderne/blog-GraphQL-Nextjs-project",
    demo: "",
    images: [inkblogSc1, inkblogSc2, inkblogSc3, inkblogSc4],
  },
];
