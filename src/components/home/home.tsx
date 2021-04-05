import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBottom from "./home-bottom";
import TypeWriterPosition from "./typewriter-position";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {t} = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('Welcome')}!
              </h1>

              <h1 className="heading-name">
                {t("I'M")}
                <strong className="main-name"> MIHHAIL SOLOVJOV</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <TypeWriterPosition />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeBottom />
    </section>
  );
}
