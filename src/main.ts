import { CloudLocalizationSettings } from "./settings";
import { TranslatorProvider, UrlLanguageLocation, LanguageDirection, TranslationStatusResult } from "./enums";
import { Translations, Language, TranslationValue, TranslationStatus } from "./classes";

export class CloudLocalization {

    public constructor(settings: CloudLocalizationSettings) {
        CloudLocalization._settings = this.mergeSettings(settings);

        CloudLocalization.updateCurrentLanguage();
        CloudLocalization.fillInLanguages();
        CloudLocalization.translateDOM();

        document.addEventListener('change', async (event) => {
            const target = event.target as HTMLSelectElement;
            if (target && target.classList.contains('cloudlocalization-selection')) {
                const languageCode = target.value;

                if (languageCode !== '') {
                    CloudLocalization.setCurrentLanguage(languageCode);
                    CloudLocalization.scrollToTop(200);
                    await CloudLocalization.translateDOM();
                }
            }
        });
    }

    private mergeSettings(_settings: CloudLocalizationSettings): CloudLocalizationSettings {
        const settings: CloudLocalizationSettings = {
            defaultLanguage: 'en',
            defaultTextLanguage: 'en',
            logTranslationsFromProvider: false,
            translatorProvider: TranslatorProvider.none,
            translatorProviderKey: '',
            urlLanguageLocation: UrlLanguageLocation.none,
            useDefaultLanguageAlways: false,
            preventLayoutChangeForRTL: false,
            languages: []
        };

        return { ...settings, ..._settings };
    }

    // Private Variables

    private static _translationsList: Translations[] = [];
    private static _defaultLanguage: Language;
    private static _currentLanguage: Language;
    private static _supportsTranslateAttribute: boolean;
    private static _settings: CloudLocalizationSettings;

    private static get translationsList(): Translations[] {
        return this._translationsList;
    }

    private static addTranslationValue(languageCode: string, defaultText: string, translatedText: string): void {
        let translations = this.getTranslations(languageCode);

        if (!translations) {
            translations = new Translations();
            translations.languageCode = languageCode;
            this._translationsList.push(translations);
        }

        const translationValue = new TranslationValue();
        translationValue.default = defaultText;
        translationValue.text = translatedText;

        translations.translation.push(translationValue);
    }

    private static getTranslations(languageCode: string): Translations {
        return this.translationsList.find(translations => translations.languageCode === languageCode);
    }

    // Private Properties

    private static get nonTranslatedElements(): string[] {
        return ['code', 'html', 'head', 'head > *'];
    }

    private static get stylePropertiesToSwitch(): string[] {
        const properties = ['padding', 'margin'];
        return properties.flatMap(property => [`${property}-left`, `${property}-right`]);
    }

    private static get stylePropertiesToOpposite(): string[] {
        return ['text-align', 'justify-content', 'justify-self', 'float', 'background-position-x'];
    }

    private static get translatorProviderKey(): string {
        return this._settings.translatorProviderKey;
    }

    private static get translatorProvider(): TranslatorProvider {
        return this._settings.translatorProvider;
    }

    private static get urlLanguageLocation(): UrlLanguageLocation {
        return this._settings.urlLanguageLocation;
    }

    private static get logTranslationsFromProvider(): boolean {
        return this._settings.logTranslationsFromProvider;
    }

    private static get supportsTranslateAttribute(): boolean {
        if (this._supportsTranslateAttribute !== undefined) {
            return this._supportsTranslateAttribute;
        }
        return this._supportsTranslateAttribute = 'translate' in document.body;
    }

    private static doTranslateElement(element: HTMLElement): boolean {
        if (this.supportsTranslateAttribute) {
            const closestTranslateElement = element.closest('*[translate]') as HTMLElement;
            return !(element.translate === false || (closestTranslateElement && closestTranslateElement.translate === false));
        }

        const attribute = element.getAttribute('translate');
        if (!attribute) {
            const closestTranslateElement = element.closest('*[translate]') as HTMLElement;
            return !(closestTranslateElement && closestTranslateElement.getAttribute('translate').toLowerCase() === 'no');
        }

        return attribute.toLowerCase() !== 'no';
    }

