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
