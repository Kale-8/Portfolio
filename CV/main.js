// Toggle card content visibility
document.querySelectorAll('.card h2+i').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.parentElement.parentElement.classList.toggle('active');
    });
});

document.querySelector('#html > div > i').addEventListener('click', () => {
    const iframe = document.querySelector('iframe');
    iframe.src = `${iframe.src}?autoplay=1`;
});

// Executes code when all dom is loaded
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Open menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');

    // Hide loader and show content after 5 seconds
    setTimeout(() => {
        loaderWrapper.style.opacity = '0';
        content.classList.add('visible');

        // Remove loader from DOM after fade out
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 1000);
    }, 5000);
});