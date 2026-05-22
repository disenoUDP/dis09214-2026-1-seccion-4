let imgflor
let imgcaballo
let xcaballo= 100

//Colocar imágenes en el lienzo
function preload(){ 
// Ref: https://p5js.org/reference/#/p5/preload
  imgflor= loadImage("flor.png");
//Ref:https://p5js.org/reference/#/p5https:/www.pngegg.com/es/png-wzyjf#goog_rewarded
//Autor no especificado
// Imagen editada para sacar el fondo
  
    imgcaballo = loadImage("caballo.png");
//Imagen editada para sacar el fondo 
//https://www.freepik.es/fotos-vectores-gratis/caballo-png
}
 

function setup() {  
//Create canvas: Define  el tamaño de mi lienzo 
  createCanvas(800,600);
  
//Desactiva las líneas d contorno de todas las figuras 
  noStroke();
// Ref:https://p5js.org/reference/#/p5/noStroke
    
     
}
 
function draw() {
//Declarar variación en el tiempo
  let cambio = sin(frameCount * 0.01) * 120;

// background color de lienzo
// Color RGB (135,192,227)
 
//fill define color del cielo
  fill(135,192,227);
//rect dibuja un rectángulo para el cielo
  rect(0,3,800,300)
  
  
//Cambio de color 
//Color RGB: (60,63,201)
    fill(60-cambio,63-cambio,201-cambio);
//rectángulo que quiero que varie de color en el tiempo 
    rect(0,3,800,300)
  
//fill define el color de relleno del cielo 
  fill(181,215,234);
//rect dibuja un rectangulo para el cielo 
  rect(0,220,800,400);
  
//Cambio de color del cielo  
   fill(39-cambio,34-cambio,147-cambio);
   rect(0,220,800,400);

  
  
//NUBES
//Define el color de relleno de las nubes 
//Transparencia de las nubes 
      let Nubes = frameCount % 400;
//Ref: https://p5js.org/reference/#/p5/map
  let brilloCíclico = map(Nubes, 0, 119, 100, 255);
  let transparencia = frameCount % 0;
  fill(255, 255, 255, transparencia);
  fill(255, brilloCíclico);
  if (Nubes < 30) 
  fill(255);
  
  

// (x,y, ancho, altura)
//x,y coordenadas esquina superior izquierda 
//Nube 1
 //rect crea un rectángulo para mi nube 
  rect(0, 50, 350, 30);
// (x,y, ancho, altura)
//Nube 2
//rect crea un rectángulo para mi nube 
  rect(480, 100, 300, 30);
// (x,y, ancho, altura)
//Nube 3
//rect crea un rectángulo para mi nube 
  rect(150, 200, 490, 25);
// (x,y, ancho, altura)
//Nube 4
//rect crea un rectángulo para mi nube 
  rect(0, 260, 150, 20);

  
  
//MONTAÑAS DE ATRÁS 
//fill define el color de relleno de las montañas
  fill(113, 103, 95);
//Ref: https://p5js.org/reference/#/p5/triangle
  triangle(0, 440, 150, 250, 290, 440);
  triangle(290, 440, 435, 250, 560, 440);
  triangle(560, 440, 680, 250, 800, 440);
  
//MONTAÑAS DELANTRE 
//fill define el color de relleno de las montañas
  fill(83,70,62)
//x1,y1,x2,y2,x3,y3
//Puntos necesarios para formar el triángulo
  triangle(-90, 440, 2, 190, 160, 440);
//Montaña 2
  triangle(120, 440, 260, 190, 400, 440);
//Montaña 3 
  triangle(400, 440, 540, 190, 680, 440);
//Montaña 4 
  triangle(680, 440, 800, 190, 930, 440);
  
  
      
//PASTO 
//fill define el color de relleno del pasto
  fill(34, 139, 34);
//rect dibuja un rectángulo para el pasto
//Pasto de más abajo
  rect(0, 450, 800, 150);
//fill define el color de relleno del pasto 
    fill(44, 109, 55);
//Pasto de mas arriba
//rect dibuja un rectángulo para el pasto 
  rect(0, 400, 800, 50);
  

//TIERRA 
//fill define el color de relleno de la tierra
  fill(106, 82, 30);
  
//(x,y, ancho, altura)
//rect crea un rectanángulo para la tierra
  rect(0, 400, 800, 20);
  
  
//SOL
//Ellipse 1
//fill define el color de relleno de la elipse 
  fill(255, 215, 0);
//X,Y establecen el centro 
//W,H establecen el ancho y la altura 
  ellipse(650, 120, 220, 220);
  
//Ellipse 2
//Define el color del sol
// Color RGB (255, 165, 0)
  fill(255, 165, 0);
//Ellipse del centro 
  ellipse(650, 120, 190, 190);
  
  
//Define el color del sol
//Color RGB (255, 120, 50)
  fill(255, 120, 120); 
//Ellipse más pequeña
  ellipse(650, 120, 160, 160);
  
//CAMBIO DE COLOR SOL MÁS PEQUEÑO
//Coloresn en RGB (247,98,15)
    fill(255-cambio,165-cambio,0-cambio);
    ellipse(650, 120, 160, 160);

//Árbol 1
//Define el color de la copa del árbol
//Color RGB(106,165,62)
   fill(106,165,62);
// x1,y1,x2,y2,x3,y3
//Primer árbol de la izquierda
  triangle(50, 350, 100, 150, 150, 350);
//Define el color de relleno del tronco 
//Color RGB(106, 58, 37)
  fill(106, 58, 37);
//(x,y, ancho, altura)
//rect dibuja un rectángulo para el tronco 
  rect(90, 300, 15, 120);
  
  
//Árbol 2
//Define el color de relleno del tronco 
  fill(106,165,62);
//x1,y1,x2,y2,x3,y3
//Segundo árbol de la izquierda 
  triangle(150, 350, 200, 150, 250, 350);
//Define el color de relleno de la copa del árbol
// Color RGB(106, 58, 37)
  fill(106, 58, 37);
//(x,y, ancho, altura)
//rect dibuja un rectángulo para el tronco 
  rect(190, 300, 15, 130);
  
  
//Árbol 3
//Define el color de relleno de la copa del árbol
//Color RGB (106,165,62)
  fill(106,165,62);
//x1,y1,x2,y2,x3,y3
//Árbol de la derecha 
  triangle(650, 350, 700, 150, 750, 350);
//Tronco
//Define el color del tronco
//fill(106, 58, 37);
//(x,y, ancho, altura)
//rect dibuja un rectángulo para el tronco 
  rect(690, 250, 15, 240);
  
//Imágene  
//Caballo en movimiento
   let movimiento = sin(frameCount * 0.02) * 50;
  image(imgcaballo, xcaballo + movimiento, 300, 290, 300);
  
  
//Flor estática 
  let anchoflor=180;
  let altoflor=220;
  image(imgflor, width - anchoflor, height - altoflor, 220, 234); 
  
  
  
  noCursor ();
textSize(29);
text("🐝", mouseX, mouseY);
// noCursor: Oculta el cursor original del mouse
// https://p5js.org/reference/#/p5/noCursor
  
  
  

  
}