
// -------- icon navbar ------- 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

// ------- scroll section active------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        let link = document.querySelector(`header nav a[href*="${id}"]`);
        if (link) {
          link.classList.add('active');
        }
      });
    }
  });

  // -------------sticky navbar------
  let header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
  }

  //-----------remove toggle icon navbar------------
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// --------------scroll reveal----------
const scrollReveal = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal('.Home-content,.heading', { origin: 'top' });
scrollReveal.reveal('.Home-img,.Services-container, contact form', { origin: 'button' });
scrollReveal.reveal('.Home-Contact h1,.About-img', { origin: 'left' });
scrollReveal.reveal('.Home-Contact p,.About-content', { origin: 'right' });

// ---------typed js-----
const typed = new Typed('.multiple-test', {
  strings: ['Frontend Developer', 'Web Designer'],
  backSpeed: 70,
  backDelay: 70,
  loop: true,
});