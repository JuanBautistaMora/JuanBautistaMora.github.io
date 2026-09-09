const progressBar = document.getElementById('progressBar');
const storyList = document.getElementById('storyList');
const modal = document.getElementById('storyModal');
const modalArt = document.getElementById('modalArt');
const modalMeta = document.getElementById('modalMeta');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalCharacters = document.getElementById('modalCharacters');
const modalDevelopment = document.getElementById('modalDevelopment');
const modalConflict = document.getElementById('modalConflict');
const modalFantastic = document.getElementById('modalFantastic');
const modalQuotes = document.getElementById('modalQuotes');
const modalConclusion = document.getElementById('modalConclusion');

window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progressBar.style.width = `${max ? (h.scrollTop / max) * 100 : 0}%`;
}, { passive: true });

const stories = [
  {
    id:'una-flor-amarilla', number:'01', author:'Julio Cortázar', authorKey:'cortazar',
    title:'Una flor amarilla', art:'flower-art',
    summary:'Un hombre cree descubrir en Luc, un chico de trece años, la repetición de su propia vida. La idea de la inmortalidad se vuelve una obsesión hasta que una flor le hace comprender el valor de la mortalidad.',
    characters:'El narrador, Luc, la madre de Luc, el tío de Luc y el sobrino del narrador. Luc es el muchacho que se parece físicamente y en su forma de ser al protagonista cuando era joven.',
    development:[
      'El protagonista conoce en un autobús de la línea 95 a Luc y nota que se parece muchísimo a él.',
      'Busca conocerlo, entra en su familia y empieza a acompañarlo. Las coincidencias entre ambos parecen confirmar su teoría.',
      'Luc enferma y muere. El hombre interpreta la muerte como la posibilidad de que él sea el último de la cadena.',
      'Durante un tiempo siente felicidad por saberse mortal; después, una flor amarilla despierta en él el miedo a la nada y vuelve a buscar a alguien que pueda continuar la repetición.'
    ],
    conflict:'El conflicto central es la obsesión del protagonista con descubrir si las vidas humanas se repiten y qué significa ser mortal.',
    fantastic:'La posibilidad de que una misma vida reaparezca en distintas personas, como una cadena de repeticiones que no puede probarse racionalmente.',
    quotes:['“Parece una broma, pero somos inmortales.”','“Una flor amarilla cualquiera.”','“La nada era eso, que no hubiera nunca más una flor.”'],
    conclusion:'La flor cambia la idea que tenía sobre la muerte: ser mortal significa que la vida es limitada y, justamente por eso, tiene un valor irrepetible.'
  },
  {
    id:'omnibus', number:'02', author:'Julio Cortázar', authorKey:'cortazar', title:'Ómnibus', art:'bus-art',
    summary:'Clara sube al 168 y queda rodeada por pasajeros que llevan flores y la miran porque ella no lleva ninguna. Otro pasajero también está “fuera” de ese código y los dos terminan enfrentando juntos la situación.',
    characters:'Clara; el joven pasajero que también viaja sin flores; el guarda; el conductor; y los demás pasajeros, identificados por los ramos que llevan.',
    development:[
      'Clara sube al ómnibus 168 en Villa del Parque. Al principio el viaje parece completamente normal.',
      'El guarda y los pasajeros empiezan a mirarla de manera insistente. Clara nota que todos llevan ramos de flores.',
      'Aparece un joven que tampoco lleva flores. Ambos se reconocen en la misma situación y quedan cada vez más aislados.',
      'El ambiente se vuelve amenazante: el conductor acelera, el guarda los vigila y el viaje parece no obedecer a una lógica normal.',
      'En Retiro planean bajar juntos, logran escapar y terminan comprando dos ramos de pensamientos.'
    ],
    conflict:'Clara y el joven quedan enfrentados a un grupo que parece tener una regla desconocida: viajar con flores.',
    fantastic:'Nunca se explica por completo por qué las flores son tan importantes ni por qué el grupo reacciona con hostilidad hacia quienes no las tienen.',
    quotes:['“el ómnibus 168”','“todos, todos…”','“Tenemos boletos de quince.”'],
    conclusion:'La situación extraña une a Clara y al joven. Al final compran sus propias flores, pero el relato deja abierta la verdadera razón de todo lo que pasó.'
  },
  {
    id:'no-se-culpe', number:'03', author:'Julio Cortázar', authorKey:'cortazar', title:'No se culpe a nadie', art:'sweater-art',
    summary:'Un hombre intenta ponerse un pulóver azul antes de salir a encontrarse con su mujer. Una acción cotidiana se transforma en una lucha cada vez más absurda y aterradora.',
    characters:'El protagonista, su mujer —que lo espera para elegir un regalo de casamiento— y el pulóver, que pasa de ser un objeto cotidiano a parecer una amenaza autónoma.',
    development:[
      'El hombre se prepara para salir y decide ponerse un pulóver azul con su traje gris.',
      'Una mano parece transformarse: aparece una uña negra y el protagonista empieza a perder la orientación entre mangas, cuello y manos.',
      'Intenta ayudarse con ambas manos, pero estas parecen actuar de manera contradictoria y el pulóver se vuelve cada vez más difícil de controlar.',
      'Finalmente consigue sacar la cabeza y cree que ha escapado al aire libre.',
      'Cuando abre los ojos descubre otra vez las cinco uñas negras y el peligro vuelve a aparecer.'
    ],
    conflict:'El protagonista queda atrapado dentro de una acción mínima y pierde el control sobre su propio cuerpo y sobre la ropa.',
    fantastic:'Lo cotidiano se vuelve imposible: el pulóver y las manos dejan de tener límites claros y la percepción del protagonista se desarma.',
    quotes:['“hay que ponerse el pulóver azul”','“una uña negra terminada en punta”','“las cinco uñas negras suspendidas”'],
    conclusion:'El final no explica exactamente qué es lo que lo amenaza. La ambigüedad convierte una situación común en una pesadilla y deja al lector sin una salida segura.'
  },
  {
    id:'ruinas-circulares', number:'04', author:'Jorge Luis Borges', authorKey:'borges', title:'Las ruinas circulares', art:'ruins-art',
    summary:'Un mago llega a unas ruinas y tiene un objetivo sobrenatural: soñar un hombre completo e imponerlo a la realidad. Después descubre que él también es una creación soñada.',
    characters:'El mago; el hombre que crea en sueños; el dios Fuego, que permite que el hijo sea real; y el hijo soñado, que no sabe que es un simulacro.',
    development:[
      'El mago llega a un templo en ruinas y se concentra en dormir para comenzar su proyecto.',
      'Primero intenta crear mentalmente a un hombre completo, pero fracasa y comprende que soñar la realidad requiere un esfuerzo enorme.',
      'Cambia de método y comienza por un corazón, que luego completa poco a poco hasta formar un joven.',
      'El dios Fuego interviene y permite que el joven exista en el mundo real. El padre lo envía lejos de las ruinas.',
      'Años después las ruinas vuelven a incendiarse. El fuego no quema al mago y entonces comprende la verdad sobre sí mismo.'
    ],
    conflict:'El conflicto es el intento del mago de crear vida y controlar la diferencia entre sueño y realidad.',
    fantastic:'El sueño tiene poder creador: una persona imaginada puede entrar en la realidad y, al final, la realidad del propio creador resulta ser otro sueño.',
    quotes:['“Quería soñar un hombre.”','“imponerlo a la realidad”','“él también era una apariencia”'],
    conclusion:'El relato cierra un círculo: quien crea también puede haber sido creado. La frontera entre soñador y soñado desaparece.'
  },
  {
    id:'milagro-secreto', number:'05', author:'Jorge Luis Borges', authorKey:'borges', title:'El milagro secreto', art:'clock-art',
    summary:'Jaromir Hladík es condenado a muerte en Praga en 1939. Pide un año para terminar su obra y, justo antes de la ejecución, el tiempo exterior se detiene para permitirle completar su drama.',
    characters:'Jaromir Hladík; Julius Rothe, uno de los jefes que interviene en su condena; los soldados del piquete; y Dios, cuya respuesta constituye el milagro central.',
    development:[
      'Hladík, escritor y traductor, es detenido por las autoridades nazis y condenado a muerte.',
      'Durante los días de espera imagina muchas veces su propia ejecución y se obsesiona con terminar Los enemigos.',
      'La mañana del 29 de marzo llega al patio del cuartel y espera la descarga.',
      'En el instante en que ordenan disparar, el universo físico se detiene: las armas, el viento, una abeja y una gota de agua quedan inmóviles.',
      'Hladík descubre que para él transcurre un año entero. En ese tiempo termina el drama y encuentra el último epíteto que necesitaba.',
      'Cuando completa la obra, el tiempo vuelve a moverse y muere a las 9:02.'
    ],
    conflict:'Hladík necesita terminar su obra antes de morir. Su conflicto es contra el límite del tiempo y contra la muerte.',
    fantastic:'Un solo instante del mundo físico contiene un año subjetivo de pensamiento y creación literaria.',
    quotes:['“El universo físico se detuvo.”','“Un año entero había solicitado de Dios”','“El tiempo se ha detenido.”'],
    conclusion:'El milagro no evita su muerte: le da exactamente el tiempo que pidió para terminar su obra. La creación literaria queda como su verdadera victoria.'
  },
  {
    id:'el-sur', number:'06', author:'Jorge Luis Borges', authorKey:'borges', title:'El Sur', art:'south-art',
    summary:'Juan Dahlmann, después de una grave enfermedad, viaja hacia el Sur. En un almacén es provocado por un hombre y recibe una daga de un viejo gaucho. El final deja abierta la duda entre realidad, sueño y muerte.',
    characters:'Juan Dahlmann; su abuelo materno Francisco Flores, asociado al pasado criollo; el viejo gaucho; el compadrito que lo desafía; el patrón del almacén y los peones.',
    development:[
      'Dahlmann se enferma gravemente después de herirse la frente y termina internado en un sanatorio.',
      'Al recuperarse viaja en tren hacia la estancia familiar del Sur, espacio que representa una identidad criolla que siente como propia.',
      'En un almacén unos hombres lo provocan con bolitas de miga y burlas. Dahlmann intenta evitar la pelea, pero finalmente responde.',
      'El compadrito lo desafía con un cuchillo. Un viejo gaucho le arroja una daga para que pueda aceptar el duelo.',
      'Dahlmann sale a la llanura. En ese momento siente que esa muerte sería la que él hubiera elegido o soñado.'
    ],
    conflict:'Dahlmann enfrenta una pelea concreta, pero también un conflicto de identidad: elegir entre la vida que lleva y la imagen de sí mismo que desea.',
    fantastic:'El relato mantiene una duda decisiva: no sabemos con certeza si el duelo ocurre realmente o si forma parte de un sueño o de una muerte imaginada.',
    quotes:['“El Sur empieza del otro lado de Rivadavia.”','“dos hombres”','“ésta es la muerte que hubiera elegido o soñado”'],
    conclusion:'El final no confirma una única interpretación. Dahlmann entra en el destino que imaginaba para sí y la historia mezcla identidad, sueño y muerte.'
  },
  {
    id:'cara-en-la-palma', number:'07', author:'Silvina Ocampo', authorKey:'ocampo', title:'La cara en la palma', art:'hand-art',
    summary:'Una mujer escribe una carta y cuenta que tiene desde el nacimiento una pequeña cara en la palma de su mano izquierda. Esa cara le habla, la acompaña y contradice sus pensamientos.',
    characters:'La narradora; Aurelio, destinatario de la carta y persona a la que ama; la pequeña cara de la palma, que funciona como una voz enemiga; y otras personas mencionadas en sus recuerdos.',
    development:[
      'La narradora comienza contando que oye los pasos de Aurelio y que su vida parece regirse por esos pasos.',
      'Explica por qué usa un guante en la mano izquierda y revela su secreto: tiene una pequeña cara en la palma.',
      'La cara no es una simple marca: habla, contradice sus pensamientos y nunca la deja sentirse completamente sola.',
      'La mujer recuerda cómo esa voz interior la empujó a huir, a cambiar de vida y a interpretar sus relaciones de otra manera.',
      'La carta se convierte en una confesión amorosa, pero también en la demostración de que la narradora no puede escapar de esa segunda voz.'
    ],
    conflict:'La narradora desea relacionarse libremente con Aurelio, pero convive con una presencia que cuestiona sus decisiones y sus sentimientos.',
    fantastic:'Una característica física de nacimiento adquiere autonomía y voz, funcionando como una presencia casi independiente dentro de su propio cuerpo.',
    quotes:['“Tengo en la palma de la mano izquierda una cara”','“me habla, que me acompaña, que me combate”','“jamás estoy sola”'],
    conclusion:'La cara representa una parte de la identidad que la protagonista no puede callar. El relato mezcla amor, culpa, libertad y una voz interior que nunca desaparece.'
  },
  {
    id:'vestiduras-peligrosas', number:'08', author:'Silvina Ocampo', authorKey:'ocampo', title:'Las vestiduras peligrosas', art:'dress-art',
    summary:'Piluca, costurera, trabaja para Artemia, una mujer obsesionada con diseños llamativos. Después de cada vestido aparecen noticias de ataques a mujeres que llevan prendas iguales o muy parecidas.',
    characters:'Piluca —también identificada como Régula Portinari—; Artemia; Violeta aparece vinculada por recuerdos en el conjunto del corpus, pero no es protagonista de este relato; y las mujeres de distintos lugares cuyas noticias aparecen en los diarios.',
    development:[
      'Piluca recuerda que Artemia le pedía vestidos “peligrosos” y que hacía diseños extravagantes.',
      'Piluca confecciona un jumper de terciopelo. Al día siguiente aparece una noticia sobre una mujer atacada con una prenda idéntica y Artemia cree que debió sucederle a ella.',
      'Luego confecciona un vestido de gasa negra con manos y pies pintados. Aparece otra noticia con una mujer que llevaba un vestido del mismo tipo.',
      'Piluca propone una ropa sobria: pantalón oscuro y camisa de hombre. Parece una solución segura, pero esa elección tampoco evita la tragedia.',
      'Artemia sale con esa vestimenta y después Piluca descubre que también ha sido víctima de una agresión.'
    ],
    conflict:'Piluca intenta proteger a Artemia mientras los vestidos parecen anticipar o repetir acontecimientos violentos que suceden en otros lugares.',
    fantastic:'Las prendas diseñadas por Artemia parecen tener una conexión misteriosa con hechos que ocurren lejos de ella, como si el diseño se repitiera junto con el destino.',
    quotes:['“haceme un vestido peligroso”','“Mi jumper es el que llevaba esa mujer.”','“No puedo hacer nada en el mundo sin que otras mujeres me copien”'],
    conclusion:'La repetición de los vestidos y las noticias instala una relación inexplicable entre la ropa y los acontecimientos. El relato deja una sensación de destino imposible de evitar.'
  },
  {
    id:'casas-de-azucar', number:'09', author:'Silvina Ocampo', authorKey:'ocampo', title:'Las casas de azúcar', art:'sugar-art',
    summary:'Cristina vive dominada por supersticiones. Su marido consigue una casa aparentemente nueva y le oculta que ya había sido habitada. Poco a poco, Cristina parece heredar la vida de la antigua inquilina, Violeta.',
    characters:'Cristina; su marido y narrador; Violeta, antigua habitante de la casa; Arsenia López, profesora de canto de Violeta; Daniel; Bruto; y otras personas del barrio que aportan información.',
    development:[
      'Cristina teme que las casas y objetos anteriores influyan en su destino. Para ella, las vidas de quienes habitaron un lugar pueden contaminar a los nuevos ocupantes.',
      'Su marido encuentra una casita de la calle Montes de Oca que parece de azúcar. Sabe que ya había vivido allí una familia, pero le dice a Cristina que nadie la había habitado.',
      'Después de mudarse, Cristina comienza a cambiar: canta, adopta nuevos gustos y dice que está “heredando la vida de alguien”.',
      'El marido investiga quién vivía antes. Descubre que era Violeta y llega hasta Arsenia López para conocer su historia.',
      'A partir de esa información, empieza a ver a Cristina como si fuera Violeta. La relación entre ambos se deteriora y Cristina desaparece una noche.',
      'El narrador termina sin saber quién fue víctima de quién y la casa queda deshabitada.'
    ],
    conflict:'La historia enfrenta las supersticiones de Cristina con la mentira del marido y con la posibilidad de que la identidad de Violeta esté ocupando el lugar de Cristina.',
    fantastic:'La casa parece transmitir recuerdos, gustos, vínculos y hasta una identidad de una antigua habitante a una nueva persona.',
    quotes:['“la casa de nuestros sueños”','“Estoy embrujada”','“Sospecho que estoy heredando la vida de alguien”','“Ya no sé quién fue víctima de quién”'],
    conclusion:'El relato nunca explica de forma definitiva si Cristina realmente se transformó en Violeta, si la casa provocó el cambio o si la obsesión de todos hizo imposible distinguirlas. La última duda resume el misterio.'
  }
];

