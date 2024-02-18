var currentLanguage = document.currentScript.getAttribute('data-current-language') || 'en';
var translateButton = document.getElementById('translate-button');

translateButton.addEventListener('click', toggleLanguage);


function toggleLanguage() {
    currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
    translatePage(); 

    if (translateButton) {
        translateButton.style.backgroundImage = (currentLanguage === 'fr') ? 'url("./images/en-flag.png")' : 'url("./images/fr-flag.png")';
    }
}

function translatePage() {
    var elements = document.querySelectorAll('[data-translate]');

    elements.forEach(function (element) {
        var translationKey = element.getAttribute('data-translate');

        if (translations[translationKey] && translations[translationKey][currentLanguage]) {
                var translatedText = translations[translationKey][currentLanguage];
                
                if (translatedText) {
                    element.innerHTML = translatedText;
                }
                else {
                        console.log('No translation found for key: ' + translationKey);
                }
            }
    });
}

        var translations = {
                'header.title': {
                    'fr': 'Ingénierie logiciels et applicatiions', 
                    'en': 'Software & Application Engineering'
                },
                "header.subtitle": {
                    "fr": "Développement de logiciels et applications web et mobiles", 
                    "en": "Web and Mobile Software Development"
                },
            };

translatePage();