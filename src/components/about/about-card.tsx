import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="theme-color">Mihhail Solovjov </span>
            from <span className="theme-color"> Tallinn, Estonia.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Guitar and Synth
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Board Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Running, Riding, Skating
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
