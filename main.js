// Мобільне меню
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Закривати меню після кліку на посилання
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Поточний рік у підвалі
document.getElementById('year').textContent = new Date().getFullYear();