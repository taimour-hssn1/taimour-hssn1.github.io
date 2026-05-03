import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";
import { config } from "../config";

const spotlightProjects = {
  DevConnector: {
    title: "dev-connector",
    desc: "A Portal 2 connects developers using common interests and can post about their thoughts as well as interact via them.",
    techStack: "React, Django",
    link: "https://github.com/taimour-hssn1/DevConnector",
    open: "https://frontend-devconnector.onrender.com",
    image: "/assets/devconnector.png",
  },
  "LinkUp": {
    title: "LinkUp",
    desc: "An AI notes taking + Quering, summarizing and transcribing online meets to ease the pain of manual note taking.",
    techStack: "Java (Spring Boot), Python, (EXPRESS.JS), REACT.JS, POSTGRESQL, Pinecone, LangChain ",
    // link: "",
    open: "https://meet-at-linkup.netlify.app",
    image: "/assets/linkup.png",
  },
  "Subjectify": {
    title: "Subjectify",
    desc: "A Web App that provides an resouces for users to fetch educational resources from github, youtube as well as google.",
    techStack: "React, Python, Scrappers ",
    link: "https://github.com/taimour-hssn1/subjectify",
    open: "https://subjectify.vercel.app/",
    image: "/assets/subjectify.png",
  },
  
};

const projects = {
  "Brick Breaker Game": {
    desc: "Craeted brick breaker gaem using assembly language to get a taste of development in low level languages",
    techStack: "MASM",
    link: "https://github.com/taimour-hssn1/BrickBreaker",
    // open: "",
  },
  "Mini Voting system": {
    desc: "A CLI app made using C++ to conduct mini-elections within the university or colleges ",
    techStack: "C",
    link: "https://github.com/taimour-hssn1/Mini-Voting-System",
    // open: "",
  },
  "Lead Management System": {
    desc: "A web app to keep track of your business leads and be updated with the latest news.",
    techStack: "Java Servlets, JSP",
    link: "https://github.com/taimour-hssn1/Lead-Management",
    // open: "",
  },
  
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href={config.socials.github}
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>

              <a
                href={
                  spotlightProjects[key]["open"] ||
                  spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;