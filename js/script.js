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
  window.addEventListener('mousemove', (e) => {
    setPos((e.clientX / window.innerWidth) * 100, (e.clientY / window.innerHeight) * 100);
  });
} else if(!reduceMotion){
  let t = 0;
  function ambientLoop(){
    t += 0.006;
    setPos(50 + Math.sin(t) * 38, 50 + Math.cos(t * 0.7) * 30);
    requestAnimationFrame(ambientLoop);
  }
  ambientLoop();
}

if(!reduceMotion && 'IntersectionObserver' in window){
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('in-view'); io.unobserve(entry.target); }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -8% 0px'});
  revealEls.forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

// TargetCursor inspirado en React Bits, adaptado al sitio estático.
(function initTargetCursor(){
  if(!window.gsap || !isFinePointer) return;
  const gsap = window.gsap;
  const targets = '.cursor-target';
  const cursor = document.createElement('div');
  cursor.className = 'target-cursor-wrapper';
  cursor.innerHTML = '<div class="target-cursor-dot"></div><div class="target-cursor-corner corner-tl"></div><div class="target-cursor-corner corner-tr"></div><div class="target-cursor-corner corner-br"></div><div class="target-cursor-corner corner-bl"></div>';
  document.body.appendChild(cursor);
  document.body.classList.add('target-cursor-active');

  const dot = cursor.querySelector('.target-cursor-dot');
  const corners = [...cursor.querySelectorAll('.target-cursor-corner')];
  let active = null;
  let spin = gsap.timeline({repeat:-1}).to(cursor,{rotation:'+=360',duration:1.8,ease:'none'});

  gsap.set(cursor,{xPercent:-50,yPercent:-50,x:innerWidth/2,y:innerHeight/2});
  window.addEventListener('mousemove',e=>gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.1,ease:'power3.out'}));

  function reset(){
    const s=12,p=[[-18,-18],[6,-18],[6,6],[-18,6]];
    corners.forEach((c,i)=>gsap.to(c,{x:p[i][0],y:p[i][1],duration:.3,ease:'power3.out'}));
  }
  function leave(){
    if(!active)return;
    active=null;
    gsap.to(corners,{borderColor:'#fff',duration:.15});
    gsap.to(dot,{backgroundColor:'#fff',duration:.15});
    reset();
    spin.kill();
    const r=gsap.getProperty(cursor,'rotation')%360;
    gsap.set(cursor,{rotation:r});
    spin=gsap.timeline({repeat:-1}).to(cursor,{rotation:'+=360',duration:1.8,ease:'none'});
  }
  window.addEventListener('mouseover',e=>{
    const target=e.target.closest && e.target.closest(targets);
    if(!target || active===target)return;
    if(active)leave();
    active=target;
    spin.pause();
    gsap.set(cursor,{rotation:0});
    gsap.to(corners,{borderColor:'#fff',duration:.15});
    const r=target.getBoundingClientRect();
    const cx=gsap.getProperty(cursor,'x'),cy=gsap.getProperty(cursor,'y');
    const s=12,b=3;
    const p=[{x:r.left-b,y:r.top-b},{x:r.right+b-s,y:r.top-b},{x:r.right+b-s,y:r.bottom+b-s},{x:r.left-b,y:r.bottom+b-s}];
    corners.forEach((c,i)=>gsap.to(c,{x:p[i].x-cx,y:p[i].y-cy,duration:.15,ease:'power2.out'}));
  });
  window.addEventListener('mouseout',e=>{if(active && !e.relatedTarget?.closest?.(targets))leave();});
  window.addEventListener('mousedown',()=>{gsap.to(dot,{scale:.7,duration:.2});gsap.to(cursor,{scale:.9,duration:.15});});
  window.addEventListener('mouseup',()=>{gsap.to(dot,{scale:1,duration:.2});gsap.to(cursor,{scale:1,duration:.15});});
})();

document.getElementById('year').textContent = new Date().getFullYear();
