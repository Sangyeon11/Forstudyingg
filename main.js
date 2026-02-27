const generateBtn = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');
const themeToggleBtn = document.getElementById('theme-toggle');
const THEME_KEY = 'theme';

const updateThemeButtonText = (isDarkMode) => {
    themeToggleBtn.textContent = isDarkMode ? '화이트 모드' : '다크 모드';
};

const applyTheme = (theme) => {
    const isDarkMode = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateThemeButtonText(isDarkMode);
};

const initializeTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        applyTheme(savedTheme);
        return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
};

themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const nextTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
});

initializeTheme();

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    numbersDiv.innerHTML = '';
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersDiv.appendChild(numberDiv);
    });
});
