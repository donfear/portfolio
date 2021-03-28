import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../particle/particle";
import Resumecontent from "./resume-content";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack Developer"
              date="Jule 2018 - Present"
              content={[
                "Develop all kind of web apps using modern technologies",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Estonian Entrepreneurship University of Applied Sciences"
              date="2017 - Present"
              content={[`Web Page, Digital/Multimedia and Information Resources Design`]}
            />
          </Col>
        </Row>
    </Container>
  );
}

export default Resume;
