 // variable que guarda la posicion vertical de
 // el sol en la parte superior del canvas
let ySol = 100;
 // variable para saber hacia que direccion se
 // mueve el sol, en este caso baja
let goDown = true;

 // variable que guarda la posicion vertical de
 // el creeper en la parte inferior del canvas
let yCreeper = 500;
 // variable para saber hacia que direccion se
 // mueve el creeper, en este caso baja
let creeperDown = true;

 // variable y funcion para insertar dos imagenes
 // en este caso el perro sentado a la derecha
 // y el creeper asomandose por la "cueva"
 // link:
 // https://www.youtube.com/watch?v=fEs4UkxnWDk&t=153s
let perro, creeper, steve;
function preload(){
  perro = loadImage('perro.png')
  creeper = loadImage('creeper.png')
  steve = loadImage('steve.png')
}

 // creaacion de canvas
 // (ancho y largo)
function setup() {
  createCanvas(800, 600);
 // hace que el cursor sea una imagen diferente
 // en este caso la espada de minecraft
 // link:
 // https://cl.pinterest.com/pin/1055599904608287/
  cursor('espadaa.png');
}

function draw() {
  
  // variacion del color del cielo (background)
  // dependiendo de la posicion en la que esta
  // el sol. si esta subiendo o amaneciendo
  // el color es claro, simulando el dia.
  // si esta bajando, el color se oscurece
  // simulando la noche.
let r = map(ySol, 0, height, 153, 5);
let g = map(ySol, 0, height, 204, 5);
let b = map(ySol, 0, height, 255, 20);
background(r, g, b);

  // cuadrado amarillo con un borde naranjo de grosor 10
  // que representa el sol
  stroke(252, 196, 76);
  strokeWeight(10);
  fill(252, 252, 76);
  rect(300, ySol, 180, 180);

  // movimiento continuo del sol en vertical, de arriba hacia 
  // abajo, y viceversa, representando el dia y la noche
  // link:
  // https://www.youtube.com/watch?v=GnhVUdMgS4Y
  if (goDown == true) {
    ySol += 2;
  } else {
    ySol -= 2;
  }

  if (ySol > height - 180) {
    goDown = false;
  }

  if (ySol < 0) {
    goDown = true;
  }

  // movimiento continuo del creeper en vertical, de arriba hacia 
  // abajo simulando salir y esconderse en la cueva
  // link:
  // https://www.youtube.com/watch?v=GnhVUdMgS4Y
if (creeperDown == true) {
  yCreeper += 1.5;
} else {
  yCreeper -= 1.5;
}

  // variables que indican los límites de movimiento 
  // del creeper, siendo 500 lo que sube y 680 lo
  // que baja
let limiteArriba = 500;
let limiteAbajo = 680;

if (yCreeper > limiteAbajo) {
  creeperDown = false;
}

if (yCreeper < limiteArriba) {
  creeperDown = true;
}
  
  // escenografia
  
  // que ninguna figura geometrica tenga bordes
  noStroke();             
  
  // pasto
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(71, 122, 30);        
  rect(0, 350, 800, 600);
  
  // tierra
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(146, 108, 77);
  rect(0, 400, 800, 600);
  
  // tronco arbol 1
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(130, 102, 66);
  rect(145, 200, 50, 150);
  
  // tronco arbol 2
  // rectangulo (x, y, weight, height)
  rect(485, 200, 50, 150);
  
  // hojas arbol 1
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(72, 160, 24);
  rect(120, 100, 100, 170);
  rect(60, 170, 220, 100);
  
  // hojas arbol 2
  // rectangulo (x, y, weight, height)
  rect(460, 100, 100, 170);
  rect(400, 170, 220, 100);
  
  // cueva
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(105, 82, 63);
  rect(300, 440, 440, 250);
  
  // bordes cueva
  // fill = color interior (R, G, B)
  // rectangulo (x, y, weight, height)
  fill(146, 108, 77);
  rect(300, 440, 70, 70);
  rect(670, 440, 70, 70);

  // sombra cueva
  // fill = color interior (R, G, B)
  // ellipse (x, y, weight, height)
  fill(79, 65, 55);
  ellipse(520, 600, 350, 250);
  
  // flor 1
  // fill = color interior (R, G, B)
  // ellipse (x, y, weight, height)
  fill(100, 150, 50);
  ellipse(90, 335, 5, 45);
  fill(200, 30, 30);
  ellipse(90, 320, 30, 10);
  ellipse(90, 320, 10, 30);
  
  // flor 2
  // fill = color interior (R, G, B)
  // ellipse (x, y, weight, height)
  fill(100, 150, 50);
  ellipse(400, 340, 5, 45);
  fill(232, 51, 51);
  ellipse(400, 325, 30, 10);
  ellipse(400, 325, 10, 30);
  
  // flor 3
  // fill = color interior (R, G, B)
  // ellipse (x, y, weight, height)
  fill(100, 150, 50);
  ellipse(750, 330, 5, 45);
  fill(200, 30, 30);
  ellipse(750, 310, 30, 10);
  ellipse(750, 310, 10, 30);
  
 // imagen perro, su posicion horizontal en el
 // canvas, su ancho y su alto
 // link:
 // https://mx.pinterest.com/pin/5699937023567782/
image(perro, 140, 275, 130, 130);
  
 // imagen creeper, su posicion horizontal en el
 // canvas, su ancho y su alto
 // link:
 // https://cl.pinterest.com/pin/180636635048389755/
image(creeper, 500, yCreeper, 90, 160);

 // imagen steve, su posicion horizontal en el canvas
 // su ancho y su alto
 // link:
 // https://mx.pinterest.com/pin/40954677858325912/
image(steve, 500, 270, 150, 150);
}