

const themeBtnLight = document.getElementById("light");
const themeBtnDark = document.getElementById("dark");
const flagVersion = document.getElementById("flag-version");
const flagLink = document.getElementsByClassName('flagLink')[0];
const showFrench = document.getElementById("french-v");
const linkedIn = document.getElementById("linkedInLink");
const gitHub = document.getElementById("gitHubLink");
const tradBar = document.getElementById('gt-nvframe');
const print_pdf = document.getElementById('print_pdf');
const age = document.getElementById('age');
let aged = false;

function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1971);
}

window.addEventListener("load", function () {
    if (!aged) {
        age.append(getAge(new Date(1988, 03, 23)) + " ans");
        aged = true;
    }
});

window.addEventListener("DOMContentLoaded", function () {
    print_pdf.style.background = "padding-box no-repeat center/ cover url('./images/print_red.png')";
    if (tradBar) {
        tradBar.style.cssText = "display: none;z-index: -1;width: 0;height: 0;";
        document.body.style.cssText = "margin-top: 0;";
        flagLink.setAttribute('href', 'https://yann-dv.github.io/Resume/');
        flagLink.setAttribute('title', 'Voir la version française');

        linkedIn.style.cssText = "title: See my Linkedin";
        linkedIn.setAttribute('href', 'https://fr.linkedin.com/in/yann-hagege-3a5b4112a');

        gitHub.style.cssText = "title: See my GitHub;";
        gitHub.setAttribute('href', 'https://github.com/Yann-dv');

        flagVersion.style.background = "padding-box no-repeat center/ cover url('./images/fr-flag.png')";

    }
    else {
        flagLink.setAttribute('href', "https://translate.google.com/translate?sl=fr&tl=en&u=https://yann-dv.github.io/Resume/");
        flagVersion.style.background = "padding-box no-repeat center/ cover url('./images/en-flag.png')";
    }
});

var themeColor = "light"; // Default theme color

themeBtnLight.addEventListener("click", function () {
    var themeColor = "light";
    setThemeColor(themeColor);
});

themeBtnDark.addEventListener("click", function () {
    var themeColor = "dark";
    setThemeColor(themeColor);
});

print_pdf.addEventListener("click", function () {
    var win = window.open('', '', 'top=0,width=552,height=477,toolbar=0,scrollbars=0,status =0');

    var content = "<html style='height: 96%;--main-color: #1895CE;--main-bg-color: #FFFFFF;--main-text-color: #00000;--subtext-color : #727272;--webkit-track-color: #1D749B'>";
    content += "<body onload=\"window.print(); window.close();\">";
    content += document.getElementById("to_print").innerHTML;
    content += "<style> .fullname {font-size:22px} .pitch {font-size: 16px; width: 90%; margin: 0} h2 {font-size: 14px} .jobdesc {width: 100%} .jobgoal {font-size: 20px} .left-side h3{font-size: 20px} .left-side h4 {font-size: 16px} .left-side p {font-size: 16px} .left-side .diploma-level {font-size: 10px} .skills_progressbar ul li, .lang ul li, .interest ul li { margin-left: -20px} .personal-infos > ul li {margin-top: 2px; margin-bottom: 1px} .interest > ul:nth-child(1) > li:nth-child(1) > h3:nth-child(1) {margin-bottom: .3rem} .skills, formations-list, experiences-list {font-size: 14px} .rigth-side {font-size: 10px} input[type='range'] {margin: 0; height: .7rem}.right-side h3 {font-size: 20px; margin-top: -30px} .right-side h4 {font-size: 16px; margin: .1rem} .socials i.fab:nth-child(n+1) {font-size: 3rem} .personal-infos > ul li i {font-size: 20px} .personal-infos > ul li {font-size: 16px; margin-left: -20px} .formations-list-item, .experiences-list-item {margin-top: -15px} .skills_progressbar li, .lang li, .interest li {margin-top : -5px} .right-side {height : 98%} .formations h3 {margin : 10px}";
    content += "</style>";
    content += "</body>";
    content += "</html>";
    win.document.write(content);
    win.document.close();
    //window.print();
});

function setThemeColor(themeColor) {
    var html = document.getElementsByTagName('html')[0];
    if (!themeColor) {
        return themeColor = "light"; //default
    }
    else if (themeColor) {
        if (themeColor === "light") {
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