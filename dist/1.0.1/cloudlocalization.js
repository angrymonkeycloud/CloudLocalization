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
        CloudLocalization._settings = this.mergeSettings(settings);
        CloudLocalization.updateCurrentLanguage();
        CloudLocalization.fillInLanguages();
        CloudLocalization.translateDOM();
        $(document).on('change', '.cloudlocalization-selection', function () {
            return __awaiter(this, void 0, void 0, function () {
                var languageCode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            languageCode = $(this).val().toString();
                            if (languageCode !== '')
                                CloudLocalization.setCurrentLanguage(languageCode);
                            CloudLocalization.scrollToTop(200);
                            return [4, CloudLocalization.translateDOM()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        });
    }
    CloudLocalization.prototype.mergeSettings = function (_settings) {
        var settings = {
            defaultLanguage: 'en',
            logTranslationsFromProvider: false,
            translatorProvider: TranslatorProvider.none,
            translatorProviderKey: '',
            urlLanguageLocation: UrlLanguageLocation.none,
            languages: []
        };
        for (var attrname in _settings)
            settings[attrname] = _settings[attrname];
        return settings;
    };
    Object.defineProperty(CloudLocalization, "translationsList", {
        get: function () {
            if (this._translationsList === undefined)
                this._translationsList = [];
            return this._translationsList;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.addTranslationValue = function (languageCode, defaultText, translatedText) {
        var translations = this.getTranslations(languageCode);
        if (translations === undefined) {
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
        var t;
        this.translationsList.forEach(function (translations) {
            if (translations.languageCode === languageCode)
                t = translations;
        });
        return t;
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
            var results = [];
            properties.forEach(function (property) {
                results.push(property + '-left');
                results.push(property + '-right');
            });
            return results;
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
            if (this._supportsTranslateAttribute !== undefined)
                return this._supportsTranslateAttribute;
            return this._supportsTranslateAttribute = $('body')[0].translate !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.doTranslateElement = function (element) {
        if (this.supportsTranslateAttribute) {
            if (element.translate === false || ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]')[0].translate === false))
                return false;
            else
                return true;
        }
        var attribute = $(element).attr('translate');
        if (attribute === undefined) {
            if ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]').attr('translate').toLowerCase() === 'no')
                return false;
            else
                return true;
        }
        if (attribute.toLowerCase() === 'no')
            return false;
        return true;
    };
    Object.defineProperty(CloudLocalization, "defaultLanguage", {
        get: function () {
            var _this = this;
            if (this._defaultLanguage !== undefined)
                return this._defaultLanguage;
            this.languages.forEach(function (language) {
                if (language.code.toLowerCase() === _this._settings.defaultLanguage.toLowerCase())
                    _this._defaultLanguage = language;
            });
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
        requestLanguage = requestLanguage.trim().toLowerCase();
        var result;
        this.languages.forEach(function (language) {
            if (language.code.toLowerCase() === requestLanguage)
                result = language;
        });
        if (result !== undefined)
            return result;
        if (requestLanguage.indexOf('-') !== -1)
            this.languages.forEach(function (language) {
                if (language.code.toLowerCase() === requestLanguage.split('-')[0])
                    result = language;
            });
        if (result !== undefined)
            return result;
        return this.defaultLanguage;
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
            var translations, jsonPath, fetchResponse, data, _a, _b, nullTranslations, _i, data_1, value;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        translations = this.getTranslations(CloudLocalization.currentLanguage.code);
                        if (translations !== undefined && translations.translation === null)
                            return [2, undefined];
                        else if (translations !== undefined)
                            return [2, translations];
                        jsonPath = 'translation/' + this.currentLanguage.code.toLowerCase() + '.json';
                        return [4, fetch(jsonPath)];
                    case 1:
                        fetchResponse = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 10]);
                        return [4, fetchResponse.json()];
                    case 3:
                        data = _c.sent();
                        return [3, 10];
                    case 4:
                        _a = _c.sent();
                        jsonPath = location.protocol + '//' + location.host + '/' + jsonPath;
                        return [4, fetch(jsonPath)];
                    case 5:
                        fetchResponse = _c.sent();
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        return [4, fetchResponse.json()];
                    case 7:
                        data = _c.sent();
                        return [3, 9];
                    case 8:
                        _b = _c.sent();
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
    ;
    CloudLocalization.getTranslation = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var translation, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentLanguage.code === this.defaultLanguage.code)
                            return [2, text];
                        translation = null;
                        return [4, CloudLocalization.translations()];
                    case 1:
                        results = _a.sent();
                        if (results === undefined)
                            return [2, undefined];
                        results.translation.forEach(function (t) {
                            if (t.default.trim() === text.trim())
                                translation = t;
                        });
                        if (translation === null)
                            return [2, undefined];
                        return [2, translation.text.replace(text.trim(), translation.text)];
                }
            });
        });
    };
    CloudLocalization.translateElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var style, rtlStyle, i, propertyName, originalStyle, elementHref, translationStatuses, status_1, e_1, status_2, e_2, status_3, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (element === undefined)
                            return [2, []];
                        if (CloudLocalization.direction === LanguageDirection.rtl) {
                            style = element.style.cssText;
                            if (style !== undefined) {
                                $(element).data('_ctoriginalstyle', style);
                                rtlStyle = '';
                                for (i = 0; i < element.style.length; i++) {
                                    propertyName = element.style[i];
                                    if (CloudLocalization.stylePropertiesToOpposite.indexOf(propertyName) !== -1)
                                        rtlStyle += CloudLocalization.oppositeRTLCSSValues(element, propertyName);
                                    else if (CloudLocalization.stylePropertiesToSwitch.indexOf(propertyName) !== -1)
                                        rtlStyle += CloudLocalization.switchRTLCSSValues(element, propertyName);
                                    else
                                        rtlStyle += propertyName + ': ' + element.style[propertyName] + '; ';
                                }
                                if (rtlStyle !== style) {
                                    $(element).data('_ctoriginalstyle', style);
                                    element.style.cssText = rtlStyle;
                                }
                            }
                        }
                        else {
                            originalStyle = $(element).data('_ctoriginalstyle');
                            if (originalStyle !== '') {
                                $(element).attr('style', originalStyle);
                                $(element).removeData('_ctoriginalstyle');
                            }
                        }
                        if (!this.doTranslateElement(element))
                            return [2, []];
                        if (element.tagName === 'A') {
                            elementHref = element.getAttribute('href');
                            if (elementHref.indexOf(':') !== -1) {
                                elementHref = elementHref.split(':')[0].toLowerCase();
                                if (elementHref === 'mailto' || elementHref === 'tel') {
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
                        if (element.tagName.toLowerCase() == 'script')
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        childNode = element.childNodes[0];
                        if (childNode === undefined)
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (childNode.nodeValue === null)
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (childNode.nodeValue.trim() === '')
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
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
                            default:
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
                        if ($(element).data(dataValueName) !== undefined)
                            originalText = $(element).data(dataValueName);
                        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (originalText === undefined || originalText.trim() === '')
                            originalText = currentValue;
                        return [4, CloudLocalization.getTranslation(originalText)];
                    case 1:
                        translatedText = _a.sent();
                        if (translatedText === undefined) {
                            $(element).removeData(dataValueName);
                            return [2, new TranslationStatus(element, TranslationStatusResult.failed, originalText)];
                        }
                        if (translatedText !== originalText)
                            $(element).data(dataValueName, originalText);
                        else
                            $(element).removeData(dataValueName);
                        return [2, new TranslationStatus(element, TranslationStatusResult.succeeded, translatedText)];
                }
            });
        });
    };
    CloudLocalization.addRTLCSS = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudLocalization.generateRTLCSS();
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    CloudLocalization.generateRTLCSS = function () {
        var style = 'html[dir="rtl"] {direction: rtl;}';
        $.each(document.styleSheets, function (index, sheet) {
            try {
                style += CloudLocalization.getRulesStyle(sheet['cssRules'] || sheet['rules']);
            }
            catch (e) { }
        });
        return style;
    };
    CloudLocalization.getRulesStyle = function (rules) {
        var result = '';
        $.each(rules, function (index, rule) {
            if (rule.type === 4) {
                var mediaStyle = void 0;
                try {
                    mediaStyle = CloudLocalization.getRulesStyle(rule['cssRules'] || rule['rules']);
                }
                catch (e) {
                    return;
                }
                if (mediaStyle !== '') {
                    result += '@media ' + rule.conditionText + '{';
                    result += mediaStyle;
                    result += '}';
                }
            }
            if (rule.style === undefined)
                return;
            var selectorStyle = '';
            CloudLocalization.stylePropertiesToOpposite.forEach(function (property) {
                selectorStyle += CloudLocalization.oppositeRTLCSSValues(rule, property);
            });
            CloudLocalization.stylePropertiesToSwitch.forEach(function (property) {
                selectorStyle += CloudLocalization.switchRTLCSSValues(rule, property);
            });
            if (selectorStyle !== '')
                result += 'html[dir=rtl] ' + rule.selectorText + '{' + selectorStyle + '}';
        });
        return result;
    };
    CloudLocalization.switchRTLCSSValues = function (rule, name) {
        name = name.split('-')[0];
        var leftProperty = name + '-left';
        var rightProperty = name + '-right';
        var leftValue = rule.style[leftProperty];
        var rightValue = rule.style[rightProperty];
        if (leftValue === '' && rightValue === '')
            return '';
        if (leftValue === rightValue)
            return '';
        if (leftValue === '')
            leftValue = 'initial';
        if (rightValue === '')
            rightValue = 'initial';
        var style = leftProperty + ': ' + rightValue + ';' + rightProperty + ': ' + leftValue + ';';
        return style;
    };
    CloudLocalization.oppositeRTLCSSValues = function (rule, name) {
        var value = rule.style[name];
        if (value === '')
            return '';
        var style = '';
        if (value === 'left')
            style += name + ': right;';
        else if (value === 'right')
            style += name + ': left;';
        else if (CloudLocalization.canBeNegative(value)) {
            if (value.indexOf('-') === 0)
                style += name + ': ' + value.substr(1) + ';';
            else
                style += name + ': -' + value + ';';
        }
        return style;
    };
    CloudLocalization.canBeNegative = function (value) {
        var unites = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];
        var isTrue = false;
        unites.forEach(function (unit) {
            if (value.indexOf(unit) > 0 && value.indexOf(' ') === -1)
                isTrue = true;
        });
        return isTrue;
    };
    CloudLocalization.azureAutoTranslate = function (texts) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyData, translatedTexts, data, jsonTranslations_1, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (texts.length === 0)
                            return [2, []];
                        bodyData = '';
                        texts.forEach(function (text) { bodyData += '{"Text": "' + text + '"},'; });
                        translatedTexts = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, $.ajax({
                                url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.defaultLanguage.code + '&to=' + this.currentLanguage.code,
                                type: "POST",
                                dataType: 'json',
                                data: '[' + bodyData + ']',
                                cache: true,
                                beforeSend: function (xhrObj) {
                                    xhrObj.setRequestHeader("Content-Type", "application/json");
                                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", _this.translatorProviderKey);
                                },
                            })];
                    case 2:
                        data = _a.sent();
                        jsonTranslations_1 = [];
                        $.each(data, function (index, translations) {
                            translatedTexts[index] = translations.translations[0].text;
                            if (_this.logTranslationsFromProvider)
                                jsonTranslations_1.push('{"o": "' + texts[index].trim() + '", "t": "' + translatedTexts[index].trim() + '"}');
                        });
                        if (this.logTranslationsFromProvider)
                            console.log('[' + jsonTranslations_1.join(',') + ']');
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4.responseJSON.error.message);
                        console.log(bodyData);
                        return [3, 4];
                    case 4: return [2, translatedTexts];
                }
            });
        });
    };
    CloudLocalization.scrollToTop = function (scrollDuration) {
        var scrollTo = 0;
        var cosParameter = (window.pageYOffset - scrollTo) / 2, scrollCount = 0, oldTimestamp = window.performance.now();
        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            if (tsDiff > 100)
                tsDiff = 30;
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI)
                return;
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
        if (result !== null)
            localStorageLanguage = this.parseLanguage(result);
        if (this.urlLanguageLocation !== undefined) {
            var urlValue_1;
            if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory)
                urlValue_1 = window.location.pathname.split('/')[1];
            if (urlValue_1 !== undefined)
                if (urlValue_1.length === 2 || (urlValue_1.length === 5 && urlValue_1.indexOf('-') === 2)) {
                    this.languages.forEach(function (language) {
                        if (language.code.toLowerCase() === urlValue_1.toLowerCase())
                            result = language.code;
                    });
                    if (urlValue_1.indexOf('-') !== -1 && result === undefined) {
                        urlValue_1 = urlValue_1.split('-')[0];
                        this.languages.forEach(function (language) {
                            if (language.code.toLowerCase() === urlValue_1.toLowerCase())
                                result = language.code;
                        });
                    }
                    if (result !== undefined)
                        urlLanguage = this.parseLanguage(result);
                }
        }
        result = navigator['language'] || navigator['userLanguage'];
        if (result !== undefined)
            browserLanguage = this.parseLanguage(result);
        if (urlLanguage !== undefined)
            this.setCurrentLanguage(urlLanguage.code);
        else if (localStorageLanguage !== undefined)
            this.setCurrentLanguage(localStorageLanguage.code);
        else if (browserLanguage !== undefined)
            this.setCurrentLanguage(browserLanguage.code);
        else
            this.setCurrentLanguage(this.defaultLanguage.code);
    };
    Object.defineProperty(CloudLocalization, "currentLanguage", {
        get: function () {
            if (this._currentLanguage !== undefined)
                return this._currentLanguage;
            this.updateCurrentLanguage();
            return this._currentLanguage;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.updateUrlLanguage = function () {
        if (this.urlLanguageLocation === undefined)
            return;
        if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
            var pathnameSplitted = window.location.pathname.split('/');
            var currentLanguageCode = pathnameSplitted[1];
            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.indexOf('-') === 2))
                pathnameSplitted[1] = this.currentLanguage.code;
            else
                pathnameSplitted.splice(1, 0, this.currentLanguage.code);
            history.replaceState(null, null, pathnameSplitted.join('/'));
        }
    };
    CloudLocalization.setCurrentLanguage = function (languageCode) {
        this._currentLanguage = this.parseLanguage(languageCode);
        try {
            localStorage.setItem('lang', this._currentLanguage.code);
        }
        catch (_a) {
            console.log('localStorage is not supported.');
        }
        this.updateUrlLanguage();
    };
    CloudLocalization.translateDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styleSheet, selection, translationStatuses, _i, _a, e, results, e_5, originalTexts_1, translatedTexts, translations, e_6, _b, translationStatuses_1, status_4, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        $('html').attr('lang', CloudLocalization.currentLanguage.code);
                        if (CloudLocalization.direction === LanguageDirection.rtl)
                            $('html').attr('dir', 'rtl');
                        else
                            $('html').removeAttr('dir');
                        $.each(document.styleSheets, function (index, sheet) {
                            try {
                                $.each(sheet['cssRules'] || sheet['rules'], function (ruleIndex, rule) {
                                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                        styleSheet = sheet;
                                });
                            }
                            catch (e) { }
                        });
                        if (CloudLocalization.direction === LanguageDirection.rtl && styleSheet === undefined)
                            CloudLocalization.addRTLCSS();
                        selection = '*';
                        CloudLocalization.nonTranslatedElements.forEach(function (element) {
                            selection += ':not(' + '"' + element + '"' + ')';
                        });
                        translationStatuses = [];
                        _i = 0, _a = $(selection).toArray();
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 6];
                        e = _a[_i];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4, CloudLocalization.translateElement(e)];
                    case 3:
                        results = _d.sent();
                        results.forEach(function (status) {
                            translationStatuses.push(status);
                        });
                        return [3, 5];
                    case 4:
                        e_5 = _d.sent();
                        return [3, 5];
                    case 5:
                        _i++;
                        return [3, 1];
                    case 6:
                        ;
                        if (!(this.currentLanguage.code !== this.defaultLanguage.code)) return [3, 20];
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
                        _d.label = 7;
                    case 7:
                        _d.trys.push([7, 9, , 10]);
                        return [4, this.azureAutoTranslate(originalTexts_1)];
                    case 8:
                        translatedTexts = _d.sent();
                        translations = this.getTranslations(CloudLocalization.currentLanguage.code).translation;
                        if (translations === null)
                            this.getTranslations(CloudLocalization.currentLanguage.code).translation = [];
                        $.each(translatedTexts, function (index, text) {
                            try {
                                CloudLocalization.addTranslationValue(CloudLocalization.currentLanguage.code, originalTexts_1[index], text);
                            }
                            catch (e) { }
                        });
                        return [3, 10];
                    case 9:
                        e_6 = _d.sent();
                        console.log(e_6);
                        return [3, 10];
                    case 10:
                        _b = 0, translationStatuses_1 = translationStatuses;
                        _d.label = 11;
                    case 11:
                        if (!(_b < translationStatuses_1.length)) return [3, 19];
                        status_4 = translationStatuses_1[_b];
                        _c = status_4.result;
                        switch (_c) {
                            case TranslationStatusResult.failed: return [3, 12];
                        }
                        return [3, 17];
                    case 12:
                        if (!(status_4.attribute === 'title')) return [3, 14];
                        return [4, CloudLocalization.translateElementTitle(status_4.element)];
                    case 13:
                        _d.sent();
                        return [3, 16];
                    case 14: return [4, CloudLocalization.translateElementText(status_4.element)];
                    case 15:
                        _d.sent();
                        _d.label = 16;
                    case 16: return [3, 18];
                    case 17: return [3, 18];
                    case 18:
                        _b++;
                        return [3, 11];
                    case 19:
                        ;
                        _d.label = 20;
                    case 20:
                        this._currentLanguage = undefined;
                        return [2];
                }
            });
        });
    };
    CloudLocalization.fillInLanguages = function () {
        var selection = $('.cloudlocalization-selection');
        if (selection.length === 0)
            return;
        selection.attr('translate', 'no');
        selection.html('');
        var currentLanguage = this.currentLanguage.code;
        CloudLocalization.languages.forEach(function (language) {
            $('.cloudlocalization-selection').append('<option value="' + language.code + '"' + (language.code === currentLanguage ? ' selected ' : '') + '>' + language.displayName + '</option>');
        });
    };
    return CloudLocalization;
}());
{ CloudLocalization };
var cloudLocalization = function (settings) { return new CloudLocalization(settings); };
cloudLocalization;

