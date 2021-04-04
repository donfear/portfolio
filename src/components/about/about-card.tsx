import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const {t} = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('I am')}<span className="theme-color"> Mihhail Solovjov </span>
            {t('from')} <span className="theme-color"> {t('Tallinn, Estonia')}.</span>
            <br />
            <br />
            {t('Apart from coding, some other activities that I love to do!')}
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> {t('Playing Guitar and Synth')}
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> {t('Playing Board Games')}
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> {t('Running, Riding, Skating')}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
