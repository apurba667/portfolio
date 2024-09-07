import React from "react";
import "./about.css";
import meaboutt from "../../assets/meaboutt.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="skills">Get To Know</h5>
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about-img">
                <img src={meaboutt} className="w-100" alt=" About img" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row gapp about-c">
                <div className="col-lg-4 col-md-4">
                  <article className="about-card text-center">
                    <FaAward className="about-icom" />
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                  </article>
                </div>
                <div className="col-lg-4 col-md-4">
                  <article className="about-card text-center">
                    <FiUsers className="about-icom" />
                    <h5>Clients</h5>
                    <small>10+ WorldWide</small>
                  </article>
                </div>
                <div className="col-lg-4 col-md-4">
                  <article className="about-card text-center">
                    <VscFolderLibrary className="about-icom" />
                    <h5>Projects</h5>
                    <small>10++</small>
                  </article>
                </div>
                <div className="col-lg-12">
                  <div className="aboutme-content">
                    <p>
                      Develop career where I can most effectively utilize my
                      analytical problem solving and interpersonal skills.
                      Willing to work with great sense of responsibility and
                      will certainly enjoy the challenge of new situation to
                      make a positive contribution.
                    </p>
                    <a href="#contact" className="btnn btnn-primary">
                      Lets Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
