import MainLayout from "@/layouts/MainLayout";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <MainLayout>
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
