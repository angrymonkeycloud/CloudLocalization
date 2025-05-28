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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0VGV4dExhbmd1YWdlPzogc3RyaW5nO1xyXG4gICAgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyPzogYm9vbGVhbjtcclxuICAgIHRyYW5zbGF0b3JQcm92aWRlcj86IFRyYW5zbGF0b3JQcm92aWRlcjsgXHJcbiAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk/OiBzdHJpbmc7XHJcbiAgICB1cmxMYW5ndWFnZUxvY2F0aW9uPzogVXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIHVzZURlZmF1bHRMYW5ndWFnZUFsd2F5cz86IGJvb2xlYW47XHJcbiAgICBwcmV2ZW50TGF5b3V0Q2hhbmdlRm9yUlRMPzogYm9vbGVhbjtcclxuXHJcbiAgICBsYW5ndWFnZXM6IExhbmd1YWdlW107XHJcbiAgICByZXN0YXJ0T25MYW5ndWFnZUNoYW5nZT86IGJvb2xlYW47XHJcbn1cclxuIl19

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,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UCxDQUFDO0lBRUQsc0JBQW1CLHdDQUFtQjthQUF0QztZQUFBLGlCQUVDO1lBREcsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsRUFBaEYsQ0FBZ0YsQ0FBQyxDQUFDO1FBQzdILENBQUM7OztPQUFBO0lBendCYyxtQ0FBaUIsR0FBbUIsRUFBRSxDQUFDO0lBMHdCMUQsd0JBQUM7Q0FuekJELEFBbXpCQyxJQUFBO1NBbnpCWSxpQkFBaUI7QUFxekI5QixJQUFNLGlCQUFpQixHQUFHLFVBQUMsUUFBb0MsSUFBSyxPQUFBLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFDcEcsZUFBZSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0b3JQcm92aWRlciwgVXJsTGFuZ3VhZ2VMb2NhdGlvbiwgTGFuZ3VhZ2VEaXJlY3Rpb24sIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0IH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zLCBMYW5ndWFnZSwgVHJhbnNsYXRpb25WYWx1ZSwgVHJhbnNsYXRpb25TdGF0dXMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvdWRMb2NhbGl6YXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncykge1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLl9zZXR0aW5ncyA9IHRoaXMubWVyZ2VTZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmZpbGxJbkxhbmd1YWdlcygpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3VkbG9jYWxpemF0aW9uLXNlbGVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZUNvZGUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zY3JvbGxUb1RvcCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXJnZVNldHRpbmdzKF9zZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyk6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcktleTogJycsXHJcbiAgICAgICAgICAgIHVybExhbmd1YWdlTG9jYXRpb246IFVybExhbmd1YWdlTG9jYXRpb24ubm9uZSxcclxuICAgICAgICAgICAgdXNlRGVmYXVsdExhbmd1YWdlQWx3YXlzOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJldmVudExheW91dENoYW5nZUZvclJUTDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyAuLi5zZXR0aW5ncywgLi4uX3NldHRpbmdzIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBWYXJpYWJsZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdHJhbnNsYXRpb25zTGlzdDogVHJhbnNsYXRpb25zW10gPSBbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3M7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0aW9uc0xpc3QoKTogVHJhbnNsYXRpb25zW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFRyYW5zbGF0aW9uVmFsdWUobGFuZ3VhZ2VDb2RlOiBzdHJpbmcsIGRlZmF1bHRUZXh0OiBzdHJpbmcsIHRyYW5zbGF0ZWRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gbGFuZ3VhZ2VDb2RlO1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2godHJhbnNsYXRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uVmFsdWUgPSBuZXcgVHJhbnNsYXRpb25WYWx1ZSgpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUuZGVmYXVsdCA9IGRlZmF1bHRUZXh0O1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUudGV4dCA9IHRyYW5zbGF0ZWRUZXh0O1xyXG5cclxuICAgICAgICB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24ucHVzaCh0cmFuc2xhdGlvblZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiBUcmFuc2xhdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZmluZCh0cmFuc2xhdGlvbnMgPT4gdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIFByb3BlcnRpZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbm9uVHJhbnNsYXRlZEVsZW1lbnRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWydjb2RlJywgJ2h0bWwnLCAnaGVhZCcsICdoZWFkID4gKiddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdHlsZVByb3BlcnRpZXNUb1N3aXRjaCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IFsncGFkZGluZycsICdtYXJnaW4nXTtcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5mbGF0TWFwKHByb3BlcnR5ID0+IFtgJHtwcm9wZXJ0eX0tbGVmdGAsIGAke3Byb3BlcnR5fS1yaWdodGBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsndGV4dC1hbGlnbicsICdqdXN0aWZ5LWNvbnRlbnQnLCAnanVzdGlmeS1zZWxmJywgJ2Zsb2F0JywgJ2JhY2tncm91bmQtcG9zaXRpb24teCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXJLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXIoKTogVHJhbnNsYXRvclByb3ZpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB1cmxMYW5ndWFnZUxvY2F0aW9uKCk6IFVybExhbmd1YWdlTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy51cmxMYW5ndWFnZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgPSAndHJhbnNsYXRlJyBpbiBkb2N1bWVudC5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuICEoZWxlbWVudC50cmFuc2xhdGUgPT09IGZhbHNlIHx8IChjbG9zZXN0VHJhbnNsYXRlRWxlbWVudCAmJiBjbG9zZXN0VHJhbnNsYXRlRWxlbWVudC50cmFuc2xhdGUgPT09IGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHJhbnNsYXRlJyk7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gIShjbG9zZXN0VHJhbnNsYXRlRWxlbWVudCAmJiBjbG9zZXN0VHJhbnNsYXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RyYW5zbGF0ZScpLnRvTG93ZXJDYXNlKCkgPT09ICdubycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpICE9PSAnbm8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWZhdWx0TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5ndWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRMYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0TGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGxhbmd1YWdlcygpOiBMYW5ndWFnZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHBhcnNlTGFuZ3VhZ2UocmVxdWVzdExhbmd1YWdlOiBzdHJpbmcpOiBMYW5ndWFnZSB7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0TGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgcmVxdWVzdExhbmd1YWdlID0gcmVxdWVzdExhbmd1YWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5sYW5ndWFnZXMuZmluZChsYW5ndWFnZSA9PiBsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0TGFuZ3VhZ2UuaW5jbHVkZXMoJy0nKSlcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sYW5ndWFnZXMuZmluZChsYW5ndWFnZSA9PiBsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZS5zcGxpdCgnLScpWzBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRpcmVjdGlvbigpOiBMYW5ndWFnZURpcmVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmd1YWdlLmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGlvbnMoKTogUHJvbWlzZTxUcmFuc2xhdGlvbnM+IHtcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zICYmIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQganNvblBhdGggPSBgdHJhbnNsYXRpb24vJHt0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCl9Lmpzb25gO1xyXG5cclxuICAgICAgICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuICAgICAgICBsZXQgZGF0YTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7ZmV0Y2hSZXNwb25zZS5zdGF0dXN9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZmV0Y2hSZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSByZXNwb25zZSBib2R5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG9yIHBhcnNlIEpTT046JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBqc29uUGF0aCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fS8ke2pzb25QYXRofWA7XHJcbiAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSByZXNwb25zZSBib2R5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggb3IgcGFyc2UgSlNPTjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudWxsVHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMudHJhbnNsYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QucHVzaChudWxsVHJhbnNsYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIHZhbHVlWydvJ10sIHZhbHVlWyd0J10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRUcmFuc2xhdGlvbih0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlID09PSB0aGlzLmRlZmF1bHRUZXh0TGFuZ3VhZ2UuY29kZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gcmVzdWx0cy50cmFuc2xhdGlvbi5maW5kKHQgPT4gdC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbiA/IHRyYW5zbGF0aW9uLnRleHQucmVwbGFjZSh0ZXh0LnRyaW0oKSwgdHJhbnNsYXRpb24udGV4dCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzW10+IHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENsb3VkTG9jYWxpemF0aW9uLmRpcmVjdGlvbiA9PT0gTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBydGxTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGVsZW1lbnQuc3R5bGVbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24uc3dpdGNoUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gYCR7cHJvcGVydHlOYW1lfTogJHtlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV19OyBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnRsU3R5bGUgIT09IHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBydGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3R5bGUgPSBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYgJiYgZWxlbWVudEhyZWYuaW5jbHVkZXMoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBlbGVtZW50SHJlZi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdtYWlsdG8nIHx8IHByb3RvY29sID09PSAndGVsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXInLCAnbHRyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRQbGFjZWhvbGRlcihlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1c2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhY2hpbGROb2RlLm5vZGVWYWx1ZSB8fCBjaGlsZE5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uU3RhdHVzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRleHQnLCBjaGlsZE5vZGUubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uU3RhdHVzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRpdGxlJywgZWxlbWVudC50aXRsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50UGxhY2Vob2xkZXIoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWxwbGFjZWhvbGRlcicsIGVsZW1lbnQucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3BsYWNlaG9sZGVyJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSBlbGVtZW50LmRhdGFzZXRbZGF0YVZhbHVlTmFtZV07XHJcblxyXG4gICAgICAgIGlmICgoIW9yaWdpbmFsVGV4dCB8fCBvcmlnaW5hbFRleHQudHJpbSgpID09PSAnJykgJiYgKCFjdXJyZW50VmFsdWUgfHwgY3VycmVudFZhbHVlLnRyaW0oKSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9yaWdpbmFsVGV4dCB8fCBvcmlnaW5hbFRleHQudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLmdldFRyYW5zbGF0aW9uKG9yaWdpbmFsVGV4dCk7XHJcblxyXG4gICAgICAgIGlmICghdHJhbnNsYXRlZFRleHQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtkYXRhVmFsdWVOYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgIT09IG9yaWdpbmFsVGV4dCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXRbZGF0YVZhbHVlTmFtZV0gPSBvcmlnaW5hbFRleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtkYXRhVmFsdWVOYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkLCB0cmFuc2xhdGVkVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkUlRMQ1NTKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBDbG91ZExvY2FsaXphdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gJ2h0bWxbZGlyPVwicnRsXCJdIHtkaXJlY3Rpb246IHJ0bDt9JztcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykuZm9yRWFjaCgoc2hlZXQ6IENTU1N0eWxlU2hlZXQpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLmdldFJ1bGVzU3R5bGUoc2hlZXQuY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHJ1bGVzIGZvciBzdHlsZXNoZWV0OiAke3NoZWV0LmhyZWZ9YCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXM6IENTU1J1bGVMaXN0KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20ocnVsZXMpLmZvckVhY2goKHJ1bGU6IENTU1J1bGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NNZWRpYVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhU3R5bGUgPSB0aGlzLmdldFJ1bGVzU3R5bGUocnVsZS5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgQG1lZGlhICR7cnVsZS5jb25kaXRpb25UZXh0fSB7JHttZWRpYVN0eWxlfX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvclN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JTdHlsZSArPSB0aGlzLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IHRoaXMuc3dpdGNoUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvclN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGBodG1sW2Rpcj1ydGxdICR7cnVsZS5zZWxlY3RvclRleHR9IHske3NlbGVjdG9yU3R5bGV9fWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBiYXNlTmFtZSA9IG5hbWUuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICBjb25zdCBsZWZ0UHJvcGVydHkgPSBgJHtiYXNlTmFtZX0tbGVmdGA7XHJcbiAgICAgICAgY29uc3QgcmlnaHRQcm9wZXJ0eSA9IGAke2Jhc2VOYW1lfS1yaWdodGA7XHJcbiAgICAgICAgbGV0IGxlZnRWYWx1ZSA9IHJ1bGUuc3R5bGVbbGVmdFByb3BlcnR5XTtcclxuICAgICAgICBsZXQgcmlnaHRWYWx1ZSA9IHJ1bGUuc3R5bGVbcmlnaHRQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgIGlmICghbGVmdFZhbHVlICYmICFyaWdodFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0VmFsdWUpIHtcclxuICAgICAgICAgICAgbGVmdFZhbHVlID0gJ2luaXRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyaWdodFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0VmFsdWUgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYCR7bGVmdFByb3BlcnR5fTogJHtyaWdodFZhbHVlfTsgJHtyaWdodFByb3BlcnR5fTogJHtsZWZ0VmFsdWV9O2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGUuc3R5bGVbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9OiByaWdodDtgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9OiBsZWZ0O2A7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDbG91ZExvY2FsaXphdGlvbi5jYW5CZU5lZ2F0aXZlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3RhcnRzV2l0aCgnLScpID8gYCR7bmFtZX06ICR7dmFsdWUuc3Vic3RyKDEpfTtgIDogYCR7bmFtZX06IC0ke3ZhbHVlfTtgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNhbkJlTmVnYXRpdmUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHVuaXRzID0gWydweCcsICdwdCcsICdwYycsICdjbScsICdtbScsICdpbicsICdlbScsICdyZW0nLCAndncnLCAndmgnLCAnZXgnLCAnY2gnLCAndm1pbicsICd2bWF4JywgJyUnXTtcclxuICAgICAgICByZXR1cm4gdW5pdHMuc29tZSh1bml0ID0+IHZhbHVlLmluY2x1ZGVzKHVuaXQpICYmICF2YWx1ZS5pbmNsdWRlcygnICcpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBhenVyZUF1dG9UcmFuc2xhdGUodGV4dHM6IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keURhdGEgPSB0ZXh0cy5tYXAodGV4dCA9PiBge1wiVGV4dFwiOiBcIiR7dGV4dH1cIn1gKS5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS90cmFuc2xhdGU/YXBpLXZlcnNpb249My4wJmZyb209JHt0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlfSZ0bz0ke3RoaXMuY3VycmVudExhbmd1YWdlLmNvZGV9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHRoaXMudHJhbnNsYXRvclByb3ZpZGVyS2V5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogYFske2JvZHlEYXRhfV1gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlZFRleHRzID0gZGF0YS5tYXAodHJhbnNsYXRpb25zID0+IHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbnNbMF0udGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25UcmFuc2xhdGlvbnMgPSB0ZXh0cy5tYXAoKHRleHQsIGluZGV4KSA9PiBge1wib1wiOiBcIiR7dGV4dC50cmltKCl9XCIsIFwidFwiOiBcIiR7dHJhbnNsYXRlZFRleHRzW2luZGV4XS50cmltKCl9XCJ9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7anNvblRyYW5zbGF0aW9ucy5qb2luKCcsJyl9XWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlZFRleHRzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGJvZHlEYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUbyA9IDA7XHJcbiAgICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDI7XHJcbiAgICAgICAgbGV0IHNjcm9sbENvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCB1cmxMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IGJyb3dzZXJMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy8gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXJsVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAodXJsVmFsdWUubGVuZ3RoID09PSAyIHx8ICh1cmxWYWx1ZS5sZW5ndGggPT09IDUgJiYgdXJsVmFsdWUuaW5jbHVkZXMoJy0nKSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHVybFZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsVmFsdWUuaW5jbHVkZXMoJy0nKSAmJiByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybExhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLnVzZURlZmF1bHRMYW5ndWFnZUFsd2F5cykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuICAgICAgICBpZiAodXJsTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh1cmxMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZUxhbmd1YWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UobG9jYWxTdG9yYWdlTGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChicm93c2VyTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5fc2V0dGluZ3MudXNlRGVmYXVsdExhbmd1YWdlQWx3YXlzKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShicm93c2VyTGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UodGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVXJsTGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSBwYXRobmFtZVNwbGl0dGVkWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSAyIHx8IChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gNSAmJiBjdXJyZW50TGFuZ3VhZ2VDb2RlLmluY2x1ZGVzKCctJykpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lU3BsaXR0ZWQuc3BsaWNlKDEsIDAsIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1VybCAhPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBuZXdVcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5yZXN0YXJ0T25MYW5ndWFnZUNoYW5nZSA/PyBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fY3VycmVudExhbmd1YWdlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtZUxhbmd1YWdlID0gY3VycmVudExhbmd1YWdlPy5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX2N1cnJlbnRMYW5ndWFnZT8uY29kZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlICYmICFzYW1lTGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID0gJ3J0bCc7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MucHJldmVudExheW91dENoYW5nZUZvclJUTCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHNoZWV0Wydjc3NSdWxlcyddIHx8IHNoZWV0WydydWxlcyddKS5mb3JFYWNoKChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5jc3NUZXh0ID09PSAnaHRtbFtkaXI9XCJydGxcIl0geyBkaXJlY3Rpb246IHJ0bDsgfScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uYWRkUlRMQ1NTKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xyXG4gICAgICAgIGNvbnN0IG5vblRyYW5zbGF0ZWRFbGVtZW50cyA9IG5ldyBTZXQoQ2xvdWRMb2NhbGl6YXRpb24ubm9uVHJhbnNsYXRlZEVsZW1lbnRzXHJcbiAgICAgICAgICAgIC5tYXAoc2VsZWN0b3IgPT4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzVG9UcmFuc2xhdGUgPSBhbGxFbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiAhbm9uVHJhbnNsYXRlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZSBvZiBlbGVtZW50c1RvVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudChlIGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSAhPT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRzLnB1c2goc3RhdHVzLnRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0cyA9IG9yaWdpbmFsVGV4dHMuZmlsdGVyKHRoaXMub25seVVuaXF1ZSk7ICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uc09iaiA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zT2JqPy50cmFuc2xhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uc09iaiAmJiB0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc09iai50cmFuc2xhdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkVGV4dHMuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5hZGRUcmFuc2xhdGlvblZhbHVlKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCBvcmlnaW5hbFRleHRzW2luZGV4XSwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKTsgfSAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdHVzIG9mIHRyYW5zbGF0aW9uU3RhdHVzZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXR1cykgY29udGludWU7IC8vIFNraXAgdW5kZWZpbmVkL251bGwgc3RhdHVzIG9iamVjdHNcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmF0dHJpYnV0ZSA9PT0gJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWxsSW5MYW5ndWFnZXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2xhdGUnLCAnbm8nKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24ubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBsYW5ndWFnZS5jb2RlICsgJ1wiJyArIChsYW5ndWFnZS5jb2RlID09PSBjdXJyZW50TGFuZ3VhZ2UgPyAnIHNlbGVjdGVkICcgOiAnJykgKyAnPicgKyBsYW5ndWFnZS5kaXNwbGF5TmFtZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZGVmYXVsdFRleHRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0VGV4dExhbmd1YWdlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjbG91ZExvY2FsaXphdGlvbiA9IChzZXR0aW5ncz86IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MpID0+IG5ldyBDbG91ZExvY2FsaXphdGlvbihzZXR0aW5ncyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkTG9jYWxpemF0aW9uOyJdfQ==
