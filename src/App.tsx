import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";
import Navbar from "./components/ui/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
