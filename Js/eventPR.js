let btn = document.querySelector("#themeButton"); 
let currentTheme = "light";

btn.addEventListener("click", () => {
    if (currentTheme === "light") {
        currentTheme = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currentTheme = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});
