import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Navv from "./components/navv/Navv";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Preloader from "./components/preloader/Preloader";

function App() {
 

  return (
    <>
      <Preloader />
      <Header />
      
      <Navv />

      <About />

      <Experience />

      <Services />

      <Portfolio />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
