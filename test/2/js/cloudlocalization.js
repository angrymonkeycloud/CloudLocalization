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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI/OiBib29sZWFuO1xyXG4gICAgdHJhbnNsYXRvclByb3ZpZGVyPzogVHJhbnNsYXRvclByb3ZpZGVyOyBcclxuICAgIHRyYW5zbGF0b3JQcm92aWRlcktleT86IHN0cmluZztcclxuICAgIHVybExhbmd1YWdlTG9jYXRpb24/OiBVcmxMYW5ndWFnZUxvY2F0aW9uO1xyXG5cclxuICAgIGxhbmd1YWdlczogTGFuZ3VhZ2VbXTtcclxuICAgIHJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlPzogYm9vbGVhbjsgLy8gQWRkIHRoaXMgbGluZVxyXG59XHJcbiJdfQ==

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
            logTranslationsFromProvider: false,
            translatorProvider: TranslatorProvider.none,
            translatorProviderKey: '',
            urlLanguageLocation: UrlLanguageLocation.none,
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
        requestLanguage = requestLanguage.trim().toLowerCase();
        var result = this.languages.find(function (language) { return language.code.toLowerCase() === requestLanguage; });
        if (result) {
            return result;
        }
        if (requestLanguage.includes('-')) {
            result = this.languages.find(function (language) { return language.code.toLowerCase() === requestLanguage.split('-')[0]; });
        }
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
            var translations, jsonPath, fetchResponse, data, _a, _b, nullTranslations, _i, data_1, value;
            return __generator(this, function (_c) {
                switch (_c.label) {
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
                        jsonPath = "".concat(location.protocol, "//").concat(location.host, "/").concat(jsonPath);
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
    CloudLocalization.getTranslation = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var results, translation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentLanguage.code === this.defaultLanguage.code) {
                            return [2, text];
                        }
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
                console.error(e);
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
        result = navigator.language || navigator['userLanguage'];
        if (result !== undefined) {
            browserLanguage = this.parseLanguage(result);
        }
        if (urlLanguage !== undefined) {
            this.setCurrentLanguage(urlLanguage.code);
        }
        else if (localStorageLanguage !== undefined) {
            this.setCurrentLanguage(localStorageLanguage.code);
        }
        else if (browserLanguage !== undefined) {
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
            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.includes('-'))) {
                pathnameSplitted[1] = this.currentLanguage.code;
            }
            else {
                pathnameSplitted.splice(1, 0, this.currentLanguage.code);
            }
            history.replaceState(null, null, pathnameSplitted.join('/'));
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
    CloudLocalization._translationsList = [];
    return CloudLocalization;
}());
{ CloudLocalization };
var cloudLocalization = function (settings) { return new CloudLocalization(settings); };
cloudLocalization;


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFBO1NBbnhCWSxpQkFBaUI7QUFxeEI5QixJQUFNLGlCQUFpQixHQUFHLFVBQUMsUUFBb0MsSUFBSyxPQUFBLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFDcEcsZUFBZSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0b3JQcm92aWRlciwgVXJsTGFuZ3VhZ2VMb2NhdGlvbiwgTGFuZ3VhZ2VEaXJlY3Rpb24sIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0IH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zLCBMYW5ndWFnZSwgVHJhbnNsYXRpb25WYWx1ZSwgVHJhbnNsYXRpb25TdGF0dXMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvdWRMb2NhbGl6YXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncykge1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLl9zZXR0aW5ncyA9IHRoaXMubWVyZ2VTZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmZpbGxJbkxhbmd1YWdlcygpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3VkbG9jYWxpemF0aW9uLXNlbGVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZUNvZGUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zY3JvbGxUb1RvcCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXJnZVNldHRpbmdzKF9zZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyk6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcktleTogJycsXHJcbiAgICAgICAgICAgIHVybExhbmd1YWdlTG9jYXRpb246IFVybExhbmd1YWdlTG9jYXRpb24ubm9uZSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLnNldHRpbmdzLCAuLi5fc2V0dGluZ3MgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIFZhcmlhYmxlc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF90cmFuc2xhdGlvbnNMaXN0OiBUcmFuc2xhdGlvbnNbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBsYW5ndWFnZUNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QucHVzaCh0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFRyYW5zbGF0aW9ucyhsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFRyYW5zbGF0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zTGlzdC5maW5kKHRyYW5zbGF0aW9ucyA9PiB0cmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID09PSBsYW5ndWFnZUNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgUHJvcGVydGllc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBub25UcmFuc2xhdGVkRWxlbWVudHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ2NvZGUnLCAnaHRtbCcsICdoZWFkJywgJ2hlYWQgPiAqJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvU3dpdGNoKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLmZsYXRNYXAocHJvcGVydHkgPT4gW2Ake3Byb3BlcnR5fS1sZWZ0YCwgYCR7cHJvcGVydHl9LXJpZ2h0YF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWyd0ZXh0LWFsaWduJywgJ2p1c3RpZnktY29udGVudCcsICdqdXN0aWZ5LXNlbGYnLCAnZmxvYXQnLCAnYmFja2dyb3VuZC1wb3NpdGlvbi14J107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcktleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXJLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcigpOiBUcmFuc2xhdG9yUHJvdmlkZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHVybExhbmd1YWdlTG9jYXRpb24oKTogVXJsTGFuZ3VhZ2VMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnVybExhbmd1YWdlTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSA9ICd0cmFuc2xhdGUnIGluIGRvY3VtZW50LmJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdFRyYW5zbGF0ZUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gIShlbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UgfHwgKGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ICYmIGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0cmFuc2xhdGUnKTtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0VHJhbnNsYXRlRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50ICYmIGNsb3Nlc3RUcmFuc2xhdGVFbGVtZW50LmdldEF0dHJpYnV0ZSgndHJhbnNsYXRlJykudG9Mb3dlckNhc2UoKSA9PT0gJ25vJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlLnRvTG93ZXJDYXNlKCkgIT09ICdubyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIFByb3BlcnRpZXNcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRMYW5ndWFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZXMuZmluZChsYW5ndWFnZSA9PiBsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX3NldHRpbmdzLmRlZmF1bHRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbGFuZ3VhZ2VzKCk6IExhbmd1YWdlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VMYW5ndWFnZShyZXF1ZXN0TGFuZ3VhZ2U6IHN0cmluZyk6IExhbmd1YWdlIHtcclxuICAgICAgICByZXF1ZXN0TGFuZ3VhZ2UgPSByZXF1ZXN0TGFuZ3VhZ2UudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmxhbmd1YWdlcy5maW5kKGxhbmd1YWdlID0+IGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3RMYW5ndWFnZS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubGFuZ3VhZ2VzLmZpbmQobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGlyZWN0aW9uKCk6IExhbmd1YWdlRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0aW9ucygpOiBQcm9taXNlPFRyYW5zbGF0aW9ucz4ge1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMgJiYgdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqc29uUGF0aCA9IGB0cmFuc2xhdGlvbi8ke3RoaXMuY3VycmVudExhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKX0uanNvbmA7XHJcblxyXG4gICAgICAgIGxldCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGpzb25QYXRoID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9LyR7anNvblBhdGh9YDtcclxuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVsbFRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUcmFuc2xhdGlvblZhbHVlKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCB2YWx1ZVsnbyddLCB2YWx1ZVsndCddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSA9PT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gcmVzdWx0cy50cmFuc2xhdGlvbi5maW5kKHQgPT4gdC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbiA/IHRyYW5zbGF0aW9uLnRleHQucmVwbGFjZSh0ZXh0LnRyaW0oKSwgdHJhbnNsYXRpb24udGV4dCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzW10+IHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENsb3VkTG9jYWxpemF0aW9uLmRpcmVjdGlvbiA9PT0gTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBydGxTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGVsZW1lbnQuc3R5bGVbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24uc3dpdGNoUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gYCR7cHJvcGVydHlOYW1lfTogJHtlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV19OyBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnRsU3R5bGUgIT09IHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0Ll9jdG9yaWdpbmFsc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBydGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3R5bGUgPSBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXQuX2N0b3JpZ2luYWxzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYgJiYgZWxlbWVudEhyZWYuaW5jbHVkZXMoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBlbGVtZW50SHJlZi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdtYWlsdG8nIHx8IHByb3RvY29sID09PSAndGVsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXInLCAnbHRyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRQbGFjZWhvbGRlcihlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1c2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZE5vZGUgfHwgIWNoaWxkTm9kZS5ub2RlVmFsdWUgfHwgY2hpbGROb2RlLm5vZGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0ZXh0JywgY2hpbGROb2RlLm5vZGVWYWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnRUaXRsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3RpdGxlJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFscGxhY2Vob2xkZXInLCBlbGVtZW50LnBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICdwbGFjZWhvbGRlcic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGF0YVZhbHVlTmFtZTogc3RyaW5nLCBjdXJyZW50VmFsdWU6IHN0cmluZyk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoKCFvcmlnaW5hbFRleHQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpICYmICghY3VycmVudFZhbHVlIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvcmlnaW5hbFRleHQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZFRleHQgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi5nZXRUcmFuc2xhdGlvbihvcmlnaW5hbFRleHQpO1xyXG5cclxuICAgICAgICBpZiAoIXRyYW5zbGF0ZWRUZXh0KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbZGF0YVZhbHVlTmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZWRUZXh0ICE9PSBvcmlnaW5hbFRleHQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0W2RhdGFWYWx1ZU5hbWVdID0gb3JpZ2luYWxUZXh0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbZGF0YVZhbHVlTmFtZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZCwgdHJhbnNsYXRlZFRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFJUTENTUygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gQ2xvdWRMb2NhbGl6YXRpb24uZ2VuZXJhdGVSVExDU1MoKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVJUTENTUygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpLmZvckVhY2goKHNoZWV0OiBDU1NTdHlsZVNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5nZXRSdWxlc1N0eWxlKHNoZWV0LmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVsZXNTdHlsZShydWxlczogQ1NTUnVsZUxpc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShydWxlcykuZm9yRWFjaCgocnVsZTogQ1NTUnVsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU01lZGlhUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVkaWFTdHlsZSA9IHRoaXMuZ2V0UnVsZXNTdHlsZShydWxlLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZWRpYVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGBAbWVkaWEgJHtydWxlLmNvbmRpdGlvblRleHR9IHske21lZGlhU3R5bGV9fWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IHRoaXMub3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gdGhpcy5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYGh0bWxbZGlyPXJ0bF0gJHtydWxlLnNlbGVjdG9yVGV4dH0geyR7c2VsZWN0b3JTdHlsZX19YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IGAke2Jhc2VOYW1lfS1sZWZ0YDtcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gYCR7YmFzZU5hbWV9LXJpZ2h0YDtcclxuICAgICAgICBsZXQgbGVmdFZhbHVlID0gcnVsZS5zdHlsZVtsZWZ0UHJvcGVydHldO1xyXG4gICAgICAgIGxldCByaWdodFZhbHVlID0gcnVsZS5zdHlsZVtyaWdodFByb3BlcnR5XTtcclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0VmFsdWUgJiYgIXJpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJpZ2h0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtsZWZ0UHJvcGVydHl9OiAke3JpZ2h0VmFsdWV9OyAke3JpZ2h0UHJvcGVydHl9OiAke2xlZnRWYWx1ZX07YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcHBvc2l0ZVJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX06IHJpZ2h0O2A7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX06IGxlZnQ7YDtcclxuICAgICAgICB9IGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLmNhbkJlTmVnYXRpdmUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdGFydHNXaXRoKCctJykgPyBgJHtuYW1lfTogJHt2YWx1ZS5zdWJzdHIoMSl9O2AgOiBgJHtuYW1lfTogLSR7dmFsdWV9O2A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FuQmVOZWdhdGl2ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdW5pdHMgPSBbJ3B4JywgJ3B0JywgJ3BjJywgJ2NtJywgJ21tJywgJ2luJywgJ2VtJywgJ3JlbScsICd2dycsICd2aCcsICdleCcsICdjaCcsICd2bWluJywgJ3ZtYXgnLCAnJSddO1xyXG4gICAgICAgIHJldHVybiB1bml0cy5zb21lKHVuaXQgPT4gdmFsdWUuaW5jbHVkZXModW5pdCkgJiYgIXZhbHVlLmluY2x1ZGVzKCcgJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGF6dXJlQXV0b1RyYW5zbGF0ZSh0ZXh0czogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5RGF0YSA9IHRleHRzLm1hcCh0ZXh0ID0+IGB7XCJUZXh0XCI6IFwiJHt0ZXh0fVwifWApLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tL3RyYW5zbGF0ZT9hcGktdmVyc2lvbj0zLjAmZnJvbT0ke3RoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGV9JnRvPSR7dGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZX1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy50cmFuc2xhdG9yUHJvdmlkZXJLZXlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBgWyR7Ym9keURhdGF9XWBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkVGV4dHMgPSBkYXRhLm1hcCh0cmFuc2xhdGlvbnMgPT4gdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uc1swXS50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvblRyYW5zbGF0aW9ucyA9IHRleHRzLm1hcCgodGV4dCwgaW5kZXgpID0+IGB7XCJvXCI6IFwiJHt0ZXh0LnRyaW0oKX1cIiwgXCJ0XCI6IFwiJHt0cmFuc2xhdGVkVGV4dHNbaW5kZXhdLnRyaW0oKX1cIn1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbJHtqc29uVHJhbnNsYXRpb25zLmpvaW4oJywnKX1dYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVkVGV4dHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYm9keURhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUbyA9IDA7XHJcbiAgICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDI7XHJcbiAgICAgICAgbGV0IHNjcm9sbENvdW50ID0gMDtcclxuICAgICAgICBsZXQgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCB1cmxMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IGJyb3dzZXJMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy8gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJyk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IHVybFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSBVcmxMYW5ndWFnZUxvY2F0aW9uLnN1YmRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVybFZhbHVlICE9PSB1bmRlZmluZWQgJiYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluY2x1ZGVzKCctJykpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmluY2x1ZGVzKCctJykgJiYgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHVybFZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCcm93c2VyXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3JbJ3VzZXJMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25zb2xpZGF0aW9uXHJcblxyXG4gICAgICAgIGlmICh1cmxMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJyb3dzZXJMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjdXJyZW50TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1cGRhdGVVcmxMYW5ndWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWVTcGxpdHRlZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlQ29kZSA9IHBhdGhuYW1lU3BsaXR0ZWRbMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDIgfHwgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSA1ICYmIGN1cnJlbnRMYW5ndWFnZUNvZGUuaW5jbHVkZXMoJy0nKSkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lU3BsaXR0ZWRbMV0gPSB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5yZXN0YXJ0T25MYW5ndWFnZUNoYW5nZSA/PyBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fY3VycmVudExhbmd1YWdlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtZUxhbmd1YWdlID0gY3VycmVudExhbmd1YWdlPy5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX2N1cnJlbnRMYW5ndWFnZT8uY29kZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRPbkxhbmd1YWdlQ2hhbmdlICYmICFzYW1lTGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAncnRsJztcclxuICAgICAgICBlbHNlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGVTaGVldDogU3R5bGVTaGVldDtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pLmZvckVhY2goKHJ1bGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuY3NzVGV4dCA9PT0gJ2h0bWxbZGlyPVwicnRsXCJdIHsgZGlyZWN0aW9uOiBydGw7IH0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0ID0gc2hlZXQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFJUTENTUygpO1xyXG5cclxuICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcclxuICAgICAgICBjb25zdCBub25UcmFuc2xhdGVkRWxlbWVudHMgPSBuZXcgU2V0KENsb3VkTG9jYWxpemF0aW9uLm5vblRyYW5zbGF0ZWRFbGVtZW50c1xyXG4gICAgICAgICAgICAubWFwKHNlbGVjdG9yID0+IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSkpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50c1RvVHJhbnNsYXRlID0gYWxsRWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gIW5vblRyYW5zbGF0ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZWxlbWVudHNUb1RyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnQoZSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0cy5wdXNoKHN0YXR1cy50ZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMgPSBvcmlnaW5hbFRleHRzLmZpbHRlcih0aGlzLm9ubHlVbmlxdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIG9yaWdpbmFsVGV4dHNbaW5kZXhdLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdHVzIG9mIHRyYW5zbGF0aW9uU3RhdHVzZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmF0dHJpYnV0ZSA9PT0gJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWxsSW5MYW5ndWFnZXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2xhdGUnLCAnbm8nKTtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24ubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBsYW5ndWFnZS5jb2RlICsgJ1wiJyArIChsYW5ndWFnZS5jb2RlID09PSBjdXJyZW50TGFuZ3VhZ2UgPyAnIHNlbGVjdGVkICcgOiAnJykgKyAnPicgKyBsYW5ndWFnZS5kaXNwbGF5TmFtZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2xvdWRMb2NhbGl6YXRpb24gPSAoc2V0dGluZ3M/OiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzKSA9PiBuZXcgQ2xvdWRMb2NhbGl6YXRpb24oc2V0dGluZ3MpO1xyXG5leHBvcnQgZGVmYXVsdCBjbG91ZExvY2FsaXphdGlvbjsiXX0=
