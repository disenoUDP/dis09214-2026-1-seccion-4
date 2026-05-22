// SOLEMNE 1 PENSAMIENTO
// COMPUTACIONAL
 
// esto ayuda a ingresar las
// variables de las imagenes
// para despues utilizarlas

//imagen del alien
//https://p5js.org/es/reference/p5/let/
let imgAlien;
//imagen de la base espacial
let imgBase;
// imagen de la tierra
let imgTierra;
// para que entre al sistema la
// posicion horizontal de las
// estrellas
let estrellasX = [];
// exactamente lo mismo que el
// codigo anterior solo que para la
// posicion vertical de las 
// estrellas
let estrellasY = [];
// codigo para poder controlar cuanto
// girara la imagen
let anguloTierra = 0;
// ingresar el codigo para que
// rebote la estrella
let reboteX, reboteY,
    reboteVelX, reboteVelY;

// para cargar las imagenes antes 
// https://p5js.org/es/reference/p5/preload
function preload() {
  // https://www.nicepng.com/downpng/u2q8i1r5q8y3i1y3_this-article-is-a-stub-about-a-space/(imagen de la base espacial)
  imgBase = loadImage(
    "base.png");
  // https://png.pngtree.com/png-vector/20240317/ourmid/pngtree-planet-earth-take-care-of-the-earth-png-image_11996937.png (imagen de la tierra)
  imgTierra = loadImage(
    "tierra.png");
}

function setup() {
  // Lienzo del porte de la ventana
  // de cada dispositivo donde
  // se abra este archivo
  createCanvas(
    windowWidth, 
    windowHeight);
  // https://p5js.org/es/reference/p5/for/
  // https://p5js.org/es/reference/p5/random
  // https://p5js.org/es/reference/p5/push
  for (let i = 0;
      i < 50;
      i++) {
    estrellasX.push(random(
      windowWidth));
    estrellasY.push(random(
      windowHeight));
    }
  
  // inicio de la posicion de
  // la estrella en un lugar
  // que rebota aleatoriamente
  // https://p5js.org/es/reference/p5/random
  reboteX = random(
    windowWidth);
  // inicio de a altura de la
  // estrella que rebota en
  // la mitad superior
  // de la pantalla
  // https://p5js.org/es/reference/p5/random
  reboteY = random(
    windowHeight * 0.4);
  // velocidad horizontal de la
  // estrella que rebota
  reboteVelX = 7;
  // velocidad vertical de la
  // estrella que rebota
  reboteVelY = 4;
  
  // se agrega la imagen al cursor,
  // cada que se mueva el cursor en
  // la pantalla este es, en este
  // caso, un alien
  // https://static.vecteezy.com/system/resources/thumbnails/036/420/673/small/ai-generated-3d-render-alien-on-transparent-background-free-png.png (Imagen del alien cursor)

  // https://p5js.org/es/reference/p5/cursor/
  cursor("alien.png");

}
// https://p5js.org/es/reference/p5/draw
function draw() {
  // fondo azul marino que representa
  // el cielo del espacio
  background(10, 10, 40);
  
  
  // se pintan las estrellas
  // de color amarillo
  fill(253, 253, 150);
  // dibuja 50 estrellas
  // moviendose hacia la derecha
  // https://p5js.org/es/reference/#/p5/ellipse
  // https://p5js.org/es/reference/p5/if/

  for (let i = 0;
      i < 50;
      i++) {
    ellipse(estrellasX[i],
           estrellasY[i], 
           3, 3);
    estrellasX[i] += 1;
  // las estrellas se regresan
  // al inicio si salen de la
  // pantalla
   if (estrellasX[i] >
       windowWidth) {
    estrellasX[i] = 0
  }
 }
  
  // estrella rebote se agrega la funcion
  // al codigo+
  dibujarEstrellaRebote();
  
  // color gris del suelo que
  // representa el SUELO LUNAR
  fill(50);
  // para que no tenga bordes el
  // rectangulo que es el suelo
  noStroke();
  // aqui creo el rectangulo que
  // representa el suelo lunar 
  // siendo este del porte de la
  // ventana
  rect(0, 
  windowHeight - 200,
  windowWidth, 200);
  
//CRATERES DE LA LUNA
  //color variable y dinamico
  let oscilacionSeno = map(sin(
  frameCount * 0.05),
  -1, 1, 0, 255);
  
  // relleno color del ellipse 1
  fill(80);
  // elipse que representa
  // un crater de la luna
  ellipse(
    windowWidth * 0.2,
    windowHeight - 120,
    120, 40);
  
  // relleno color del ellipse 2
  fill(50);
  //ubicacion crater de la luna 2
  ellipse(
    windowWidth * 0.5,
    windowHeight - 80,
    80, 25);
  
  // relleno color del ellipse 3
  fill(20);
  //ubicacio crater de la luna 3
  ellipse(
    windowWidth * 0.8,
    windowHeight - 150,
    40, 15);
  
  // relleno color del ellipse 4
  fill(70);
  //ubicacion crater de la luna 4
  ellipse(
    windowWidth * 0.1,
    windowHeight - 50,
    150, 30);
  
  // relleno color del ellipse 5
  fill(40);
  //ubicacion crater de la luna 5
  ellipse(
    windowWidth - 400,
    windowHeight - 60,
    60, 20);
  
//SIMULACION MINERALES DEL ESPACIO
  // simulacion panel
  // relleno de color fondo panel
  fill(0, 0, 20);
  // tamaño del panel
  rect(
    windowWidth * 0.15,
    windowHeight - 180,
    40, 60);
  
  // color para los bloques
  // del panel
  fill(0, 50, 150);
  // ubicacion de cada uno
  // de las pantallas del panel
  rect(
    windowWidth * 0.15 + 4,
    windowHeight - 180 + 4,
    14, 16);
  rect(
    windowWidth * 0.15 + 22,
    windowHeight - 180 + 4,
    14, 16);
  rect(
    windowWidth * 0.15 + 4,
    windowHeight - 180 + 24,
    14, 16);
  rect(
    windowWidth * 0.15 + 22,
    windowHeight - 180 + 24,
    14, 16);
  rect(
    windowWidth * 0.15 + 4,
    windowHeight - 180 + 44,
    14, 16);
  rect(
    windowWidth * 0.15 + 22,
    windowHeight - 180 + 44,
    14, 16);
  
  // relleno color del rectangulo 1
  fill(204, 0, 0);
  // ubicacion de rectangulo 1
  rect(
    windowWidth * 0.35,
    windowHeight - 90,
    10, 15);
  
  // variacion de color para
  // que cambie de un color
  // a otro
  fill(0, 255, oscilacionSeno);
  // ubicacion de rectangulo 2
  rect(
    windowWidth * 0.65,
    windowHeight - 175,
    50, 15);
  
  //relleno color de triangulo
  fill(87, 35, 100);
  //ubicacion de todos los
  //lados del triangulo
  triangle(
    windowWidth * 0.05,
    windowHeight - 100,
    windowWidth * 0.1,
    windowHeight - 150,
    windowWidth * 0.15,
    windowHeight - 100);
  
  //relleno color del cuadrado
  fill(0);
  //ubicacion de todos los
  //lados de los cuadrados
  quad(
    windowWidth * 0.45,
    windowHeight - 130,
    windowWidth * 0.5,
    windowHeight - 100,
    windowWidth * 0.55,
    windowHeight - 130,
    windowWidth * 0.5,
    windowHeight - 160);
  
  //PLANETA CON ANILLO
  // color del planeta
  fill(199, 50, 24);
  // ubicacion del planeta
  ellipse(100, 100, 50, 50);
  // esto es para que se
  // pueda dibujar la forma
  // de los anillos
  noFill();
  // color del anillo del
  // exterior es mas 
  // transparente que el otro
  stroke(255, 255, 255, 120);
  // grosor del anillo
  strokeWeight(3);
  // anillo interior posicion
  ellipse(100, 100, 100, 20);
  // anillo interno menos 
  // transparente que el anterior
  stroke(255, 255, 255, 180);
  // grosor del anillo
  strokeWeight(2);
  // ubica y dibuja el anillo
  // interior
  ellipse(100, 100, 85, 15);
  // se quitan los bordes para no
  // afectar a las otras figuras 
  // https://p5js.org/es/reference/p5/noStroke/
  noStroke();
  
  // se incrementa el angulo que le 
  // habia dado anteriormente 
  // para que la tierra gire
  // lentamente
  anguloTierra += 0.01;
  // se usa para guardar la matriz
  // de transformacion actual
  // https://p5js.org/es/reference/p5/push
  push();
  // traslada el origen de la
  // posicion que quiero para
  // la tierra
  // https://p5js.org/es/reference/p5/translate/
  translate(windowWidth - 150,
            150);
  // rota la imagen de la tierra
  // desde su centro
  // https://p5js.org/es/examples/
  // transformation-rotate/
  rotate(anguloTierra);
  // aqui se inserta el archivo
  // previamente guardado
  // junto con sus coordenadas
  // https://p5js.org/es/reference/p5/loadImage/
  image(imgTierra,
        -75, -75,
        150, 150);
  // este se usa para restaurar
  // la matriz de transformacion
  // original
  // https://p5js.org/es/reference/p5/pop
  pop();
  
  // imagen de la base en la
  // luna ubicada en la izquierda
  // https://p5js.org/es/reference/p5/loadImage/
  image(imgBase, windowWidth - 300,
        windowHeight - 300,
        300, 200);
}

