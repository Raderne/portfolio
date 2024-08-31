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
  cardMakerSc1,
  cardMakerSc2,
  cardMakerSc3,
  currencySc1,
  currencySc2,
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
  spiritSc1,
  spiritSc2,
  spiritSc3,
  spiritSc4,
  spiritSc5,
  spiritSc6,
  studentTrackerSc1,
  studentTrackerSc2,
  studentTrackerSc3,
  studentTrackerSc4,
  studentTrackerSc5,
  weatherSc1,
  weatherSc2,
} from "../utils";

export const skills = [
  {
    name: "HTML5",
    logo: <FaHtml5 className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "CSS3",
    logo: <FaCss3 className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "JavaScript",
    logo: <FaJsSquare className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "React",
    logo: <FaReact className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "Next.js",
    logo: <RiNextjsFill className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "Tailwind CSS",
    logo: <RiTailwindCssFill className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "Node.js",
    logo: <FaNodeJs className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "C#",
    logo: <SiCsharp className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "ASP.Net",
    logo: <SiDotnet className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "MongoDB",
    logo: <SiMongodb className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "MS SQL",
    logo: <SiMicrosoftsqlserver className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "GraphQL",
    logo: <SiGraphql className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "PostgreSQL",
    logo: <SiPostgresql className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "Android Studio",
    logo: <SiAndroidstudio className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "React Native",
    logo: <FaReact className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "Flutter",
    logo: <RiFlutterFill className="max-sm:text-lg text-2xl" />,
  },
  {
    name: "GIT",
    logo: <FaGitAlt className="max-sm:text-lg text-2xl" />,
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
    name: "Spirit Pharma Feance Website",
    description:
      "A website for a pharmaceutical company built with Next.js and Tailwind CSS. The website is fully responsive and features a clean and modern design. The project also using Sanity CMS for managing the content.",
    skills: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    code: "https://github.com/Raderne/spirite-pharma",
    demo: "https://spirite-pharma.vercel.app/",
    images: [spiritSc1, spiritSc2, spiritSc3],
    phone: [spiritSc4, spiritSc5, spiritSc6],
    Icon: RiNextjsFill,
  },
  {
    name: "Ecommerce Website",
    description:
      "An ecommerce website with a CMS for managing products and orders. Built with ASP.Net amd MS SQL.",
    skills: ["ASP.Net", "MS SQL", "HTML5", "CSS3", "JavaScript", "C#"],
    code: "https://github.com/Raderne/Ecommerce-CMS",
    demo: "http://myredashop.somee.com/",
    images: [ecommerceImage1, ecommerceImage2, ecommerceImage3],
    phone: [ecommerceImage4],
    Icon: SiDotnet,
  },
  {
    name: "News App: Haberler Toplayıcı",
    description:
      "NewsApp-Android-Studio is an Android news application developed in Java using Android Studio. The app leverages the News API from newsapi.org to fetch and display the latest news articles. The user interface utilizes RecyclerViews for a smooth and responsive presentation of news items. One of the standout features includes the ability for users to save articles, with data storage and management handled by Firebase Realtime Database. Additionally, a custom Node.js API (Mobile-News-App-API) has been created to manage user authentication, registration, and article manipulation.",
    skills: ["Android Studio", "Java", "Firebase", "Node.js"],
    code: "https://github.com/Raderne/NewsApp-Android-Studio",
    demo: "",
    images: [],
    phone: [newsAppSc1, newsAppSc2, newsAppSc3, newsAppSc4],
    Icon: SiAndroidstudio,
  },
  {
    name: "InkBlog Website",
    description:
      "the blog website is a full-stack project that allows users to create, read, update, and delete blog posts. The project consists of two main parts: the client side, built with Next.js, and the server side, built with Node.js, Express, MongoDB, and GraphQL.",
    skills: ["Next.js", "Node.js", "Express", "MongoDB", "GraphQL"],
    code: "https://github.com/Raderne/blog-GraphQL-Nextjs-project",
    demo: "",
    images: [inkblogSc1, inkblogSc2, inkblogSc3, inkblogSc4],
    phone: [],
    Icon: SiGraphql,
  },
  {
    name: "Greeting Card Maker",
    description:
      "Welcome to the Greeting Card Maker project! This application enables users to craft personalized greeting cards effortlessly. Users can input a title and a message or generate one with GeminiAI, which dynamically update on the card preview. Additionally, they can choose from a selection of preset background images or upload their own to further customize their cards. The app is built with React on the front end and Node.js on the back end.",
    skills: ["React", "Node.js", "Express", "Tailwind CSS"],
    code: "https://github.com/Raderne/greetings-card-maker",
    demo: "",
    images: [cardMakerSc1, cardMakerSc2, cardMakerSc3],
    phone: [],
    Icon: FaReact,
  },
  {
    name: "Student Solutions Tracker",
    description:
      "The Student Solutions Tracking website is a platform designed to help students track how many questions solved, teachers communicate with students, and track their progress. It provides an admin panel for teachers to perform various tasks, including adding, editing, and removing students. Additionally, teachers can send messages to individual student.",
    skills: ["HTML5", "CSS3", "JavaScript", "Firebase"],
    code: "https://github.com/Raderne/students-solutions-tracker",
    demo: "https://sehitgokselkoc.org/",
    images: [studentTrackerSc1, studentTrackerSc2, studentTrackerSc3],
    phone: [studentTrackerSc4, studentTrackerSc5],
    Icon: FaJsSquare,
  },
  {
    name: "Currency Converter",
    description:
      "Currency Converter is a React application that allows users to convert between different currencies. The app leverages the ExchangeRate-API to fetch the latest exchange rates and perform conversions. Users can select the source and target currencies, enter an amount, and view the converted value in real-time.",
    skills: ["React", "JavaScript"],
    code: "https://github.com/Raderne/currency-converter",
    demo: "https://raderne.github.io/currency-converter/",
    images: [currencySc1],
    phone: [currencySc2],
    Icon: FaReact,
  },
  {
    name: "News App: Haberler Toplayıcı",
    description:
      "Haber Toplayıcı is a Flutter app that allows users to conveniently gather and explore the latest news from various sources using the NewsAPI.org API. Stay informed with the latest headlines, articles, and updates in a user-friendly interface.",
    skills: ["Flutter", "Dart", "Firebase", "Node.js"],
    code: "https://github.com/Raderne/News-App-flutter",
    demo: "",
    images: [],
    phone: [newsAppSc1, newsAppSc2, newsAppSc3, newsAppSc4],
    Icon: RiFlutterFill,
  },
  {
    name: "Weather App",
    description:
      " This application provides real-time weather information along with stunning images to enhance your weather-checking experience. It's built using React and leverages the power of the Flickr API for fetching dynamic images that correspond to the current weather conditions, and the OpenWeatherMap API for accurate weather data.",
    skills: ["React", "JavaScript"],
    code: "https://github.com/Raderne/weather-app-react",
    demo: "https://raderne.github.io/weather-app-react/",
    images: [weatherSc1],
    phone: [weatherSc2],
    Icon: FaReact,
  },
];
