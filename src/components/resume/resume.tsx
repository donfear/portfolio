import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./resume-content";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import cv from "../../assets/cv.pdf";
import { useTranslation } from "react-i18next";

function Resume() {
  const {t} = useTranslation();
  const expirience = [
    {
      title: "ADN Games",
      date: `${t('Jule')} 2018 - ${t('Present')}`,
      content: [t("Full Stack Developer")],
    },
  ];
  const education = [
    {
      title: "Estonian Entrepreneurship University of Applied Sciences",
      date: `2017 - ${t('Present')}`,
      content: [
        t(`Web Page, Digital/Multimedia and Information Resources Design`),
      ],
    },
  ];
  return (
    <Container fluid className="resume-section">
      <Row className="resume-download">
        <div>
          <a
            download="mihhail_solovjov_cv.pdf"
            href={cv}
            className="btn btn-primary"
          >
            {t('Download CV')}
          </a>
        </div>
      </Row>
      <Row className="resume">
        <Col md={6} className="resume-left">
          <h3 className="resume-title">{t('Experience')}</h3>
          {expirience.map((eProps, index) => (
            <Resumecontent {...eProps} key={index} />
          ))}
        </Col>
        <Col md={6} className="resume-right">
          <h3 className="resume-title">{t('Education')}</h3>
          {education.map((educationProps, index) => (
            <Resumecontent {...educationProps} key={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
