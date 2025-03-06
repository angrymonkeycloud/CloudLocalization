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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBTixJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsdURBQU8sQ0FBQTtJQUNQLHVEQUFPLENBQUE7QUFDWCxDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHVCQUlYO0FBSkQsV0FBWSx1QkFBdUI7SUFDL0IsMkVBQVcsQ0FBQTtJQUNYLCtFQUFhLENBQUE7SUFDYix5RUFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpXLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFJbEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzFCLDJEQUFRLENBQUE7SUFDUiw2REFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzNCLDZEQUFRLENBQUE7SUFDUiw2RUFBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBSFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUc5QiIsImZpbGUiOiJlbnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVudW1zXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VEaXJlY3Rpb257XHJcbiAgICBsdHIgPSAwLFxyXG4gICAgcnRsID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCB7XHJcbiAgICBpZ25vcmVkID0gMSxcclxuICAgIHN1Y2NlZWRlZCA9IDIsXHJcbiAgICBmYWlsZWQgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICBub25lID0gMCxcclxuICAgIEF6dXJlID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgc3ViZGlyZWN0b3J5ID0gMVxyXG59Il19

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFFSTtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFJTCxtQkFBQztBQUFELENBVEEsQUFTQyxJQUFBOztBQUVEO0lBQUE7SUFJQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTs7QUFFRDtJQUVJLDJCQUFZLE9BQW9CLEVBQUUsTUFBK0IsRUFBRSxJQUFhO1FBRTVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFNTCx3QkFBQztBQUFELENBYkEsQUFhQyxJQUFBIiwiZmlsZSI6ImNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tICcuL2VudW1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25WYWx1ZSB7XHJcblxyXG4gICAgZGVmYXVsdDogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG5cclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXJlY3Rpb24/OiBMYW5ndWFnZURpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU3RhdHVzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcmVzdWx0OiBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCwgdGV4dD86IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICByZXN1bHQ6IFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0O1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgYXR0cmlidXRlOiBzdHJpbmc7XHJcbn0iXX0=

