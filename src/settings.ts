import { TranslatorProvider, UrlLanguageLocation } from "./enums";
import { Language } from "./classes";

export interface CloudLocalizationSettings {
    defaultLanguage?: string;
    defaultTextLanguage?: string;
    logTranslationsFromProvider?: boolean;
    translatorProvider?: TranslatorProvider; 
    translatorProviderKey?: string;
    urlLanguageLocation?: UrlLanguageLocation;
    useDefaultLanguageAlways?: boolean;
    preventLayoutChangeForRTL?: boolean;

    languages: Language[];
    restartOnLanguageChange?: boolean;
}