    // Public Properties

    static get defaultLanguage(): Language {
        if (this._defaultLanguage) {
            return this._defaultLanguage;
        }

        this._defaultLanguage = this.languages.find(language => language.code.toLowerCase() === this._settings.defaultLanguage.toLowerCase());
        return this._defaultLanguage;
    }

    static get languages(): Language[] {
        return this._settings.languages;
    }

    // Private Methods

    private static parseLanguage(requestLanguage: string): Language {
        if (!requestLanguage)
            return this.defaultLanguage;

        requestLanguage = requestLanguage.trim().toLowerCase();

        let result = this.languages.find(language => language.code.toLowerCase() === requestLanguage);

        if (result)
            return result;

        if (requestLanguage.includes('-'))
            result = this.languages.find(language => language.code.toLowerCase() === requestLanguage.split('-')[0]);

        return result || this.defaultLanguage;
    }

    static get direction(): LanguageDirection {
        return this.currentLanguage.direction;
    }

    private static async translations(): Promise<Translations> {
        let translations = this.getTranslations(CloudLocalization.currentLanguage.code);

        if (translations && translations.translation === null) {
            return undefined;
        } else if (translations) {
            return translations;
        }

        let jsonPath = `translation/${this.currentLanguage.code.toLowerCase()}.json`;

        let fetchResponse = await fetch(jsonPath);
        let data;

        try {
            if (!fetchResponse.ok)
                throw new Error(`HTTP error! status: ${fetchResponse.status}`);

            const text = await fetchResponse.text();
            if (!text) {
                throw new Error('Empty response body');
            }
            data = JSON.parse(text);
        } catch (error) {
            console.error('Failed to fetch or parse JSON:', error);
            jsonPath = `${location.protocol}//${location.host}/${jsonPath}`;
            fetchResponse = await fetch(jsonPath);

            try {
                if (!fetchResponse.ok)
                    throw new Error(`HTTP error! status: ${fetchResponse.status}`);

                const text = await fetchResponse.text();

                if (!text)
                    throw new Error('Empty response body');

                data = JSON.parse(text);
            } catch (error) {
                console.error('Failed to fetch or parse JSON:', error);
                const nullTranslations = new Translations();
                nullTranslations.languageCode = CloudLocalization.currentLanguage.code;
                nullTranslations.translation = null;

                this._translationsList.push(nullTranslations);
                return undefined;
            }
        }

        for (const value of data) {
            this.addTranslationValue(CloudLocalization.currentLanguage.code, value['o'], value['t']);
        }

        return this.getTranslations(CloudLocalization.currentLanguage.code);
    }

    private static async getTranslation(text: string): Promise<string> {
        if (this.currentLanguage.code === this.defaultTextLanguage.code)
            return text;

        const results = await CloudLocalization.translations();
        if (!results) {
            return undefined;
        }

        const translation = results.translation.find(t => t.default.trim() === text.trim());
        return translation ? translation.text.replace(text.trim(), translation.text) : undefined;
    }

