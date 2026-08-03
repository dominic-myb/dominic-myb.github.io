import { Header } from "./components/sections/header";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";
import { Certificate } from "@/components/sections/certificate";
import { Footer } from "@/components/sections/footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Certificate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
