document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentYearElement = document.getElementById('currentYear');

    // Set the current year
    currentYearElement.textContent = new Date().getFullYear();

    // Check local storage for theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    // Toggle dark mode
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
