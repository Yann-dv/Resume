const themeBtnLight = document.getElementById("light");
const themeBtnDark = document.getElementById("dark");

var themeColor = "dark"; // Default theme color

window.onload = function() {
    setThemeColor("dark");
};

themeBtnLight.addEventListener("click", function (e) {
    var themeColor = "light";
    setThemeColor(themeColor);
});

themeBtnDark.addEventListener("click", function (e) {
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
            html.style.cssText = `--main-color: #1895CE;--main-bg-color: #FFFFFF;
            --main-text-color: #00000;--secondary-text-color: #FFFFFF;--webkit-track-color: #1D749B`;
        }
        else {
            html.style.cssText = "--main-color: #8F5BFD";
            html.style.cssText = "--main-bg-color: #0D1117";
            html.style.cssText = "--main-text-color: #FFFFFF";
            html.style.cssText = "--secondary-text-color: #0D1117";
            html.style.cssText = "--webkit-track-color: #5828be";
        }
    }
}