import { LanguageService } from "../services/language.service";

export default class DI {
    private static _languageService: LanguageService;

    public static languageService(): LanguageService {
        return this._languageService || (this._languageService = new LanguageService())
    }
}