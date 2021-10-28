const themeBtnLight = document.getElementById("light");
const themeBtnDark = document.getElementById("dark");

var themeColor = "dark"; // Default theme color

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
            html.style.cssText = `
            --main-color: #1895CE;
            --main-bg-color: #FFFFFF;
            --main-text-color: #00000;
            --secondary-text-color: #FFFFFF;
            --webkit-track-color: #1D749B
            `;
        }
        else {
            html.style.cssText = `
            --main-color: #8F5BFD;
            --main-bg-color: #0D1117;
            --main-text-color: #FFFFFF;
            --secondary-text-color: #0D1117;
            --webkit-track-color: #5828be;
            `;
        }
    }
}