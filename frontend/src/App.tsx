import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
// import { Certificate } from "@/components/sections/Certificate";
// import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <Certificate /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
