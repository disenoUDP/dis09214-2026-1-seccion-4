// para este proyecto quise inspirarme de uno de mis álbumes favoritos;
// deseo, carne y voluntad de candelabro. una banda de la escena alternativa
// chilena de nuestra generación que amo con todo mi corazón.
// se trata de un reproductor que hace correr las canciones al hacer click
// en un botón. para poder compartir la música que me gusta de una forma
// más linda y novedosa en lugar de sólo enviar el link de una plataforma.

// los símbolos de destellos que aparecen arriba llevan a diferentes links;
// la página de genius de candelabro, el instagram de la banda y la playlist del
// álbum oficial publicado en youtube.
// lo único malo es que no funcionan como links externos ya que (según claude.ai)
// el editor online de  p5.js funciona con iframe, y los sitios enlazados
// tienen una política de seguridad que impiden que el sitio se abra dentro de iframes.
// intenté subir el proyecto a GitHub Pages para no tener este problema, pero fue un
// poco difícil, así que por mientras lo dejaré así :]

// convertí todas las canciones del álbum publicado en youtube para
// descargarlas como .mp3 (¿es piratería si pongo el link arriba? upsi).
// luego subí los archivos y los reproducí con loadSound, que requiere habilitar
// la librería de p5.sound en el html del proyecto para funcionar.

// la imagen del vinilo la saqué de pinterest: 📌 https://pin.it/4zH6y5R85
// y la edité para ponerle como "sticker" la portada oficial del álbum, la cual
// saqué de esta página: https://registromovil.bandcamp.com/album/deseo-carne-y-voluntad
// la estrellita la saqué de la foto de perfil del instagram oficial de la banda
// y la recorté para hacerla un pdf transparente: www.instagram.com/candelabro.candelabro
// ambas imagenes editadas las subí a este drive:
// https://drive.google.com/drive/folders/1navgmpkBstzsAUVFMnM0DQYqbiRkRRDY?usp=sharing

// como no soy pro computina se me hizo muy difícil hacer muchas cosas así que le pedí
// -bastante- ayuda a claude.ai para que me ayude a resolver algunos problemas, dejaré
// los links de mis chats con la ia.
// https://claude.ai/share/2b4c5042-1bd3-4ffe-bdf7-d6bfb9ac12f4
// https://claude.ai/share/017143c3-a90e-4f00-8855-689c707cd537
// https://claude.ai/share/ab2874de-a7de-4768-99f3-7b61119c4938

// --- VARIABLES GLOBALES ---

// arreglo vacío que funcionará como contenedor para
// todos los archivos de audio, cada posición del arreglo
// (songs[0], songs[1]...) guardará una canción distinta.
// se llena en preload() usando un bucle.
let songs = [];

// número que indica qué canción está activa en este momento.
// 0 = primera canción, 1 = segunda, y así. cambia cada vez
// que se presiona el botón.
let currentIndex = 0;

// indica el ángulo de rotación del vinilo.
// en cada frame de draw() se le suma 0.02, para hacerlo girar.
let angle = 0;

// variable booleana (verdadero/falso) que actúa como "interruptor"
// para el título. parte en false para que el título no aparezca
// antes de que el usuario haya presionado el botón. se vuelve true
// en nextSong() cuando se hace click en el botón o,
// en otras palabras, se interactúa por primera vez.
let showTitle = false;

// arreglo con los nombres de cada canción del álbum.
// el orden debe coincidir exactamente con el orden
// de los archivos de audio: (cancion1.mp3 = "Las Copas",
// cancion2.mp3 = "Domingo de ramos", etc.).
// se usa en draw() junto con currentIndex para saber
// qué título mostrar en pantalla.
let titles = [
  "Las Copas",
  "Domingo de ramos",
  "Prisión de carne",
  "Tumba",
  "Haz de mí",
  "Ángel",
  "Liebre",
  "Pecado",
  "Tierra maldita",
  "Deseo, Carne, y Voluntad",
  "Fracaso",
  "3 Flores Blancas",
  "Cáliz",
  "José (créditos)",
];

// --- PRELOAD ---

