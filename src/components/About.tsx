import React from "react";
import { config } from "../config";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently an <b>Associate Software Engineer</b> at
      <a href="https://www.gosaas.ai/"> goSaaS Inc</a>, where I help build, bug fix
      and provide solution to real world problems using Oracle services. Previously, I was at{" "}
      <a href="https://zendevco.com/"> Zendev</a> working as a Python Developer.
    </p>
  );
  const two = (
    <p>
      In my free time, I’m nerdy about tech learning new concepts, love building and breaking things in loop, and 
      sometimes go explore Generative AI concepts and learn some of them that fascinates me more.
    </p>
  );

  const techStack = [
    "Python",
    "Typescript",
    "React.js",
    "Java",
    "Javascript ES6+",
    "C++",
    "DevOps/MLOps",
    "Docker",
    "Jenkins", 
    "CI/CD pipelines"
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="taimour" src={config.profileImage} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;