    static async translateElement(element: HTMLElement): Promise<TranslationStatus[]> {
        if (!element) {
            return [];
        }

        if (CloudLocalization.direction === LanguageDirection.rtl) {
            const style = element.style.cssText;

            if (style) {
                element.dataset._ctoriginalstyle = style;

                let rtlStyle = '';

                for (let i = 0; i < element.style.length; i++) {
                    const propertyName = element.style[i];

                    if (CloudLocalization.stylePropertiesToOpposite.includes(propertyName)) {
                        rtlStyle += CloudLocalization.oppositeRTLCSSValues(element, propertyName);
                    } else if (CloudLocalization.stylePropertiesToSwitch.includes(propertyName)) {
                        rtlStyle += CloudLocalization.switchRTLCSSValues(element, propertyName);
                    } else {
                        rtlStyle += `${propertyName}: ${element.style[propertyName]}; `;
                    }
                }

                if (rtlStyle !== style) {
                    element.dataset._ctoriginalstyle = style;
                    element.style.cssText = rtlStyle;
                }
            }
        } else {
            const originalStyle = element.dataset._ctoriginalstyle;

            if (originalStyle) {
                element.setAttribute('style', originalStyle);
                delete element.dataset._ctoriginalstyle;
            }
        }

        if (!this.doTranslateElement(element)) {
            return [];
        }

        if (element.tagName === 'A') {
            const elementHref = element.getAttribute('href');
            if (elementHref && elementHref.includes(':')) {
                const protocol = elementHref.split(':')[0].toLowerCase();
                if (protocol === 'mailto' || protocol === 'tel') {
                    element.setAttribute('dir', 'ltr');
                    return [];
                }
            }
        }

        const translationStatuses: TranslationStatus[] = [];

        try {
            const status = await CloudLocalization.translateElementText(element);
            translationStatuses.push(status);
        } catch (e) {
            console.error(e);
        }

        try {
            const status = await CloudLocalization.translateElementTitle(element);
            translationStatuses.push(status);
        } catch (e) {
            console.error(e);
        }

        if (element.tagName === 'INPUT') {
            try {
                const status = await CloudLocalization.translateElementPlaceholder(element as HTMLInputElement);
                translationStatuses.push(status);
            } catch (e) {
                console.error(e);
            }
        }

        return translationStatuses;
    }

    private static onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    public static async translateElementText(element: HTMLElement): Promise<TranslationStatus> {
        if (element.tagName.toLowerCase() === 'script') {
            return new TranslationStatus(element, TranslationStatusResult.ignored);
        }

        const childNode = element.childNodes[0];

        if (!childNode || !childNode.nodeValue || childNode.nodeValue.trim() === '') {
            return new TranslationStatus(element, TranslationStatusResult.ignored);
        }

        const translationStatus = await CloudLocalization.translate(element, '_ctoriginaltext', childNode.nodeValue);

        switch (translationStatus.result) {
            case TranslationStatusResult.succeeded:
                childNode.nodeValue = translationStatus.text;
                return translationStatus;
            case TranslationStatusResult.failed:
                childNode.nodeValue = translationStatus.text;
                translationStatus.attribute = 'text';
                return translationStatus;
            default:
                return translationStatus;
        }
    }

    private static async translateElementTitle(element: HTMLElement): Promise<TranslationStatus> {
        const translationStatus = await CloudLocalization.translate(element, '_ctoriginaltitle', element.title);

        switch (translationStatus.result) {
            case TranslationStatusResult.succeeded:
                element.title = translationStatus.text;
                return translationStatus;
            case TranslationStatusResult.failed:
                element.title = translationStatus.text;
                translationStatus.attribute = 'title';
                return translationStatus;
            default:
                return translationStatus;
        }
    }

    private static async translateElementPlaceholder(element: HTMLInputElement): Promise<TranslationStatus> {
        const translationStatus = await CloudLocalization.translate(element, '_ctoriginalplaceholder', element.placeholder);

        switch (translationStatus.result) {
            case TranslationStatusResult.succeeded:
                element.placeholder = translationStatus.text;
                return translationStatus;
            case TranslationStatusResult.failed:
                element.placeholder = translationStatus.text;
                translationStatus.attribute = 'placeholder';
                return translationStatus;
        }
    }

