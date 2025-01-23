document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const links = navbar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
