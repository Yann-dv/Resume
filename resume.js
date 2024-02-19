const toggleThemeBtn = document.getElementById("theme-toggle");
const flagLink = document.getElementsByClassName('flagLink')[0];
const showFrench = document.getElementById("french-v");
const linkedIn = document.getElementById("linkedInLink");
const gitHub = document.getElementById("gitHubLink");
const portfolio = document.getElementById("portfolioLink");
const tradBar = document.getElementById('gt-nvframe');
const print_pdf = document.getElementById('print_pdf');
const age = document.getElementById('age');
var currentLanguage = document.currentScript.getAttribute('data-current-language') || 'en';
let aged = false;

function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1971);
}

window.addEventListener("load", function () {
    if (!aged) {
        if(currentLanguage === "fr") {
            age.append(getAge(new Date(1988, 3, 23)) + " ans");
            aged = true;
        }
        else {
            age.append(getAge(new Date(1988, 3, 23)) + " years old");
            aged = true;
        }
    }
});

window.addEventListener("click", function (e) {
    var targetType = e.target.tagName.toLowerCase();
    var avatar = document.getElementById("avatar");
    if(e.target === avatar) {
        if (avatar.src.includes("avatarmanga.jpg")) {
            avatar.style.animation = "flush .5s linear"
            this.setTimeout(function () {
                avatar.src = "./images/avatar.jpg";
            }, 500);
        }
        else {
            avatar.style.animation = "flush .5s linear"
            this.setTimeout(function () {
                avatar.src = "./images/avatarmanga.jpg";
            }, 500);
        }
        this.setTimeout(function () {
            avatar.style.animation = "none"
        }, 510);
    }
    else {
        if (targetType === "img") {
            e.target.style.animation = "rotation .45s linear"
        }
        
        this.setTimeout(function () {
        e.target.style.animation = "none"}, 850);
    }
});

var themeColor = "light"; // Default theme color

toggleThemeBtn.addEventListener("click", function () {
    if(themeColor === "light") {
        themeColor = "dark";
        setThemeColor(themeColor);
        toggleThemeBtn.style.cssText = "color: #FFFFFF; background-color: #000000";
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else
    {
        themeColor = "light";
        setThemeColor(themeColor);
        toggleThemeBtn.style.cssText = "color: #000000; background-color: #FFFFFF";
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

print_pdf.addEventListener("click", function () {
    var win = window.open('', '', 'top=0,width=552,height=477,toolbar=0,scrollbars=0,status =0, margin: 0, padding: 0');
    var content = "<html style='height: 96%;--main-color: #1895CE;--main-bg-color: #FFFFFF;--main-text-color: #00000;--subtext-color : #727272;--webkit-track-color: #1D749B'>";
    content += "<body onload=\"window.print(); window.close();\">";
    content += document.getElementById("to_print").innerHTML;

    content += `
    <style> .fullname {font-size:22px} .pitch {font-size: 16px; width: 90%; margin-bottom: 3rem; margin-top: 2rem} 
    h2 {font-size: 14px} .jobdesc {width: 100%} .jobgoal {font-size: 20px} 
    .left-side h3{font-size: 20px; margin-bottom: .5rem} .left-side h4 {font-size: 18px} .left-side p {font-size: 14px} 
    .left-side .diploma-level {font-size: 10px} .skills_progressbar ul li, .lang ul li, .hobbies ul li { margin-left: -20px} 
    .lang h3, .hobbies h3 {margin-bottom: .2rem}
    .lang > ul:nth-child(1) > li:nth-child(3) > input:nth-child(1) {display: none;}
    #lang > ul:nth-child(1) > li:nth-child(4) {display: none;}
    .lang > ul:nth-child(1) > li:nth-child(5) {display: none;}
    .personal-infos > ul li {margin-top: 2px; margin-bottom: 1px} 
    #hobbies {display: none}
    .skills, formations-list, experiences-list {font-size: 12px} .rigth-side {font-size: 10px}
    [type='range'] {margin: 0; height: .7rem} .right-side-subtitle {margin-bottom: 0.5rem, margin-top: 0.2rem} h3 {font-size: 20px; margin-top: -30px} 
    .right-side h4 {font-size: 16px; margin: .1rem} .socials i.fab:nth-child(n+1), .socials i.fa-solid:nth-child(1n+1) {font-size: 3rem} 
    .right-side-header li {font-size: 16px} .right-side-header li i {font-size: 20px}
    .personal-infos > ul li i {font-size: 20px} .personal-infos > ul li {font-size: 16px; margin-left: -20px} 
    .formations-list-item, .experiences-list-item {margin-top: -15px} .skills_progressbar li {margin-bottom: 0} .skills_progressbar li, .lang li, 
    .hobbies li {margin-top : -5px} .right-side {height : 98%} .level-bar {height: 1.8vh; border-radius: 4px; font-size: 14px;} .formations h3 {margin : 10px}
    .skills_progressbar img, .lang img, .hobbies img{width: 20px; height: 20px; margin-right: 5px}
    .experiences {margin-top: 40px}
    .theme-button {display: none}
    `;
    content += "</style>";
    content += "</body>";
    content += "</html>";
    win.document.write(content);
    win.document.close();
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
            --secondary-bg-color : #000000;
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
            --secondary-bg-color : #FFFFFF;
            --main-text-color: #FFFFFF;
            --subtext-color : #e1c6f6;
            --secondary-text-color: #0D1117;
            --webkit-track-color: #380b99;
            `;
        }
    }
}