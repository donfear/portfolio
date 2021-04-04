import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const {t} = useTranslation();

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="theme-color">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div
          className={props.githubLink ? "row" : ''}
          style={{
            ...(props.githubLink && { justifyContent: "space-between", padding: "0 16px" })
          }}
        >
          <Button variant="primary" href={props.link} target="_blank">
            {t("Live")}
          </Button>
          {props.githubLink && (
            <Button variant="primary" href={props.githubLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
