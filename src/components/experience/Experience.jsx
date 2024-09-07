import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="skills">What Skills I Have</h5>
              <h2>My Experience</h2>
            </div>
          </div>
          <div className="row gapp exper-padding">
            <div className="col-lg-9">
              <div className="experience-mobile-application">
                <h5>Mobile Application</h5>
                <div className="experience-contents">
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>FLUTTER</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>DART</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>GETX</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>PROVIDER</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>BLOC</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>FIGMA & ADOBE XD</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>FIREBASE</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>SUPABASE</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>SHARED PREFERENCE</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>HIVE</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>GET STORAGE</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>API INTREGATION</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                  <article className="experience-details">
                    <BsPatchCheckFill />
                    <div className="content-ex">
                      <h6>GOOGLE API</h6>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="experience-mobile-application">
                <h5>Job Experience</h5>
                <article className="experience-details">
                 
                  <div className="content-ex">
                    <h6>Junior Flutter Developer</h6>
                    <h6>Music Event</h6>
                    <small className="text-light">
                      A France based Start-up in Seed Stage
                    </small>
                    <small className="text-light">June 2023 – May 2024</small>
                  </div>
                </article>
                <br />
                <h5>Currently Working</h5>
                <article className="experience-details">
                
                  <div className="content-ex">
                    <h6>Junior Flutter Developer</h6>
                    <h6>QuickTech IT</h6>
                    <small className="text-light">June 2024</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
