import "./Components/App.css";
import Navbar from "./Components/navbar.jsx";
import Aboutme from "./Components/aboutme.jsx";
import HeroBottom from "./Components/heroBottom.jsx";
import Projects from "./Components/projects.jsx";
function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <HeroBottom />
      </div>
      <Aboutme />
      <Projects />
    </>
  );
}

export default App;
