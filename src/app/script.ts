let menuIcon = document.querySelector('#menu-icon') as HTMLElement;
let navbar = document.querySelector('.navbar') as HTMLElement;
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Close navbar if clicked outside
window.addEventListener('click', (event) => {
    if (!navbar.contains(event.target as Node) && !menuIcon.contains(event.target as Node)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Scroll and highlight active link
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height && id) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*=${id}]`) as HTMLElement;
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Toggle navbar on menu icon click
menuIcon?.addEventListener('click', (event) => {
    event.stopPropagation();  // Prevent the click from propagating to the window
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
});
