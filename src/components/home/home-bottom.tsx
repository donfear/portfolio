import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/photo.png";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function HomeBottom() {
  const {t} = useTranslation();

  function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LET ME")}{" "}
              <span className="theme-color"> {t("INTRODUCE")} </span>{" "}
              {t("MYSELF")}
            </h1>
            <p className="home-about-body">
              {t("I Am")} {calculateAge(new Date("1997-09-19"))}{" "}
              {t("years old")}, {t("Estonian")}
              <br />
              <br />
              {t("I speak English and Russian")}
              <br />
              <br />
              {t("I am good in")}
              <i>
                <b className="theme-color">
                  {" "}
                  {t("Teamwork, communication, leadership")}{" "}
                </b>
              </i>
              <br />
              <br />
              {t("My current focus is")} &nbsp;
              <i>
                <b className="theme-color">Front End Development</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="photo">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              {t('FIND')} <span className="theme-color">{t('ME')}</span> {t('ON')}
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/donfear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mihhail-solovjov-258247158/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBottom;
