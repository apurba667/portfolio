import React from "react";
import "./header.css";
import Cv from "../../assets/cv.pdf";
import mee from "../../assets/mee.png";
import Headersocials from "../headersocial/Headersocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
     <section id="home">
     <header>
        <div className="container header-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <h5>Hello I'm</h5>
                <h1>
                  <Typewriter
                    options={{
                      strings: ["APURBA KUMAR ROY"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h5>Mobile Application Developer</h5>
                <div className="cv-lets-talk">
                  <a href={Cv} download className="btnn">
                    Download Cv
                  </a>
                  <a href="#contact" className="btnn btnn-primary">
                    Lets Talk
                  </a>
                </div>

                <Headersocials />
                <div className="my-img">
                  <img src={mee} className="w-100" alt="my img" />
                </div>

                <a href="#contact" className="scroll-down">
                  Scroll Down
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
     </section>
    </>
  );
};

export default Header;
