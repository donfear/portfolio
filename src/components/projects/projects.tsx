import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./project-card";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import cvgen from "../../assets/projects/cv-generator.png";
import kotadom from "../../assets/projects/kotadom.png";
import quitfor from "../../assets/projects/quit-for.png";
import portfolio from "../../assets/projects/portfolio.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();
  const projects = [
    {
      imgPath: portfolio,
      title: "Portfolio",
      githubLink: "https://github.com/donfear/portfolio",
      description: t("My portfolio built with React"),
      link: "https://donfear.github.io/portfolio/",
    },
    {
      imgPath: cvgen,
      title: "CV Generator",
      githubLink: "https://github.com/donfear/team_work_practice",
      description: t("Responsive React SPA, used to create and generate CV"),
      link: "https://donfear.github.io/team_work_practice/",
    },
    {
      imgPath: kotadom,
      title: "KotAdom",
      githubLink: "https://github.com/donfear/kotadom",
      description: t("Responsive website, built on react with i18n"),
      link: "https://donfear.github.io/kotadom/",
    },
    {
      imgPath: quitfor,
      title: "Quit For",
      description: t("React Native application final work"),
      link:
        "https://play.google.com/store/apps/details?id=com.quitfor&hl=en&gl=US",
    },
  ];
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          {t('My Recent')} <strong className="theme-color">{t('Works')} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("Here are a few projects I've worked on recently.")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((projectProps, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...projectProps} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
