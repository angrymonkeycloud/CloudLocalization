import cloudLocalization, { CloudLocalization } from '../src/main';
import { UrlLanguageLocation } from '../src/enums';
import { TranslatorProvider } from '../src/enums';
import { LanguageDirection } from '../src/enums';
import { CloudLocalizationSettings, TranslationStatusResult } from '../test/js/cloudlocalization';

describe('CloudLocalization', () => {
  let settings: CloudLocalizationSettings;

  beforeEach(() => {
    settings = {
      defaultLanguage: 'en',
      defaultTextLanguage: 'en',
      logTranslationsFromProvider: false,
      translatorProvider: TranslatorProvider.none,
      translatorProviderKey: '',
      urlLanguageLocation: UrlLanguageLocation.none,
      useDefaultLanguageAlways: false,
      restartOnLanguageChange: true,
      languages: [
        { code: 'en', displayName: 'English' },
        { code: 'es', displayName: 'Spanish' },
        { code: 'fr', displayName: 'Français' },
        { code: 'ar', displayName: 'العربية', direction: LanguageDirection.rtl },
      ],
    };
    cloudLocalization(settings);
  });

  test('should initialize with default settings', () => {
    expect(CloudLocalization.currentLanguage.code).toBe('en');
  });

  test('should change language and reload if restartOnLanguageChange is true', () => {
    const reloadSpy = jest.spyOn(window.location, 'reload').mockImplementation(() => {});
    CloudLocalization.setCurrentLanguage('es');
    expect(localStorage.getItem('lang')).toBe('es');
    expect(reloadSpy).toHaveBeenCalled();
    reloadSpy.mockRestore();
  });

  test('should not reload if restartOnLanguageChange is false', () => {
    settings.restartOnLanguageChange = false;
    cloudLocalization(settings);
    const reloadSpy = jest.spyOn(window.location, 'reload').mockImplementation(() => {});
    CloudLocalization.setCurrentLanguage('es');
    expect(localStorage.getItem('lang')).toBe('es');
    expect(reloadSpy).not.toHaveBeenCalled();
    reloadSpy.mockRestore();
  });

  test('should translate element text', async () => {
    const element = document.createElement('div');
    element.innerText = 'Hello';
    const status = await CloudLocalization.translateElementText(element);
    expect(status.result).toBe(TranslationStatusResult.succeeded);
  });

  test('should handle RTL languages', () => {
    CloudLocalization.setCurrentLanguage('ar');
    expect(document.documentElement.dir).toBe('rtl');
  });

  test('should update URL language', () => {
    const updateUrlLanguageSpy = jest.spyOn(CloudLocalization as any, 'updateUrlLanguage');
    CloudLocalization.setCurrentLanguage('fr');
    expect(updateUrlLanguageSpy).toHaveBeenCalled();
    updateUrlLanguageSpy.mockRestore();
  });

  test('should fill in languages in select element', () => {
    document.body.innerHTML = '<select class="cloudlocalization-selection"></select>';
    CloudLocalization.fillInLanguages();
    const select = document.querySelector('.cloudlocalization-selection') as HTMLSelectElement;
    expect(select.options.length).toBe(settings.languages.length);
  });

  test('should scroll to top', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    CloudLocalization.scrollToTop(200);
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
    scrollToSpy.mockRestore();
  });
});