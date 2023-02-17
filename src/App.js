// modules/packages imports
import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

// App function declaration 
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;