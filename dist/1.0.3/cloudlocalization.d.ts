export declare enum LanguageDirection {
    ltr = 0,
    rtl = 1
}
export declare enum TranslationStatusResult {
    ignored = 1,
    succeeded = 2,
    failed = 3
}
export declare enum TranslatorProvider {
    none = 0,
    Azure = 1
}
export declare enum UrlLanguageLocation {
    none = 0,
    subdirectory = 1
}

export declare class Translations {
    constructor();
    languageCode: string;
    translation: TranslationValue[];
}
export declare class TranslationValue {
    default: string;
    text: string;
}
export declare class Language {
    code: string;
    displayName: string;
    direction?: LanguageDirection;
}
export declare class TranslationStatus {
    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string);
    element: HTMLElement;
    result: TranslationStatusResult;
    text: string;
    attribute: string;
}

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

export declare class CloudLocalization {
    constructor(settings: CloudLocalizationSettings);
    private mergeSettings;
    private static _translationsList;
    private static _defaultLanguage;
    private static _currentLanguage;
    private static _supportsTranslateAttribute;
    private static _settings;
    private static get translationsList();
    private static addTranslationValue;
    private static getTranslations;
    private static get nonTranslatedElements();
    private static get stylePropertiesToSwitch();
    private static get stylePropertiesToOpposite();
    private static get translatorProviderKey();
    private static get translatorProvider();
    private static get urlLanguageLocation();
    private static get logTranslationsFromProvider();
    private static get supportsTranslateAttribute();
    private static doTranslateElement;
    static get defaultLanguage(): Language;
    static get languages(): Language[];
    private static parseLanguage;
    static get direction(): LanguageDirection;
    private static translations;
    private static getTranslation;
    static translateElement(element: HTMLElement): Promise<TranslationStatus[]>;
    private static onlyUnique;
    static translateElementText(element: HTMLElement): Promise<TranslationStatus>;
    private static translateElementTitle;
    private static translateElementPlaceholder;
    private static translate;
    private static addRTLCSS;
    private static generateRTLCSS;
    private static getRulesStyle;
    private static switchRTLCSSValues;
    private static oppositeRTLCSSValues;
    private static canBeNegative;
    private static azureAutoTranslate;
    static scrollToTop(scrollDuration: number): void;
    static updateCurrentLanguage(): void;
    static get currentLanguage(): Language;
    private static updateUrlLanguage;
    private static get restartOnLanguageChange();
    static setCurrentLanguage(languageCode: string): void;
    static translateDOM(): Promise<void>;
    static fillInLanguages(): void;
    private static get defaultTextLanguage();
}
declare const cloudLocalization: (settings?: CloudLocalizationSettings) => CloudLocalization;
export default cloudLocalization;

