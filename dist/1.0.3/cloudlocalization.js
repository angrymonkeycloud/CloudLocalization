var exports = {};
var LanguageDirection;
(function (LanguageDirection) {
    LanguageDirection[LanguageDirection["ltr"] = 0] = "ltr";
    LanguageDirection[LanguageDirection["rtl"] = 1] = "rtl";
})(LanguageDirection || (LanguageDirection = {}));
var TranslationStatusResult;
(function (TranslationStatusResult) {
    TranslationStatusResult[TranslationStatusResult["ignored"] = 1] = "ignored";
    TranslationStatusResult[TranslationStatusResult["succeeded"] = 2] = "succeeded";
    TranslationStatusResult[TranslationStatusResult["failed"] = 3] = "failed";
})(TranslationStatusResult || (TranslationStatusResult = {}));
var TranslatorProvider;
(function (TranslatorProvider) {
    TranslatorProvider[TranslatorProvider["none"] = 0] = "none";
    TranslatorProvider[TranslatorProvider["Azure"] = 1] = "Azure";
})(TranslatorProvider || (TranslatorProvider = {}));
var UrlLanguageLocation;
(function (UrlLanguageLocation) {
    UrlLanguageLocation[UrlLanguageLocation["none"] = 0] = "none";
    UrlLanguageLocation[UrlLanguageLocation["subdirectory"] = 1] = "subdirectory";
})(UrlLanguageLocation || (UrlLanguageLocation = {}));


var exports = {};
var Translations = (function () {
    function Translations() {
        this.translation = [];
    }
    return Translations;
}());
{ Translations };
var TranslationValue = (function () {
    function TranslationValue() {
    }
    return TranslationValue;
}());
{ TranslationValue };
var Language = (function () {
    function Language() {
    }
    return Language;
}());
{ Language };
var TranslationStatus = (function () {
    function TranslationStatus(element, result, text) {
        this.element = element;
        this.result = result;
        this.text = text;
    }
    return TranslationStatus;
}());
{ TranslationStatus };


var exports = {};
{};


