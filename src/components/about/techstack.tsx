import React from "react";
import { Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(props: {iconName: string, name: string}) {
  function capitalizedName() {
    return props.name.charAt(0).toUpperCase() + props.name.slice(1)
  } 
  return (
    <div>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-images"  data-tip={capitalizedName()} >
        <i className={props.iconName}></i>
        </div>
      </Col>
    </div>
  );
}

export default Techstack;
