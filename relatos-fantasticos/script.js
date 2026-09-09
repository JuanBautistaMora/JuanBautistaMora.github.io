const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const p = max ? (h.scrollTop / max) * 100 : 0;
  progressBar.style.width = `${p}%`;
}, { passive: true });

const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target);
  }
}), { threshold: .08, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const storyDetails = [
  {
    title:'Una flor amarilla', author:'Julio Cortázar', number:'01', accent:'#e8b84b',
    characters:'El hombre que cuenta la historia, Luc, la madre y el tío de Luc, y el sobrino del narrador.',
    setting:'París: un bistró, un autobús de la línea 95 y la casa de Luc.',
    development:['El narrador escucha en un bistró a un hombre que afirma haber descubierto al único mortal.','Ese hombre vio en un autobús a Luc, un chico de unos trece años que se parecía muchísimo a él cuando era niño.','Empieza a investigar la vida de Luc y encuentra coincidencias en enfermedades, accidentes, personalidad y experiencias de infancia.','La muerte de Luc parece confirmar la idea de que las vidas se repiten, pero la visión de una flor amarilla vuelve a romper su seguridad y lo lleva a buscar a otro posible “avatar”.'],
    conflict:'La obsesión del protagonista por demostrar que la vida humana se repite y que existe una cadena de personas análogas.',
    fantastic:'La posibilidad de que una misma vida aparezca en distintas épocas como un “avatar” sucesivo.',
    conclusion:'El final no resuelve la teoría de manera objetiva. La flor amarilla hace que el protagonista vuelva a sentir con fuerza el problema de la mortalidad y salga a buscar a alguien que pueda continuar la cadena.',
    keywords:['Luc','línea 95','avatar','mortalidad','flor amarilla','secuencia','destino']
  },
  {
    title:'Ómnibus', author:'Julio Cortázar', number:'02', accent:'#d85d57',
    characters:'Clara, un pasajero joven sin flores, el conductor, el guarda y los pasajeros que llevan ramos.',
    setting:'Buenos Aires: Villa del Parque, Chorroarín, la zona de Chacarita y el trayecto hacia Retiro.',
    development:['Clara sale de trabajar y sube sola al ómnibus 168.','Descubre que prácticamente todos los pasajeros llevan flores y la observan de una forma cada vez más inquietante.','Un muchacho que tampoco lleva flores se convierte en su único aliado y ambos comprenden que están siendo señalados.','Los demás pasajeros bajan en Chacarita; Clara y el joven quedan solos, planean la salida y consiguen escapar cuando el 168 llega a Retiro.'],
    conflict:'La presión de un grupo que parece compartir un código que Clara y el muchacho desconocen.',
    fantastic:'Nunca queda explicado del todo por qué las flores son obligatorias para el grupo ni qué regla extraña gobierna el viaje.',
    conclusion:'Los dos sobreviven y salen juntos del ómnibus. Después compran ramos de pensamientos, como si necesitaran volver a integrarse en un orden comprensible.',
    keywords:['168','Clara','flores','Chacarita','Retiro','guarda','pasajero','miradas']
  },
  {
    title:'No se culpe a nadie', author:'Julio Cortázar', number:'03', accent:'#4f86c5',
    characters:'Un hombre sin nombre, su mujer y, como presencia simbólica, el pulóver azul y la mano que parece actuar por separado.',
    setting:'El departamento del protagonista, una tarde fría de otoño, frente a una ventana abierta.',
    development:['El hombre se prepara para salir a encontrarse con su mujer y decide ponerse un pulóver azul.','Al introducir una mano en la manga aparecen sensaciones extrañas: la mano parece dejar de ser completamente suya.','La prenda se convierte en una lucha física y mental; las mangas, el cuello y el cuerpo se confunden.','Cuando finalmente parece liberarse, aparecen cinco uñas negras suspendidas delante de sus ojos y el peligro vuelve a empezar.'],
    conflict:'Lo cotidiano se transforma en una pesadilla en la que el protagonista pierde el control de su propio cuerpo y de la situación.',
    fantastic:'La mano y el pulóver adquieren una autonomía inquietante y la percepción del protagonista deja de ser confiable.',
    conclusion:'No existe una explicación racional cerrada. El relato termina en el instante de máxima amenaza, con el hombre intentando escapar mientras la pesadilla continúa.',
    keywords:['pulóver azul','mano','manga','uña negra','ventana','cuerpo','ansiedad','doce pisos']
  },
  {
    title:'Las ruinas circulares', author:'Jorge Luis Borges', number:'04', accent:'#8c68c7',
    characters:'El mago, los alumnos soñados, el hijo que crea y el dios del Fuego.',
    setting:'Un templo circular en ruinas, rodeado por selva y asociado al antiguo dios del Fuego.',
    development:['Un hombre llega a las ruinas con un objetivo sobrenatural: soñar un hombre completo e imponerlo a la realidad.','Primero intenta crear muchos alumnos en sueños, pero el trabajo fracasa.','Después concentra su esfuerzo en un único muchacho y lo construye poco a poco, enseñándole los secretos del mundo.','El dios del Fuego da existencia al hijo y el mago lo envía al mundo sin contarle que es un ser soñado.','Cuando un incendio rodea las ruinas, el mago descubre que el fuego no lo quema y comprende que él también es una apariencia soñada por otro.'],
    conflict:'La pregunta sobre quién crea a quién: el mago crea a su hijo, pero finalmente descubre que él mismo puede ser una creación.',
    fantastic:'El sueño funciona como una herramienta capaz de crear seres reales y de poner en duda la realidad del propio soñador.',
    conclusion:'El círculo se cierra: creador y criatura intercambian sus lugares. La revelación final destruye la seguridad del protagonista sobre su propia existencia.',
    keywords:['mago','sueño','templo','Fuego','hijo','simulacro','apariencia','ruinas']
  },
  {
    title:'El milagro secreto', author:'Jorge Luis Borges', number:'05', accent:'#6574c9',
    characters:'Jaromir Hladík, Julius Rothe, los soldados y los personajes de su drama Los enemigos.',
    setting:'Praga, marzo de 1939, bajo la ocupación nazi; el cuartel donde Hladík espera su ejecución.',
    development:['Hladík es arrestado y condenado a muerte por las autoridades nazis.','Su miedo se concentra en la ejecución y, sobre todo, en no poder terminar su obra teatral Los enemigos.','Pide a Dios un año para concluirla.','En el instante previo a la descarga, el universo físico se detiene: los soldados, la lluvia y hasta una gota de agua quedan inmóviles.','Durante ese tiempo detenido, Hladík termina mentalmente su drama, encuentra la palabra que faltaba y el tiempo vuelve a avanzar.'],
    conflict:'La tensión entre una muerte inmediata y la necesidad del escritor de completar su obra.',
    fantastic:'Un instante del mundo exterior contiene para Hladík un año entero de pensamiento y creación.',
    conclusion:'Hladík termina su obra, pero el milagro no evita su muerte. Cuando el tiempo vuelve a avanzar, muere a las nueve y dos minutos.',
    keywords:['Hladík','Los enemigos','Julius Rothe','tiempo detenido','obra','Praga','gota de agua','9:02']
  },
  {
    title:'El Sur', author:'Jorge Luis Borges', number:'06', accent:'#4c765c',
    characters:'Juan Dahlmann, su abuelo Johannes, su antepasado Francisco Flores, el patrón, el viejo gaucho y el compadrito.',
    setting:'Buenos Aires, un tren hacia el Sur, una estancia y un almacén perdido en la llanura.',
    development:['Dahlmann, secretario de una biblioteca, sufre una herida que deriva en una grave infección y una internación.','Al recuperarse, viaja en tren hacia la estancia familiar del Sur y siente que vuelve a una identidad que siempre había admirado.','En un almacén, unos peones lo provocan y un compadrito lo desafía a pelear con cuchillo.','Un viejo gaucho le arroja una daga, como si el propio Sur decidiera el destino de Dahlmann.','Dahlmann acepta y sale a la llanura con el cuchillo en la mano.'],
    conflict:'La lucha entre la vida urbana y la identidad criolla idealizada por Dahlmann, junto con la duda sobre si el viaje final es real o soñado.',
    fantastic:'El relato deja abierta una ambigüedad fundamental: los hechos del Sur pueden entenderse como realidad, sueño o una forma imaginada de muerte.',
    conclusion:'Dahlmann se dirige al duelo sin miedo. Borges no explica definitivamente qué ocurre: importa que el personaje elige la muerte que siente como propia.',
    keywords:['Dahlmann','Sur','estancia','Las Mil y Una Noches','gaucho','daga','duelo','identidad']
  },
  {
    title:'La cara en la palma', author:'Silvina Ocampo', number:'07', accent:'#b65f9b',
    characters:'Una mujer narradora sin nombre, Aurelio, la pequeña cara de la palma, la señora Upinsky, la hermana Camila y la señora Okinamoto.',
    setting:'Buenos Aires: la casa de la narradora y su taller de flores artificiales en la calle Uspallata.',
    development:['La narradora escribe a Aurelio y le confiesa por qué suele usar un guante en la mano izquierda.','Explica que tiene desde nacimiento una pequeña cara en la palma que le habla, la acompaña y contradice sus pensamientos.','La voz interior interfiere en sus sentimientos, en su trabajo y en su relación con Aurelio.','La narradora presenta a esa voz como una presencia que nunca la deja estar completamente sola.','El relato avanza por confesiones y recuerdos hasta convertir la cara de la palma en el centro de su identidad y de su secreto.'],
    conflict:'La protagonista vive dividida entre sus deseos y la voz que la contradice constantemente.',
    fantastic:'Una parte del cuerpo adquiere rostro y voz propios, funcionando casi como otra persona.',
    conclusion:'El misterio no se explica de forma realista. Lo importante es la convivencia permanente entre la mujer y esa otra presencia dentro de su propia mano.',
    keywords:['Aurelio','mano izquierda','guante','voz enemiga','cara','flores artificiales','secreto']
  },
  {
    title:'Las vestiduras peligrosas', author:'Silvina Ocampo', number:'08', accent:'#d16a8d',
    characters:'Piluca o Régula Portinari, Artemia, la tía Lucy y las mujeres que aparecen en las noticias relacionadas con los vestidos.',
    setting:'Buenos Aires y el mundo de la costura; los hechos extraños aparecen también en noticias de otras ciudades.',
    development:['Piluca cuenta cómo empezó a trabajar para Artemia, una joven obsesionada con diseñar vestidos llamativos.','Cada vestido nuevo parece relacionarse con una agresión ocurrida en otro lugar a una mujer que lleva una prenda semejante.','Artemia interpreta esas coincidencias como una cuestión de copias y éxito, mientras Piluca empieza a tener miedo.','Piluca intenta protegerla con ropa más sobria y finalmente le confecciona pantalón y camisa de hombre.','Aun así, al día siguiente descubre por el patrullero y por el diario que Artemia ha sido atacada.'],
    conflict:'Los diseños de Artemia parecen repetir o atraer acontecimientos violentos que afectan a otras mujeres y, finalmente, a ella misma.',
    fantastic:'La ropa parece conectar hechos separados por distancia y producir una extraña repetición del destino.',
    conclusion:'El final confirma el patrón fatal: cambiar el tipo de vestido no logra romper la cadena. La historia queda marcada por la obsesión de Artemia y el poder extraño de sus prendas.',
    keywords:['Artemia','Piluca','Régula Portinari','vestidos','terciopelo','tul','copionas','costura']
  },
  {
    title:'Las casas de azúcar', author:'Silvina Ocampo', number:'09', accent:'#65a58e',
    characters:'Cristina, su marido narrador, Violeta, Bruto, Arsenia López, Daniel y la misteriosa persona disfrazada.',
    setting:'Buenos Aires: una casa de la calle Montes de Oca, la plaza Colombia, el puente de Constitución y otros lugares del barrio.',
    development:['Cristina es extremadamente supersticiosa y teme que la vida de antiguos habitantes influya en la de los nuevos.','Su marido encuentra una casa blanca en la calle Montes de Oca y le oculta que anteriormente ya había sido habitada.','Cristina empieza a cambiar: canta, adopta gustos ajenos, se interesa por lugares ligados a otra mujer y dice sentir que está heredando una vida.','El marido investiga a la antigua habitante, Violeta, y descubre su historia, sus relaciones y su profesora de canto, Arsenia López.','La identidad de Cristina y Violeta comienza a confundirse hasta que Cristina desaparece y la casa queda vacía.'],
    conflict:'La superstición de Cristina, la mentira del marido y la posible transferencia de identidad entre Cristina y Violeta.',
    fantastic:'La casa parece conservar y transmitir la vida de su antigua habitante, borrando lentamente la separación entre dos mujeres.',
    conclusion:'El narrador termina sin saber quién fue víctima de quién. La casa queda deshabitada y el relato mantiene la duda sobre si hubo una transformación sobrenatural o una confusión de identidades.',
    keywords:['Cristina','Violeta','Bruto','Daniel','Montes de Oca','casa','superstición','identidad']
  }
];

const buttons = document.querySelectorAll('.filter');
const stories = document.querySelectorAll('.story');
const authorCounts = { cortazar: 3, borges: 3, ocampo: 3 };

buttons.forEach(btn => {
  if (btn.dataset.filter === 'ocampo') btn.querySelector('span').textContent = authorCounts.ocampo;
  if (btn.dataset.filter === 'otros') btn.style.display = 'none';
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
    const filter = btn.dataset.filter;
    stories.forEach(card => {
      const show = filter === 'all' || card.dataset.author === filter;
      card.classList.toggle('hidden', !show);
      if (show) card.classList.add('visible');
    });
  });
});

