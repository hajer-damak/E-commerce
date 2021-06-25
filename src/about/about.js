import React from "react";
import "./stl.css";

function About() {
  return (
    <div className="about">
      <div className="section1-about">
        <div className="col-lg-11 offset-1">
          <h3 className="page">
            <a href="/" className="home-link">
              Home
            </a>
            <span style={{ color: "#453227" }}> / About</span>
          </h3>
        </div>
      </div>
      <div className="row col-lg-11 offset-1 section2-about">
        <div className="col-lg-6" >
          <img style={{marginTop:"-3rem" }}
            className="img-fluid"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="our-story"
          />
        </div>
        <div className="col-lg-6 about-story">
          <h3 style={{ fontSize: "2.3rem" }} className="about-title">Our Story</h3>
          <div className="underline-about"></div>
          <div className="about-text"><p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p></div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
