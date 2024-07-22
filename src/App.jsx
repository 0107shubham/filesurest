import "./App.css";
import Contact from "./components/Contact";
import Development from "./components/Development";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="flex flex-col items-center bg-[#f2f4f7]">
      <Navbar />
      <Home />
      <Services />
      <Media />
      <Projects />
      <Contact />
      <Development />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
