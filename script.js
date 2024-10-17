// script.js

document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll("h1");
    titles.forEach((title) => {
        typeWriter(title);
    });
});

function typeWriter(element) {
    const textArray = element.textContent.split('');
    element.textContent = '';
    textArray.forEach((char, i) => {
        setTimeout(() => {
            element.textContent += char;
        }, 100 * i);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.textContent = currentTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
    });
});