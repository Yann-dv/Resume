const themeBtnLight = document.getElementById("light");
const themeBtnDark = document.getElementById("dark");
const flagVersion = document.getElementById("flag-version");
const showFrench = document.getElementById("french-v");
const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
var enTranslate = false;

window.addEventListener("load", function() {
    if(htmlLang === "fr" || htmlLang === "FR" || htmlLang === "fr-FR") {
        flagVersion.style.backgroundImage = "url('./images/en-flag.png')";
    }
    else if(htmlLang === "en" || htmlLang === "EN" || htmlLang === "en-EN"){
        flagVersion.style.backgroundImage = "url('./images/fr-flag.png')";
    }
});

flagVersion.addEventListener("click", function () {
    if(enTranslate === false || enTranslate === null) {
        window.location = ('https://yann--dv-github-io.translate.goog/Resume/?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=fr&_x_tr_pto=nui');
        enTranslate = true;
    }
    else {
        window.location = ('https://yann-dv.github.io/Resume/');
        enTranslate = false;
    }
});

var themeColor = "dark"; // Default theme color

themeBtnLight.addEventListener("click", function () {
    var themeColor = "light";
    setThemeColor(themeColor);
});

themeBtnDark.addEventListener("click", function () {
    var themeColor = "dark";
    setThemeColor(themeColor);
});


function setThemeColor(themeColor) {
    var html = document.getElementsByTagName('html')[0];
    if(!themeColor) {
        return theme = "dark"; //default
    }
    else if(themeColor) {
        if(themeColor === "light") {
            html.style.cssText = `
            --main-color: #1895CE;
            --main-bg-color: #FFFFFF;
            --main-text-color: #00000;
            --subtext-color : #727272;
            --secondary-text-color: #FFFFFF;
            --webkit-track-color: #1D749B
            `;
        }
        else {
            html.style.cssText = `
            --main-color: #7451EB;
            --main-bg-color: #0D1117;
            --main-text-color: #FFFFFF;
            --subtext-color : #e1c6f6;
            --secondary-text-color: #0D1117;
            --webkit-track-color: #380b99;
            `;
        }
    }
}