function preload() {
  // carga el archivo de fuente tipográfica "helvetica round.otf"
  // desde la carpeta del proyecto. lo guardo en la variable global
  // helveticaRound para usarla después con textFont() en draw().
  // esta fuente la voy a usar en los títulos de las canciones.
  helveticaRound = loadFont("helvetica round.otf");
  // segunda fuente que voy a usar el texto de instrucción
  // "click para reproducir".
  helveticaLight = loadFont("helvetica light.ttf");

  // carga la imagen del vinilo que gira en el centro del canvas.
  img = loadImage("viniloo.png");

  // carga la imagen que reemplazará al cursor del mouse.
  // al ocultarse el cursor nativo con noCursor() en setup(),
  // esta imagen toma su lugar y se redibuja en cada frame
  // sobre la posición actual del mouse.
  img2 = loadImage("estrellita.png");

  // le indica a la librería p5.sound qué formato de audio
  // va a utilizarse. es necesario para que el navegador sepa
  // cómo interpretar los archivos antes de intentar cargarlos.
  soundFormats("mp3");

  // uso for para cargar las 14 canciones del álbum de forma
  // automatizada. en vez de declararlas una por una (cancion1.mp3,
  // cancion2.mp3, cancion3.mp3, etc). el bucle genera esos nombres
  // automáticamente combinando el texto "cancion" con el número (i + 1).
  // i empieza en 0 pero la suma +1 hace que los nombres vayan
  // de cancion1 a cancion14.
  for (let i = 0; i < 14; i++) {
    songs[i] = loadSound("cancion" + (i + 1) + ".mp3");
  }
}

// --- SETUP ---
// todo lo que se crea aquí persiste durante toda la ejecución del programa.

function setup() {
  // oculta el cursor por defecto del navegador.
  noCursor();

  // cambia el modo de posicionamiento de todas las imágenes del sketch.
  // por defecto p5.js dibuja imágenes desde la esquina superior izquierda,
  // con CENTER las coordenadas que se pasan a image() apuntan al centro de la imagen.
  imageMode(CENTER);

  createCanvas(400, 550);

  // --ENLACES--
  // createA es una función que crea un enlace clikeable
  // y lo inserta en la página web donde está corriendo el sketch.

  // ENLACE 1: youtube.
  // link de destino al hacer click
  let link1 = createA(
    "https://www.https://www.youtube.com/watch?v=9OARUBgt_JQ&list=PLvQeWtDaVp1FxzcWieYzWwIfkzca4Gkxy.com",

    // texto "atajo" que reemplaza al link para no tener que mostrarlo
    // directamente en pantalla. quise usar un destello para que
    // hiciera sentido con los elementos visuales del álbum.
    "✦",

    // indica que el enlace se abrirá en una pestaña
    // nueva del navegador
    "_blank"
  );

  // cambia el tamaño del atajo
  link1.style("font-size", "25px");

  // cambia el color del atajo a negro ya
  // que el predeterminado es azul.
  link1.style("color", "black");

  // elimina el subrayado que los navegadores
  // añaden a los enlaces por defecto
  link1.style("text-decoration", "none");

  // su posición dentro del canvas
  link1.position(80, 10);

  // ENLACE 2: instagram.
  // mismo proceso que link1 pero apunta al perfil de instagram
  // de la banda y le coloqué un símbolo distinto (✸)
  let link2 = createA(
    "https://www.instagram.com/candelabro.candelabro",
    "✸",
    "_blank"
  );
  link2.style("font-size", "25px");
  link2.style("color", "black");
  link2.style("text-decoration", "none");
  link2.position(185, 10);

  // ENLACE 3: genius
  // apunta a la página de candelabro en genius.
  // ahí puedes ver las letras de las canciones, las referencias
  // y parte de la producción del álbum; quise agregarla ya que
  // pienso que parte importante de escuchar a un artista es también
  // relacionarse con el proceso creativo y lo que hay detrás.
  let link3 = createA(
    "https://https://genius.com/artists/Candelabro",
    "✦",
    "_blank"
  );
  link3.style("font-size", "25px");
  link3.style("color", "black");
  link3.style("text-decoration", "none");
  link3.position(290, 10);

  // -BOTÓN: reproducir canción-

  // crea un botón HTML.
  btn = createButton("♪ ⋅.˳˳. 𓈒");

  // posición del botón.
  btn.position(175, 450);

  // asocia el botón con la función nextSong().
  // cada vez que se haga click en el botón,
  // se ejecutará nextSong() automáticamente.
  btn.mousePressed(nextSong);
}

