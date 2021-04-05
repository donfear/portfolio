import i18n from "../i18n";
import { ELanguage } from "../types/enums/language.enum";

export class LanguageService {
  private _storageKey: string = "lng";

  setLanguage(language: ELanguage): void {
    i18n.changeLanguage(language);
    localStorage.setItem(this._storageKey, language);
  }

  getLanguage(): ELanguage {
    const storedLanguage = localStorage.getItem(this._storageKey) as ELanguage || '';
    return Object.values(ELanguage).includes(storedLanguage)
      ? storedLanguage
      : ELanguage.EN;
  }

}
