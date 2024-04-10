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

function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1969);
}

window.addEventListener("load", function () {
            age.prepend(getAge(new Date(1989, 3, 23)));
});

window.addEventListener("click", function (e) {
    var targetType = e.target.tagName.toLowerCase();
    var avatar = document.getElementById("avatar");
    if(e.target === avatar) {
        if (avatar.src.includes("avatarmanga.jpg")) {
            avatar.style.animation = "flush .5s linear"
            this.setTimeout(function () {
                avatar.src = "./images/avatar-min.jpg";
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


var themeColor = "light"; // default
var getOperatingSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
setThemeColor(getOperatingSystemTheme);

toggleThemeBtn.addEventListener("click", function () {
    if(themeColor === "light") {
        themeColor = "dark";
        setThemeColor(themeColor);
    }
    else
    {
        themeColor = "light";
        setThemeColor(themeColor);
    }
});

print_pdf.addEventListener("click", function () {
        window.print();
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
            toggleThemeBtn.style.cssText = "color: #000000; background-color: #FFFFFF";
            toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
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
            toggleThemeBtn.style.cssText = "color: #FFFFFF; background-color: #000000";
            toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }
}