// Hace que cada tarjeta sea interactiva sin modificar el HTML original.
stories.forEach((card, index) => {
  card.dataset.storyIndex = index;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Abrir detalle de ${storyDetails[index].title}`);
  card.addEventListener('click', e => {
    if (e.target.closest('a,button')) return;
    openStory(index);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openStory(index);
    }
  });
});

function openStory(index) {
  const d = storyDetails[index];
  const old = document.querySelector('.story-modal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'story-modal';
  modal.innerHTML = `
    <div class="story-modal-backdrop" data-close="true"></div>
    <article class="story-modal-panel" style="--modal-accent:${d.accent}">
      <button class="story-modal-close" aria-label="Cerrar">×</button>
      <div class="modal-topline">RELATO ${d.number} · ${d.author.toUpperCase()}</div>
      <h2>${d.title}</h2>
      <div class="modal-grid">
        <section class="modal-section modal-highlight">
          <span>PERSONAJES</span><p>${d.characters}</p>
        </section>
        <section class="modal-section modal-highlight">
          <span>ESPACIO</span><p>${d.setting}</p>
        </section>
      </div>
      <section class="modal-section">
        <span>¿CÓMO SE DESARROLLA?</span>
        <ol class="modal-steps">${d.development.map((x,i)=>`<li><b>${String(i+1).padStart(2,'0')}</b><p>${x}</p></li>`).join('')}</ol>
      </section>
      <div class="modal-two-col">
        <section class="modal-section"><span>CONFLICTO</span><p>${d.conflict}</p></section>
        <section class="modal-section"><span>CLAVE FANTÁSTICA</span><p>${d.fantastic}</p></section>
      </div>
      <section class="modal-section modal-conclusion">
        <span>CONCLUSIÓN</span><p>${d.conclusion}</p>
      </section>
      <section class="modal-section">
        <span>PALABRAS PUNTUALES DEL RELATO</span>
        <div class="modal-keywords">${d.keywords.map(k=>`<em>${k}</em>`).join('')}</div>
      </section>
    </article>`;

  document.body.appendChild(modal);
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.classList.add('open'));
  modal.querySelector('.story-modal-close').focus();
  modal.querySelector('.story-modal-close').addEventListener('click', closeStory);
  modal.querySelector('[data-close="true"]').addEventListener('click', closeStory);
  document.addEventListener('keydown', escClose, { once:true });
}

function closeStory() {
  const modal = document.querySelector('.story-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(() => modal.remove(), 220);
}

function escClose(e) {
  if (e.key === 'Escape') closeStory();
}

if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  document.querySelectorAll('.story-art').forEach(art => {
    art.addEventListener('pointermove', e => {
      const r = art.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      art.style.transform = `perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) scale(1.01)`;
    });
    art.addEventListener('pointerleave', () => art.style.transform = '');
  });
}

document.querySelectorAll('.story-art').forEach(art => {
  art.addEventListener('touchstart', () => {
    art.classList.add('touched');
    setTimeout(() => art.classList.remove('touched'), 450);
  }, { passive:true });
});
