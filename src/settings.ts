import { TranslatorProvider, UrlLanguageLocation } from "./enums";
import { Language } from "./classes";

export interface CloudLocalizationSettings {
    defaultLanguage?: string;
    logTranslationsFromProvider?: boolean;
    translatorProvider?: TranslatorProvider; 
    translatorProviderKey?: string;
    urlLanguageLocation?: UrlLanguageLocation;

    languages: Language[];
}
