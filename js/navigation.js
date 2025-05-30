const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
        } else {
            navbar.classList.add('transparent');
            navbar.classList.remove('scrolled');
        }
    });

document.querySelector(".read-more").addEventListener("click", () => {
    document.querySelector(".about-main-content").scrollIntoView({ behavior: "smooth" });
});

