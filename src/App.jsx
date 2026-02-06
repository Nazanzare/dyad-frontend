import About from "./assets/components/About";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import NeonFlow from "./assets/components/NeonFlow";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import WhyUs from "./assets/components/WhyUs";

function App() {
  return (
    <div>
      <NeonFlow />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
