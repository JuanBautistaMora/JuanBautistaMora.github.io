const progressBar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;progressBar.style.width=`${p}%`},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const buttons=document.querySelectorAll('.filter');
const stories=document.querySelectorAll('.story');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  stories.forEach(card=>{
    const show=filter==='all'||card.dataset.author===filter;
    card.classList.toggle('hidden',!show);
  });
}));

// Pequeño efecto de profundidad para las ilustraciones al mover el mouse.
document.querySelectorAll('.story-art').forEach(art=>{
  art.addEventListener('pointermove',e=>{
    const r=art.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    art.style.transform=`perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg)`;
  });
  art.addEventListener('pointerleave',()=>art.style.transform='');
});
