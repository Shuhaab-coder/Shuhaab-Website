import "./Components/App.css";
import Navbar from "./Components/Navbar.jsx";
import Aboutme from "./Components/aboutme.jsx";
import HeroBottom from "./Components/HeroBottom.jsx";
import Projects from "./Components/Projects.jsx";
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
