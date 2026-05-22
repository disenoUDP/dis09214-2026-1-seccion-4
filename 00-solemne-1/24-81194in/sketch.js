
// principal referncia/inspiración:
// https://cl.pinterest.com/pin/1095359940642244113/
// encontré la imagen en pinterest
// y quise imaginar cómo se vería si las elipses
// se movieran dentro de los rectangulos


//variables para guardar las imágenes
// se declaran fuera de funciones para poder usarlas en todo el programa
let img1, img2, img3;
let x2 = 136;
let y2 = 450;
//posición inicial de la imagen que se mueve con el teclado
// x: horizontal (izquierda/derecha)
// y: vertical (arriba/abajo, pero en p5 aumenta hacia ABAJO)

let r = 50;

// preload() se ejecuta ANTES de setup()
// se usa para cargar recursos externos y garantiza que estén listos antes de dibujar
function preload () {
  img1 = loadImage('sticker.png');
  // https://www.tumblr.com/stickercatt/810817186351415296?source=share

  
  img2 = loadImage('peyito.png');
  // https://cl.pinterest.com/pin/1477812375173904/
  
  img3 = loadImage('estreshita.gif');
  //https://www.tumblr.com/pixelsjar
}

function setup() {
  createCanvas(400, 590);
}

function draw() {
  background(25);
  noFill();
  // para que las figuras no tengan relleno y solo se vea el valor de stroke

  // TIEMPOS: frameCount = número de frames desde que empezó el programa.
  // framecount sirve para crear animaciones basadas en el tiempo y crear bucles.
  // multiplicar * por un número = velocidad de animación
  // https://p5js.org/reference/p5/frameCount/
  let t1 = frameCount * 0.02;
  let t2 = frameCount * 0.04;
  let t3 = frameCount * 0.08;

  // RECTÁNGULOS (no recuerdo cuál es cuál :D)
  strokeWeight(30);
  // el ancho del borde

  stroke(96, 78, 152);
   // color de stroke
  rect(20, 20, 100, 410, 60); 
  // (x, y, ancho, alto, bordes redondeados)

  stroke(130, 76, 151);
   // color de stroke
  rect(20, 20, 360, 100, 60);
  // (x, y, ancho, alto, bordes redondeados)

  stroke(192, 105, 92);
   // color de stroke
  rect(150, 150, 100, 410, 60);
  // (x, y, ancho, alto, bordes redondeados)

  stroke(226, 79, 69);
   // color de stroke
  rect(20, 460, 230, 100, 60);
  // (x, y, ancho, alto, bordes redondeados)

  stroke(199, 125, 142);
  // color de stroke
  rect(280, 150, 100, 280, 60);
  // (x, y, ancho, alto, bordes redondeados)
  
// los rectángulos funcionan como "zonas" donde se moverán las elipses
  
  
//   ELIPSES
// elipse izquierda vertical,  se definen los límites de movimiento dentro del rectángulo
  // sumar/restar "r" para que la elipse no toque el borde
  let left1 = 20 + r;
  let right1 = 120 - r;
  let top1 = 20 + r;
  let bottom1 = 430 - r;
  
//movimiento usando seno y coseno
// map() traduce valores (ej: de -1 a 1 a posiciones en pantalla)
// sin(t1) oscila entre -1 y 1
// map() transforma ese rango en coordenadas reales del canvas
// seno y conseno son funciones trigonométricas; se usan para calcular relaciones geométricas basadas en ángulos; básicamente calcula coordenadas
// cos: coordenada x
// sin: coordenada y
  let e1x = map(sin(t1), -1, 1, left1, right1);
  let e1y = map(cos(t1), -1, 1, top1, bottom1);
  // sin → controla X
  // cos → controla Y
  // juntos generan movimiento circular/ovalado

  
//cambio de color RGB dinámico
// PI/2 y PI crean desfase para que los colores no cambien al mismo tiempo
// PI es la constante para convertir ángulos y medir círculos
  let r1 = map(sin(t1), -1, 1, 100, 255);
  let g1 = map(sin(t1 + PI/2), -1, 1, 100, 255);
  let b1 = map(sin(t1 + PI), -1, 1, 100, 255);
  // r1, g1, b1 corresponden a los valores de color RGB, el 1 indica la elipse a la que corresponden estos valores

  stroke(r1, g1, b1);
    // r1, g1, b1 corresponden a los valores de color RGB, el 1 indica la elipse a la que corresponden estos valores

  ellipse(e1x, e1y, 100);
  // diámetro = 100 coincide con r*2


//ELIPSE SUPERIOR HORIZONTAL
  // se definen los límites de movimiento dentro del rectángulo
  // sumar/restar "r" para que la elipse no toque el borde
  let left2 = 20 + r;
  let right2 = 380 - r;
  let top2 = 20 + r;
  let bottom2 = 120 - r;

  // se agrega un desfase (PI/3, PI/4) al movimiento para evitar que las elipses se muevan igual
  let e2x = map(sin(t2 + PI/3), -1, 1, left2, right2);
  let e2y = map(cos(t2 + PI/4), -1, 1, top2, bottom2);

  //cambio de colores RGB 
  let r2 = map(sin(t2), -1, 1, 80, 255);
  let g2 = map(sin(t2 + PI/2), -1, 1, 80, 255);
  let b2 = map(sin(t2 + PI), -1, 1, 80, 255);
  // r2, g2, b2 corresponden a los valores de color RGB, el 2 indica la elipse a la que corresponden estos valores
  stroke(r2, g2, b2);
  ellipse(e2x, e2y, 100);

// ELIPSE DERECHA
  // no se hacen variables de color
  stroke(180, 41, 64);

// se definen los límites de movimiento de la elipse derecha dentro del rectángulo derecho
// sumar/restar "r" para que la elipse no toque el borde
  let left3 = 280 + r;
  let right3 = 380 - r;
  let top3 = 150 + r;
  let bottom3 = 430 - r;

  let e3x = map(sin(t3 + PI), -1, 1, left3, right3);
  let e3y = map(cos(t3 + PI/2), -1, 1, top3, bottom3);

  ellipse(e3x, e3y, 100);

// CUADRADO en rectángulo central
// se definen los límites del rectángulo central
let leftC = 150 + r;
let rightC = 250 - r;     // 150 + 100 = 250
let topC = 150 + r;
let bottomC = 560 - r;    // 150 + 410 = 560

// framecount para activar la animación del cuadrado
// otro tiempo para que no se sincronice con las elipses
let t4 = frameCount * 0.025;

// posición del cuadrado dentro del rectángulo
let sqX = map(sin(t4), -1, 1, leftC, rightC);
let sqY = map(cos(t4), -1, 1, topC, bottomC);
stroke(245, 198, 0);
  // color del cuadrado

//el cuadrado (rect con mismo ancho y alto)
rect(sqX - 25, sqY - 25, 50, 50, 15);

  
// CUADRADO en rectángulo inferior
// se definen los límites del rectángulo inferior
let leftB = 20 + r;
let rightB = 250 - r;     // 20 + 230
let topB = 460 + r;
let bottomB = 560 - r;    // 460 + 100

  // framecount para activar la animación del cuadrado
let t5 = frameCount * 0.03;
let sq2X = map(sin(t5), -1, 1, leftB, rightB);
let sq2Y = map(cos(t5), -1, 1, topB, bottomB);
  
stroke(150, 187, 233);
  // color del cuadrado

rect(sq2X - 25, sq2Y - 25, 50, 50, 15);
  
  // IMÁGENES y sus funciones
  
  image(img1, 230, 410, 200, 200);
  // 230 y 410 corresponden a la posición inicial en el canvas,
  // 200 y 200 corresponden al tamaño de la imagen
  
//para que el perrito se mueva con el teclado:
// keyIsDown detecta si una tecla está presionada constantemente
  if (keyIsDown(LEFT_ARROW)) x2 -= 3; // izq
  if (keyIsDown(RIGHT_ARROW)) x2 += 3; // der
  if (keyIsDown(UP_ARROW)) y2 -= 3; // sube
  if (keyIsDown(DOWN_ARROW)) y2 += 3; // baja
  
  // IMPORTANTE: en p5.js el eje Y está invertido:
  // ↑ valores mayores: baja
  // ↓ valores menores: sube

  image(img2, x2, y2, 120, 120);
  //se queda fija en el rincón

  image(img3, mouseX, mouseY, 30, 30); 
  //mouseX y mouseY para que se mueva según el movimiento del mouse
  // 30, 30 corresponden al tamaño de la imagen

  noCursor(); //para ocultar el cursor original
}