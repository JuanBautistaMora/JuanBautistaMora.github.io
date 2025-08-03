    document.querySelectorAll('.accordion-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.accordion-item');
        item.classList.toggle('open');
      });
    });
    
    const header = document.getElementById('main-header');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
  
    window.addEventListener('scroll', () => {
      header.classList.toggle('visible', window.scrollY > 50);
    });
  
    function toggleMenu() {
      mobileMenu.classList.toggle('active');
    }
  
    hamburger.addEventListener('click', toggleMenu);
  
    // NUEVO: cerrar menú cuando se pasa de ancho de pantalla móvil
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
      }
    });

