import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Frontend <br></br> Development
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">Frontend Development</h3>
                <p className="services__modal-description">
                  Design and implement responsive and user-friendly interfaces
                  using HTML, CSS, and JavaScript. Develop single-page
                  applications using modern frameworks like React. Ensure
                  cross-browser compatibility and optimize for performance and
                  accessibility.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Effective at debugging, optimizing performance, and
                      troubleshooting issues.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Ability to develop tailored solutions and prototypes based
                      on client needs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Backend <br></br> Developement
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Backend Developement</h3>
                <p className="services__modal-description">
                  Build and maintain server-side applications using technologies
                  such as Node.js and Express.js . Create and manage RESTful
                  APIs endpoints to facilitate communication between front-end
                  and back-end. Implement and manage databases Mongodb and MySql
                  to handle data storage, retrieval, and manipulation.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the Responsive Websities
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Web Page Development</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user Interface
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Continuous Learning and Improvement
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">
                  Continuous Learning and Improvement
                </h3>
                <p className="services__modal-description">
                  Keeping Up-to-Date: Stay informed about the latest industry
                  trends, technologies, and best practices. Apply new knowledge
                  to improve development processes and tools.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Continually expanding my knowledge through online courses,
                      coding bootcamps, and hands-on projects.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Eager to stay up-to-date with emerging technologies and
                      industry trends to provide innovative solutions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Committed to staying updated with industry trends and
                      emerging technologies.
                    </p>
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
