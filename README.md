# [Cloud Localization](https://angrymonkeycloud.com/cloudlocalization)

A JavaScript library to translate HTML content into multiple languages.

# Contribution

For TypeScript compilation please install Cloud Mate from npm

```batch
npm i -g cloudmate
```

To generate testing JavaScript file and keep watching for changes run the below:

```batch
cloudmate -w
```

When you're done, please update the version under package.json and run the following for generating distribution files:

```batch
cloudmate dist
```

Check out <https://angrymonkeycloud.com/cloudlocalization> for more information.

# Implementation

## Requirements

jQuery 2.x or 3.x: [jQuery CDN](https://code.jquery.com/), [download jQuery](https://jquery.com/download/).

## Cloud Localization Files

### Download

Cloud Localization JavaScript files: [Uncompressed](https://cdn.amcapi.com/localization/1.0.2/cloudlocalization.js), [Compressed](https://cdn.amcapi.com/localization/1.0.2/cloudlocalization.min.js).

### CDN

Cloud Localization JavaScript Compressed

```html
<script
  src="https://cdn.amcapi.com/localization/1.0.2/cloudlocalization.min.js"
  crossorigin="anonymous"
></script>
```

## Initialization

Initialize Cloud Localization as follows:

```js
import cloudLocalization, { CloudLocalization, LanguageDirection, TranslatorProvider, UrlLanguageLocation } from "./cloudlocalization";

cloudLocalization({
  defaultLanguage: "en", // optional | The main language used.
  defaultTextLanguage: "en", // optional | The language in which the default text is written.
  urlLanguageLocation: UrlLanguageLocation.none, // optional | To append language in the url (ex: www.website.com/en/).
  translatorProvider: TranslatorProvider.none, // optional | Translate text using a translator provider.
  translatorProviderKey: "", // optional | The translator provider key.
  logTranslationsFromProvider: false, // optional | Set to true to log the translation output in the console.
  useDefaultLanguageAlways: false, // optional | Always use the default language.
  restartOnLanguageChange: true, // optional | Restart the application on language change.
  languages: [
    {
      code: "en",
      displayName: "English"
    },
    {
      code: "es",
      displayName: "Spanish"
    },
    {
      code: "fr",
      displayName: "Français"
    },
    {
      code: "fr-ca",
      displayName: "Français (Canada)"
    },
    {
      code: "ar",
      displayName: "العربية",
      direction: LanguageDirection.rtl
    }
  ]
});

// Get selected language code.
console.log(CloudLocalization.currentLanguage.code);

document.getElementById('expandButton')?.addEventListener('click', async () => {
    let div: HTMLElement | null = document.querySelector('#newDiv');

    if (div === null) {
        div = document.createElement('div');
        div.id = 'newDiv';
        div.innerHTML = "Logo";

        const expandButton = document.getElementById('expandButton');
        if (expandButton?.parentNode) {
            expandButton.parentNode.insertBefore(div, expandButton.nextSibling);
        }

        await CloudLocalization.translateElement(div);
    }
});
```

## Predefined Languages

Add predefined languages as json files under the 'translation' directory. Each language code should have its own file named: {languageCode}.json.

o: Original text.

t: Translated text.

```json
[
  {
    "o": "Logo",
    "t": "شعار"
  },
  {
    "o": "Welcome",
    "t": "اهلا وسهلا"
  },
  {
    "o": "Home",
    "t": "الصفحة الرئيسية"
  }
]
```

## Languages Select (Optional)

You can add an empty select into your website having the class "cloudlocalization-selection", which will be filled in with the predefined languages automatically.

```html
<select class="cloudlocalization-selection"></select>
```

## Prevent Text Translation

Specify HTML attribute translate="no" to prevent the translation of inside text, check out more on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate)

## RTL Support

Cloud Localization supports RTL (Right-to-Left) languages. The library automatically adjusts the CSS properties for RTL languages.

## Azure Translator Integration

To use Azure Translator, set the `translatorProvider` to `TranslatorProvider.Azure` and provide the `translatorProviderKey`.

```js
cloudLocalization({
  translatorProvider: TranslatorProvider.Azure,
  translatorProviderKey: "YOUR_AZURE_TRANSLATOR_KEY",
  // other settings...
});
```

## Scroll to Top

The library provides a method to scroll to the top of the page.

```js
CloudLocalization.scrollToTop(200); // Scroll to top with a duration of 200ms
```

## Update Current Language

The library provides a method to update the current language based on various factors like local storage, URL, and browser settings.

```js
CloudLocalization.updateCurrentLanguage();
```

## Get Translations

The library provides methods to get translations for specific texts.

```js
const translations = await CloudLocalization.getTranslation("Hello");
```
