// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('active'));
}, { threshold: 0.15 });
reveals.forEach(r => observer.observe(r));

// Nav highlight + back to top
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  topBtn.style.display = scrollY > 400 ? 'block' : 'none';
});

// Loader text cycle (no overlap)
const loader = document.getElementById('loader');
const texts = loader.querySelectorAll('.welcome-text');
let index = 0;

texts[index].classList.add('show');

const interval = setInterval(() => {
  texts[index].classList.remove('show');
  index++;
  if (index < texts.length) {
    texts[index].classList.add('show');
  } else {
    clearInterval(interval);
    setTimeout(() => loader.classList.add('fade'), 400);
  }
}, 400);
