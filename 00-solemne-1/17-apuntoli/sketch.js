////pensar en la naturaleza al ver una pantalla////

// variables para los colores del fondo
// para eventualmente utilizarlos como fondo que cambia
// https://p5js.org/reference/p5/color

let colorMusgo;
let colorMostaza;
let colorNaranja;

// variable para cargar la imagen central de hongos
// fuente de imagen: https://sapiens.umh.es/
// link directo: https://sapiens.umh.es/como-los-hongos-heredan-la-resistencia-a-antifungicos/
// https://p5js.org/reference/p5/loadImage

let imgCentral;

// variable para cargar la imagen de la mosquita
// luego va a estar volando por el canvas
// fuente de imagen: https://multiplag.com/
// link directo: https://multiplag.com/blogs/informacion-de-plagas/como-eliminar-moscas-de-la-humedad?srsltid=AfmBOor-9Ear0PKInfvmKEfTycmMWVMAwAAdOuUo-bB33GORwN2Unl6O
// https://p5js.org/reference/p5/loadImage

let mosquita;

function setup() {
  // quiero que el canvas se adapte a la pantalla
  // utilizo el valor windowWidth para el ancho
  // y windowHeight para el alto
  // https://p5js.org/reference/p5/createCanvas

  createCanvas(windowWidth, windowHeight);

  // cambiar el cursor a una cruz
  // usando el valor CROSS
  // https://p5js.org/reference/p5/cursor

  cursor(CROSS);

  // voy a definir el valor de los colores en RGB
  // las variables que integre anteriormente en let
  // todos son colores organicos
  // mi intencion es que sea como el cambio de estacion
  // https://p5js.org/reference/p5/color

  colorMusgo = color(45, 70, 30);
  colorMostaza = color(140, 110, 35);
  colorNaranja = color(190, 75, 25);

  // cargar la imagen de hongos ya subida a imgCentral
  // para posicionarla mas adelante en function draw()
  // https://p5js.org/reference/p5/loadImage

  imgCentral = loadImage("fungi.png");

  // cargar la imagen de la mosquita
  // para usar mas adelante en draw()
  // https://p5js.org/reference/p5/loadImage

  mosquita = loadImage("mosquita.png");
}

