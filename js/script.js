const glow = document.getElementById('glow');
const grid = document.getElementById('gridlines');
const isFinePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setPos(x, y){
  glow.style.setProperty('--x', x + '%');
  glow.style.setProperty('--y', y + '%');
  grid.style.setProperty('--x', x + '%');
  grid.style.setProperty('--y', y + '%');
}

if(isFinePointer){
  // desktop: el efecto sigue al mouse
  window.addEventListener('mousemove', (e) => {
    setPos((e.clientX / window.innerWidth) * 100, (e.clientY / window.innerHeight) * 100);
  });
} else if(!reduceMotion){
  // mobile/touch: sin mouse, así que el efecto se mueve solo en un recorrido continuo
  let t = 0;
  function ambientLoop(){
    t += 0.006;
    const x = 50 + Math.sin(t) * 38;
    const y = 50 + Math.cos(t * 0.7) * 30;
    setPos(x, y);
    requestAnimationFrame(ambientLoop);
  }
  ambientLoop();
}

// animaciones al hacer scroll (más movimiento en toda la página, clave en mobile)
if(!reduceMotion && 'IntersectionObserver' in window){
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -8% 0px'});
  revealEls.forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

document.getElementById('year').textContent = new Date().getFullYear();
