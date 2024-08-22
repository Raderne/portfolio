import AboutSection from "../components/AboutSection";
import Introduction from "../components/Introduction";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <main>
      <div className="h-[190vh]"></div>
      <Introduction />
      <AboutSection />
      <ProjectsSection />
      <div className="h-[190vh]"></div>
    </main>
  );
};

export default Home;