function draw() {
  // el fondo es un gradiente entre musgo-mostaza-naranja-musgo
  // quiero que el ciclo dure 30 segundos en completarse
  // se calcula el framecount y el resto de la division
  // ciclo dura 1800 frames (30 seg a 60fps)
  // https://p5js.org/reference/p5/frameCount

  let ciclo = frameCount % 1800;

  // el progreso de los colores entre 0 y 1
  // siendo 0 el inicio (musgo)
  // el 0.33 el primer tercio (mostaza)
  // y el 0.66 el segundo tercio (naranja)
  // y 1 el final (musgo nuevamente)

  let Y = ciclo / 1800;

  // cambian los colores segun el progreso del ciclo
  // utilizo lerpColor
  // combina dos colores para encontrar un tercer color entre ellos
  // segun el valor entre 0 y 1
  // https://p5js.org/reference/p5/lerpColor

  let colorFondo;

  if (Y < 0.33) {
    // el primer tercio del ciclo: musgo a mostaza
    // parte desde 0
    // se multiplica por 3 para generar el avance dentro del tramo
    // llevandolo al color final (mostaza) o 1

    colorFondo = lerpColor(colorMusgo, colorMostaza, Y * 3);
  } else if (Y < 0.66) {
    // segundo tercio del ciclo: mostaza a naranja
    // se resta 0.33 para indicarle el punto de partida del tramo
    // se multiplica por 3 para generar el avance en el tramo
    // y llevarlo al 1 o color final (naranja)

    colorFondo = lerpColor(colorMostaza, colorNaranja, (Y - 0.33) * 3);
  } else {
    // tercer tercio del ciclo: naranja a musgo para volver
    // se resta 0.66 para indicar el punto de partida en el tramo
    // se multiplica por 3 para llevarlo a 1 o al musgo nuevamente

    colorFondo = lerpColor(colorNaranja, colorMusgo, (Y - 0.66) * 3);
  }

  // con todo ya determinado se coloco el color de fondo
  // https://p5js.org/reference/p5/background

  background(colorFondo);

  // voy a colocar la imagen como 1/3 de el canvas
  // utilizare el mismo valor como alto y ancho
  // para que sea cuadrada

  let tamano = windowWidth / 3;

  // calcular la posicion para centrar la imagen
  // se resta la mitad del tamaño para que quede al centro

  let posX = windowWidth / 2 - tamano / 2;
  let posY = windowHeight / 2 - tamano / 2;

  // quiero que la imagen se vea con transparencia usando tint
  // 255 mantiene el color original
  // 150 es la opacidad
  // https://p5js.org/reference/p5/tint

  tint(255, 150);

  image(imgCentral, posX, posY, tamano, tamano);

  // las figuras sin borde para que se vean mas limpias
  // https://p5js.org/reference/p5/noStroke

  noStroke();

  // primer rectangulo horizontal largo
  // tono verde translucido
  // ocupa casi todo el ancho pero no llega al borde derecho
  // https://p5js.org/reference/p5/rect

  fill(60, 80, 40, 60);

  rect(0, windowHeight * 0.25, windowWidth * 0.75, windowHeight * 0.08);

  // segundo rectangulo vertical angosto
  // tono mostaza translucido
  // ubicado hacia la izquierda superior y no llega hasta abajo

  fill(140, 110, 35, 55);

  rect(windowWidth * 0.15, 0, windowWidth * 0.06, windowHeight * 0.85);

  // tercer rectangulo horizontal
  // tono naranja translucido
  // esta ubicado hacia la derecha del canvas

  fill(190, 75, 25, 50);

  rect(
    windowWidth * 0.55,
    windowHeight * 0.6,
    windowWidth * 0.45,
    windowHeight * 0.18
  );

  // quiero generar unas lineas desde el centro
  // que salen hacia el borde del canvas
  // se define el centro del canvas desde donde salen las lineas
  // windowWidth/2 y windowHeight/2 es el punto central de la pantalla

  let centroX = windowWidth / 2;

  let centroY = windowHeight / 2;

  // linea 1, hacia arriba izquierda
  // color amarillo verdoso
  // strokeWeight define el grosor de la linea
  // https://p5js.org/reference/p5/line

  stroke(180, 160, 80, 255);

  strokeWeight(2);

  line(centroX, centroY, centroX - 300, centroY - 340);

  // circulo en la punta de la linea 1
  // color amarillo un poco translucido
  // sin bordes
  // parece una paletita
  // https://p5js.org/reference/p5/circle

  noStroke();

  fill(255, 210, 30, 200);

  circle(centroX - 300, centroY - 340, 40);

  // linea 2, hacia arriba derecha
  // color amarillo verdoso

  stroke(180, 160, 80, 255);

  strokeWeight(1);

  line(centroX, centroY, centroX + 250, centroY - 220);

  // circulo en la punta de la linea 2
  // color amarillo mostaza
  // de tamaño pequeño

  noStroke();

  fill(240, 175, 50, 255);

  circle(centroX + 250, centroY - 220, 20);

  // linea 3, hacia abajo derecha
  // de color verde amarilloso

  stroke(180, 160, 80, 255);

  strokeWeight(1.5);

  line(centroX, centroY, centroX + 150, centroY + 350);

  // circulo en la punta de la linea 3, alterna entre un terracota y un naranjito
  // cambia cada 300 frames (5 segundos a 60fps)
  // primero se determina entre que colores varia
  // https://p5js.org/reference/p5/frameCount

  let colorCirculo;

  if (frameCount % 600 < 300) {
    // primera mitad del ciclo: color terracota

    colorCirculo = color(150, 60, 15);
  } else {
    // segunda mitad del ciclo: naranjito

    colorCirculo = color(200, 125, 0);
  }

  // se dibuja el circulo con el color que varia
  // sin bordes
  // https://p5js.org/reference/p5/circle

  noStroke();

  fill(colorCirculo);

  circle(centroX + 150, centroY + 350, 35);

  // quiero hacer elipses dispersas
  // algo asi como esporas
  // sin relleno (no fill) para que sean solo la circunferencia
  // https://p5js.org/reference/p5/circle

  noFill();

  // espora 1, mas a la izquierda
  // color naranjo rojizo con un poco de transparencia
  // y un grosor bajo para que no tenga tanto protagonismo

  stroke(195, 67, 20, 180);

  strokeWeight(2);

  circle(centroX - 350, centroY + 250, 60);

  // espora 2, segunda desde la izquierda
  // color naranjito
  // este tiene un grosor de linea menor
  // para que sea aun menos notorio

  stroke(195, 100, 20, 150);

  strokeWeight(1.5);

  circle(centroX - 280, centroY + 150, 70);

  // espora 3, hacia arriba izquierda
  // color mostaza

  stroke(195, 150, 20, 100);

  strokeWeight(3);

  circle(centroX - 150, centroY - 280, 35);

  // espora 4, hacia la derecha abajo
  // color lima

  stroke(195, 180, 20, 80);

  strokeWeight(2);

  circle(centroX + 280, centroY + 220, 50);

  // espora 5, mas a la derecha
  // color verde

  stroke(140, 190, 20, 100);

  strokeWeight(2);

  circle(centroX + 320, centroY - 200, 45);

  // quiero que la mosquita vuele en diagonal
  // de abajo a la izquierda
  // a arriba a la derecha
  // el tramo dura 300 frames (5 segundos a 60fps)
  // se divide en 300 para obtener un valor entre 0 y 1

  let vuelo = (frameCount % 300) / 300;

  // se calcula la posicion de la mosquita segun el progreso (vuelo)
  // mosquitaX va de 0 a windowWidth (izq a derecha)
  // mosquitaY va de windowHeight a 0 (abajo para arriba)

  let mosquitaX = windowWidth * vuelo;

  let mosquitaY = windowHeight - windowHeight * vuelo;

  // ahora si colocamos la mosquita en su posicion
  // para emprender vuelo
  // tinte en 255 para mantener el color y 200 opacidad
  // 60 y 60  es el tamaño de la mosquita
  // https://p5js.org/reference/p5/image

  tint(255, 200);

  image(mosquita, mosquitaX, mosquitaY, 60, 60);
}
