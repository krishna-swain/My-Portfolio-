console.log("JS loaded"); 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    if (sections && sections.length > 0 && navlinks.length > 0) {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                });
                
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
    
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

if (typeof Typed !== 'undefined' && document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['Web Designer', 'Frontend Developer', 'YouTuber', 'Blogger'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm"); 

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            alert("Message Sent Successfully!"); 
            form.reset(); 
        });
    }
});

function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");
    
    if (dots && moreText && btnText) {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
        }
    } else {
        
        console.log("Read More elements not found on this page.");
    }
}


function toggleServiceReadMore(num) {
    var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("more" + num);
    var btnText = document.getElementById("btn" + num);

    
    if (dots && moreText && btnText) {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
        } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
        }
    } else {
        console.log("Service Read More elements not found on this page.");
    }
}
