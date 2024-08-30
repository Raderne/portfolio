import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Introduction from "../components/Introduction";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <main>
      <div className="h-[190vh]"></div>
      <Introduction />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
