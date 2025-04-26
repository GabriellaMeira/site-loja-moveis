// scroll.js
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const menuToggle = document.getElementById('menu-toggle');
  const menuLateral = document.querySelector('.menu-lateral');

  menuToggle.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');
  });