    private static async translate(element: HTMLElement, dataValueName: string, currentValue: string): Promise<TranslationStatus> {
        let originalText = element.dataset[dataValueName];

        if ((!originalText || originalText.trim() === '') && (!currentValue || currentValue.trim() === '')) {
            return new TranslationStatus(element, TranslationStatusResult.ignored);
        }

        if (!originalText || originalText.trim() === '') {
            originalText = currentValue;
        }

        const translatedText = await CloudLocalization.getTranslation(originalText);

        if (!translatedText) {
            delete element.dataset[dataValueName];
            return new TranslationStatus(element, TranslationStatusResult.failed, originalText);
        }

        if (translatedText !== originalText) {
            element.dataset[dataValueName] = originalText;
        } else {
            delete element.dataset[dataValueName];
        }

        return new TranslationStatus(element, TranslationStatusResult.succeeded, translatedText);
    }

    private static addRTLCSS(): void {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudLocalization.generateRTLCSS();
        document.head.appendChild(style);
    }

    private static generateRTLCSS(): string {
        let style = 'html[dir="rtl"] {direction: rtl;}';

        Array.from(document.styleSheets).forEach((sheet: CSSStyleSheet) => {
            try {
                style += CloudLocalization.getRulesStyle(sheet.cssRules);
            } catch (e) {
                console.error(`Cannot access rules for stylesheet: ${sheet.href}`, e);
            }
        });

        return style;
    }

    private static getRulesStyle(rules: CSSRuleList): string {
        let result = '';

        Array.from(rules).forEach((rule: CSSRule) => {
            if (rule instanceof CSSMediaRule) {
                const mediaStyle = this.getRulesStyle(rule.cssRules);
                if (mediaStyle) {
                    result += `@media ${rule.conditionText} {${mediaStyle}}`;
                }
            } else if (rule instanceof CSSStyleRule) {
                let selectorStyle = '';

                this.stylePropertiesToOpposite.forEach((property) => {
                    selectorStyle += this.oppositeRTLCSSValues(rule, property);
                });

                this.stylePropertiesToSwitch.forEach((property) => {
                    selectorStyle += this.switchRTLCSSValues(rule, property);
                });

                if (selectorStyle) {
                    result += `html[dir=rtl] ${rule.selectorText} {${selectorStyle}}`;
                }
            }
        });

        return result;
    }

    private static switchRTLCSSValues(rule, name: string): string {
        const baseName = name.split('-')[0];
        const leftProperty = `${baseName}-left`;
        const rightProperty = `${baseName}-right`;
        let leftValue = rule.style[leftProperty];
        let rightValue = rule.style[rightProperty];

        if (!leftValue && !rightValue) {
            return '';
        }

        if (leftValue === rightValue) {
            return '';
        }

        if (!leftValue) {
            leftValue = 'initial';
        }

        if (!rightValue) {
            rightValue = 'initial';
        }

        return `${leftProperty}: ${rightValue}; ${rightProperty}: ${leftValue};`;
    }

    private static oppositeRTLCSSValues(rule, name: string): string {
        const value = rule.style[name];

        if (!value) {
            return '';
        }

        if (value === 'left') {
            return `${name}: right;`;
        } else if (value === 'right') {
            return `${name}: left;`;
        } else if (CloudLocalization.canBeNegative(value)) {
            return value.startsWith('-') ? `${name}: ${value.substr(1)};` : `${name}: -${value};`;
        }

        return '';
    }

