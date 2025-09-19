import MainLayout from "@/layouts/MainLayout";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </MainLayout>
  );
}
