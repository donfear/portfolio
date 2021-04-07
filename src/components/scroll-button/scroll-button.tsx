import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scroll-button.scss";
import { CSSTransition } from "react-transition-group";

export default function ScrollButton() {
  const [hasOverFlow, setHasOverFlow] = useState(false);

  React.useEffect(() => {
    setTimeout(() =>
      setHasOverFlow(
        getScreenElement()?.offsetHeight < getScreenElement()?.scrollHeight
      )
    );
  });

  function getScreenElement(): HTMLDivElement {
    return document.querySelector("#active_screen") as HTMLDivElement;
  }

  function handleButtonClick() {
      const el = getScreenElement();
      el?.scrollTo?.({
      top: Number.MAX_SAFE_INTEGER,
      behavior: "smooth"
    });
  }

  return (
    <CSSTransition in={hasOverFlow} unmountOnExit classNames="fade" timeout={400}>
      <div className="scroll-button">
        <div
          className="scroll-button__icon"
          onClick={() => handleButtonClick()}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </CSSTransition>
  );
}
