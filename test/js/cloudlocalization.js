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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "stylePropertiesToOpposite", {
        get: function () {
            return ['text-align', 'justify-content', 'justify-self', 'float', 'background-position-x'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "translatorProviderKey", {
        get: function () {
            return this._settings.translatorProviderKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "translatorProvider", {
        get: function () {
            return this._settings.translatorProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "urlLanguageLocation", {
        get: function () {
            return this._settings.urlLanguageLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "logTranslationsFromProvider", {
        get: function () {
            return this._settings.logTranslationsFromProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "supportsTranslateAttribute", {
        get: function () {
            if (this._supportsTranslateAttribute !== undefined)
                return this._supportsTranslateAttribute;
            return this._supportsTranslateAttribute = $('body')[0].translate !== undefined;
        },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudLocalization, "languages", {
        get: function () {
            return this._settings.languages;
        },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    CloudLocalization.translations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var translations, jsonPath, fetchResponse, nullTranslations, data, _i, data_1, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        translations = this.getTranslations(CloudLocalization.currentLanguage.code);
                        if (translations !== undefined && translations.translation === null)
                            return [2, undefined];
                        else if (translations !== undefined)
                            return [2, translations];
                        jsonPath = 'translation/' + this.currentLanguage.code.toLowerCase() + '.json';
                        return [4, fetch(jsonPath)];
                    case 1:
                        fetchResponse = _a.sent();
                        if (!!fetchResponse.ok) return [3, 3];
                        jsonPath = location.protocol + '//' + location.host + '/' + jsonPath;
                        return [4, fetch(jsonPath)];
                    case 2:
                        fetchResponse = _a.sent();
                        if (!fetchResponse.ok) {
                            nullTranslations = new Translations();
                            nullTranslations.languageCode = CloudLocalization.currentLanguage.code;
                            nullTranslations.translation = null;
                            this._translationsList.push(nullTranslations);
                            return [2, undefined];
                        }
                        _a.label = 3;
                    case 3: return [4, fetchResponse.json()];
                    case 4:
                        data = _a.sent();
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
        enumerable: true,
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFFTSxpQ0FBZSxHQUF0QjtRQUVJLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRWxELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3RCLE9BQU87UUFFWCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3pDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQzFMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0F4NEJBLEFBdzRCQyxJQUFBOztBQUVELElBQU0saUJBQWlCLEdBQUcsVUFBQyxRQUFvQyxJQUFLLE9BQUEsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUNwRyxlQUFlLGlCQUFpQixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRvclByb3ZpZGVyLCBVcmxMYW5ndWFnZUxvY2F0aW9uLCBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvbnMsIExhbmd1YWdlLCBUcmFuc2xhdGlvblZhbHVlLCBUcmFuc2xhdGlvblN0YXR1cyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG91ZExvY2FsaXphdGlvbntcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3Mpe1xyXG4gICAgICAgIFxyXG4gICAgQ2xvdWRMb2NhbGl6YXRpb24uX3NldHRpbmdzID0gdGhpcy5tZXJnZVNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uZmlsbEluTGFuZ3VhZ2VzKCk7XHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRE9NKCk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNsb3VkbG9jYWxpemF0aW9uLXNlbGVjdGlvbicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYW5ndWFnZUNvZGUgPSAkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2VDb2RlICE9PSAnJylcclxuICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24uc2Nyb2xsVG9Ub3AoMjAwKTtcclxuICAgICAgICAgICAgYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRE9NKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgbWVyZ2VTZXR0aW5ncyhfc2V0dGluZ3M6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MpOiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA6IENsb3VkTG9jYWxpemF0aW9uU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgdHJhbnNsYXRvclByb3ZpZGVyOiBUcmFuc2xhdG9yUHJvdmlkZXIubm9uZSAsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcktleTogJycsXHJcbiAgICAgICAgICAgIHVybExhbmd1YWdlTG9jYXRpb246IFVybExhbmd1YWdlTG9jYXRpb24ubm9uZSxcclxuXHJcbiAgICAgICAgICAgIGxhbmd1YWdlczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHJuYW1lIGluIF9zZXR0aW5ncykgXHJcbiAgICAgICAgc2V0dGluZ3NbYXR0cm5hbWVdID0gX3NldHRpbmdzW2F0dHJuYW1lXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBWYXJpYWJsZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdHJhbnNsYXRpb25zTGlzdDogVHJhbnNsYXRpb25zW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVmYXVsdExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NldHRpbmdzIDogQ2xvdWRMb2NhbGl6YXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZm9yRWFjaCgodHJhbnNsYXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKVxyXG4gICAgICAgICAgICAgICAgdCA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+e1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLWxlZnQnKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1yaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsndGV4dC1hbGlnbicsICdqdXN0aWZ5LWNvbnRlbnQnLCAnanVzdGlmeS1zZWxmJywgJ2Zsb2F0JywgJ2JhY2tncm91bmQtcG9zaXRpb24teCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXJLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXIoKTogVHJhbnNsYXRvclByb3ZpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB1cmxMYW5ndWFnZUxvY2F0aW9uKCk6IFVybExhbmd1YWdlTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy51cmxMYW5ndWFnZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIoKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgPSAkKCdib2R5JylbMF0udHJhbnNsYXRlICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UgfHwgKCQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0gIT09IHVuZGVmaW5lZCAmJiAkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdLnRyYW5zbGF0ZSA9PT0gZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9ICQoZWxlbWVudCkuYXR0cigndHJhbnNsYXRlJyk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykuYXR0cigndHJhbnNsYXRlJykudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgUHJvcGVydGllc1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0TGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbGFuZ3VhZ2VzKCk6IExhbmd1YWdlW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHBhcnNlTGFuZ3VhZ2UocmVxdWVzdExhbmd1YWdlOiBzdHJpbmcpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RMYW5ndWFnZSA9IHJlcXVlc3RMYW5ndWFnZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0TGFuZ3VhZ2UuaW5kZXhPZignLScpICE9PSAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlLnNwbGl0KCctJylbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRpcmVjdGlvbigpOiBMYW5ndWFnZURpcmVjdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5ndWFnZS5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRpb25zKCk6IFByb21pc2U8VHJhbnNsYXRpb25zPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgZWxzZSBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcblxyXG4gICAgICAgIGxldCBqc29uUGF0aCA9ICd0cmFuc2xhdGlvbi8nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpICsgJy5qc29uJztcclxuXHJcbiAgICAgICAgbGV0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcblxyXG4gICAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaykge1xyXG5cclxuICAgICAgICAgICAgICAgIGpzb25QYXRoID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArJy8nICsganNvblBhdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZldGNoUmVzcG9uc2Uub2spIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnVsbFRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgdmFsdWVbJ28nXSwgdmFsdWVbJ3QnXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldFRyYW5zbGF0aW9uKHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlID09PSB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuXHJcbiAgICAgICAgdmFyIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXN1bHRzLnRyYW5zbGF0aW9uLmZvckVhY2goKHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0LmRlZmF1bHQudHJpbSgpID09PSB0ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gdDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbi50ZXh0LnJlcGxhY2UodGV4dC50cmltKCksIHRyYW5zbGF0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1c1tdPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkTG9jYWxpemF0aW9uLmRpcmVjdGlvbiA9PT0gTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IGVsZW1lbnQuc3R5bGUuY3NzVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdfY3RvcmlnaW5hbHN0eWxlJywgc3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBydGxTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBlbGVtZW50LnN0eWxlW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5vcHBvc2l0ZVJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmluZGV4T2YocHJvcGVydHlOYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLnN3aXRjaFJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcnRsU3R5bGUgKz0gcHJvcGVydHlOYW1lICsgJzogJyArIGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSArICc7ICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ0bFN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBydGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxTdHlsZSA9ICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3R5bGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGF0dHJpYnV0ZTogdHJhbnNsYXRlPVwibm9cIlxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBsaW5rcyB3aXRoIG1haWx0bzogYW5kIHRlbDpcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudEhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYuaW5kZXhPZignOicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudEhyZWYgPSBlbGVtZW50SHJlZi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmID09PSAnbWFpbHRvJyB8fCBlbGVtZW50SHJlZiA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCB0aGUgdHJhbnNsYXRpb25cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1c2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3NjcmlwdCcpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVWYWx1ZS50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWxwbGFjZWhvbGRlcicsIGVsZW1lbnQucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAncGxhY2Vob2xkZXInO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICgkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLmdldFRyYW5zbGF0aW9uKG9yaWdpbmFsVGV4dCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZCwgb3JpZ2luYWxUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCAhPT0gb3JpZ2luYWxUZXh0KVxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSwgb3JpZ2luYWxUZXh0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YShkYXRhVmFsdWVOYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQsIHRyYW5zbGF0ZWRUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRSVExDU1MoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBDbG91ZExvY2FsaXphdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLmdldFJ1bGVzU3R5bGUoc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXMpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgICQuZWFjaChydWxlcywgZnVuY3Rpb24gKGluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS50eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVkaWFTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU3R5bGUgPSBDbG91ZExvY2FsaXphdGlvbi5nZXRSdWxlc1N0eWxlKHJ1bGVbJ2Nzc1J1bGVzJ10gfHwgcnVsZVsncnVsZXMnXSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZWRpYVN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnQG1lZGlhICcgKyBydWxlLmNvbmRpdGlvblRleHQgKyAneyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IG1lZGlhU3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJ1bGUuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RvclN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkTG9jYWxpemF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTdHlsZSArPSBDbG91ZExvY2FsaXphdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBDbGFzc1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdodG1sW2Rpcj1ydGxdICcgKyBydWxlLnNlbGVjdG9yVGV4dCArICd7JyArIHNlbGVjdG9yU3R5bGUgKyAnfSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IG5hbWUgKyAnLWxlZnQnO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UHJvcGVydHkgPSBuYW1lICsgJy1yaWdodCc7XHJcbiAgICAgICAgbGV0IGxlZnRWYWx1ZSA9IHJ1bGUuc3R5bGVbbGVmdFByb3BlcnR5XTtcclxuICAgICAgICBsZXQgcmlnaHRWYWx1ZSA9IHJ1bGUuc3R5bGVbcmlnaHRQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnICYmIHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gJycpXHJcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgaWYgKHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByaWdodFZhbHVlID0gJ2luaXRpYWwnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBsZWZ0UHJvcGVydHkgKyAnOiAnICsgcmlnaHRWYWx1ZSArICc7JyArIHJpZ2h0UHJvcGVydHkgKyAnOiAnICsgbGVmdFZhbHVlICsgJzsnO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBydWxlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IHJpZ2h0OydcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IGxlZnQ7J1xyXG4gICAgICAgIGVsc2UgaWYgKENsb3VkTG9jYWxpemF0aW9uLmNhbkJlTmVnYXRpdmUodmFsdWUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignLScpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6ICcgKyB2YWx1ZS5zdWJzdHIoMSkgKyAnOydcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IC0nICsgdmFsdWUgKyAnOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjYW5CZU5lZ2F0aXZlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdW5pdGVzOiBzdHJpbmdbXSA9IFsncHgnLCAncHQnLCAncGMnLCAnY20nLCAnbW0nLCAnaW4nLCAnZW0nLCAncmVtJywgJ3Z3JywgJ3ZoJywgJ2V4JywgJ2NoJywgJ3ZtaW4nLCAndm1heCcsICclJ107XHJcblxyXG4gICAgICAgIGxldCBpc1RydWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdW5pdGVzLmZvckVhY2goKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YodW5pdCkgPiAwICYmIHZhbHVlLmluZGV4T2YoJyAnKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBpc1RydWUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNUcnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGF6dXJlQXV0b1RyYW5zbGF0ZSh0ZXh0czogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gJyc7XHJcblxyXG4gICAgICAgIHRleHRzLmZvckVhY2goKHRleHQpID0+IHsgYm9keURhdGEgKz0gJ3tcIlRleHRcIjogXCInICsgdGV4dCArICdcIn0sJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tL3RyYW5zbGF0ZT9hcGktdmVyc2lvbj0zLjAmZnJvbT0nICsgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSArICcmdG89JyArIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnWycgKyBib2R5RGF0YSArICddJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHJPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyT2JqLnNldFJlcXVlc3RIZWFkZXIoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIHRoaXMudHJhbnNsYXRvclByb3ZpZGVyS2V5KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBqc29uVHJhbnNsYXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgKGluZGV4LCB0cmFuc2xhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0c1tpbmRleF0gPSB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb25zWzBdLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25UcmFuc2xhdGlvbnMucHVzaCgne1wib1wiOiBcIicgKyB0ZXh0c1tpbmRleF0udHJpbSgpICsgJ1wiLCBcInRcIjogXCInICsgdHJhbnNsYXRlZFRleHRzW2luZGV4XS50cmltKCkgKyAnXCJ9Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArIGpzb25UcmFuc2xhdGlvbnMuam9pbignLCcpICsgJ10nKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlSlNPTi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZWRUZXh0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzY3JvbGxUb1RvcChzY3JvbGxEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvID0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvc1BhcmFtZXRlciA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxUbykgLyAyLFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG9sZFRpbWVzdGFtcCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAobmV3VGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgdHNEaWZmID0gbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm1hbmNlLm5vdygpIHBvbHlmaWxsIGxvYWRzIGxhdGUgc28gcGFzc2VkLWluIHRpbWVzdGFtcCBpcyBhIGxhcmdlciBvZmZzZXRcclxuICAgICAgICAgICAgLy8gb24gdGhlIGZpcnN0IGdvLXRocm91Z2ggdGhhbiB3ZSB3YW50IHNvIEknbSBhZGp1c3RpbmcgdGhlIGRpZmZlcmVuY2UgZG93biBoZXJlLlxyXG4gICAgICAgICAgICAvLyBSZWdhcmRsZXNzLCB3ZSB3b3VsZCByYXRoZXIgaGF2ZSBhIHNsaWdodGx5IHNsb3dlciBhbmltYXRpb24gdGhhbiBhIGJpZyBqdW1wIHNvIGEgZ29vZFxyXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQsIGV2ZW4gaWYgd2UncmUgbm90IHVzaW5nIHRoZSBwb2x5ZmlsbC5cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgdHNEaWZmID0gMzA7XHJcbiAgICBcclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyB3ZSBjcm9zcyBvdmVyIFBpLCB3ZSdyZSBhYm91dCB3aGVyZSB3ZSBuZWVkIHRvIGJlXHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHNjcm9sbENvdW50ID49IE1hdGguUEkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSBNYXRoLnJvdW5kKHNjcm9sbFRvICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIG1vdmVTdGVwKTtcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudExhbmd1YWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IHVybExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgYnJvd3Nlckxhbmd1YWdlOiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgICAgICAvLyBMb2NhbCBTdG9yYWdlXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBVUkxcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KVxyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKCctJykgIT09IC0xICYmIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmF2aWdhdG9yWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuXHJcbiAgICAgICAgaWYgKHVybExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChsb2NhbFN0b3JhZ2VMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnJvd3Nlckxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVVybExhbmd1YWdlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gcGF0aG5hbWVTcGxpdHRlZFsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gMiB8fCAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDUgJiYgY3VycmVudExhbmd1YWdlQ29kZS5pbmRleE9mKCctJykgPT09IDIpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2UgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZVNwbGl0dGVkLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBjYXRjaHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZURPTSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2xhbmcnLCBDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGlmIChDbG91ZExvY2FsaXphdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bClcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2RpcicsICdydGwnKTtcclxuICAgICAgICBlbHNlICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdkaXInKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNoZWV0Wydjc3NSdWxlcyddIHx8IHNoZWV0WydydWxlcyddLCBmdW5jdGlvbiAocnVsZUluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmNzc1RleHQgPT09ICdodG1sW2Rpcj1cInJ0bFwiXSB7IGRpcmVjdGlvbjogcnRsOyB9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRMb2NhbGl6YXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5hZGRSVExDU1MoKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9ICcqJztcclxuICAgICAgICBDbG91ZExvY2FsaXphdGlvbi5ub25UcmFuc2xhdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24gKz0gJzpub3QoJyArICdcIicgKyBlbGVtZW50ICsgJ1wiJyArICcpJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgJChzZWxlY3Rpb24pLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZExvY2FsaXphdGlvbi50cmFuc2xhdGVFbGVtZW50KGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0cy5wdXNoKHN0YXR1cy50ZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMgPSBvcmlnaW5hbFRleHRzLmZpbHRlcih0aGlzLm9ubHlVbmlxdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh0cmFuc2xhdGVkVGV4dHMsIChpbmRleCwgdGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkTG9jYWxpemF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRMb2NhbGl6YXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUsIG9yaWdpbmFsVGV4dHNbaW5kZXhdLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUubG9nKGUpOyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdHVzIG9mIHRyYW5zbGF0aW9uU3RhdHVzZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmF0dHJpYnV0ZSA9PT0gJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkTG9jYWxpemF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsbEluTGFuZ3VhZ2VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gJCgnLmNsb3VkbG9jYWxpemF0aW9uLXNlbGVjdGlvbicpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uYXR0cigndHJhbnNsYXRlJywgJ25vJyk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24ubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5jbG91ZGxvY2FsaXphdGlvbi1zZWxlY3Rpb24nKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgbGFuZ3VhZ2UuY29kZSArICdcIicgKyAobGFuZ3VhZ2UuY29kZSA9PT0gY3VycmVudExhbmd1YWdlID8gJyBzZWxlY3RlZCAnIDogJycpICsgJz4nICsgbGFuZ3VhZ2UuZGlzcGxheU5hbWUgKyAnPC9vcHRpb24+JylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2xvdWRMb2NhbGl6YXRpb24gPSAoc2V0dGluZ3M/OiBDbG91ZExvY2FsaXphdGlvblNldHRpbmdzKSA9PiBuZXcgQ2xvdWRMb2NhbGl6YXRpb24oc2V0dGluZ3MpO1xyXG5leHBvcnQgZGVmYXVsdCBjbG91ZExvY2FsaXphdGlvbjsiXX0=
