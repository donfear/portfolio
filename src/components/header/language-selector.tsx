import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDI } from "../../hooks/use-di";
import { ELanguage } from "../../types/enums/language.enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RuLanguage from '../../assets/languages/ru.svg';
import EnLanguage from '../../assets/languages/en.svg';

export function LanguageSelector({
  setIsExpanded,
}: {
  setIsExpanded: (value: boolean) => void;
}) {
  const DI = useDI();
  
  const languages = [
      {language: ELanguage.EN, icon: EnLanguage},
      {language: ELanguage.RU, icon: RuLanguage},
  ];
  return (
    <DropdownButton
      className="nav-item"
      id="dropdown-item-button"
      title={<FontAwesomeIcon icon={faLanguage} />}
    >
        {
            languages.map((l, key) => (
                <Dropdown.Item
                as="button"
                key={key}
                onClick={() => {
                  setIsExpanded(false);
                  DI.languageService().setLanguage(l.language);
                }}
              >
                <div className={`language-selector__logo ${l.language === DI.languageService().getLanguage() ? 'language-selector__logo--selected' : ''}`}>
                    <img src={l.icon} alt="en-lng"/>
                </div>
              </Dropdown.Item>
            ))
        }
    </DropdownButton>
  );
}
