let imgnube;
let imgbarco;
let xnube = 300;

function preload() {
  imgnube = loadImage("nube.png");
// Fuente: Vecteezy
// Autor: No especificado en la página
// Link: https://es.vecteezy.com/png-gratis/nubes-3d
  imgbarco = loadImage("barco.png");
// Fuente: Vexels
// Autor: No especificado en la página
// Link: https://es.vexels.com/png-svg/vista-previa/239230/color-del-faro-nautico-3-1

}

function setup() {
  
// Create Canvas: Define el tamaño del fondo en el que estoy dibujando
// Parámetros: ancho=800 alto=600
// https://p5js.org/reference/#/p5/createCanvas
createCanvas(800, 600);
}

function draw()  {
  background(171, 175, 213);
// background: Establece el color del fondo de mi dibujo
// Parámetros: Colores en RGB (171,175,213)
// https://p5js.org/reference/#/p5/background
  
let cambio = sin(frameCount * 0.02) * 30;
  
noStroke();
// noStroke: Elimina los bordes de las figuras que se dibujan en el canvas
// https://p5js.org/reference/#/p5/noStroke

  //RECT 1
fill(193, 188, 220);  
// fill: Se usa para definir el color del relleno de las figuras en mi dibujo
// Parámetros: Colores en RGB(193,188,220)
// https://p5js.org/reference/#/p5/fill 
  

rect (0, 0, 800, 150);
// Rect: Dibuja el cielo de mi paisaje usando un rectángulo
// Parámetros: x=0, y=0 (ubicacion), ancho=800, alto=150 (tamaño)
// https://p5js.org/reference/#/p5/rect
  
fill(193-cambio, 188- cambio, 200-cambio);
rect (0,0,800,150);
    
 //MONTAÑA 1
fill (120, 110, 170);
triangle (400,130,100,300,600,300); 
// triangle: Dibuja una montaña por medio de la creación de un triángulo
// Parámetros: x1=400, y1=130, x2=100, y2=300, x3=600, y3=300
// https://p5js.org/reference/#/p5/triangle
    
  
 //MONTAÑA 2
fill (65, 83, 157);
triangle (600,150,300,300,800,300); 

//MONTAÑA 3
fill (65, 83, 130);
triangle (750,170,650,300,900,300); 
  
 //BORDE SOL
  fill(194, 97, 140);
ellipse (200,170,110,110);
// ellipse: Dibuja un círculo que representa el borde del sol en mi dibujo
// Parámetros: x=200, y=170 (ubicación), ancho=110, alto=110 (tamaño)
// https://p5js.org/reference/#/p5/ellipse  
  
 //SOL
  fill(184, 102, 138);
ellipse (200,170,100,100);
// ellipse: Dibuja un círculo que representa el sol en mi dibujo
// Parámetros: x=200, y=170 (ubicación), ancho=100, alto=100 (tamaño)
// https://p5js.org/reference/#/p5/ellipse 

  
 //SOL CAMBIO
fill(184-cambio, 102- cambio, 138-cambio);
ellipse (200,170,100,100);
  
 //RECT 4
fill(68, 106, 179);  
rect (0, 300, 800, 900);
// Rect: Dibuja el mar de mi paisaje usando un rectángulo
// Parámetros: x=0, y=300 (ubicacion), ancho=800, alto=900 (tamaño)
// https://p5js.org/reference/#/p5/rect
  
 //RECT 4 CAMBIO
fill (68-cambio,106-cambio,179-cambio);
rect (0,300,800,900);
  
  //RECT 3
fill(78, 122, 187);  
rect (0, 300, 800, 100); 
noStroke ();
// Rect: Dibuja el mar de mi paisaje usando un rectángulo
// Parámetros: x=0, y=300 (ubicacion), ancho=800, alto=100 (tamaño)
// https://p5js.org/reference/#/p5/rect  

  
 //BASE BARCO
fill(32, 42, 81);
rect(100,390,100,20);
// Rect: Dibuja la base de mi barco usando un rectángulo
// Parámetros: x=100, y=390 (ubicacion), ancho=100, alto=20 (tamaño)
// https://p5js.org/reference/#/p5/rect
  
 //VELA BARCO IZQ   
fill(173, 175, 220);
triangle(110,390,150,390,130,330);
// triangle: Dibuja una vela en el barco por medio de la creación de un triángulo
// Parámetros: x1=110, y1=390, x2=150, y2=390, x3=130, y3=330
// https://p5js.org/reference/#/p5/triangle
  
 //VELA BARCO DER   
fill(218, 219, 240);
triangle(150,390,190,390,170,350);
// triangle: Dibuja la otra vela en el barco por medio de la creación de un triángulo
// Parámetros: x1=150, y1=390, x2=190, y2=390, x3=170, y3=350
// https://p5js.org/reference/#/p5/triangle

  
  
 //BASE BARCO LEJANO
fill(32, 42, 81);
rect(700,290,50,15);
// Rect: Dibuja la base de mi barco mas lejano, usando un rectángulo
// Parámetros: x=700, y=290 (ubicacion), ancho=50, alto=15 (tamaño)
// https://p5js.org/reference/#/p5/rect
  
 //VELA BARCO IZQ   
fill(218, 219, 240);
triangle(705,290,725,290,715,270);
// triangle: Dibuja una vela en el barco por medio de la creación de un triángulo
// Parámetros: x1=705, y1=290, x2=725, y2=290, x3=715, y3=270
// https://p5js.org/reference/#/p5/triangle 
  
 //VELA BARCO DER   
fill(218, 219, 240);
triangle(725,290,745,290,735,250);
// triangle: Dibuja una vela en el barco por medio de la creación de un triángulo
// Parámetros: x1=725, y1=290, x2=745, y2=290, x3=735, y3=250
// https://p5js.org/reference/#/p5/triangle

 //LUCES BARCO 1 
if (frameCount % 40 < 20) {
// frameCount: Crea un efecto de parpadeo en las luces del barco, usando el operador módulo
// frameCount % 40 genera un ciclo de 40 frames (repeticiones)
// https://p5js.org/reference/#/p5/frameCount

  fill(255);
} else {
  fill(100);
}
ellipse(135,400,5);
ellipse(150,400,5);
ellipse(165,400,5);
  
 //LUCES BARCO 2 
if (frameCount % 60 < 30) {
fill (200);
} else {
  fill(80);
}
ellipse(715,297,4);
ellipse(725,297,4);
ellipse(735,297,4);


 // NUBE EN MOVIMIENTO SUAVE
let movimiento = sin(frameCount * 0.02) * 50;
image(imgnube, xnube + movimiento, 10, 140, 90);
//Genera un movimiento repetitivo en mi nube, con direccion horizontal. 
  
  // BARCO FIJO ABAJO A LA DERECHA
let anchobarco=250;
let altobarco=250;
  image(imgbarco, width - anchobarco, height - altobarco, 210, 230); 
  
// image: Posiciona una imagen en el canvas
// Parámetros: imagen, x= 300, y=30 (ubicación) ,ancho=210 ,alto=230 (tamaño)
// https://p5js.org/reference/#/p5/image

noCursor ();
textSize(35);
text("🛳️", mouseX, mouseY);
// noCursor:Oculta el cursor original del mouse
// No tiene parámetros
// https://p5js.org/reference/#/p5/noCursor
  
  
  
  
  
  
  
  
}