var exports = {};
{};


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI/OiBib29sZWFuO1xyXG4gICAgdHJhbnNsYXRvclByb3ZpZGVyPzogVHJhbnNsYXRvclByb3ZpZGVyOyBcclxuICAgIHRyYW5zbGF0b3JQcm92aWRlcktleT86IHN0cmluZztcclxuICAgIHVybExhbmd1YWdlTG9jYXRpb24/OiBVcmxMYW5ndWFnZUxvY2F0aW9uO1xyXG5cclxuICAgIGxhbmd1YWdlczogTGFuZ3VhZ2VbXTtcclxufVxyXG4iXX0=

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
                        if (languageCode !== '')
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
            return this._supportsTranslateAttribute = document.body.translate !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    CloudLocalization.doTranslateElement = function (element) {
        if (this.supportsTranslateAttribute) {
            var closestTranslateElement = element.closest('*[translate]');
            if (element.translate === false || (closestTranslateElement !== null && 'translate' in closestTranslateElement && closestTranslateElement.translate === false)) {
                return false;
            }
            else {
                return true;
            }
        }
        var attribute = element.getAttribute('translate');
        if (attribute === null) {
            var closestTranslateElement = element.closest('*[translate]');
            if (closestTranslateElement !== null && closestTranslateElement.getAttribute('translate').toLowerCase() === 'no') {
                return false;
            }
            else {
                return true;
            }
        }
        if (attribute.toLowerCase() === 'no') {
            return false;
        }
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
                                element.dataset._ctoriginalstyle = style;
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
                                    element.dataset._ctoriginalstyle = style;
                                    element.style.cssText = rtlStyle;
                                }
                            }
                        }
                        else {
                            originalStyle = element.dataset._ctoriginalstyle;
                            if (originalStyle !== '') {
                                element.setAttribute('style', originalStyle);
                                delete element.dataset._ctoriginalstyle;
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
                        if (element.dataset[dataValueName] !== undefined)
                            originalText = element.dataset[dataValueName];
                        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (originalText === undefined || originalText.trim() === '')
                            originalText = currentValue;
                        return [4, CloudLocalization.getTranslation(originalText)];
                    case 1:
                        translatedText = _a.sent();
                        if (translatedText === undefined) {
                            delete element.dataset[dataValueName];
                            return [2, new TranslationStatus(element, TranslationStatusResult.failed, originalText)];
                        }
                        if (translatedText !== originalText)
                            element.dataset[dataValueName] = originalText;
                        else
                            delete element.dataset[dataValueName];
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
        Array.from(document.styleSheets).forEach(function (sheet) {
            try {
                style += CloudLocalization.getRulesStyle(sheet.cssRules);
            }
            catch (e) { }
        });
        return style;
    };
    CloudLocalization.getRulesStyle = function (rules) {
        var _this = this;
        var result = '';
        Array.from(rules).forEach(function (rule) {
            if (rule instanceof CSSMediaRule) {
                var mediaStyle = _this.getRulesStyle(rule.cssRules);
                if (mediaStyle !== '') {
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
                if (selectorStyle_1 !== '') {
                    result += "html[dir=rtl] ".concat(rule.selectorText, " {").concat(selectorStyle_1, "}");
                }
            }
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
            var bodyData, translatedTexts, response, data, jsonTranslations_1, e_4;
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
                        _a.trys.push([1, 4, , 5]);
                        return [4, fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.defaultLanguage.code + '&to=' + this.currentLanguage.code, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Ocp-Apim-Subscription-Key': this.translatorProviderKey
                                },
                                body: '[' + bodyData + ']'
                            })];
                    case 2:
                        response = _a.sent();
                        return [4, response.json()];
                    case 3:
                        data = _a.sent();
                        jsonTranslations_1 = [];
                        data.forEach(function (translations, index) {
                            translatedTexts[index] = translations.translations[0].text;
                            if (_this.logTranslationsFromProvider)
                                jsonTranslations_1.push('{"o": "' + texts[index].trim() + '", "t": "' + translatedTexts[index].trim() + '"}');
                        });
                        if (this.logTranslationsFromProvider)
                            console.log('[' + jsonTranslations_1.join(',') + ']');
                        return [3, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.log(e_4.message);
                        console.log(bodyData);
                        return [3, 5];
                    case 5: return [2, translatedTexts];
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
            var styleSheet, allElements, nonTranslatedElements, elementsToTranslate, translationStatuses, _i, elementsToTranslate_1, e, results, e_5, originalTexts_1, translatedTexts, translations, e_6, _a, translationStatuses_1, status_4, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        document.documentElement.lang = CloudLocalization.currentLanguage.code;
                        if (CloudLocalization.direction === LanguageDirection.rtl)
                            document.documentElement.dir = 'rtl';
                        else
                            document.documentElement.removeAttribute('dir');
                        Array.from(document.styleSheets).forEach(function (sheet) {
                            try {
                                Array.from(sheet['cssRules'] || sheet['rules']).forEach(function (rule) {
                                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                        styleSheet = sheet;
                                });
                            }
                            catch (e) { }
                        });
                        if (CloudLocalization.direction === LanguageDirection.rtl && styleSheet === undefined)
                            CloudLocalization.addRTLCSS();
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
                        translations = this.getTranslations(CloudLocalization.currentLanguage.code).translation;
                        if (translations === null)
                            this.getTranslations(CloudLocalization.currentLanguage.code).translation = [];
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
    return CloudLocalization;
}());
{ CloudLocalization };
var cloudLocalization = function (settings) { return new CloudLocalization(settings); };
cloudLocalization;


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN0QixPQUFPLENBQUMsU0FBUyxJQUFJLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3RLLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQW40QkEsQUFtNEJDLElBQUE7O0FBRUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLFFBQW9DLElBQUssT0FBQSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUEvQixDQUErQixDQUFDO0FBQ3BHLGVBQWUsaUJBQWlCLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24sIExhbmd1YWdlRGlyZWN0aW9uLCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCB9IGZyb20gXCIuL2VudW1zXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9ucywgTGFuZ3VhZ2UsIFRyYW5zbGF0aW9uVmFsdWUsIFRyYW5zbGF0aW9uU3RhdHVzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb3VkTG9jYWxpemF0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MpIHtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uX3NldHRpbmdzID0gdGhpcy5tZXJnZVNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uZmlsbEluTGFuZ3VhZ2VzKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRE9NKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYW5ndWFnZUNvZGUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uc2Nyb2xsVG9Ub3AoMjAwKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXJnZVNldHRpbmdzKF9zZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyk6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcktleTogJycsXHJcbiAgICAgICAgICAgIHVybExhbmd1YWdlTG9jYXRpb246IFVybExhbmd1YWdlTG9jYXRpb24ubm9uZSxcclxuXHJcbiAgICAgICAgICAgIGxhbmd1YWdlczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHJuYW1lIGluIF9zZXR0aW5ncylcclxuICAgICAgICAgICAgc2V0dGluZ3NbYXR0cm5hbWVdID0gX3NldHRpbmdzW2F0dHJuYW1lXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgVmFyaWFibGVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc1tdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZm9yRWFjaCgodHJhbnNsYXRpb25zKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKVxyXG4gICAgICAgICAgICAgICAgdCA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1sZWZ0Jyk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwcm9wZXJ0eSArICctcmlnaHQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ3RleHQtYWxpZ24nLCAnanVzdGlmeS1jb250ZW50JywgJ2p1c3RpZnktc2VsZicsICdmbG9hdCcsICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcktleTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyKCk6IFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdXJsTGFuZ3VhZ2VMb2NhdGlvbigpOiBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlID0gZG9jdW1lbnQuYm9keS50cmFuc2xhdGUgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0VHJhbnNsYXRlRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UgfHwgKGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ICE9PSBudWxsICYmICd0cmFuc2xhdGUnIGluIGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ICYmIGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHJhbnNsYXRlJyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ICE9PSBudWxsICYmIGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50LmdldEF0dHJpYnV0ZSgndHJhbnNsYXRlJykudG9Mb3dlckNhc2UoKSA9PT0gJ25vJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAoYXR0cmlidXRlLnRvTG93ZXJDYXNlKCkgPT09ICdubycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX3NldHRpbmdzLmRlZmF1bHRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsYW5ndWFnZXMoKTogTGFuZ3VhZ2VbXSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VMYW5ndWFnZShyZXF1ZXN0TGFuZ3VhZ2U6IHN0cmluZyk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdExhbmd1YWdlID0gcmVxdWVzdExhbmd1YWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3RMYW5ndWFnZS5pbmRleE9mKCctJykgIT09IC0gMSlcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGlyZWN0aW9uKCk6IExhbmd1YWdlRGlyZWN0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmd1YWdlLmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGlvbnMoKTogUHJvbWlzZTxUcmFuc2xhdGlvbnM+IHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgbGV0IGpzb25QYXRoID0gJ3RyYW5zbGF0aW9uLycgKyB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgKyAnLmpzb24nO1xyXG5cclxuICAgICAgICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG5cclxuICAgICAgICAgICAganNvblBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy8nICsganNvblBhdGg7XHJcblxyXG4gICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bGxUcmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKG51bGxUcmFuc2xhdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5hZGRUcmFuc2xhdGlvblZhbHVlKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCB2YWx1ZVsnbyddLCB2YWx1ZVsndCddKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgPT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uVmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRpb25zKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJlc3VsdHMudHJhbnNsYXRpb24uZm9yRWFjaCgodCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHQuZGVmYXVsdC50cmltKCkgPT09IHRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSB0O1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uLnRleHQucmVwbGFjZSh0ZXh0LnRyaW0oKSwgdHJhbnNsYXRpb24udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzW10+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBydGxTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBlbGVtZW50LnN0eWxlW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5vcHBvc2l0ZVJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmluZGV4T2YocHJvcGVydHlOYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLnN3aXRjaFJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcnRsU3R5bGUgKz0gcHJvcGVydHlOYW1lICsgJzogJyArIGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSArICc7ICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ0bFN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5fY3RvcmlnaW5hbHN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gcnRsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsU3R5bGUgPSBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBhdHRyaWJ1dGU6IHRyYW5zbGF0ZT1cIm5vXCJcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgbGlua3Mgd2l0aCBtYWlsdG86IGFuZCB0ZWw6XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRIcmVmID0gZWxlbWVudEhyZWYuc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50SHJlZiA9PT0gJ21haWx0bycgfHwgZWxlbWVudEhyZWYgPT09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RpcicsICdsdHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZWVkIHdpdGggdGhlIHRyYW5zbGF0aW9uXHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRQbGFjZWhvbGRlcihlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdzY3JpcHQnKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVWYWx1ZS50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWxwbGFjZWhvbGRlcicsIGVsZW1lbnQucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAncGxhY2Vob2xkZXInO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmRhdGFzZXRbZGF0YVZhbHVlTmFtZV0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLmdldFRyYW5zbGF0aW9uKG9yaWdpbmFsVGV4dCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgIT09IG9yaWdpbmFsVGV4dClcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdID0gb3JpZ2luYWxUZXh0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtkYXRhVmFsdWVOYW1lXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQsIHRyYW5zbGF0ZWRUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRSVExDU1MoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBDbG91ZExvY2FsaXphdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gJ2h0bWxbZGlyPVwicnRsXCJdIHtkaXJlY3Rpb246IHJ0bDt9JztcclxuICAgIFxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpLmZvckVhY2goKHNoZWV0OiBDU1NTdHlsZVNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHN0YW5kYXJkIGNzc1J1bGVzIHByb3BlcnR5IGluc3RlYWQgb2YgYnJhY2tldCBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24uZ2V0UnVsZXNTdHlsZShzaGVldC5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXM6IENTU1J1bGVMaXN0KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBcclxuICAgICAgICBBcnJheS5mcm9tKHJ1bGVzKS5mb3JFYWNoKChydWxlOiBDU1NSdWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgQ1NTTWVkaWFSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVkaWFTdHlsZSA9IHRoaXMuZ2V0UnVsZXNTdHlsZShydWxlLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZWRpYVN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgQG1lZGlhICR7cnVsZS5jb25kaXRpb25UZXh0fSB7JHttZWRpYVN0eWxlfX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvclN0eWxlID0gJyc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gdGhpcy5vcHBvc2l0ZVJUTENTU1ZhbHVlcyhydWxlLCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gdGhpcy5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvclN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgaHRtbFtkaXI9cnRsXSAke3J1bGUuc2VsZWN0b3JUZXh0fSB7JHtzZWxlY3RvclN0eWxlfX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0UHJvcGVydHkgPSBuYW1lICsgJy1sZWZ0JztcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gbmFtZSArICctcmlnaHQnO1xyXG4gICAgICAgIGxldCBsZWZ0VmFsdWUgPSBydWxlLnN0eWxlW2xlZnRQcm9wZXJ0eV07XHJcbiAgICAgICAgbGV0IHJpZ2h0VmFsdWUgPSBydWxlLnN0eWxlW3JpZ2h0UHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSAnJyAmJiByaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSByaWdodFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcblxyXG4gICAgICAgIGlmIChyaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gbGVmdFByb3BlcnR5ICsgJzogJyArIHJpZ2h0VmFsdWUgKyAnOycgKyByaWdodFByb3BlcnR5ICsgJzogJyArIGxlZnRWYWx1ZSArICc7JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiByaWdodDsnXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiBsZWZ0OydcclxuICAgICAgICBlbHNlIGlmIChDbG91ZExvY2FsaXphdGlvbi5jYW5CZU5lZ2F0aXZlKHZhbHVlKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiAnICsgdmFsdWUuc3Vic3RyKDEpICsgJzsnXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiAtJyArIHZhbHVlICsgJzsnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FuQmVOZWdhdGl2ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHVuaXRlczogc3RyaW5nW10gPSBbJ3B4JywgJ3B0JywgJ3BjJywgJ2NtJywgJ21tJywgJ2luJywgJ2VtJywgJ3JlbScsICd2dycsICd2aCcsICdleCcsICdjaCcsICd2bWluJywgJ3ZtYXgnLCAnJSddO1xyXG5cclxuICAgICAgICBsZXQgaXNUcnVlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHVuaXRlcy5mb3JFYWNoKCh1bml0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHVuaXQpID4gMCAmJiB2YWx1ZS5pbmRleE9mKCcgJykgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgaXNUcnVlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBhenVyZUF1dG9UcmFuc2xhdGUodGV4dHM6IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG5cclxuICAgICAgICBpZiAodGV4dHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGxldCBib2R5RGF0YSA9ICcnO1xyXG5cclxuICAgICAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7IGJvZHlEYXRhICs9ICd7XCJUZXh0XCI6IFwiJyArIHRleHQgKyAnXCJ9LCcgfSk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2duaXRpdmUubWljcm9zb2Z0dHJhbnNsYXRvci5jb20vdHJhbnNsYXRlP2FwaS12ZXJzaW9uPTMuMCZmcm9tPScgKyB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlICsgJyZ0bz0nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHRoaXMudHJhbnNsYXRvclByb3ZpZGVyS2V5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ1snICsgYm9keURhdGEgKyAnXSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBqc29uVHJhbnNsYXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKHRyYW5zbGF0aW9ucywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0c1tpbmRleF0gPSB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb25zWzBdLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25UcmFuc2xhdGlvbnMucHVzaCgne1wib1wiOiBcIicgKyB0ZXh0c1tpbmRleF0udHJpbSgpICsgJ1wiLCBcInRcIjogXCInICsgdHJhbnNsYXRlZFRleHRzW2luZGV4XS50cmltKCkgKyAnXCJ9Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsganNvblRyYW5zbGF0aW9ucy5qb2luKCcsJykgKyAnXScpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHlEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVkVGV4dHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2Nyb2xsVG9Ub3Aoc2Nyb2xsRHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxUbyA9IDA7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xyXG5cclxuICAgICAgICBsZXQgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDIsXHJcbiAgICAgICAgICAgIHNjcm9sbENvdW50ID0gMCxcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHNEaWZmID0gbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2Uubm93KCkgcG9seWZpbGwgbG9hZHMgbGF0ZSBzbyBwYXNzZWQtaW4gdGltZXN0YW1wIGlzIGEgbGFyZ2VyIG9mZnNldFxyXG4gICAgICAgICAgICAvLyBvbiB0aGUgZmlyc3QgZ28tdGhyb3VnaCB0aGFuIHdlIHdhbnQgc28gSSdtIGFkanVzdGluZyB0aGUgZGlmZmVyZW5jZSBkb3duIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MsIHdlIHdvdWxkIHJhdGhlciBoYXZlIGEgc2xpZ2h0bHkgc2xvd2VyIGFuaW1hdGlvbiB0aGFuIGEgYmlnIGp1bXAgc28gYSBnb29kXHJcbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCwgZXZlbiBpZiB3ZSdyZSBub3QgdXNpbmcgdGhlIHBvbHlmaWxsLlxyXG5cclxuICAgICAgICAgICAgaWYgKHRzRGlmZiA+IDEwMClcclxuICAgICAgICAgICAgICAgIHRzRGlmZiA9IDMwO1xyXG5cclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIHdlIGNyb3NzIG92ZXIgUGksIHdlJ3JlIGFib3V0IHdoZXJlIHdlIG5lZWQgdG8gYmVcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxDb3VudCA+PSBNYXRoLlBJKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSBNYXRoLnJvdW5kKHNjcm9sbFRvICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIG1vdmVTdGVwKTtcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZUxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgdXJsTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBVUkxcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KVxyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKCctJykgIT09IC0xICYmIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmF2aWdhdG9yWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuXHJcbiAgICAgICAgaWYgKHVybExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChsb2NhbFN0b3JhZ2VMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnJvd3Nlckxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVVybExhbmd1YWdlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gcGF0aG5hbWVTcGxpdHRlZFsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gMiB8fCAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDUgJiYgY3VycmVudExhbmd1YWdlQ29kZS5pbmRleE9mKCctJykgPT09IDIpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2UgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZVNwbGl0dGVkLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVVcmxMYW5ndWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVET00oKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICBcclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAncnRsJztcclxuICAgICAgICBlbHNlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcbiAgICBcclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5mb3JFYWNoKChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuY3NzVGV4dCA9PT0gJ2h0bWxbZGlyPVwicnRsXCJdIHsgZGlyZWN0aW9uOiBydGw7IH0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0ID0gc2hlZXQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5hZGRSVExDU1MoKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xyXG4gICAgICAgIGNvbnN0IG5vblRyYW5zbGF0ZWRFbGVtZW50cyA9IG5ldyBTZXQoQ2xvdWRMb2NhbGl6YXRpb24ubm9uVHJhbnNsYXRlZEVsZW1lbnRzXHJcbiAgICAgICAgICAgIC5tYXAoc2VsZWN0b3IgPT4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50c1RvVHJhbnNsYXRlID0gYWxsRWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gIW5vblRyYW5zbGF0ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbGVtZW50c1RvVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudChlIGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxUZXh0czogc3RyaW5nW10gPSBbXTtcclxuICAgIFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRzLnB1c2goc3RhdHVzLnRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHRzID0gb3JpZ2luYWxUZXh0cy5maWx0ZXIodGhpcy5vbmx5VW5pcXVlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2xhdG9yUHJvdmlkZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0cyA9IGF3YWl0IHRoaXMuYXp1cmVBdXRvVHJhbnNsYXRlKG9yaWdpbmFsVGV4dHMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbiA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZFRleHRzLmZvckVhY2goKHRleHQsIGluZGV4KSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIG9yaWdpbmFsVGV4dHNbaW5kZXhdLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXR1cyBvZiB0cmFuc2xhdGlvblN0YXR1c2VzKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hdHRyaWJ1dGUgPT09ICd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsbEluTGFuZ3VhZ2VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3VkbG9jYWxpemF0aW9uLXNlbGVjdGlvbicpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNsYXRlJywgJ25vJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgbGFuZ3VhZ2UuY29kZSArICdcIicgKyAobGFuZ3VhZ2UuY29kZSA9PT0gY3VycmVudExhbmd1YWdlID8gJyBzZWxlY3RlZCAnIDogJycpICsgJz4nICsgbGFuZ3VhZ2UuZGlzcGxheU5hbWUgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsb3VkTG9jYWxpemF0aW9uID0gKHNldHRpbmdzPzogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncykgPT4gbmV3IENsb3VkTG9jYWxpemF0aW9uKHNldHRpbmdzKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xvdWRMb2NhbGl6YXRpb247Il19
