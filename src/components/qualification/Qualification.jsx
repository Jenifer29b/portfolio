import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div className="qualification__button button--flex">
              <i className="uil uil-school qualification__icon"></i>
            </div>
          </div>

          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Full Stack Development
                  </h3>
                  <span className="qualification__subtitle">
                    Guvi Geeks Limited
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">2024 - Present</i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    B.Sc in Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    Madras University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">2021 - 2024</i>
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Maths with Computer Science (Higher Secondary)
                  </h3>
                  <span className="qualification__subtitle">
                    IHM Girls School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
