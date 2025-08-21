import MainLayout from "@/layouts/MainLayout";
import { AboutSection, ProjectSection } from "@/sections/";
import Contact from "@/sections/Contact";

const Home = () => (
  <MainLayout>
    <AboutSection />
    <ProjectSection />
    <Contact />
  </MainLayout>
);

export default Home;
