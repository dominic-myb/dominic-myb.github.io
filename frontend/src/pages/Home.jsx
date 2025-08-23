import MainLayout from "@/layouts/MainLayout";
import { AboutSection, ProjectSection, ContactSection } from "@/sections/";

const Home = () => (
  <MainLayout>
    <AboutSection />
    <ProjectSection />
    <ContactSection />
  </MainLayout>
);

export default Home;
