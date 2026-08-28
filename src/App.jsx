import { useState } from "react";
import Navbar from "./Components/Navbar";
import First from "./Components/First";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
export default function App(){
  const [theme,settheme]=useState("Dark")
  return(
    <div className={theme}>
      <Navbar theme={theme} settheme={settheme}/>
      <First/>
      <Skills/> 
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}