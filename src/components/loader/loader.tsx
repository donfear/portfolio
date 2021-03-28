import React from "react";
// import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loader.scss";

function Loader(props) {
  return (
    <>
      <div className="wrapper">
        <div className="container-loader">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
