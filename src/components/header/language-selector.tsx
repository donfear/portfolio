import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDI } from "../../hooks/use-di";
import { ELanguage } from "../../types/enums/language.enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LanguageSelector({
  setIsExpanded,
}: {
  setIsExpanded: (value: boolean) => void;
}) {
  const DI = useDI();
  return (
    <DropdownButton
      className="nav-item"
      id="dropdown-item-button"
      title={<FontAwesomeIcon icon={faLanguage} />}
    >
      <Dropdown.Item
        as="button"
        onClick={() => {
          setIsExpanded(false);
          DI.languageService().setLanguage(ELanguage.EN);
        }}
      >
        <div className="language-selector__logo">🇺🇸</div>
      </Dropdown.Item>
      <Dropdown.Item
        as="button"
        onClick={() => {
          setIsExpanded(false);
          DI.languageService().setLanguage(ELanguage.RU);
        }}
      >
        <div className="language-selector__logo">🇷🇺</div>
      </Dropdown.Item>
    </DropdownButton>
  );
}
