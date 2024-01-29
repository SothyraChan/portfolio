import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
