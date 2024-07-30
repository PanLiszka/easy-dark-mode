let theme = localStorage.getItem("theme");
const themeToggleButton = document.querySelector("#change-theme-button");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.body.classList.add("dark");
}
