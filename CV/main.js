// Toggle card content visibility
document.querySelectorAll('.card h2+i').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.parentElement.parentElement.classList.toggle('active');
    });
});