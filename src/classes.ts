import { LanguageDirection, TranslationStatusResult } from './enums';

export class Translations {

    constructor() {

        this.translation = [];
    }

    languageCode: string;
    translation: TranslationValue[];
}

export class TranslationValue {

    default: string;
    text: string;
}

export class Language {

    code: string;
    displayName: string;
    direction?: LanguageDirection;
}

export class TranslationStatus {

    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string) {

        this.element = element;
        this.result = result;
        this.text = text;
    }

    element: HTMLElement;
    result: TranslationStatusResult;
    text: string;
    attribute: string;
}