// --- DRAW ---

function draw() {
  background(200);

  // -- TEXTOS --

  // 1. este texto corresponde al título de las canciones;
  // aparece en el canvas cuando se reproduce una canción y cambia
  // cuando se reproduce la canción que le corresponde a cada título:

  // if es el bloque condicional: solo muestra el título
  // si showTitle es true, es decir, si el usuario
  // ya presionó el botón al menos una vez.
  if (showTitle) {
    // aplica la fuente cargada en preload()
    textFont(helveticaRound);
    textSize(23);
    textAlign(CENTER);
    // coloca el título de la canción que se está reproduciendo.
    // titles[currentIndex] obtiene el título correspondiente
    // al índice actual.
    // width/2 centra el texto horizontalmente;
    // 385 es la posición vertical en píxeles.
    text(titles[currentIndex], width / 2, 385);
  }

  // 2. este texto corresponde al que da la instrucción para clickear
  // el botón y reproducir la música:

  // elijo la otra fuente cargada:
  textFont(helveticaLight);
  textSize(13);
  textAlign(CENTER);
  // para definir el interlineado del texto:
  textLeading(13);
  // \n funciona para que el texto no se dibuje
  // sobre una sola línea (salto de línea):
  text("clickea el botón\npara reproducir ↓", width / 2, 418);

  // -- IMAGEN VINILO --

  // guarda el estado actual del sistema de coordenadas y estilos.
  // todo lo que se haga entre push() y pop()
  // no afectará al resto de los elementos del canvas.
  // es necesario usarlo porque voy a mover y rotar
  // el origen de coordenadas.
  push();

  // mueve el origen del sistema de coordenadas
  // que es donde quiero que esté el centro del vinilo.
  translate(width / 2, height / 2.5);

  // aplica una rotación al sistema de coordenadas
  // usando el valor acumulado de angle.
  // como angle aumenta en cada frame, el vinilo gira continuamente.
  rotate(angle);

  // dibuja el vinilo en el nuevo origen (0,0),
  // que gracias al translate anterior
  // corresponde al centro del canvas.
  image(img, 0, 0, 230, 230);

  // restaura el sistema de coordenadas al estado anterior al push().
  // a partir de aquí, el origen vuelve a ser la esquina
  // superior izquierda del canvas.
  pop();

  // incrementa el ángulo en 0.02 radianes por frame.
  // cuanto mayor sea este valor, más rápido girará el vinilo.
  angle += 0.02;

  // -- CURSOR --

  // carga la imagen de la estrella que reemplazará al cursor.
  // mouseX y mouseY se usan para que siga la posición del mouse.
  image(img2, mouseX, mouseY, 35, 35);
}

// -- NEXT SONG --

// función que se ejecuta cada vez que el usuario presiona el botón.
// su trabajo es detener lo que suena, avanzar al siguiente índice
// y reproducir la nueva canción.
function nextSong() {
  // verifica si la canción del índice actual está sonando.
  // esto evita el error de intentar detener algo
  // que ya estaba pausado o que nunca empezó.
  if (songs[currentIndex].isPlaying()) {
    // detiene completamente la reproducción de la canción actual.
    songs[currentIndex].stop();
  }

  // -- CURRENT INDEX --
  //  indica la posición numérica actual de un elemento dentro de una lista,
  // arreglo (array) o secuencia de datos.

  // avanza currentIndex en 1 para pasar a la siguiente canción.
  // el operador % (módulo) devuelve el resto de la división:
  // cuando currentIndex llega a 14 (que es songs.length),
  // 14 % 14 = 0, volviendo automáticamente a la primera canción.
  currentIndex = (currentIndex + 1) % songs.length;

  // reproduce la canción del nuevo índice.
  // en este punto currentIndex ya fue actualizado,
  // así que suena la siguiente.
  songs[currentIndex].play();

  // se activa para que draw() empiece a renderizar el título en pantalla.
  // como draw() corre en bucle y ahora showTitle es true,
  // el título aparecerá con el nombre de la canción correspondiente.
  // y se mantendrá visible hasta que se cambie de canción.
  showTitle = true;
}
