import cloudLocalization, { CloudLocalization, LanguageDirection } from "./cloudlocalization";

cloudLocalization({
    languages: [{
        code: 'en',
        displayName: 'English'
    }, {
        code: 'es',
        displayName: 'Spanish'
    }, {
        code: 'fr',
        displayName: 'Français'
    }, {
        code: 'fr-ca',
        displayName: 'Français (Canada)'
    }, {
        code: 'ar',
        displayName: 'العربية',
        direction: LanguageDirection.rtl
    }],
    restartOnLanguageChange: true
});

// Get selected language code.
console.log(CloudLocalization.currentLanguage.code);

document.addEventListener('click', function (event) {
    const target = event.target as HTMLElement;
    if (target && target.id === 'expandButton') {
        let div: HTMLElement = document.querySelector('#newDiv');

        if (div === null) {
            div = document.createElement('div');
            div.id = 'newDiv';
            div.innerHTML = "Logo";

            const expandButton = document.getElementById('expandButton');
            if (expandButton && expandButton.parentNode) {
                expandButton.parentNode.insertBefore(div, expandButton.nextSibling);
            }

            CloudLocalization.translateElement(div);
        } else {
            div.remove();
        }
    }
});