    private static canBeNegative(value: string): boolean {
        const units = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];
        return units.some(unit => value.includes(unit) && !value.includes(' '));
    }

    private static async azureAutoTranslate(texts: string[]): Promise<string[]> {
        if (texts.length === 0) {
            return [];
        }

        const bodyData = texts.map(text => `{"Text": "${text}"}`).join(',');

        try {
            const response = await fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${this.defaultLanguage.code}&to=${this.currentLanguage.code}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': this.translatorProviderKey
                },
                body: `[${bodyData}]`
            });

            const data = await response.json();
            const translatedTexts = data.map(translations => translations.translations[0].text);

            if (this.logTranslationsFromProvider) {
                const jsonTranslations = texts.map((text, index) => `{"o": "${text.trim()}", "t": "${translatedTexts[index].trim()}"}`);
                console.log(`[${jsonTranslations.join(',')}]`);
            }

            return translatedTexts;
        } catch (e) {
            console.error(e.message);
            console.error(bodyData);
            return [];
        }
    }

    public static scrollToTop(scrollDuration: number): void {
        const scrollTo = 0;
        const cosParameter = (window.pageYOffset - scrollTo) / 2;
        let scrollCount = 0;
        let oldTimestamp = window.performance.now();

        function step(newTimestamp: number): void {
            let tsDiff = newTimestamp - oldTimestamp;

            if (tsDiff > 100) {
                tsDiff = 30;
            }

            scrollCount += Math.PI / (scrollDuration / tsDiff);

            if (scrollCount >= Math.PI) {
                return;
            }

            const moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
    }

    // Public Methods

    static updateCurrentLanguage(): void {
        let localStorageLanguage: Language;
        let urlLanguage: Language;
        let browserLanguage: Language;

        let result: string;

        // Local Storage
        try {
            result = localStorage.getItem('lang');
        } catch {
            console.log('localStorage is not supported.');
            result = null;
        }

        if (result !== null) {
            localStorageLanguage = this.parseLanguage(result);
        }

        // URL
        if (this.urlLanguageLocation !== undefined) {
            let urlValue: string;

            if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
                urlValue = window.location.pathname.split('/')[1];
            }

            if (urlValue !== undefined && (urlValue.length === 2 || (urlValue.length === 5 && urlValue.includes('-')))) {
                this.languages.forEach((language) => {
                    if (language.code.toLowerCase() === urlValue.toLowerCase()) {
                        result = language.code;
                    }
                });

                if (urlValue.includes('-') && result === undefined) {
                    urlValue = urlValue.split('-')[0];

                    this.languages.forEach((language) => {
                        if (language.code.toLowerCase() === urlValue.toLowerCase()) {
                            result = language.code;
                        }
                    });
                }

                if (result !== undefined) {
                    urlLanguage = this.parseLanguage(result);
                }
            }
        }

        // Browser
        if (!this._settings.useDefaultLanguageAlways) {
            result = navigator.language || navigator['userLanguage'];

            if (result !== undefined) {
                browserLanguage = this.parseLanguage(result);
            }
        }

        // Consolidation
        if (urlLanguage !== undefined) {
            this.setCurrentLanguage(urlLanguage.code);
        } else if (localStorageLanguage !== undefined) {
            this.setCurrentLanguage(localStorageLanguage.code);
        } else if (browserLanguage !== undefined && !this._settings.useDefaultLanguageAlways) { 
            this.setCurrentLanguage(browserLanguage.code);
        } else {
            this.setCurrentLanguage(this.defaultLanguage.code);
        }
    }

    static get currentLanguage(): Language {
        if (this._currentLanguage) {
            return this._currentLanguage;
        }

        this.updateCurrentLanguage();
        return this._currentLanguage;
    }

    private static updateUrlLanguage(): void {
        if (this.urlLanguageLocation === undefined) {
            return;
        }

        if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
            const pathnameSplitted = window.location.pathname.split('/');

            const currentLanguageCode = pathnameSplitted[1];

            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.includes('-')))
                pathnameSplitted[1] = this.currentLanguage.code;
            else
                pathnameSplitted.splice(1, 0, this.currentLanguage.code);


            const newUrl = pathnameSplitted.join('/');

            if (newUrl !== window.location.pathname) {
                history.replaceState(null, null, newUrl);

                if (this.restartOnLanguageChange)
                    window.location.reload();

            }
        }
    }

    private static get restartOnLanguageChange(): boolean {
        return this._settings.restartOnLanguageChange ?? false;
    }

    static setCurrentLanguage(languageCode: string): void {
        this._currentLanguage = this.parseLanguage(languageCode);

        if (!this._currentLanguage) return;

        const currentLanguage = this.parseLanguage(localStorage.getItem('lang'));

        const sameLanguage = currentLanguage?.code.toLowerCase() === this._currentLanguage?.code.toLowerCase();

        localStorage.setItem('lang', this._currentLanguage.code);
        this.updateUrlLanguage();

        if (this.restartOnLanguageChange && !sameLanguage) {
            window.location.reload();
        }
    }

    static async translateDOM(): Promise<void> {
        document.documentElement.lang = CloudLocalization.currentLanguage.code;

        if (CloudLocalization.direction === LanguageDirection.rtl) {
            document.documentElement.dir = 'rtl';
            if (!this._settings.preventLayoutChangeForRTL) {
                let styleSheet: StyleSheet;

                Array.from(document.styleSheets).forEach((sheet) => {
                    try {
                        Array.from(sheet['cssRules'] || sheet['rules']).forEach((rule) => {
                            if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                styleSheet = sheet;
                        });
                    } catch (e) { }
                });

                if (styleSheet === undefined)
                    CloudLocalization.addRTLCSS();
            }
        } else {
            document.documentElement.removeAttribute('dir');
        }

        const allElements = Array.from(document.querySelectorAll('*'));
        const nonTranslatedElements = new Set(CloudLocalization.nonTranslatedElements
            .map(selector => Array.from(document.querySelectorAll(selector)))
            .reduce((acc, val) => acc.concat(val), []));

        const elementsToTranslate = allElements.filter(element => !nonTranslatedElements.has(element));

        let translationStatuses: TranslationStatus[] = [];

        for (const e of elementsToTranslate) {
            try {
                const results = await CloudLocalization.translateElement(e as HTMLElement);
                results.forEach((status) => {
                    translationStatuses.push(status);
                });
            } catch (e) { }
        }

        if (this.currentLanguage.code !== this.defaultLanguage.code) {

            let originalTexts: string[] = [];

            translationStatuses.forEach((status) => {

                try {
                    switch (status.result) {

                        case TranslationStatusResult.failed:

                            originalTexts.push(status.text.replace(/"/g, '\\"'))
                            break;

                        default:
                            break;
                    }
                } catch (e) { }
            });

            originalTexts = originalTexts.filter(this.onlyUnique);            if (this.translatorProvider === 1) {
                try {
                    let translatedTexts = await this.azureAutoTranslate(originalTexts);

                    let translationsObj = this.getTranslations(CloudLocalization.currentLanguage.code);
                    let translations = translationsObj?.translation;

                    if (translationsObj && translations === null)
                        translationsObj.translation = [];

                    translatedTexts.forEach((text, index) => {

                        try {
                            CloudLocalization.addTranslationValue(CloudLocalization.currentLanguage.code, originalTexts[index], text);
                        } catch (e) { }
                    });
                } catch (e) { console.log(e); }            }

            for (const status of translationStatuses) {

                if (!status) continue; // Skip undefined/null status objects

                switch (status.result) {

                    case TranslationStatusResult.failed:

                        if (status.attribute === 'title')
                            await CloudLocalization.translateElementTitle(status.element);
                        else
                            await CloudLocalization.translateElementText(status.element);
                        break;

                    default:
                        break;
                }
            }

        }

        this._currentLanguage = undefined;
    }

    static fillInLanguages(): void {

        let selection = document.querySelectorAll('.cloudlocalization-selection');

        if (selection.length === 0)
            return;

        selection.forEach((element) => {
            element.setAttribute('translate', 'no');
            element.innerHTML = '';
        });

        let currentLanguage: string = this.currentLanguage.code;

        CloudLocalization.languages.forEach((language) => {
            selection.forEach((element) => {
                element.innerHTML += '<option value="' + language.code + '"' + (language.code === currentLanguage ? ' selected ' : '') + '>' + language.displayName + '</option>';
            });
        });
    }

    private static get defaultTextLanguage(): Language {
        return this.languages.find(language => language.code.toLowerCase() === this._settings.defaultTextLanguage.toLowerCase());
    }
}

const cloudLocalization = (settings?: CloudLocalizationSettings) => new CloudLocalization(settings);
export default cloudLocalization;