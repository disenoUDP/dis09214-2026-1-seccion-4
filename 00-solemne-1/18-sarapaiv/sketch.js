//para poner imagen estatica
let img;
//let es para indicar algo
let x = 0;


function preload() {
  img = loadImage("HASMTER2.png");
  //para cargar imagen estatica
  
}
function preload() {
  img = loadImage("HASMTER2.png");
  //para cargar imagen en movimiento
}
// crear lienzo
function setup() {
  createCanvas(400, 400); 
  //tamaño del lienzo
noCursor();
  //borra el cursor original, sin parametros
textSize(60);
  //ref: https://p5js.org/reference/p5/noCursor/
  //exp: oculta el cursor original del mouse.


}
//pintar fondo
function draw() {
  //cambiar color de fondo en bucle
  let t=(sin(frameCount * 0.05) + 1);
  
  // cielo azul oscuro
  background(6,3,83*t);
  // parametros. color rgb
  noStroke();
  //para que el rectangulo no tenga contorno
// franjas del cielo
fill(9,3,166); 
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno.
  //para rellenar rectangulo
rect(0,100,width,100);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  
fill(2,69,224);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno.
  //para rellenar rectangulo
rect(0,200,width,200);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
 
  //luna
  fill(255);
  //color de ellipse
  
  ellipse(200,110,120,120);
  //tamano y ubicacion de ellipse
  
  //nubes
  fill(255);
  //color ellipse
  ellipse(70,50,40,30);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  ellipse(350,60,35,30);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  ellipse(250,30,10,10);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  ellipse(50,150,40,30);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  ellipse(300,150,10,10);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  ellipse(80,100,10,10);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto


  image(img, 100, 60);
  //ubicacion imagen estatica
  
  //estrellas amarillas
  noStroke();
   //ref: https://p5js.org/reference/p5/noStroke/
  //exp: elimina el contorno de las figuras.
  fill(255,230,0);
  //color rectangulo relleno
  rect(30,30,40,20);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  rect(50,150,70,20);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  rect(80,90,70,50);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  rect(230,55,70,20);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  rect(350,40,30,20);
    //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  rect(245,120,60,10);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  
  
  
  //montañas
  fill(120);
  //relleno triangulo color
  triangle(-10,400,100,250,250,400);
  //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja un triángulo
  //parámetros:
  //x1, y1 = primer vértice
  //x2, y2 = segundo vértice
  //x3, y3 = tercer vértice
  triangle(150,400,300,200,450,400);
   //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja un triángulo
  //parámetros:
  //x1, y1 = primer vértice
  //x2, y2 = segundo vértice
  //x3, y3 = tercer vértice
  fill(255);
  //color relleno triangulo
  triangle(250,350,100,250,250,400);
   //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja un triángulo
  //parámetros:
  //x1, y1 = primer vértice
  //x2, y2 = segundo vértice
  //x3, y3 = tercer vértice
  triangle(450,400,300,200,600,400);
 //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja un triángulo
  //parámetros:
  //x1, y1 = primer vértice
  //x2, y2 = segundo vértice
  //x3, y3 = tercer vértice  
  //sombras montañas
  fill(80);
  triangle(-10,400,85,270,210,400);
  triangle(150,400,283,220,420,400);
  //
  fill(171,125,99);
  triangle(0,400,200,310,400,400);
  fill(92,58,40);
  triangle(0,400,177,320,350,400)
  //referencia: https://p5js.org/reference/p5/triangle/
  
  //LINEAS CIELO
  stroke(255); //blanco
  //crear contorno linea
  line(100, 20, 350, 150);
    //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea.
  //parámetros:
  //x1, y1 = punto inicial
  //x2, y2 = punto final
  line(100,100,300,200)
      //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea.
  //parámetros:
  //x1, y1 = punto inicial
  //x2, y2 = punto final
  line(110,60,300,170)
      //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea.
  //parámetros:
  //x1, y1 = punto inicial
  //x2, y2 = punto final
 
  //cuadrado piso
  noStroke();
   //ref: https://p5js.org/reference/p5/noStroke/
  //exp: elimina el contorno de las figuras.
  fill(116,194,0);
  //relleno rectangulo
  rect(0,380,400,200);
   //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  
  text("🦄",mouseX,mouseY);
  //  //ref: https://p5js.org/reference/p5/text/
  //exp: dibuja una estrella en la posición del mouse para simular un cursor.
  //arámetros:
  //"unicornio" = carácter que se dibuja
  //mouseX = posición horizontal del mouse
  //mouseY = posición vertical del mouse
  
  x += 2; // velocidad
  //parametros velocidad de movimiento

  // cuando sale de la pantalla vuelve al inicio
  if (x > width) {
    x = -100; // empieza fuera de la pantalla
  }

  image(img, x, 150, 100, 100);
  //ubicacion de imagen en movimiento

  image(img, x, 150, 100, 100);
  //ubicacion imagen en movimiento

}
