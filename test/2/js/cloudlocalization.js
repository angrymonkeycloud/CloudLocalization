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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0VGV4dExhbmd1YWdlPzogc3RyaW5nO1xyXG4gICAgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyPzogYm9vbGVhbjtcclxuICAgIHRyYW5zbGF0b3JQcm92aWRlcj86IFRyYW5zbGF0b3JQcm92aWRlcjsgXHJcbiAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk/OiBzdHJpbmc7XHJcbiAgICB1cmxMYW5ndWFnZUxvY2F0aW9uPzogVXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIHVzZURlZmF1bHRMYW5ndWFnZUFsd2F5cz86IGJvb2xlYW47XHJcblxyXG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdO1xyXG4gICAgcmVzdGFydE9uTGFuZ3VhZ2VDaGFuZ2U/OiBib29sZWFuO1xyXG59XHJcbiJdfQ==

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUEsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxFQUFoRixDQUFnRixDQUFDLENBQUM7UUFDN0gsQ0FBQzs7O09BQUE7SUF4d0JjLG1DQUFpQixHQUFtQixFQUFFLENBQUM7SUF5d0IxRCx3QkFBQztDQWp6QkQsQUFpekJDLElBQUE7U0FqekJZLGlCQUFpQjtBQW16QjlCLElBQU0saUJBQWlCLEdBQUcsVUFBQyxRQUFvQyxJQUFLLE9BQUEsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUNwRyxlQUFlLGlCQUFpQixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRvclByb3ZpZGVyLCBVcmxMYW5ndWFnZUxvY2F0aW9uLCBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvbnMsIExhbmd1YWdlLCBUcmFuc2xhdGlvblZhbHVlLCBUcmFuc2xhdGlvblN0YXR1cyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG91ZExvY2FsaXphdGlvbiB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzKSB7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uX3NldHRpbmdzID0gdGhpcy5tZXJnZVNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uZmlsbEluTGFuZ3VhZ2VzKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRE9NKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlQ29kZSA9IHRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2VDb2RlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnNjcm9sbFRvVG9wKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRE9NKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lcmdlU2V0dGluZ3MoX3NldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzKTogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgZGVmYXVsdFRleHRMYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgdHJhbnNsYXRvclByb3ZpZGVyOiBUcmFuc2xhdG9yUHJvdmlkZXIubm9uZSxcclxuICAgICAgICAgICAgdHJhbnNsYXRvclByb3ZpZGVyS2V5OiAnJyxcclxuICAgICAgICAgICAgdXJsTGFuZ3VhZ2VMb2NhdGlvbjogVXJsTGFuZ3VhZ2VMb2NhdGlvbi5ub25lLFxyXG4gICAgICAgICAgICB1c2VEZWZhdWx0TGFuZ3VhZ2VBbHdheXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc2V0dGluZ3MsIC4uLl9zZXR0aW5ncyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgVmFyaWFibGVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc1tdID0gW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVmYXVsdExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdGlvbnNMaXN0KCk6IFRyYW5zbGF0aW9uc1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRpb25zTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRUcmFuc2xhdGlvblZhbHVlKGxhbmd1YWdlQ29kZTogc3RyaW5nLCBkZWZhdWx0VGV4dDogc3RyaW5nLCB0cmFuc2xhdGVkVGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICghdHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblZhbHVlID0gbmV3IFRyYW5zbGF0aW9uVmFsdWUoKTtcclxuICAgICAgICB0cmFuc2xhdGlvblZhbHVlLmRlZmF1bHQgPSBkZWZhdWx0VGV4dDtcclxuICAgICAgICB0cmFuc2xhdGlvblZhbHVlLnRleHQgPSB0cmFuc2xhdGVkVGV4dDtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uLnB1c2godHJhbnNsYXRpb25WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnNMaXN0LmZpbmQodHJhbnNsYXRpb25zID0+IHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPT09IGxhbmd1YWdlQ29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJ107XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuZmxhdE1hcChwcm9wZXJ0eSA9PiBbYCR7cHJvcGVydHl9LWxlZnRgLCBgJHtwcm9wZXJ0eX0tcmlnaHRgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ3RleHQtYWxpZ24nLCAnanVzdGlmeS1jb250ZW50JywgJ2p1c3RpZnktc2VsZicsICdmbG9hdCcsICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcktleTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyKCk6IFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdXJsTGFuZ3VhZ2VMb2NhdGlvbigpOiBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlID0gJ3RyYW5zbGF0ZScgaW4gZG9jdW1lbnQuYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0VHJhbnNsYXRlRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGVsZW1lbnQudHJhbnNsYXRlID09PSBmYWxzZSB8fCAoY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQgJiYgY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQudHJhbnNsYXRlID09PSBmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RyYW5zbGF0ZScpO1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuICEoY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQgJiYgY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0cmFuc2xhdGUnKS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUudG9Mb3dlckNhc2UoKSAhPT0gJ25vJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgUHJvcGVydGllc1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlcy5maW5kKGxhbmd1YWdlID0+IGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5fc2V0dGluZ3MuZGVmYXVsdExhbmd1YWdlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsYW5ndWFnZXMoKTogTGFuZ3VhZ2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxhbmd1YWdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYXJzZUxhbmd1YWdlKHJlcXVlc3RMYW5ndWFnZTogc3RyaW5nKTogTGFuZ3VhZ2Uge1xyXG4gICAgICAgIGlmICghcmVxdWVzdExhbmd1YWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHJlcXVlc3RMYW5ndWFnZSA9IHJlcXVlc3RMYW5ndWFnZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdExhbmd1YWdlLmluY2x1ZGVzKCctJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgdGhpcy5kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBkaXJlY3Rpb24oKTogTGFuZ3VhZ2VEaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5ndWFnZS5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRpb25zKCk6IFByb21pc2U8VHJhbnNsYXRpb25zPiB7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyAmJiB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGpzb25QYXRoID0gYHRyYW5zbGF0aW9uLyR7dGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpfS5qc29uYDtcclxuXHJcbiAgICAgICAgbGV0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaylcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IGZldGNoUmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgcmVzcG9uc2UgYm9keScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBvciBwYXJzZSBKU09OOicsIGVycm9yKTtcclxuICAgICAgICAgICAganNvblBhdGggPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0vJHtqc29uUGF0aH1gO1xyXG4gICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaylcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtmZXRjaFJlc3BvbnNlLnN0YXR1c31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZmV0Y2hSZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgcmVzcG9uc2UgYm9keScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG9yIHBhcnNlIEpTT046JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVsbFRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUcmFuc2xhdGlvblZhbHVlKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCB2YWx1ZVsnbyddLCB2YWx1ZVsndCddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSA9PT0gdGhpcy5kZWZhdWx0VGV4dExhbmd1YWdlLmNvZGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHJlc3VsdHMudHJhbnNsYXRpb24uZmluZCh0ID0+IHQuZGVmYXVsdC50cmltKCkgPT09IHRleHQudHJpbSgpKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24gPyB0cmFuc2xhdGlvbi50ZXh0LnJlcGxhY2UodGV4dC50cmltKCksIHRyYW5zbGF0aW9uLnRleHQpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1c1tdPiB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGUuY3NzVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGUgPSBzdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcnRsU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBlbGVtZW50LnN0eWxlW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLnN3aXRjaFJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IGAke3Byb3BlcnR5TmFtZX06ICR7ZWxlbWVudC5zdHlsZVtwcm9wZXJ0eU5hbWVdfTsgYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ0bFN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5fY3RvcmlnaW5hbHN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gcnRsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0eWxlID0gZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGU7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIcmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmICYmIGVsZW1lbnRIcmVmLmluY2x1ZGVzKCc6JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3RvY29sID0gZWxlbWVudEhyZWYuc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3RvY29sID09PSAnbWFpbHRvJyB8fCBwcm90b2NvbCA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50UGxhY2Vob2xkZXIoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzY3JpcHQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbGVtZW50LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmICghY2hpbGROb2RlIHx8ICFjaGlsZE5vZGUubm9kZVZhbHVlIHx8IGNoaWxkTm9kZS5ub2RlVmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5ub2RlVmFsdWUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5ub2RlVmFsdWUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGl0bGUnLCBlbGVtZW50LnRpdGxlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICd0aXRsZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnRQbGFjZWhvbGRlcihlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uU3RhdHVzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHBsYWNlaG9sZGVyJywgZWxlbWVudC5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAncGxhY2Vob2xkZXInO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGFWYWx1ZU5hbWU6IHN0cmluZywgY3VycmVudFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IGVsZW1lbnQuZGF0YXNldFtkYXRhVmFsdWVOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCghb3JpZ2luYWxUZXh0IHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoIWN1cnJlbnRWYWx1ZSB8fCBjdXJyZW50VmFsdWUudHJpbSgpID09PSAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb3JpZ2luYWxUZXh0IHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dCA9IGN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24uZ2V0VHJhbnNsYXRpb24ob3JpZ2luYWxUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGVkVGV4dCkge1xyXG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZCwgb3JpZ2luYWxUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCAhPT0gb3JpZ2luYWxUZXh0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldFtkYXRhVmFsdWVOYW1lXSA9IG9yaWdpbmFsVGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQsIHRyYW5zbGF0ZWRUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRSVExDU1MoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IENsb3VkTG9jYWxpemF0aW9uLmdlbmVyYXRlUlRMQ1NTKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVSVExDU1MoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSAnaHRtbFtkaXI9XCJydGxcIl0ge2RpcmVjdGlvbjogcnRsO30nO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5mb3JFYWNoKChzaGVldDogQ1NTU3R5bGVTaGVldCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24uZ2V0UnVsZXNTdHlsZShzaGVldC5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgcnVsZXMgZm9yIHN0eWxlc2hlZXQ6ICR7c2hlZXQuaHJlZn1gLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVsZXNTdHlsZShydWxlczogQ1NTUnVsZUxpc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShydWxlcykuZm9yRWFjaCgocnVsZTogQ1NTUnVsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU01lZGlhUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVkaWFTdHlsZSA9IHRoaXMuZ2V0UnVsZXNTdHlsZShydWxlLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZWRpYVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGBAbWVkaWEgJHtydWxlLmNvbmRpdGlvblRleHR9IHske21lZGlhU3R5bGV9fWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IHRoaXMub3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gdGhpcy5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYGh0bWxbZGlyPXJ0bF0gJHtydWxlLnNlbGVjdG9yVGV4dH0geyR7c2VsZWN0b3JTdHlsZX19YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IGAke2Jhc2VOYW1lfS1sZWZ0YDtcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gYCR7YmFzZU5hbWV9LXJpZ2h0YDtcclxuICAgICAgICBsZXQgbGVmdFZhbHVlID0gcnVsZS5zdHlsZVtsZWZ0UHJvcGVydHldO1xyXG4gICAgICAgIGxldCByaWdodFZhbHVlID0gcnVsZS5zdHlsZVtyaWdodFByb3BlcnR5XTtcclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0VmFsdWUgJiYgIXJpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtsZWZ0UHJvcGVydHl9OiAke3JpZ2h0VmFsdWV9OyAke3JpZ2h0UHJvcGVydHl9OiAke2xlZnRWYWx1ZX07YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcHBvc2l0ZVJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX06IHJpZ2h0O2A7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX06IGxlZnQ7YDtcclxuICAgICAgICB9IGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLmNhbkJlTmVnYXRpdmUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdGFydHNXaXRoKCctJykgPyBgJHtuYW1lfTogJHt2YWx1ZS5zdWJzdHIoMSl9O2AgOiBgJHtuYW1lfTogLSR7dmFsdWV9O2A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FuQmVOZWdhdGl2ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdW5pdHMgPSBbJ3B4JywgJ3B0JywgJ3BjJywgJ2NtJywgJ21tJywgJ2luJywgJ2VtJywgJ3JlbScsICd2dycsICd2aCcsICdleCcsICdjaCcsICd2bWluJywgJ3ZtYXgnLCAnJSddO1xyXG4gICAgICAgIHJldHVybiB1bml0cy5zb21lKHVuaXQgPT4gdmFsdWUuaW5jbHVkZXModW5pdCkgJiYgIXZhbHVlLmluY2x1ZGVzKCcgJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGF6dXJlQXV0b1RyYW5zbGF0ZSh0ZXh0czogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5RGF0YSA9IHRleHRzLm1hcCh0ZXh0ID0+IGB7XCJUZXh0XCI6IFwiJHt0ZXh0fVwifWApLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tL3RyYW5zbGF0ZT9hcGktdmVyc2lvbj0zLjAmZnJvbT0ke3RoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGV9JnRvPSR7dGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZX1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy50cmFuc2xhdG9yUHJvdmlkZXJLZXlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBgWyR7Ym9keURhdGF9XWBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkVGV4dHMgPSBkYXRhLm1hcCh0cmFuc2xhdGlvbnMgPT4gdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uc1swXS50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvblRyYW5zbGF0aW9ucyA9IHRleHRzLm1hcCgodGV4dCwgaW5kZXgpID0+IGB7XCJvXCI6IFwiJHt0ZXh0LnRyaW0oKX1cIiwgXCJ0XCI6IFwiJHt0cmFuc2xhdGVkVGV4dHNbaW5kZXhdLnRyaW0oKX1cIn1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtqc29uVHJhbnNsYXRpb25zLmpvaW4oJywnKX1dYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVkVGV4dHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYm9keURhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUbyA9IDA7XHJcbiAgICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDI7XHJcbiAgICAgICAgbGV0IHNjcm9sbENvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCB1cmxMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IGJyb3dzZXJMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy8gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXJsVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAodXJsVmFsdWUubGVuZ3RoID09PSAyIHx8ICh1cmxWYWx1ZS5sZW5ndGggPT09IDUgJiYgdXJsVmFsdWUuaW5jbHVkZXMoJy0nKSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHVybFZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsVmFsdWUuaW5jbHVkZXMoJy0nKSAmJiByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybExhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLnVzZURlZmF1bHRMYW5ndWFnZUFsd2F5cykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuICAgICAgICBpZiAodXJsTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh1cmxMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZUxhbmd1YWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UobG9jYWxTdG9yYWdlTGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChicm93c2VyTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5fc2V0dGluZ3MudXNlRGVmYXVsdExhbmd1YWdlQWx3YXlzKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShicm93c2VyTGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UodGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVXJsTGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSBwYXRobmFtZVNwbGl0dGVkWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSAyIHx8IChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gNSAmJiBjdXJyZW50TGFuZ3VhZ2VDb2RlLmluY2x1ZGVzKCctJykpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lU3BsaXR0ZWQuc3BsaWNlKDEsIDAsIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1VybCAhPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBuZXdVcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5yZXN0YXJ0T25MYW5ndWFnZUNoYW5nZSA/PyBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fY3VycmVudExhbmd1YWdlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtZUxhbmd1YWdlID0gY3VycmVudExhbmd1YWdlPy5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX2N1cnJlbnRMYW5ndWFnZT8uY29kZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlICYmICFzYW1lTGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAncnRsJztcclxuICAgICAgICBlbHNlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGVTaGVldDogU3R5bGVTaGVldDtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pLmZvckVhY2goKHJ1bGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuY3NzVGV4dCA9PT0gJ2h0bWxbZGlyPVwicnRsXCJdIHsgZGlyZWN0aW9uOiBydGw7IH0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0ID0gc2hlZXQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFJUTENTUygpO1xyXG5cclxuICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcclxuICAgICAgICBjb25zdCBub25UcmFuc2xhdGVkRWxlbWVudHMgPSBuZXcgU2V0KENsb3VkTG9jYWxpemF0aW9uLm5vblRyYW5zbGF0ZWRFbGVtZW50c1xyXG4gICAgICAgICAgICAubWFwKHNlbGVjdG9yID0+IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSkpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50c1RvVHJhbnNsYXRlID0gYWxsRWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gIW5vblRyYW5zbGF0ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZWxlbWVudHNUb1RyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnQoZSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0cy5wdXNoKHN0YXR1cy50ZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMgPSBvcmlnaW5hbFRleHRzLmZpbHRlcih0aGlzLm9ubHlVbmlxdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIG9yaWdpbmFsVGV4dHNbaW5kZXhdLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdHVzIG9mIHRyYW5zbGF0aW9uU3RhdHVzZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmF0dHJpYnV0ZSA9PT0gJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWxsSW5MYW5ndWFnZXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2xhdGUnLCAnbm8nKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24ubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBsYW5ndWFnZS5jb2RlICsgJ1wiJyArIChsYW5ndWFnZS5jb2RlID09PSBjdXJyZW50TGFuZ3VhZ2UgPyAnIHNlbGVjdGVkICcgOiAnJykgKyAnPicgKyBsYW5ndWFnZS5kaXNwbGF5TmFtZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZGVmYXVsdFRleHRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0VGV4dExhbmd1YWdlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjbG91ZExvY2FsaXphdGlvbiA9IChzZXR0aW5ncz86IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MpID0+IG5ldyBDbG91ZExvY2FsaXphdGlvbihzZXR0aW5ncyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkTG9jYWxpemF0aW9uOyJdfQ==
