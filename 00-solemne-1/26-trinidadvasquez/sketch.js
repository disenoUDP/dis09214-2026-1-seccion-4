  function preload() {
  //imagenes
  //https://www.youtube.com/watch?v=fEs4UkxnWDk&t=153s

  gato1 = loadImage("gato.baile.png");
  //https://es.vecteezy.com/png/51693450-un-alegre-gato-bailando-el-tango-en-contra-un-    transparente-fondo-radiante-felicidad-y-encanto-en-sus-jugueton-actitud

  gato2 = loadImage("gato.musica.png");
  //https://mx.pinterest.com/pucapz12/gatitos/

  //gato1 = loadImage (archivo)
  //Variable para insertar imagenes
}

function setup() {
  createCanvas(600, 540);
  //createCanvas espacio de trabajo
  //tamaño del lienzo en el que se trabaja
}
//draw espacio de creacion
function draw() {
  stroke(60); // color del borde
  //stroke para mantener las de los cuadrados
  //https://p5js.org/reference/p5/stroke/

  strokeWeight(1);
  // grosor del borde

  background(0, 0, 0);
  //background fondo con rgb
  //negro igualmente lo vamos a tapar
  //colores con ayuda https://htmlcolorcodes.com/es/

  //SQUARE//

  //colores ordenados de mas oscuro a mas claro

  //COLOR UNO//

  fill(14, 19, 125);
  //fill relleno r,g,b

  //posicionar cuadrados
  //https://p5js.org/reference/p5/square/
  //square (horizontal, vertical, tamaño)
  //crear square aleatorios
  // una bola disco
  //con distintas tonalidades de azul

  square(0, 0, 60);
  square(300, 60, 60);
  square(120, 120, 60);
  square(180, 120, 60);
  square(300, 120, 60);
  square(540, 180, 60);
  square(240, 240, 60);
  square(480, 240, 60);
  square(540, 300, 60);
  square(60, 360, 60);
  square(180, 360, 60);
  square(0, 420, 60);
  square(480, 420, 60);
  square(180, 480, 60);
  square(420, 480, 60);
  square(540, 480, 60);

  //COLOR DOS//

  fill(76, 92, 194);

  square(540, 0, 60);
  square(60, 60, 60);
  square(180, 180, 60);
  square(360, 240, 60);
  square(60, 300, 60);
  square(420, 300, 60);
  square(480, 300, 60);
  square(360, 360, 60);
  square(300, 420, 60);

  //COLOR TRES//

  fill(47, 58, 173);

  square(60, 0, 60);
  square(480, 0, 60);
  square(300, 0, 60);
  square(0, 60, 60);
  square(120, 60, 60);
  square(240, 60, 60);
  square(540, 60, 60);
  square(0, 120, 60);
  square(360, 120, 60);
  square(120, 180, 60);
  square(240, 180, 60);
  square(480, 180, 60);
  square(180, 240, 60);
  square(300, 240, 60);
  square(420, 240, 60);
  square(120, 300, 60);
  square(240, 300, 60);
  square(300, 300, 60);
  square(0, 360, 60);
  square(480, 360, 60);
  square(120, 420, 60);
  square(300, 480, 60);
  square(480, 480, 60);
  square(120, 480, 60);

  //COLOR CUATRO//

  fill(134, 142, 217);

  square(120, 0, 60);
  square(180, 0, 60);
  square(360, 0, 60);
  square(420, 0, 60);
  square(180, 60, 60);
  square(420, 60, 60);
  square(240, 120, 60);
  square(480, 120, 60);
  square(540, 120, 60);
  square(300, 180, 60);
  square(420, 180, 60);
  square(60, 240, 60);
  square(180, 300, 60);
  square(360, 300, 60);
  square(120, 360, 60);
  square(420, 360, 60);
  square(60, 420, 60);
  square(180, 420, 60);
  square(540, 420, 60);
  square(0, 480, 60);
  square(240, 480, 60);

  //COLOR CINCO//

  fill(76, 92, 194);

  square(540, 0, 60);
  square(60, 60, 60);
  square(180, 180, 60);
  square(360, 240, 60);
  square(60, 300, 60);
  square(420, 300, 60);
  square(480, 300, 60);
  square(360, 360, 60);
  square(300, 420, 60);

  //COLOR SEIS//

  fill(209, 192, 250);

  square(240, 0, 60);
  square(360, 60, 60);
  square(480, 60, 60);
  square(60, 120, 60);
  square(420, 120, 60);
  square(0, 180, 60);
  square(60, 180, 60);
  square(360, 180, 60);
  square(0, 240, 60);
  square(120, 240, 60);
  square(540, 240, 60);
  square(0, 300, 60);
  square(240, 360, 60);
  square(300, 360, 60);
  square(540, 360, 60);
  square(240, 420, 60);
  square(360, 420, 60);
  square(420, 420, 60);
  square(60, 480, 60);
  square(360, 480, 60);

  //agrego mas textura
  //cuadrados adentro en otros colores
  //square pequeños

  noStroke();
  //noStroke sin contornear la figura
  //y se vea continua

  //COLOR SIETE//
  fill(6, 26, 92);
  square(430, 490, 40);
  square(490, 430, 40);

  //COLOR OCHO//
  fill(7, 12, 176);
  square(550, 310, 40);
  square(490, 250, 40);
  square(550, 190, 40);

  //COLOR SIETE//
  fill(47, 81, 194);
  square(10, 70, 40);
  square(70, 10, 40);
  square(10, 130, 40);

  //COLOR OCHO//
  fill(160, 174, 235);
  square(430, 10, 40);
  square(370, 10, 40);
  square(430, 70, 40);

  //COLOR ONCE//
  fill(171, 182, 219);
  square(70, 430, 40);
  square(130, 370, 40);

  //STROKE//

  stroke(60);
  //stroke es el color de la linea

  strokeWeight(1);
  //stokeWeight el grosor

  //lineas
  //https://p5js.org/reference/p5/line/
  //line recibe cuatro parámetros que representan
  //dos puntos en el plano
  //line(x1, y1, x2, y2)

  line(0, 30, 600, 30);
  line(0, 90, 600, 90);
  line(0, 150, 600, 150);
  line(0, 210, 600, 210);
  line(0, 270, 600, 270);
  line(0, 330, 600, 330);
  line(0, 390, 600, 390);
  line(0, 450, 600, 450);
  line(0, 510, 600, 510);

  // ELLIPSE//

  //ellipses como luces
  //intencion q se abran y cierren
  //cambiando su color

  noStroke();
  //noStroke para sacar el contorno
  //de las figuras

  //MOVIMIENTO Y COLOR DE ELLIPSE//

  let tamano =
    40 +
    20 *
      //variable let tamano, donde utilizo sin(frameCount * 0.1)
      //para hacer que el tamaño cambie de forma en el tiempo.
      //la figura crece y disminuye constantemente.

      sin(frameCount * 0.5);
  //https://p5js.org/reference/p5/sin/
  let r = map(sin(frameCount * 0.1), -1, 1, 50, 250);
  let g = map(sin(frameCount * 0.2), -1, 1, 80, 250);
  let b = map(sin(frameCount * 0.3), -1, 1, 200, 255);
  //tres variables r, g y b, que corresponden a los colores rojo, verde y azul.
  // En cada una uso la función map() para transformar los valores que van de -1 a 1

  fill(r, g, b);
  //(r,g,b) valores ya integrados anteriormente

  //posiciones elipse (x, y, w)
  //https://p5js.org/reference/p5/ellipse

  ellipse(270, 30, tamano);
  ellipse(390, 90, tamano);
  ellipse(510, 90, tamano);
  ellipse(450, 150, tamano);
  ellipse(390, 210, tamano);
  ellipse(570, 270, tamano);
  ellipse(570, 390, tamano);
  ellipse(450, 450, tamano);
  ellipse(390, 450, tamano);
  ellipse(390, 510, tamano);
  ellipse(270, 450, tamano);
  ellipse(270, 390, tamano);
  ellipse(330, 390, tamano);
  ellipse(30, 330, tamano);
  ellipse(30, 270, tamano);
  ellipse(30, 210, tamano);
  ellipse(90, 210, tamano);
  ellipse(150, 270, tamano);
  ellipse(90, 150, tamano);
  ellipse(90, 510, tamano);

  //image(gato1,x, y, ancho, alto)
  //poner foto
  //https://www.youtube.com/watch?v=fEs4UkxnWDk&t=153s

  image(gato2, 160, 150, 240, 240);

  // GATO 1
  let x1 = 120 + sin(frameCount * 0.1) * 10;
  let y1 = 10 + sin(frameCount * 0.5) * 5;
  image(gato1, x1, y1, 120, 160);

  // GATO 1x2
  let x2 = 390 + sin(frameCount * 0.1) * 10;
  let y2 = 245 + sin(frameCount * 0.5) * 5;
  image(gato1, x2, y2, 120, 160);

  //https://p5js.org/reference/p5/sin/
  //devuelve valores entre -1 y 1
  //sirve para mover el gato1
  //variable frameCount
  //https://p5js.org/reference/p5/frameCount/
  //cuenta cuantos frames, cuadros
  //hace que el movimiento avance en el tiempo

  //CURSOR//

  textSize(30);
  // Tamaño del emoji
  text("✨", mouseX + 10, mouseY);
  // Dibuja el emoji siguiendo el mouse
  // ✨
  //Uso text() para dibujar un emoji en pantalla y
  //reemplazar el cursor.
  //El emoji sigue la posición del mouse usando
  //mouseX y mouseY
  //y su posición con un desplazamiento en X
  //Además, su tamaño con textSize().
  //https://p5js.org/reference/p5/text/
  noCursor();
  //ocultar cursor
  //linea despues del emoji
  //si no no aparece ninguno
}
