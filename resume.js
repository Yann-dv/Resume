const themeBtnLight = document.getElementById("light");
const themeBtnDark = document.getElementById("dark");
const flagVersion = document.getElementById("flag-version");
const flagLink = document.getElementsByClassName('flagLink')[0];
const showFrench = document.getElementById("french-v");
const htmlTranslated= document.getElementsByTagName('html')[0].getAttribute('class');
const tradBar = document.getElementById('gt-nvframe');

window.addEventListener("DOMContentLoaded", function() {
    if(tradBar) {
        tradBar.style.cssText = "display: none;z-index: -1;width: 0;height: 0 ";
        document.body.style.cssText = "margin-top: 0";
        flagLink.setAttribute('href', 'https://yann-dv.github.io/Resume/');
        flagVersion.style.background= "padding-box no-repeat center/ cover url('./images/fr-flag.png')";
    }
    else {
        flagLink.setAttribute('href', "https://translate.google.com/translate?sl=fr&tl=en&u=https://yann-dv.github.io/Resume/");
        flagVersion.style.background = "padding-box no-repeat center/ cover url('./images/en-flag.png')";
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
        return themeColor = "dark"; //default
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