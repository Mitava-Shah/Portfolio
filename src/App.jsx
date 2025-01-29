import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSectionRef } from "./Redux/ScrollSlice";
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import Skills from './Components/Skills'
import AboutMe from "./Components/AboutMe"
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from "./Components/Footer"

function App() {
  const dispatch = useDispatch();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    dispatch(setSectionRef({ name: "home", ref: homeRef }));
    dispatch(setSectionRef({ name: "about", ref: aboutRef }));
    dispatch(setSectionRef({ name: "projects", ref: projectsRef }));
    dispatch(setSectionRef({ name: "skills", ref: skillsRef }));
    dispatch(setSectionRef({ name: "contact", ref: contactRef }));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div ref={homeRef}> <HeroSection /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><ContactMe /></div>
      <Footer />
    </>
  );
}

export default App;
