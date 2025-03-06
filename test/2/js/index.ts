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
    }]
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
    } else {
        div.remove();
    }
});