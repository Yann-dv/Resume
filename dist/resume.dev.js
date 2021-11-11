"use strict";

var themeBtnLight = document.getElementById("light");
var themeBtnDark = document.getElementById("dark");
var flagVersion = document.getElementById("flag-version");
var flagLink = document.getElementsByClassName('flagLink')[0];
var showFrench = document.getElementById("french-v");
var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
window.addEventListener("load", function () {
  if (htmlLang === "fr" || htmlLang === "FR" || htmlLang === "fr-FR") {
    flagVersion.style.background = "padding-box no-repeat center/ cover url('./images/en-flag.png')";
  } else {
    flagLink.setAttribute('href', 'https://yann-dv.github.io/Resume/');
    flagVersion.style.background = "padding-box no-repeat center/ cover url('./images/fr-flag.png')";
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

  if (!themeColor) {
    return themeColor = "dark"; //default
  } else if (themeColor) {
    if (themeColor === "light") {
      html.style.cssText = "\n            --main-color: #1895CE;\n            --main-bg-color: #FFFFFF;\n            --main-text-color: #00000;\n            --subtext-color : #727272;\n            --secondary-text-color: #FFFFFF;\n            --webkit-track-color: #1D749B\n            ";
    } else {
      html.style.cssText = "\n            --main-color: #7451EB;\n            --main-bg-color: #0D1117;\n            --main-text-color: #FFFFFF;\n            --subtext-color : #e1c6f6;\n            --secondary-text-color: #0D1117;\n            --webkit-track-color: #380b99;\n            ";
    }
  }
}