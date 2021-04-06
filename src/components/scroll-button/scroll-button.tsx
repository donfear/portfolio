import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scroll-button.scss";

export default function ScrollButton({ screenIndex }: { screenIndex: number }) {
  function getScreenElement(): HTMLDivElement {
    return document.querySelectorAll(".react-tiger-transition--screen")[
      screenIndex === 0 ? 0 : 1
    ] as HTMLDivElement;
  }

  function handleButtonClick() {
    getScreenElement()?.scrollTo?.({
      top: Number.MAX_SAFE_INTEGER,
      behavior: "smooth",
    });
  }
  // TODO DETECT OVERFLOW AND HIDE
//   console.log('has overflow', getScreenElement()?.offsetHeight < getScreenElement()?.scrollHeight)

  return (
    <div className="scroll-button">
      <div className="scroll-button__icon" onClick={() => handleButtonClick()}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}
