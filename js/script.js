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

/* =========================
   BUSCAMINAS DE FONDO
   ========================= */
(function initMinesweeper(){
  const canvas = document.getElementById('minesweeper-bg');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const CELL = 34;
  const MINE_RATE = 0.14;
  let cols = 0, rows = 0, board = [];
  let gameOver = false, won = false, firstMove = true;
  let resizeTimer;

  const colors = ['','#9aa0a6','#b5b9bd','#d2d5d8','#f0f0f0','#ff9b9b','#ff7777','#ff5555','#ff3333'];

  function resizeCanvas(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    cols = Math.ceil(width / CELL);
    rows = Math.ceil(height / CELL);
    newGame();
  }

  function visualObstacles(){
    const selectors = 'h1,h3,p,a,img,.kicker,.eyebrow,.work-tags,.tag-cloud,.contact-title,.photo-slot,footer span';
    return [...document.querySelectorAll(selectors)].filter(el => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }).map(el => el.getBoundingClientRect());
  }

  function cellBlocked(x,y,obstacles){
    const cx = x * CELL + CELL / 2;
    const cy = y * CELL + CELL / 2 - window.scrollY;
    return obstacles.some(r => cx >= r.left - 5 && cx <= r.right + 5 && cy >= r.top - 5 && cy <= r.bottom + 5);
  }

  function newGame(){
    board = Array.from({length:rows},(_,y)=>Array.from({length:cols},(_,x)=>({x,y,mine:false,revealed:false,flag:false,count:0})));
    const obstacles = visualObstacles();
    const safe = [];
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++) if(!cellBlocked(x,y,obstacles)) safe.push(board[y][x]);
    const mineCount = Math.max(8, Math.floor(safe.length * MINE_RATE));
    for(let i=safe.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [safe[i],safe[j]]=[safe[j],safe[i]]; }
    safe.slice(0,mineCount).forEach(c=>c.mine=true);
    calculateCounts();
    gameOver = false; won = false; firstMove = true;
    draw();
  }

  function calculateCounts(){
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const c=board[y][x]; if(c.mine) continue;
      let n=0;
      for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++){
        if(!dx&&!dy) continue;
        const nx=x+dx, ny=y+dy;
        if(nx>=0&&nx<cols&&ny>=0&&ny<rows&&board[ny][nx].mine)n++;
      }
      c.count=n;
    }
  }

  function safeCellAt(clientX, clientY){
    const x=Math.floor(clientX/CELL), y=Math.floor((clientY+window.scrollY)/CELL);
    if(x<0||x>=cols||y<0||y>=rows) return null;
    return board[y][x];
  }

  function reveal(cell){
    if(!cell || cell.revealed || cell.flag || gameOver) return;
    cell.revealed=true;
    if(cell.mine){
      gameOver=true;
      board.flat().forEach(c=>{if(c.mine)c.revealed=true;});
      draw();
      setTimeout(()=>{ if(confirm('Pisaste una mina. ¿Querés intentarlo de nuevo?')) newGame(); },80);
      return;
    }
    if(cell.count===0){
      for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++){
        if(!dx&&!dy)continue;
        const nx=cell.x+dx,ny=cell.y+dy;
        if(nx>=0&&nx<cols&&ny>=0&&ny<rows) reveal(board[ny][nx]);
      }
    }
    checkWin();
  }

  function checkWin(){
    const playable=board.flat().filter(c=>!c.mine);
    if(playable.length && playable.every(c=>c.revealed)){
      won=true; gameOver=true; draw();
      document.getElementById('minesweeper-win').classList.add('show');
    }
  }

  function toggleFlag(cell){
    if(!cell||cell.revealed||gameOver)return;
    cell.flag=!cell.flag;
    draw();
  }

  function draw(){
    const w=canvas.clientWidth,h=canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    ctx.font='bold 13px JetBrains Mono, monospace';
    ctx.textAlign='center';ctx.textBaseline='middle';
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const c=board[y][x], px=x*CELL, py=y*CELL;
      if(c.revealed){
        ctx.fillStyle='rgba(255,255,255,.055)';ctx.fillRect(px+1,py+1,CELL-2,CELL-2);
        if(c.mine){ctx.fillStyle='rgba(245,245,240,.75)';ctx.beginPath();ctx.arc(px+CELL/2,py+CELL/2,6,0,Math.PI*2);ctx.fill();}
        else if(c.count){ctx.fillStyle=colors[c.count]||'#fff';ctx.fillText(c.count,px+CELL/2,py+CELL/2+1);}
      }else{
        ctx.strokeStyle='rgba(255,255,255,.075)';ctx.strokeRect(px+.5,py+.5,CELL-1,CELL-1);
        if(c.flag){ctx.fillStyle='rgba(245,245,240,.65)';ctx.font='14px Arial';ctx.fillText('⚑',px+CELL/2,py+CELL/2+1);ctx.font='bold 13px JetBrains Mono, monospace';}
        if(gameOver && c.mine && !won){ctx.fillStyle='rgba(255,90,90,.5)';ctx.fillRect(px+5,py+5,CELL-10,CELL-10);}
      }
    }
  }

  document.addEventListener('click',e=>{
    if(e.target.closest('#minesweeper-win') || e.target.closest('a,button,input,textarea,select,img,h1,h3,p,.kicker,.eyebrow,.work-tags,.tag-cloud,.contact-title,.photo-slot,footer')) return;
    const cell=safeCellAt(e.clientX,e.clientY);
    if(cell) reveal(cell);
  });

  document.addEventListener('contextmenu',e=>{
    if(e.target===canvas || (!e.target.closest('a,button,img,h1,h3,p,.kicker,.eyebrow,.work-tags,.tag-cloud,.contact-title,.photo-slot,footer'))){
      e.preventDefault();
      const cell=safeCellAt(e.clientX,e.clientY); toggleFlag(cell);
    }
  });

  document.getElementById('close-secret').addEventListener('click',()=>document.getElementById('minesweeper-win').classList.remove('show'));
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resizeCanvas,250);});
  window.addEventListener('load',()=>setTimeout(resizeCanvas,100));
  resizeCanvas();
})();