var exports = {};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CloudLocalization = (function () {
    function CloudLocalization(settings) {
        var _this = this;
        CloudLocalization._settings = this.mergeSettings(settings);
        CloudLocalization.updateCurrentLanguage();
        CloudLocalization.fillInLanguages();
        CloudLocalization.translateDOM();
        document.addEventListener('change', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var target, languageCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = event.target;
                        if (!(target && target.classList.contains('cloudlocalization-selection'))) return [3, 2];
                        languageCode = target.value;
                        if (!(languageCode !== '')) return [3, 2];
                        CloudLocalization.setCurrentLanguage(languageCode);
                        CloudLocalization.scrollToTop(200);
                        return [4, CloudLocalization.translateDOM()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        }); });
    }
    CloudLocalization.prototype.mergeSettings = function (_settings) {
        var settings = {
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
        return __assign(__assign({}, settings), _settings);
    };
    Object.defineProperty(CloudLocalization, "translationsList", {
        get: function () {
            return this._translationsList;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.addTranslationValue = function (languageCode, defaultText, translatedText) {
        var translations = this.getTranslations(languageCode);
        if (!translations) {
            translations = new Translations();
            translations.languageCode = languageCode;
            this._translationsList.push(translations);
        }
        var translationValue = new TranslationValue();
        translationValue.default = defaultText;
        translationValue.text = translatedText;
        translations.translation.push(translationValue);
    };
    CloudLocalization.getTranslations = function (languageCode) {
        return this.translationsList.find(function (translations) { return translations.languageCode === languageCode; });
    };
    Object.defineProperty(CloudLocalization, "nonTranslatedElements", {
        get: function () {
            return ['code', 'html', 'head', 'head > *'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "stylePropertiesToSwitch", {
        get: function () {
            var properties = ['padding', 'margin'];
            return properties.flatMap(function (property) { return ["".concat(property, "-left"), "".concat(property, "-right")]; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "stylePropertiesToOpposite", {
        get: function () {
            return ['text-align', 'justify-content', 'justify-self', 'float', 'background-position-x'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "translatorProviderKey", {
        get: function () {
            return this._settings.translatorProviderKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "translatorProvider", {
        get: function () {
            return this._settings.translatorProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "urlLanguageLocation", {
        get: function () {
            return this._settings.urlLanguageLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "logTranslationsFromProvider", {
        get: function () {
            return this._settings.logTranslationsFromProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "supportsTranslateAttribute", {
        get: function () {
            if (this._supportsTranslateAttribute !== undefined) {
                return this._supportsTranslateAttribute;
            }
            return this._supportsTranslateAttribute = 'translate' in document.body;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.doTranslateElement = function (element) {
        if (this.supportsTranslateAttribute) {
            var closestTranslateElement = element.closest('*[translate]');
            return !(element.translate === false || (closestTranslateElement && closestTranslateElement.translate === false));
        }
        var attribute = element.getAttribute('translate');
        if (!attribute) {
            var closestTranslateElement = element.closest('*[translate]');
            return !(closestTranslateElement && closestTranslateElement.getAttribute('translate').toLowerCase() === 'no');
        }
        return attribute.toLowerCase() !== 'no';
    };
    Object.defineProperty(CloudLocalization, "defaultLanguage", {
        get: function () {
            var _this = this;
            if (this._defaultLanguage) {
                return this._defaultLanguage;
            }
            this._defaultLanguage = this.languages.find(function (language) { return language.code.toLowerCase() === _this._settings.defaultLanguage.toLowerCase(); });
            return this._defaultLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "languages", {
        get: function () {
            return this._settings.languages;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.parseLanguage = function (requestLanguage) {
        if (!requestLanguage)
            return this.defaultLanguage;
        requestLanguage = requestLanguage.trim().toLowerCase();
        var result = this.languages.find(function (language) { return language.code.toLowerCase() === requestLanguage; });
        if (result)
            return result;
        if (requestLanguage.includes('-'))
            result = this.languages.find(function (language) { return language.code.toLowerCase() === requestLanguage.split('-')[0]; });
        return result || this.defaultLanguage;
    };
    Object.defineProperty(CloudLocalization, "direction", {
        get: function () {
            return this.currentLanguage.direction;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.translations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var translations, jsonPath, fetchResponse, data, text, error_1, text, error_2, nullTranslations, _i, data_1, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        translations = this.getTranslations(CloudLocalization.currentLanguage.code);
                        if (translations && translations.translation === null) {
                            return [2, undefined];
                        }
                        else if (translations) {
                            return [2, translations];
                        }
                        jsonPath = "translation/".concat(this.currentLanguage.code.toLowerCase(), ".json");
                        return [4, fetch(jsonPath)];
                    case 1:
                        fetchResponse = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 10]);
                        if (!fetchResponse.ok)
                            throw new Error("HTTP error! status: ".concat(fetchResponse.status));
                        return [4, fetchResponse.text()];
                    case 3:
                        text = _a.sent();
                        if (!text) {
                            throw new Error('Empty response body');
                        }
                        data = JSON.parse(text);
                        return [3, 10];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Failed to fetch or parse JSON:', error_1);
                        jsonPath = "".concat(location.protocol, "//").concat(location.host, "/").concat(jsonPath);
                        return [4, fetch(jsonPath)];
                    case 5:
                        fetchResponse = _a.sent();
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        if (!fetchResponse.ok)
                            throw new Error("HTTP error! status: ".concat(fetchResponse.status));
                        return [4, fetchResponse.text()];
                    case 7:
                        text = _a.sent();
                        if (!text)
                            throw new Error('Empty response body');
                        data = JSON.parse(text);
                        return [3, 9];
                    case 8:
                        error_2 = _a.sent();
                        console.error('Failed to fetch or parse JSON:', error_2);
                        nullTranslations = new Translations();
                        nullTranslations.languageCode = CloudLocalization.currentLanguage.code;
                        nullTranslations.translation = null;
                        this._translationsList.push(nullTranslations);
                        return [2, undefined];
                    case 9: return [3, 10];
                    case 10:
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            value = data_1[_i];
                            this.addTranslationValue(CloudLocalization.currentLanguage.code, value['o'], value['t']);
                        }
                        return [2, this.getTranslations(CloudLocalization.currentLanguage.code)];
                }
            });
        });
    };
    CloudLocalization.getTranslation = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var results, translation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentLanguage.code === this.defaultTextLanguage.code)
                            return [2, text];
                        return [4, CloudLocalization.translations()];
                    case 1:
                        results = _a.sent();
                        if (!results) {
                            return [2, undefined];
                        }
                        translation = results.translation.find(function (t) { return t.default.trim() === text.trim(); });
                        return [2, translation ? translation.text.replace(text.trim(), translation.text) : undefined];
                }
            });
        });
    };
    CloudLocalization.translateElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var style, rtlStyle, i, propertyName, originalStyle, elementHref, protocol, translationStatuses, status_1, e_1, status_2, e_2, status_3, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!element) {
                            return [2, []];
                        }
                        if (CloudLocalization.direction === LanguageDirection.rtl) {
                            style = element.style.cssText;
                            if (style) {
                                element.dataset._ctoriginalstyle = style;
                                rtlStyle = '';
                                for (i = 0; i < element.style.length; i++) {
                                    propertyName = element.style[i];
                                    if (CloudLocalization.stylePropertiesToOpposite.includes(propertyName)) {
                                        rtlStyle += CloudLocalization.oppositeRTLCSSValues(element, propertyName);
                                    }
                                    else if (CloudLocalization.stylePropertiesToSwitch.includes(propertyName)) {
                                        rtlStyle += CloudLocalization.switchRTLCSSValues(element, propertyName);
                                    }
                                    else {
                                        rtlStyle += "".concat(propertyName, ": ").concat(element.style[propertyName], "; ");
                                    }
                                }
                                if (rtlStyle !== style) {
                                    element.dataset._ctoriginalstyle = style;
                                    element.style.cssText = rtlStyle;
                                }
                            }
                        }
                        else {
                            originalStyle = element.dataset._ctoriginalstyle;
                            if (originalStyle) {
                                element.setAttribute('style', originalStyle);
                                delete element.dataset._ctoriginalstyle;
                            }
                        }
                        if (!this.doTranslateElement(element)) {
                            return [2, []];
                        }
                        if (element.tagName === 'A') {
                            elementHref = element.getAttribute('href');
                            if (elementHref && elementHref.includes(':')) {
                                protocol = elementHref.split(':')[0].toLowerCase();
                                if (protocol === 'mailto' || protocol === 'tel') {
                                    element.setAttribute('dir', 'ltr');
                                    return [2, []];
                                }
                            }
                        }
                        translationStatuses = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, CloudLocalization.translateElementText(element)];
                    case 2:
                        status_1 = _a.sent();
                        translationStatuses.push(status_1);
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4, CloudLocalization.translateElementTitle(element)];
                    case 5:
                        status_2 = _a.sent();
                        translationStatuses.push(status_2);
                        return [3, 7];
                    case 6:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3, 7];
                    case 7:
                        if (!(element.tagName === 'INPUT')) return [3, 11];
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        return [4, CloudLocalization.translateElementPlaceholder(element)];
                    case 9:
                        status_3 = _a.sent();
                        translationStatuses.push(status_3);
                        return [3, 11];
                    case 10:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3, 11];
                    case 11: return [2, translationStatuses];
                }
            });
        });
    };
    CloudLocalization.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    CloudLocalization.translateElementText = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var childNode, translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (element.tagName.toLowerCase() === 'script') {
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        }
                        childNode = element.childNodes[0];
                        if (!childNode || !childNode.nodeValue || childNode.nodeValue.trim() === '') {
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        }
                        return [4, CloudLocalization.translate(element, '_ctoriginaltext', childNode.nodeValue)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                childNode.nodeValue = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                childNode.nodeValue = translationStatus.text;
                                translationStatus.attribute = 'text';
                                return [2, translationStatus];
                            default:
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudLocalization.translateElementTitle = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CloudLocalization.translate(element, '_ctoriginaltitle', element.title)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                element.title = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                element.title = translationStatus.text;
                                translationStatus.attribute = 'title';
                                return [2, translationStatus];
                            default:
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudLocalization.translateElementPlaceholder = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CloudLocalization.translate(element, '_ctoriginalplaceholder', element.placeholder)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                element.placeholder = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                element.placeholder = translationStatus.text;
                                translationStatus.attribute = 'placeholder';
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudLocalization.translate = function (element, dataValueName, currentValue) {
        return __awaiter(this, void 0, void 0, function () {
            var originalText, translatedText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originalText = element.dataset[dataValueName];
                        if ((!originalText || originalText.trim() === '') && (!currentValue || currentValue.trim() === '')) {
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        }
                        if (!originalText || originalText.trim() === '') {
                            originalText = currentValue;
                        }
                        return [4, CloudLocalization.getTranslation(originalText)];
                    case 1:
                        translatedText = _a.sent();
                        if (!translatedText) {
                            delete element.dataset[dataValueName];
                            return [2, new TranslationStatus(element, TranslationStatusResult.failed, originalText)];
                        }
                        if (translatedText !== originalText) {
                            element.dataset[dataValueName] = originalText;
                        }
                        else {
                            delete element.dataset[dataValueName];
                        }
                        return [2, new TranslationStatus(element, TranslationStatusResult.succeeded, translatedText)];
                }
            });
        });
    };
    CloudLocalization.addRTLCSS = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudLocalization.generateRTLCSS();
        document.head.appendChild(style);
    };
    CloudLocalization.generateRTLCSS = function () {
        var style = 'html[dir="rtl"] {direction: rtl;}';
        Array.from(document.styleSheets).forEach(function (sheet) {
            try {
                style += CloudLocalization.getRulesStyle(sheet.cssRules);
            }
            catch (e) {
                console.error("Cannot access rules for stylesheet: ".concat(sheet.href), e);
            }
        });
        return style;
    };
    CloudLocalization.getRulesStyle = function (rules) {
        var _this = this;
        var result = '';
        Array.from(rules).forEach(function (rule) {
            if (rule instanceof CSSMediaRule) {
                var mediaStyle = _this.getRulesStyle(rule.cssRules);
                if (mediaStyle) {
                    result += "@media ".concat(rule.conditionText, " {").concat(mediaStyle, "}");
                }
            }
            else if (rule instanceof CSSStyleRule) {
                var selectorStyle_1 = '';
                _this.stylePropertiesToOpposite.forEach(function (property) {
                    selectorStyle_1 += _this.oppositeRTLCSSValues(rule, property);
                });
                _this.stylePropertiesToSwitch.forEach(function (property) {
                    selectorStyle_1 += _this.switchRTLCSSValues(rule, property);
                });
                if (selectorStyle_1) {
                    result += "html[dir=rtl] ".concat(rule.selectorText, " {").concat(selectorStyle_1, "}");
                }
            }
        });
        return result;
    };
    CloudLocalization.switchRTLCSSValues = function (rule, name) {
        var baseName = name.split('-')[0];
        var leftProperty = "".concat(baseName, "-left");
        var rightProperty = "".concat(baseName, "-right");
        var leftValue = rule.style[leftProperty];
        var rightValue = rule.style[rightProperty];
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
        return "".concat(leftProperty, ": ").concat(rightValue, "; ").concat(rightProperty, ": ").concat(leftValue, ";");
    };
    CloudLocalization.oppositeRTLCSSValues = function (rule, name) {
        var value = rule.style[name];
        if (!value) {
            return '';
        }
        if (value === 'left') {
            return "".concat(name, ": right;");
        }
        else if (value === 'right') {
            return "".concat(name, ": left;");
        }
        else if (CloudLocalization.canBeNegative(value)) {
            return value.startsWith('-') ? "".concat(name, ": ").concat(value.substr(1), ";") : "".concat(name, ": -").concat(value, ";");
        }
        return '';
    };
    CloudLocalization.canBeNegative = function (value) {
        var units = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];
        return units.some(function (unit) { return value.includes(unit) && !value.includes(' '); });
    };
    CloudLocalization.azureAutoTranslate = function (texts) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyData, response, data, translatedTexts_1, jsonTranslations, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (texts.length === 0) {
                            return [2, []];
                        }
                        bodyData = texts.map(function (text) { return "{\"Text\": \"".concat(text, "\"}"); }).join(',');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4, fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=".concat(this.defaultLanguage.code, "&to=").concat(this.currentLanguage.code), {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Ocp-Apim-Subscription-Key': this.translatorProviderKey
                                },
                                body: "[".concat(bodyData, "]")
                            })];
                    case 2:
                        response = _a.sent();
                        return [4, response.json()];
                    case 3:
                        data = _a.sent();
                        translatedTexts_1 = data.map(function (translations) { return translations.translations[0].text; });
                        if (this.logTranslationsFromProvider) {
                            jsonTranslations = texts.map(function (text, index) { return "{\"o\": \"".concat(text.trim(), "\", \"t\": \"").concat(translatedTexts_1[index].trim(), "\"}"); });
                            console.log("[".concat(jsonTranslations.join(','), "]"));
                        }
                        return [2, translatedTexts_1];
                    case 4:
                        e_4 = _a.sent();
                        console.error(e_4.message);
                        console.error(bodyData);
                        return [2, []];
                    case 5: return [2];
                }
            });
        });
    };
    CloudLocalization.scrollToTop = function (scrollDuration) {
        var scrollTo = 0;
        var cosParameter = (window.pageYOffset - scrollTo) / 2;
        var scrollCount = 0;
        var oldTimestamp = window.performance.now();
        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            if (tsDiff > 100) {
                tsDiff = 30;
            }
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI) {
                return;
            }
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    };
    CloudLocalization.updateCurrentLanguage = function () {
        var localStorageLanguage;
        var urlLanguage;
        var browserLanguage;
        var result;
        try {
            result = localStorage.getItem('lang');
        }
        catch (_a) {
            console.log('localStorage is not supported.');
            result = null;
        }
        if (result !== null) {
            localStorageLanguage = this.parseLanguage(result);
        }
        if (this.urlLanguageLocation !== undefined) {
            var urlValue_1;
            if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
                urlValue_1 = window.location.pathname.split('/')[1];
            }
            if (urlValue_1 !== undefined && (urlValue_1.length === 2 || (urlValue_1.length === 5 && urlValue_1.includes('-')))) {
                this.languages.forEach(function (language) {
                    if (language.code.toLowerCase() === urlValue_1.toLowerCase()) {
                        result = language.code;
                    }
                });
                if (urlValue_1.includes('-') && result === undefined) {
                    urlValue_1 = urlValue_1.split('-')[0];
                    this.languages.forEach(function (language) {
                        if (language.code.toLowerCase() === urlValue_1.toLowerCase()) {
                            result = language.code;
                        }
                    });
                }
                if (result !== undefined) {
                    urlLanguage = this.parseLanguage(result);
                }
            }
        }
        if (!this._settings.useDefaultLanguageAlways) {
            result = navigator.language || navigator['userLanguage'];
            if (result !== undefined) {
                browserLanguage = this.parseLanguage(result);
            }
        }
        if (urlLanguage !== undefined) {
            this.setCurrentLanguage(urlLanguage.code);
        }
        else if (localStorageLanguage !== undefined) {
            this.setCurrentLanguage(localStorageLanguage.code);
        }
        else if (browserLanguage !== undefined && !this._settings.useDefaultLanguageAlways) {
            this.setCurrentLanguage(browserLanguage.code);
        }
        else {
            this.setCurrentLanguage(this.defaultLanguage.code);
        }
    };
    Object.defineProperty(CloudLocalization, "currentLanguage", {
        get: function () {
            if (this._currentLanguage) {
                return this._currentLanguage;
            }
            this.updateCurrentLanguage();
            return this._currentLanguage;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.updateUrlLanguage = function () {
        if (this.urlLanguageLocation === undefined) {
            return;
        }
        if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
            var pathnameSplitted = window.location.pathname.split('/');
            var currentLanguageCode = pathnameSplitted[1];
            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.includes('-')))
                pathnameSplitted[1] = this.currentLanguage.code;
            else
                pathnameSplitted.splice(1, 0, this.currentLanguage.code);
            var newUrl = pathnameSplitted.join('/');
            if (newUrl !== window.location.pathname) {
                history.replaceState(null, null, newUrl);
                if (this.restartOnLanguageChange)
                    window.location.reload();
            }
        }
    };
    Object.defineProperty(CloudLocalization, "restartOnLanguageChange", {
        get: function () {
            var _a;
            return (_a = this._settings.restartOnLanguageChange) !== null && _a !== void 0 ? _a : false;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.setCurrentLanguage = function (languageCode) {
        var _a;
        this._currentLanguage = this.parseLanguage(languageCode);
        if (!this._currentLanguage)
            return;
        var currentLanguage = this.parseLanguage(localStorage.getItem('lang'));
        var sameLanguage = (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.code.toLowerCase()) === ((_a = this._currentLanguage) === null || _a === void 0 ? void 0 : _a.code.toLowerCase());
        localStorage.setItem('lang', this._currentLanguage.code);
        this.updateUrlLanguage();
        if (this.restartOnLanguageChange && !sameLanguage) {
            window.location.reload();
        }
    };
    CloudLocalization.translateDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styleSheet_1, allElements, nonTranslatedElements, elementsToTranslate, translationStatuses, _i, elementsToTranslate_1, e, results, e_5, originalTexts_1, translatedTexts, translationsObj, translations, e_6, _a, translationStatuses_1, status_4, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        document.documentElement.lang = CloudLocalization.currentLanguage.code;
                        if (CloudLocalization.direction === LanguageDirection.rtl) {
                            document.documentElement.dir = 'rtl';
                            if (!this._settings.preventLayoutChangeForRTL) {
                                Array.from(document.styleSheets).forEach(function (sheet) {
                                    try {
                                        Array.from(sheet['cssRules'] || sheet['rules']).forEach(function (rule) {
                                            if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                                styleSheet_1 = sheet;
                                        });
                                    }
                                    catch (e) { }
                                });
                                if (styleSheet_1 === undefined)
                                    CloudLocalization.addRTLCSS();
                            }
                        }
                        else {
                            document.documentElement.removeAttribute('dir');
                        }
                        allElements = Array.from(document.querySelectorAll('*'));
                        nonTranslatedElements = new Set(CloudLocalization.nonTranslatedElements
                            .map(function (selector) { return Array.from(document.querySelectorAll(selector)); })
                            .reduce(function (acc, val) { return acc.concat(val); }, []));
                        elementsToTranslate = allElements.filter(function (element) { return !nonTranslatedElements.has(element); });
                        translationStatuses = [];
                        _i = 0, elementsToTranslate_1 = elementsToTranslate;
                        _c.label = 1;
                    case 1:
                        if (!(_i < elementsToTranslate_1.length)) return [3, 6];
                        e = elementsToTranslate_1[_i];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4, CloudLocalization.translateElement(e)];
                    case 3:
                        results = _c.sent();
                        results.forEach(function (status) {
                            translationStatuses.push(status);
                        });
                        return [3, 5];
                    case 4:
                        e_5 = _c.sent();
                        return [3, 5];
                    case 5:
                        _i++;
                        return [3, 1];
                    case 6:
                        if (!(this.currentLanguage.code !== this.defaultLanguage.code)) return [3, 19];
                        originalTexts_1 = [];
                        translationStatuses.forEach(function (status) {
                            try {
                                switch (status.result) {
                                    case TranslationStatusResult.failed:
                                        originalTexts_1.push(status.text.replace(/"/g, '\\"'));
                                        break;
                                    default:
                                        break;
                                }
                            }
                            catch (e) { }
                        });
                        originalTexts_1 = originalTexts_1.filter(this.onlyUnique);
                        if (!(this.translatorProvider === 1)) return [3, 10];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 9, , 10]);
                        return [4, this.azureAutoTranslate(originalTexts_1)];
                    case 8:
                        translatedTexts = _c.sent();
                        translationsObj = this.getTranslations(CloudLocalization.currentLanguage.code);
                        translations = translationsObj === null || translationsObj === void 0 ? void 0 : translationsObj.translation;
                        if (translationsObj && translations === null)
                            translationsObj.translation = [];
                        translatedTexts.forEach(function (text, index) {
                            try {
                                CloudLocalization.addTranslationValue(CloudLocalization.currentLanguage.code, originalTexts_1[index], text);
                            }
                            catch (e) { }
                        });
                        return [3, 10];
                    case 9:
                        e_6 = _c.sent();
                        console.log(e_6);
                        return [3, 10];
                    case 10:
                        _a = 0, translationStatuses_1 = translationStatuses;
                        _c.label = 11;
                    case 11:
                        if (!(_a < translationStatuses_1.length)) return [3, 19];
                        status_4 = translationStatuses_1[_a];
                        if (!status_4)
                            return [3, 18];
                        _b = status_4.result;
                        switch (_b) {
                            case TranslationStatusResult.failed: return [3, 12];
                        }
                        return [3, 17];
                    case 12:
                        if (!(status_4.attribute === 'title')) return [3, 14];
                        return [4, CloudLocalization.translateElementTitle(status_4.element)];
                    case 13:
                        _c.sent();
                        return [3, 16];
                    case 14: return [4, CloudLocalization.translateElementText(status_4.element)];
                    case 15:
                        _c.sent();
                        _c.label = 16;
                    case 16: return [3, 18];
                    case 17: return [3, 18];
                    case 18:
                        _a++;
                        return [3, 11];
                    case 19:
                        this._currentLanguage = undefined;
                        return [2];
                }
            });
        });
    };
    CloudLocalization.fillInLanguages = function () {
        var selection = document.querySelectorAll('.cloudlocalization-selection');
        if (selection.length === 0)
            return;
        selection.forEach(function (element) {
            element.setAttribute('translate', 'no');
            element.innerHTML = '';
        });
        var currentLanguage = this.currentLanguage.code;
        CloudLocalization.languages.forEach(function (language) {
            selection.forEach(function (element) {
                element.innerHTML += '<option value="' + language.code + '"' + (language.code === currentLanguage ? ' selected ' : '') + '>' + language.displayName + '</option>';
            });
        });
    };
    Object.defineProperty(CloudLocalization, "defaultTextLanguage", {
        get: function () {
            var _this = this;
            return this.languages.find(function (language) { return language.code.toLowerCase() === _this._settings.defaultTextLanguage.toLowerCase(); });
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization._translationsList = [];
    return CloudLocalization;
}());
{ CloudLocalization };
var cloudLocalization = function (settings) { return new CloudLocalization(settings); };
cloudLocalization;

