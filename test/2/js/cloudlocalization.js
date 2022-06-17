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


//# sourceMappingURL=data:application/json;charset=utf8;base64,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ckM7SUFFTSxpQ0FBZSxHQUF0QjtRQUVJLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRWxELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3RCLE9BQU87UUFFWCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3pDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQzFMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0E3NEJBLEFBNjRCQyxJQUFBOztBQUVELElBQU0saUJBQWlCLEdBQUcsVUFBQyxRQUFvQyxJQUFLLE9BQUEsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUNwRyxlQUFlLGlCQUFpQixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRvclByb3ZpZGVyLCBVcmxMYW5ndWFnZUxvY2F0aW9uLCBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvbnMsIExhbmd1YWdlLCBUcmFuc2xhdGlvblZhbHVlLCBUcmFuc2xhdGlvblN0YXR1cyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG91ZExvY2FsaXphdGlvbiB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzKSB7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLl9zZXR0aW5ncyA9IHRoaXMubWVyZ2VTZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmZpbGxJbkxhbmd1YWdlcygpO1xyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jbG91ZGxvY2FsaXphdGlvbi1zZWxlY3Rpb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFuZ3VhZ2VDb2RlID0gJCh0aGlzKS52YWwoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpXHJcbiAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnNjcm9sbFRvVG9wKDIwMCk7XHJcbiAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVyZ2VTZXR0aW5ncyhfc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MpOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nczogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgICAgICAgICBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXI6IFRyYW5zbGF0b3JQcm92aWRlci5ub25lLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk6ICcnLFxyXG4gICAgICAgICAgICB1cmxMYW5ndWFnZUxvY2F0aW9uOiBVcmxMYW5ndWFnZUxvY2F0aW9uLm5vbmUsXHJcblxyXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRybmFtZSBpbiBfc2V0dGluZ3MpXHJcbiAgICAgICAgICAgIHNldHRpbmdzW2F0dHJuYW1lXSA9IF9zZXR0aW5nc1thdHRybmFtZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIFZhcmlhYmxlc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF90cmFuc2xhdGlvbnNMaXN0OiBUcmFuc2xhdGlvbnNbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3M7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0aW9uc0xpc3QoKTogVHJhbnNsYXRpb25zW10ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRpb25zTGlzdCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFRyYW5zbGF0aW9uVmFsdWUobGFuZ3VhZ2VDb2RlOiBzdHJpbmcsIGRlZmF1bHRUZXh0OiBzdHJpbmcsIHRyYW5zbGF0ZWRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBsYW5ndWFnZUNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QucHVzaCh0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uVmFsdWUgPSBuZXcgVHJhbnNsYXRpb25WYWx1ZSgpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUuZGVmYXVsdCA9IGRlZmF1bHRUZXh0O1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUudGV4dCA9IHRyYW5zbGF0ZWRUZXh0O1xyXG5cclxuICAgICAgICB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24ucHVzaCh0cmFuc2xhdGlvblZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFRyYW5zbGF0aW9ucyhsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFRyYW5zbGF0aW9ucyB7XHJcbiAgICAgICAgbGV0IHQ6IFRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNMaXN0LmZvckVhY2goKHRyYW5zbGF0aW9ucykgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPT09IGxhbmd1YWdlQ29kZSlcclxuICAgICAgICAgICAgICAgIHQgPSB0cmFuc2xhdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgUHJvcGVydGllc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBub25UcmFuc2xhdGVkRWxlbWVudHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ2NvZGUnLCAnaHRtbCcsICdoZWFkJywgJ2hlYWQgPiAqJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvU3dpdGNoKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9IFsncGFkZGluZycsICdtYXJnaW4nXTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwcm9wZXJ0eSArICctbGVmdCcpO1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLXJpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWyd0ZXh0LWFsaWduJywgJ2p1c3RpZnktY29udGVudCcsICdqdXN0aWZ5LXNlbGYnLCAnZmxvYXQnLCAnYmFja2dyb3VuZC1wb3NpdGlvbi14J107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcktleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXJLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcigpOiBUcmFuc2xhdG9yUHJvdmlkZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHVybExhbmd1YWdlTG9jYXRpb24oKTogVXJsTGFuZ3VhZ2VMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnVybExhbmd1YWdlTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcigpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSA9ICQoJ2JvZHknKVswXS50cmFuc2xhdGUgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhbnNsYXRlID09PSBmYWxzZSB8fCAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0udHJhbnNsYXRlID09PSBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gJChlbGVtZW50KS5hdHRyKCd0cmFuc2xhdGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdICE9PSB1bmRlZmluZWQgJiYgJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKS5hdHRyKCd0cmFuc2xhdGUnKS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX3NldHRpbmdzLmRlZmF1bHRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsYW5ndWFnZXMoKTogTGFuZ3VhZ2VbXSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VMYW5ndWFnZShyZXF1ZXN0TGFuZ3VhZ2U6IHN0cmluZyk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdExhbmd1YWdlID0gcmVxdWVzdExhbmd1YWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3RMYW5ndWFnZS5pbmRleE9mKCctJykgIT09IC0gMSlcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGlyZWN0aW9uKCk6IExhbmd1YWdlRGlyZWN0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmd1YWdlLmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGlvbnMoKTogUHJvbWlzZTxUcmFuc2xhdGlvbnM+IHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgbGV0IGpzb25QYXRoID0gJ3RyYW5zbGF0aW9uLycgKyB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgKyAnLmpzb24nO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcblxyXG4gICAgICAgICAgICBqc29uUGF0aCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLycgKyBqc29uUGF0aDtcclxuXHJcbiAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVsbFRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIHZhbHVlWydvJ10sIHZhbHVlWyd0J10pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRUcmFuc2xhdGlvbih0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSA9PT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgICAgIHZhciB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy50cmFuc2xhdGlvbi5mb3JFYWNoKCh0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IHQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24udGV4dC5yZXBsYWNlKHRleHQudHJpbSgpLCB0cmFuc2xhdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXNbXT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcnRsU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gZWxlbWVudC5zdHlsZVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENsb3VkTG9jYWxpemF0aW9uLnN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRMb2NhbGl6YXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJ0bFN0eWxlICs9IHByb3BlcnR5TmFtZSArICc6ICcgKyBlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV0gKyAnOyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChydGxTdHlsZSAhPT0gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gcnRsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsU3R5bGUgPSAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdzdHlsZScsIG9yaWdpbmFsU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdfY3RvcmlnaW5hbHN0eWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBhdHRyaWJ1dGU6IHRyYW5zbGF0ZT1cIm5vXCJcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgbGlua3Mgd2l0aCBtYWlsdG86IGFuZCB0ZWw6XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRIcmVmID0gZWxlbWVudEhyZWYuc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50SHJlZiA9PT0gJ21haWx0bycgfHwgZWxlbWVudEhyZWYgPT09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RpcicsICdsdHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZWVkIHdpdGggdGhlIHRyYW5zbGF0aW9uXHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRQbGFjZWhvbGRlcihlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdzY3JpcHQnKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVWYWx1ZS50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWxwbGFjZWhvbGRlcicsIGVsZW1lbnQucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAncGxhY2Vob2xkZXInO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICgkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLmdldFRyYW5zbGF0aW9uKG9yaWdpbmFsVGV4dCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZCwgb3JpZ2luYWxUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCAhPT0gb3JpZ2luYWxUZXh0KVxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSwgb3JpZ2luYWxUZXh0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YShkYXRhVmFsdWVOYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQsIHRyYW5zbGF0ZWRUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRSVExDU1MoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBDbG91ZExvY2FsaXphdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLmdldFJ1bGVzU3R5bGUoc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXMpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgICQuZWFjaChydWxlcywgZnVuY3Rpb24gKGluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS50eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVkaWFTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU3R5bGUgPSBDbG91ZExvY2FsaXphdGlvbi5nZXRSdWxlc1N0eWxlKHJ1bGVbJ2Nzc1J1bGVzJ10gfHwgcnVsZVsncnVsZXMnXSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZWRpYVN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnQG1lZGlhICcgKyBydWxlLmNvbmRpdGlvblRleHQgKyAneyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IG1lZGlhU3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJ1bGUuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RvclN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBDbGFzc1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdodG1sW2Rpcj1ydGxdICcgKyBydWxlLnNlbGVjdG9yVGV4dCArICd7JyArIHNlbGVjdG9yU3R5bGUgKyAnfSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0UHJvcGVydHkgPSBuYW1lICsgJy1sZWZ0JztcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gbmFtZSArICctcmlnaHQnO1xyXG4gICAgICAgIGxldCBsZWZ0VmFsdWUgPSBydWxlLnN0eWxlW2xlZnRQcm9wZXJ0eV07XHJcbiAgICAgICAgbGV0IHJpZ2h0VmFsdWUgPSBydWxlLnN0eWxlW3JpZ2h0UHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSAnJyAmJiByaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSByaWdodFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcblxyXG4gICAgICAgIGlmIChyaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gbGVmdFByb3BlcnR5ICsgJzogJyArIHJpZ2h0VmFsdWUgKyAnOycgKyByaWdodFByb3BlcnR5ICsgJzogJyArIGxlZnRWYWx1ZSArICc7JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiByaWdodDsnXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiBsZWZ0OydcclxuICAgICAgICBlbHNlIGlmIChDbG91ZExvY2FsaXphdGlvbi5jYW5CZU5lZ2F0aXZlKHZhbHVlKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiAnICsgdmFsdWUuc3Vic3RyKDEpICsgJzsnXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiAtJyArIHZhbHVlICsgJzsnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FuQmVOZWdhdGl2ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHVuaXRlczogc3RyaW5nW10gPSBbJ3B4JywgJ3B0JywgJ3BjJywgJ2NtJywgJ21tJywgJ2luJywgJ2VtJywgJ3JlbScsICd2dycsICd2aCcsICdleCcsICdjaCcsICd2bWluJywgJ3ZtYXgnLCAnJSddO1xyXG5cclxuICAgICAgICBsZXQgaXNUcnVlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHVuaXRlcy5mb3JFYWNoKCh1bml0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHVuaXQpID4gMCAmJiB2YWx1ZS5pbmRleE9mKCcgJykgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgaXNUcnVlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBhenVyZUF1dG9UcmFuc2xhdGUodGV4dHM6IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG5cclxuICAgICAgICBpZiAodGV4dHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGxldCBib2R5RGF0YSA9ICcnO1xyXG5cclxuICAgICAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7IGJvZHlEYXRhICs9ICd7XCJUZXh0XCI6IFwiJyArIHRleHQgKyAnXCJ9LCcgfSk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS90cmFuc2xhdGU/YXBpLXZlcnNpb249My4wJmZyb209JyArIHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUgKyAnJnRvPScgKyB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJ1snICsgYm9keURhdGEgKyAnXScsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoeGhyT2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyT2JqLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHhock9iai5zZXRSZXF1ZXN0SGVhZGVyKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCB0aGlzLnRyYW5zbGF0b3JQcm92aWRlcktleSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQganNvblRyYW5zbGF0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIChpbmRleCwgdHJhbnNsYXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkVGV4dHNbaW5kZXhdID0gdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uc1swXS50ZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcilcclxuICAgICAgICAgICAgICAgICAgICBqc29uVHJhbnNsYXRpb25zLnB1c2goJ3tcIm9cIjogXCInICsgdGV4dHNbaW5kZXhdLnRyaW0oKSArICdcIiwgXCJ0XCI6IFwiJyArIHRyYW5zbGF0ZWRUZXh0c1tpbmRleF0udHJpbSgpICsgJ1wifScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyBqc29uVHJhbnNsYXRpb25zLmpvaW4oJywnKSArICddJyk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZUpTT04uZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHlEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVkVGV4dHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2Nyb2xsVG9Ub3Aoc2Nyb2xsRHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxUbyA9IDA7XHJcblxyXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xyXG5cclxuICAgICAgICBsZXQgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDIsXHJcbiAgICAgICAgICAgIHNjcm9sbENvdW50ID0gMCxcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKG5ld1RpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHNEaWZmID0gbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2Uubm93KCkgcG9seWZpbGwgbG9hZHMgbGF0ZSBzbyBwYXNzZWQtaW4gdGltZXN0YW1wIGlzIGEgbGFyZ2VyIG9mZnNldFxyXG4gICAgICAgICAgICAvLyBvbiB0aGUgZmlyc3QgZ28tdGhyb3VnaCB0aGFuIHdlIHdhbnQgc28gSSdtIGFkanVzdGluZyB0aGUgZGlmZmVyZW5jZSBkb3duIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MsIHdlIHdvdWxkIHJhdGhlciBoYXZlIGEgc2xpZ2h0bHkgc2xvd2VyIGFuaW1hdGlvbiB0aGFuIGEgYmlnIGp1bXAgc28gYSBnb29kXHJcbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCwgZXZlbiBpZiB3ZSdyZSBub3QgdXNpbmcgdGhlIHBvbHlmaWxsLlxyXG5cclxuICAgICAgICAgICAgaWYgKHRzRGlmZiA+IDEwMClcclxuICAgICAgICAgICAgICAgIHRzRGlmZiA9IDMwO1xyXG5cclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIHdlIGNyb3NzIG92ZXIgUGksIHdlJ3JlIGFib3V0IHdoZXJlIHdlIG5lZWQgdG8gYmVcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxDb3VudCA+PSBNYXRoLlBJKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSBNYXRoLnJvdW5kKHNjcm9sbFRvICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIG1vdmVTdGVwKTtcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZUxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgdXJsTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBVUkxcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KVxyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKCctJykgIT09IC0xICYmIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmF2aWdhdG9yWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuXHJcbiAgICAgICAgaWYgKHVybExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChsb2NhbFN0b3JhZ2VMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnJvd3Nlckxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVVybExhbmd1YWdlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gcGF0aG5hbWVTcGxpdHRlZFsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gMiB8fCAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDUgJiYgY3VycmVudExhbmd1YWdlQ29kZS5pbmRleE9mKCctJykgPT09IDIpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2UgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZVNwbGl0dGVkLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVVcmxMYW5ndWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVET00oKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgICQoJ2h0bWwnKS5hdHRyKCdsYW5nJywgQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5hdHRyKCdkaXInLCAncnRsJyk7XHJcbiAgICAgICAgZWxzZSAkKCdodG1sJykucmVtb3ZlQXR0cignZGlyJyk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZVNoZWV0OiBTdHlsZVNoZWV0O1xyXG5cclxuICAgICAgICAkLmVhY2goZG9jdW1lbnQuc3R5bGVTaGVldHMsIGZ1bmN0aW9uIChpbmRleCwgc2hlZXQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSwgZnVuY3Rpb24gKHJ1bGVJbmRleCwgcnVsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5jc3NUZXh0ID09PSAnaHRtbFtkaXI9XCJydGxcIl0geyBkaXJlY3Rpb246IHJ0bDsgfScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQgPSBzaGVldDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkTG9jYWxpemF0aW9uLmRpcmVjdGlvbiA9PT0gTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsICYmIHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uYWRkUlRMQ1NTKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSAnKic7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24ubm9uVHJhbnNsYXRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uICs9ICc6bm90KCcgKyAnXCInICsgZWxlbWVudCArICdcIicgKyAnKSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlIG9mICQoc2VsZWN0aW9uKS50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudChlKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlICE9PSB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxUZXh0czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMucHVzaChzdGF0dXMudGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHRzID0gb3JpZ2luYWxUZXh0cy5maWx0ZXIodGhpcy5vbmx5VW5pcXVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zbGF0b3JQcm92aWRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHRzID0gYXdhaXQgdGhpcy5henVyZUF1dG9UcmFuc2xhdGUob3JpZ2luYWxUZXh0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSkudHJhbnNsYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2godHJhbnNsYXRlZFRleHRzLCAoaW5kZXgsIHRleHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5hZGRUcmFuc2xhdGlvblZhbHVlKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCBvcmlnaW5hbFRleHRzW2luZGV4XSwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXR1cyBvZiB0cmFuc2xhdGlvblN0YXR1c2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hdHRyaWJ1dGUgPT09ICd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbGxJbkxhbmd1YWdlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9ICQoJy5jbG91ZGxvY2FsaXphdGlvbi1zZWxlY3Rpb24nKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9uLmF0dHIoJ3RyYW5zbGF0ZScsICdubycpO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uaHRtbCgnJyk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcblxyXG4gICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcuY2xvdWRsb2NhbGl6YXRpb24tc2VsZWN0aW9uJykuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIGxhbmd1YWdlLmNvZGUgKyAnXCInICsgKGxhbmd1YWdlLmNvZGUgPT09IGN1cnJlbnRMYW5ndWFnZSA/ICcgc2VsZWN0ZWQgJyA6ICcnKSArICc+JyArIGxhbmd1YWdlLmRpc3BsYXlOYW1lICsgJzwvb3B0aW9uPicpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsb3VkTG9jYWxpemF0aW9uID0gKHNldHRpbmdzPzogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncykgPT4gbmV3IENsb3VkTG9jYWxpemF0aW9uKHNldHRpbmdzKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xvdWRMb2NhbGl6YXRpb247Il19
