// Toggle card content visibility
document.querySelectorAll('.card h2+i').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.parentElement.parentElement.classList.toggle('active');
    });
});
// Implement smooth scrolling for navigation
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});