function renderStories(filter = 'all') {
  storyList.innerHTML = stories.filter(s => filter === 'all' || s.authorKey === filter).map(s => `
    <article class="story reveal story-clickable" data-author="${s.authorKey}" data-id="${s.id}" tabindex="0" role="button" aria-label="Abrir ${s.title}">
      <div class="story-art ${s.art}"><span></span></div>
      <div class="story-body">
        <p class="story-no">RELATO ${s.number} · ${s.author.toUpperCase()}</p>
        <h3>${s.title}</h3>
        <p class="summary">${s.summary}</p>
        <div class="chips"><span>Ver explicación completa</span><span>Personajes</span><span>Desarrollo</span></div>
        <div class="details"><div><b>¿Qué vas a encontrar?</b><p>Argumento, nombres, conflicto, elemento fantástico, frases clave y conclusión.</p></div><div><b>Interacción</b><p>Hacé clic para abrir la ficha completa del relato.</p></div><div><b>Lectura</b><p>Información organizada para estudiar y exponer.</p></div></div>
      </div>
    </article>
  `).join('');

  storyList.querySelectorAll('.story-clickable').forEach(card => {
    card.addEventListener('click', () => openStory(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStory(card.dataset.id); }
    });
  });

  document.querySelectorAll('.story-list .reveal').forEach(el => requestAnimationFrame(() => el.classList.add('visible')));
}

function openStory(id) {
  const s = stories.find(item => item.id === id);
  if (!s) return;
  modalArt.className = `modal-art ${s.art}`;
  modalMeta.textContent = `RELATO ${s.number} · ${s.author}`;
  modalTitle.textContent = s.title;
  modalSummary.textContent = s.summary;
  modalCharacters.textContent = s.characters;
  modalDevelopment.innerHTML = `<ol>${s.development.map(step => `<li>${step}</li>`).join('')}</ol>`;
  modalConflict.textContent = s.conflict;
  modalFantastic.textContent = s.fantastic;
  modalQuotes.innerHTML = s.quotes.map(q => `<span>${q}</span>`).join('');
  modalConclusion.textContent = s.conclusion;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
    renderStories(btn.dataset.filter);
  });
});

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold:.08, rootMargin:'0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  document.addEventListener('pointermove', e => {
    const art = e.target.closest('.story-art');
    if (!art) return;
    const r = art.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    art.style.transform = `perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) scale(1.01)`;
  });
  document.addEventListener('pointerout', e => {
    const art = e.target.closest('.story-art');
    if (art && !art.contains(e.relatedTarget)) art.style.transform = '';
  });
}

renderStories();
