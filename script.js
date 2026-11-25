const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById('formMessage');
  message.textContent = 'Thank you! Your message has been received in this demo.';
  form.reset();
});
