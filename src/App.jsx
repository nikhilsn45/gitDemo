
import React from "react";
import Header from "./header";
import About from "./about";
import Education from "./education";
import Technology from "./technology";
import Projects from "./project";
import Contacts from "./contacts"
function App() {
  return (
    <div className="all">
      <Header />
    <About />
    <Education/>
    <Technology />
    <Projects />
    <Contacts />
    </div>

  )
}

export default App;
