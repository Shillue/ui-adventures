const themeButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

function changeTheme(theme){
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme){
    if(theme === "dark"){
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        themeButton.setAttribute(
            "title",
            "Ativar tema claro",
        );

    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        themeButton.setAttribute(
        "title",
        "Ativar tema escuro"
        );
    }
}

function loadTheme(){
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme){
        changeTheme(savedTheme);
    }else{
        changeTheme("dark");
    }
}

function toggleTheme(){
    const currentTheme = document.body.dataset.theme;

    if(currentTheme === "dark"){
        changeTheme("light");
    } else {
        changeTheme("dark");
    }
}

themeButton.addEventListener("click", toggleTheme);

loadTheme();