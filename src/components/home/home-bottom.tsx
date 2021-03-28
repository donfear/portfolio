import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/photo.png";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function HomeBottom() {
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
              LET ME <span className="theme-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am {calculateAge(new Date('1997-09-19'))} years old, Estonian
              <br />
              <br />
              I speak English and Russian
              <br />
              <br />I am good in 
              <i>
                <b className="theme-color"> Teamwork, communication, leadership </b>
              </i>
              <br />
              <br />
              My current focus is &nbsp;
              <i>
                <b className="theme-color">
                  Front End Development
                </b>
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
            <h1>FIND <span className="theme-color">ME</span> ON</h1>
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
