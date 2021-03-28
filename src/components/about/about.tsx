import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../particle/particle";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./techstack";
import Aboutcard from "./about-card";
import laptopImg from "../../assets/about.png";
import ReactTooltip from "react-tooltip";
function About() {
  const icons = [
    {name: 'javascript', type: 'plain'},
    {name: 'typescript', type: 'plain'},
    {name: 'git', type: 'plain'},
    {name: 'nodejs', type: 'plain'},
    {name: 'express', type: 'original'},
    {name: 'react', type: 'original'},
    {name: 'angularjs', type: 'plain'},
    {name: 'mysql', type: 'plain'},
    {name: 'wordpress', type: 'plain'},
    {name: 'babel', type: 'plain'},
    {name: 'apache', type: 'plain'},
    {name: 'bash', type: 'plain'},
    {name: 'docker', type: 'plain'},
    {name: 'googlecloud', type: 'plain'},
    {name: 'bootstrap', type: 'plain'},
    {name: 'gulp', type: 'plain'},
    {name: 'html5', type: 'plain'},
    {name: 'ionic', type: 'original'},
    {name: 'jquery', type: 'plain'},
    {name: 'less', type: 'plain-wordmark'},
    {name: 'nestjs', type: 'plain'},
    {name: 'php', type: 'plain'},
    {name: 'photoshop', type: 'plain'},
    {name: 'sass', type: 'plain'},
    {name: 'travis', type: 'plain'},
    {name: 'ubuntu', type: 'plain'},
    {name: 'webpack', type: 'plain'},
  ]
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="theme-color">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="theme-color">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {
            icons.map((i, key) => (
              <Techstack name={i.name} iconName={`devicon-${i.name}-${i.type}`} key={key}/>
            ))
          }
        </Row>
      </Container>
      <ReactTooltip/>

    </Container>
  );
}

export default About;
