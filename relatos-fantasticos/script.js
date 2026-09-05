const progressBar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;const p=max?h.scrollTop/max*100:0;progressBar.style.width=`${p}%`},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const buttons=document.querySelectorAll('.filter');
const stories=document.querySelectorAll('.story');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  const filter=btn.dataset.filter;
  stories.forEach(card=>{
    const show=filter==='all'||card.dataset.author===filter;
    card.classList.toggle('hidden',!show);
    if(show){card.classList.add('visible');}
  });
}));

// Profundidad solo en dispositivos con puntero fino: evita efectos molestos en celular.
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.querySelectorAll('.story-art').forEach(art=>{
    art.addEventListener('pointermove',e=>{
      const r=art.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      art.style.transform=`perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) scale(1.01)`;
    });
    art.addEventListener('pointerleave',()=>art.style.transform='');
  });
}

// En celular, un toque breve sobre la ilustración crea una respuesta visual.
document.querySelectorAll('.story-art').forEach(art=>{
  art.addEventListener('touchstart',()=>{
    art.classList.add('touched');
    setTimeout(()=>art.classList.remove('touched'),450);
  },{passive:true});
});
