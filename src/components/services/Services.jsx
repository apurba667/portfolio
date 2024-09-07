import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="skills">What i Offer</h5>
              <h2>Services</h2>
            </div>
          </div>
          <div className="row gapp mt-3">
            <div className="col-lg-4 col-md-6 ">
              <div className="service-main">
                <div className="service-head">
                  <h4>Advanced Flutter App Development (Android/iOS)</h4>
                </div>
                <ul className="service-list">
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Cross-platform mobile app development (Android/iOS)</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                      State management using Provideservice-headr, GetX, or BLoC
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Local storage with Hive and Shared Preferences</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                      Pixel-perfect design implementation based on Figma or
                      Adobe XD
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>REST API integration and Firebase backend setup</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                      Dependency injection techniques for cleaner architecture
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-main">
                <div className="service-head">
                  <h4>App Deployment and Scaling (Firebase/Supabase)</h4>
                </div>
                <ul className="service-list">
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                      App store (Google Play & Apple App Store) submissions and
                      management
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Firebase/Supabase resource optimization for scaling</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                      Monitoring app performance (using tools like Firebase
                      Analytics)
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Regular updates, bug fixing, and security patches</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Database and cloud storage management</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-main">
                <div className="service-head">
                  <h4>Flutter App Optimization and Maintenance</h4>
                </div>
                <ul className="service-list">
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                    Codebase refactoring for better performance and maintainability
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Debugging and solving complex issues</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>
                    Performance optimization (reducing app load times and memory usage)
                    </p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Implementation of Freezed for immutable data classes</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Continuous integration (CI/CD) and version control management with Git</p>
                  </li>
                  <li>
                    <BiCheck className="service-list-icon" />
                    <p>Regular updates and maintenance</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
