//SOLEMNE 1 AMANDA DE LA FUENTE//


//posiciones variables
let yBase = 150; 
let colorFondo;
let colorNube = 225;
let tonoVerde = 100;
let oveja_movimineto;
// Fuente: Pngtree
// Autor: Amirul
// Link: https://es.pngtree.com/so/imagen-de-oveja-trasera




//imagenes declaradas aquí
//esto es para que despues el programa pueda encontrarlas
//facilmente entre mis archivos
function preload() {
  imagen = loadImage('oveja_2.png'); 
  ovejanegra = loadImage("ovejanegra.png")
  ovejabebe = loadImage("oveja_bebe.png")
  oveja_movimiento = loadImage ("oveja_caminando.png")
}


function setup() {
  //aqui decido el tamaño de mi lienzo
  //ancho=750 alto=400
  createCanvas(750, 400);
  
  
  
}

function draw() {
  //aqui puedo ubicar las fromas, imagenes y demas que quiera en mi lienzo
  
  
  //color verde del suelo
  //que cambia a un color mas claro
  background(135, 206, colorFondo);
  
 

  
  
  //ocultar cursor, para luego reemplazarlo
noCursor();
  //https://p5js.org/reference/p5/noCursor/
  
  
  //tamaño del cursor nuevo
  textSize(25); 
  //ubicacion del emoji 
text("🥬", mouseX, mouseY);
  //https://p5js.org/reference/p5/cursor/
  
  
  
  
  
  //cambio de color del fondo, rectangulo
  //inferior, entre 100 y 250 velocidad 0.02
  colorFondo = map(sin(frameCount * 0.02), -1, 1, 100, 250);
   //https://p5js.org/es/reference/#/p5/map
  
  
  //esto es para todas las figuras esten sin la linea
  //de contorno negra
  noStroke();
  //tps://p5js.org/reference/p5/noStroke/
  
  
//cielo azul claro
  fill(174, 224, 252);
  rect(0, 0, 752, 300);
  // https://p5js.org/reference/#/p5/rect
  
  
  // rectangulo pasto claro
  fill(50, 150, 50); 
  rect(0, 210, 750, 90);
  // https://p5js.org/reference/#/p5/rect
  
  
  // cambio de valores en
  //la nube 1, cambie constantemente entre 150 y 255
  //a la velocidad de 0.05
colorNube = map(sin(frameCount * 0.05), -1, 1, 189, 255);
  //https://p5js.org/es/reference/#/p5/map
  
  
  //nube 5 cuadrada
  //esat ubicada aca para que quede
  //por debajo de la nube que cambia de color
  fill(88, 161, 199);
  square(200, 60, 55, 20);
  https://p5js.org/reference/p5/square/
  
  
// nube 1 que cambia de color 
fill(colorNube, colorNube, 255); // Cambiará entre tonos de blanco y azul claro
ellipse(150, 80, 120, 60);
  //https://p5js.org/reference/p5/ellipse/
  
  // nube 2
  fill(255, 255, 255, 200);
  ellipse(550, 50, 160, 70);
  //https://p5js.org/reference/p5/ellipse/
  
  // nube 3
  fill(255, 255, 255, 150);
  ellipse(350, 100, 80, 40);
  //https://p5js.org/reference/p5/ellipse/
  
  //nube 4 cuadrada
  fill(88, 161, 199);
  square(428, 15, 55, 20);
  https://p5js.org/reference/p5/square/
  
   
  
  

  
  
  //montaña (derecha)
  fill(80, 80, 100); 
  triangle(400, 200, 750, 200, 650, 120);
  //https://p5js.org/reference/p5/triangle/
  
  //montaña (Centro)
  fill(90, 90, 110); 
  triangle(200, 200, 500, 200, 350, 130);
  //https://p5js.org/reference/p5/triangle/
  
  
  // bosque
  // bosque verde, con color dinamico 
  fill(34, tonoVerde, 34); 
  rect(0, 180, 750, 30);
  // https://p5js.org/reference/#/p5/rect
  
  //sol a la esquina izquierda
  fill(255, 250, 107);
  ellipse(40,40,50,50);
  //https://p5js.org/reference/p5/ellipse/
  
  
  //imagenes de las ovejas
  //x, y, alto, ancho
 
  image(imagen, 550,200,100,100);
  // Fuente: Pngtree
// Autor: Pixel Art
// Link: https://es.pngtree.com/so/oveja
  //https://p5js.org/reference/p5/image/
  
  
 //Si el mouse está sobre la imagen, restamos un poco a la Y
  //esto es para lograr que la imagen de las ovejas
  //se muevan al pasar el cursor por encima
if (mouseX > 200 && mouseX < 300 && mouseY > 150 && mouseY < 250) {
  yDinamica = yBase - 20; // Salto de 20 píxeles
} else {
  yDinamica = yBase; // Vuelve a la posición original
}
  //https://p5js.org/reference/p5/if/
  
  
  
 //imagen de las ovejas con la variable
  //dinamica del mouse
image(ovejanegra, 200, yDinamica, 100, 100);
// Fuente: Pngtree
// Autor: AI World
// Link: https://es.pngtree.com/freepng/suffolk-sheep-isolated-on-a-transparent-background_21229448.html
  
image(ovejabebe, 400, yDinamica, 100, 100);
// Fuente: Pngtree
// Autor: Roxy
// Link: https://es.pngtree.com/freepng/image-of-a-sheep_19959533.html
  
    
   //cambio de cursor a emoji
  //textSize es el tamaño del emoji
  textSize(25); 
  //ubicacion del emoji 
text("🥬", mouseX, mouseY);
  //https://p5js.org/reference/p5/cursor/
  
  
//oveja caminando en movimineto vertical
  //que venga y vuelva en posicion vertical
let movimiento = sin(frameCount * 0.20) * 20;
  //esto es para medir que tan rapido se va a mover
  let velocidad = 5;
  //la ubicacion de la x cambia en que posicion
  //horizotal se va a encontrar
  let x = 90
 image(oveja_movimiento, x + movimiento, 200, 120, 120);
  //tps://p5js.org/reference/p5/frameCount/
  
  }
