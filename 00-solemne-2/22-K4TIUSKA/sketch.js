//Solemne 2-Catalina Rodríguez
//OBRA ESCOGIDA: Matrix
//Esta película fue lanzada en 1999,
//dirigida por las hermanas Lana y Lilly Wachowski,
//ellas son directoras, guionistas y productoras estadounidenses

//Matrix plantea La Teoría del Universo Simulado
//implica que nuestro Universo, con todas sus galaxias,
//planetas y formas de vida, es una simulación por
//computadora meticulosamente programada.
//En este escenario, las leyes físicas que gobiernan nuestra
//realidad son simplemente algoritmos.
//Fuentes de información:
//1. Wikipedia:
//https://es.wikipedia.org/wiki/The_Matrix
//2. IMDB:
//https://www.imdb.com/es/title/tt0133093/
//3. Sensacine:
//https://www.sensacine.com/peliculas/pelicula-19776/

//en este caso haremos un fondo similar al de la película
//y al momento de el mouse interactuar con la pantala
//esta mostraría alrederdor un efecto estático y además
//modificaría la velocidad del frameRate dependiendo la altura
//del mouse

//referentes y tutoriales:
// 1. Tiktok: VLS tecnología (es un tutorial en portugués, tuve que buscar
//las definiciones de algunas de las funciones, esto lo mencionaré
//más adelante):
//https://www.tiktok.com/@vlstecnologia/video/7259500940280024326?is_from_webapp=1&sender_device=pc&web_id=7167851604245579270
//2. P5js reference
//https://p5js.org/reference/p5/map/
//https://p5js.org/reference/p5/mouseY/
//https://p5js.org/reference/p5/mouseX/
//3. Chatgpt (los prompts y respuestas están adjuntos a los momentos
//en el que lo usé)

//esto deja que las letras sean, osea, que literalmente existan
//tambien define sus valores
let letters = [{ x: 0, y: 0, s: 25 }];

//TAMAÑO
function setup() {
  //tamaño del canvas
  createCanvas(800, 800);
}

//function setCode literalmente crea una nueva función
//en caso de estos códigos, al no entender portugués a un 100%,
//decidí preguntarle a chatgpt qué hacen y en qué afectan mi código
//mi prompt fue este:
//"A partir de este codigo, define que son estas funciones"
//esta fue su respuesta:
//Function setCode() Crea una función cuya finalidad suele ser establecer o cambiar
//un código/valor/configuración.
function setCode() {
  // String.fromCharCode() transforma un número Unicode en un símbolo o letra.
  // 0x30a0 corresponde al inicio del bloque de caracteres japoneses Katakana.
  return String.fromCharCode(0x30a0 + round(random(0, 96)));
}

//FILAS
//en este caso también decidí preguntarle a chatgpt cual era la función de newRow
//mi prompt fue este:
//"A partir de este codigo, define que son estas funciones"
//esta fue su respuesta:
//Function newRow() Crea una función que sirve para generar una nueva
//fila de datos, letras o elementos.
function newRow() {
  //Agrega un nuevo objeto dentro del arreglo letters.
  //Normalmente se usa para guardar información nueva,
  //por ejemplo una letra con posición, color, tamaño, etc.
  letters.push({
    // x define la posición horizontal de la fila.
    // hace que las filas aparezcan alineadas
    // en columnas separadas cada 100 px.
    x: random(0, width / 100) * 100,
    // y define la posición vertical inicial.
    // random(0, height) hace que cada fila aparezca en una altura aleatoria.
    y: random(0, height),
    // s define el tamaño del texto de cada fila.
    // random genera tamaños distintos para dar más variedad visual.
    s: random(15, 30),
  });
}

function draw() {
  //Fondo negro
  background(0);

  //esto sirve para calcular un valor de FPS
  //(frames por segundo) según la posición vertical del mouse.
  let fps = map(mouseY, 0, height, 5, 60);
  //Juntos hacen que la velocidad de la animación cambie dinámicamente
  //según la posición vertical del mouse.
  frameRate(fps);
  //en este caso el framerate sigue el valor que le asignamos a los
  //fps, y tal valor es dado por la ubicación vertical del mouse

  // letters = letters.map(...) recorre cada fila de símbolos guardada
  // en el arreglo "letters" para actualizar su movimiento y dibujo.
  letters = letters
    .map((l) => {
      // mueve la fila hacia abajo en cada frame.
      // El número 12 controla la velocidad de caída de las letras.
      //si sacase esto, las letras no caerían directamente, solo estarian cambiando su carácter
      //quietos, lo unico que cambiaría es la velocidad
      l.y += 12;

      // crea una lista de 10 elementos
      // para dibujar 10 caracteres por fila.
      [...Array(10)].forEach((a, i) => {
        textSize(l.s);

        // if hace que los primeros caracteres sean más claros,
        // simulando el brillo de la punta de la fila.
        if (i < 2) {
          fill(255 - i * 20);
        } else {
          // Los demás caracteres son verdes,
          // creando el efecto Matrix.
          fill(0, 255 - i * 20, 0);
        }

        text(setCode(), l.x, l.y - i * 40);
      });
      // Si la fila baja demasiado fuera del canvas,
      // desaparece eliminándose del arreglo.
      if (l.y > height * 1.5) {
        return null;
      }
      //este devuelve a su valor 1
      return l;
    })
    .filter((l) => l);
  // Si hay menos de 10 filas en pantalla,
  // newRow() crea una nueva automáticamente.
  if (letters.length < 10) {
    newRow();
  }
  //for() repite el dibujo de 150 elipses alrededor del mouse
  //por el tamaño pequeño de cada elipse le da un efecto de estática
  for (let i = 0; i < 150; i++) {
    ellipse(mouseX + random(-100, 100), mouseY + random(-100, 100), 5, 5);
    //relleno de los elipses a un color verde que se desvanece igual
    //que el texto japonés
    fill(0, 255 - i * 20, 0);
  }
}
