import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./project-card";
import Particle from "../particle/particle";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import cvgen from "../../assets/projects/cv-generator.png";
import kotadom from "../../assets/projects/kotadom.png";
import quitfor from "../../assets/projects/quit-for.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="theme-color">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvgen}
              githubLink={'https://github.com/donfear/team_work_practice'}
              title="CV Generator"
              description="Responsive React SPA, used to create and generate CV"
              link="https://donfear.github.io/team_work_practice/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kotadom}
              title="KotAdom"
              githubLink={'https://github.com/donfear/kotadom'}
              description="Responsive website, built on react with i18n"
              link="https://donfear.github.io/kotadom/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quitfor}
              title="Quit For"
              description="React Native application final work"
              link="https://play.google.com/store/apps/details?id=com.quitfor&hl=en&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
