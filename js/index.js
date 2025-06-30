// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Menu lateral
const menuToggle = document.getElementById('menu-toggle');
const menuLateral = document.querySelector('.menu-lateral');

if (menuToggle && menuLateral) {
  menuToggle.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
  });
}

// Filtro de produtos
const botoesFiltro = document.querySelectorAll('.filtro-btn')