// funcion para dibujar la
// ESTRELLA FUGAZ
// https://p5js.org/es/reference/p5/function/
function dibujarEstrellaRebote() {
  // actualiza la posicion de X
  // dependiendo de su velocidad
   reboteX += reboteVelX;
  // actualiza la posicion de Y
  // dependiendo de su velocidad
   reboteY += reboteVelY;

// aqui es si la estrella choca en
// el borde izquierdo o derecho
// invierte la velocidad de X
if (reboteX > windowWidth ||
    reboteX < 0) {
  reboteVelX *= -1;
}
  
// invierte velocidad de Y si choca
// con bordes superior/inferior
if (reboteY > windowHeight ||
    reboteY < 0) {
    reboteVelY *= -1;
}
  //color de la estrella que esta
  //entre amarillo y naranja
  //para imitar la estela de
  //una estrella fugaz
  //https://p5js.org/es/reference/p5/map
  //https://p5js.org/es/reference/p5/sin
  
  let estrella = map(
    sin(frameCount * 0.1),
    -1, 1,
    165, 255);
  //se aplica el color creado
  //anteriormente
  stroke(255, estrella, 0);
  // grosor de la linea
  strokeWeight(8);
  // crea la esttrella con la imitacon de estela
  line(reboteX, reboteY,
       reboteX - (reboteVelX * 4),
       reboteY - (reboteVelY * 4));
  // elimina los bordes de la linea
  noStroke();
}
// https://png.pngtree.com/png-vector/20240317/
// ourmid/pngtree-planet-earth-take-care-of-
// the-earth-png-image_11996937.png 
// (imagen de la tierra)

// REFERENCIAS P5:
// https://p5js.org/es/reference/p5/sin

// https://p5js.org/es/reference/p5/pop

// https://p5js.org/es/reference/p5/frameCount
// ttps://p5js.org/es/reference/p5/preload
                                   