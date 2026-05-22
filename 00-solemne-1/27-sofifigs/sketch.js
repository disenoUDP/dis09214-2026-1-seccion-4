//solemne 1
//abstracción geometrica en paleta de rosados
//ref: referencia
//exp: explicación

let imgFija;
let imgMovil;
let posX = 0;
let colorCambio1;
let colorCambio2;
let y=0; 
let speed= 2; 

function preload() {

  imgFija = loadImage("ola.png");
  //ref: https://p5js.org/reference/p5/loadImage/
  //exp: carga una imagen antes de que inicie el programa.
  //parámetros:"ola.png" = nombre del archivo de imagen guardado en el sketch
  //imagen sacada de https://cl.pinterest.com/pin/368802657003062248/

  imgMovil = loadImage("ola2.png");
  //ref: https://p5js.org/reference/p5/loadImage/
  //exp: carga una segunda imagen antes de iniciar el programa.
  //parámetros:"ola2.png" = nombre del archivo de imagen guardado en el sketch
  //imagen sacada de https://cl.pinterest.com/pin/587930926390732342/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //ref: https://p5js.org/reference/p5/createCanvas/
  //exp:crea el lienzo principal.
  // Parámetros:
  // windowWidth = ancho de la ventana
  // windowHeight = alto de la ventana
  
   noCursor();
  //ref: https://p5js.org/reference/p5/noCursor/
  //exp: oculta el cursor original del mouse.

  rectMode(CORNER);
  //ref: https://p5js.org/reference/p5/rectMode/
  //exp: indica que los rectángulos se dibujan desde la esquina superior izquierda.
}
function draw() {
  background(244, 194, 201);
  //ref:https://p5js.org/reference/p5/background/
 //exp:pinta el fondo del lienzo.
  //parámetros: (rojo, verde, azul)
  
  colorCambio1 = map(sin(frameCount * 0.02), -1, 1, 170, 240);
  //ref: https://p5js.org/reference/p5/map/
  //exp: transforma un valor que cambia en el tiempo a un nuevo rango.
  //parámetros:
  //sin(frameCount * 0.02) = valor original que oscila entre -1 y 1
  //-1 = mínimo del rango original
  //1 = máximo del rango original
  //170 = mínimo del nuevo rango
  //240 = máximo del nuevo rango
  
  colorCambio2 = map(cos(frameCount * 0.02), -1, 1, 120, 220);
  //ref: https://p5js.org/reference/p5/map/

    let x = width * 0.2;
  //esto no es un comando de p5.js, es una variable de JavaScript.
  //exp: guarda la posición horizontal inicial del cuadro.

  let y = height * 0.1;
  //esto no es un comando de p5.js, es una variable de JavaScript.
  //exp: guarda la posición vertical inicial del cuadro.

  let w = width * 0.6;
  //esto no es un comando de p5.js, es una variable de JavaScript.
  //exp: guarda el ancho del cuadro principal.

  let h = height * 0.78;
  //esto no es un comando de p5.js, es una variable de JavaScript.
  //exp: guarda el alto del cuadro principal.
  
   fill(52, 24, 38);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: define el color de relleno de las figuras.
  //parámetros: (rojo, verde, azul)

   noStroke();
  //ref: https://p5js.org/reference/p5/noStroke/
  //exp: elimina el contorno de las figuras.
  
  rect(x, y, w, h);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo principal del marco.
  //parámetros:
  //x = posición horizontal
  //y = posición vertical
  //w = ancho
  //h = alto
  
   fill(232, 189, 202);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para la siguiente figura.

  rect(x + w * 0.05, y + h * 0.05, w * 0.9, h * 0.9);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja un rectángulo interior para dejar visible el borde del marco.

  fill(40, 18, 31);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno a un tono más oscuro.

  rect(x + w * 0.08, y + h * 0.08, w * 0.84, h * 0.84);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el fondo interior oscuro donde se organizan las figuras.

  fill(130, 78, 100);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el triángulo superior.
  
  triangle(x + w * 0.10, y + h * 0.08, x + w * 0.25, y + h * 0.08, x + w * 0.175, y + h * 0.18);
  //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja un triángulo invertido en la parte superior izquierda.
  //parámetros:
  //x1, y1 = primer vértice
  //x2, y2 = segundo vértice
  //x3, y3 = tercer vértice

  fill(95, 52, 74);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para los rectángulos pequeños.
  
   rect(x + w * 0.10, y + h * 0.23, w * 0.16, h * 0.12);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el primer rectángulo pequeño del lado izquierdo.
  //parametros: posición x, posición y, ancho, alto

  fill(166, 124, 144);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el segundo rectángulo pequeño.

   rect(x + w * 0.10, y + h * 0.37, w * 0.16, h * 0.12);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el segundo rectángulo pequeño del lado izquierdo.

  fill(colorCambio1, 150, 175);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: aplica un color de relleno que cambia con el tiempo.
  //parámetros:
  //colorCambio1 = valor animado para el canal rojo

   arc(x + w * 0.42, y + h * 0.38, w * 0.28, h * 0.24, HALF_PI, HALF_PI + PI);
  //ref: https://p5js.org/reference/p5/arc/
  //exp: dibuja un arco que forma una media elipse vertical.
  //parámetros:
  //x + w * 0.42 = centro horizontal
  //y + h * 0.38 = centro vertical
  //w * 0.28 = ancho
  //h * 0.24 = alto
  //HALF_PI = ángulo inicial
  //HALF_PI + PI = ángulo final
  
  fill(248, 239, 243);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno a un tono muy claro.
 
  ellipse(x + w * 0.60, y + h * 0.15, w * 0.14, w * 0.14);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la elipse superior.
  //parámetros: centro x, centro y, ancho, alto
  
  fill(247, 238, 242);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el rectángulo claro.

  rect(x + w * 0.50, y + h * 0.24, w * 0.16, h * 0.12);
  //ref: https://p5js.org/reference/p5/rect/
  //exp: dibuja el rectángulo claro del centro superior.
 
   fill(84, 42, 60);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el triángulo grande del lado derecho.

  triangle(x + w * 0.49, y + h * 0.18, x + w * 0.82, y + h * 0.18, x + w * 0.70, y + h * 0.48);
  //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja el triángulo oscuro grande del lado superior derecho.

  fill(colorCambio2, 120, 145);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: aplica un segundo color que cambia con el tiempo.
  //parámetros:
  //colorCambio2 = valor animado para el canal rojo
  //120 = verde
  //145 = azul

  ellipse(x + w * 0.54, y + h * 0.69, w * 0.58, h * 0.28);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja la gran elipse horizontal inferior.
 
  fill(245, 240, 242);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno a blanco rosado.
 
    triangle(x + w * 0.58, y + h * 0.40, x + w * 0.50, y + h * 0.67, x + w * 0.66, y + h * 0.67);
 //exp: dibuja el triángulo vertical del centro.

  triangle(x + w * 0.58, y + h * 0.76, x + w * 0.52, y + h * 0.67, x + w * 0.64, y + h * 0.67);
  //exp: dibuja el triángulo pequeño invertido de la parte inferior.
  //ref: https://p5js.org/reference/p5/triangle/

  fill(210, 176, 188);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el círculo pequeño izquierdo.
  
  ellipse(x + w * 0.16, y + h * 0.58, w * 0.12, w * 0.12);
  //ref: https://p5js.org/reference/p5/ellipse/
  //exp: dibuja una elipse circular pequeña en el lado izquierdo.

  fill(92, 52, 72);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para el triángulo inferior izquierdo.

  triangle(x + w * 0.11, y + h * 0.86, x + w * 0.23, y + h * 0.86, x + w * 0.17, y + h * 0.63);
  //ref: https://p5js.org/reference/p5/triangle/
  //exp: dibuja el triángulo vertical inferior izquierdo.

  fill(250, 244, 246);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: cambia el color de relleno para la media elipse inferior.

  arc(x + w * 0.58, y + h * 0.90, w * 0.28, h * 0.12, PI, TWO_PI);
  //ref: https://p5js.org/reference/p5/arc/
  //exp: dibuja un arco que forma una media elipse en la parte inferior.
  //param: centro x, centro y, ancho, alto, ángulo inicial, ángulo final

  stroke(189, 137, 156);
  //ref: https://p5js.org/reference/p5/stroke/
  //exp: define el color de las líneas.

   strokeWeight(3);
  //ref: https://p5js.org/reference/p5/strokeWeight/
  //exp: define el grosor de las líneas.
  //parámetros:3 = grosor en píxeles

  line(x + w * 0.25, y + h * 0.12, x + w * 0.66, y + h * 0.12);
  //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea horizontal superior.
  //parámetros:
  //x1, y1 = punto inicial
  //x2, y2 = punto final
  
  line(x + w * 0.58, y + h * 0.36, x + w * 0.58, y + h * 0.76);
  //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea vertical en el centro.

  line(x + w * 0.48, y + h * 0.67, x + w * 0.68, y + h * 0.67);
  //ref: https://p5js.org/reference/p5/line/
  //exp: dibuja una línea horizontal corta en la parte media inferior.
 
   noStroke();
  //ref: https://p5js.org/reference/p5/noStroke/
  //exp: elimina el borde antes de dibujar imágenes y cursor.
 
    tint(255, 180);
  //ref: https://p5js.org/reference/p5/tint/
  //exp: aplica transparencia a las imágenes.
  //parámetros:
  //255 = intensidad del color
  //180 = transparencia
  
  image(imgFija, x + w * 0.50, y + h * 0.24, w * 0.20, w * 0.20);
  //ref: https://p5js.org/reference/p5/image/
  //exp: dibuja la imagen fija dentro de la composición.
  //parámetros:
  //imgFija = imagen a dibujar
  //x + w * 0.50 = posición horizontal
  //y + h * 0.24 = posición vertical
  //w * 0.12 = ancho de la imagen
  //w * 0.12 = alto de la imagen
  
   posX = posX + 2;
  //esto no es un comando de p5.js, es una operación de JavaScript.
  //exp: aumenta la posición horizontal para mover la imagen.
  //parámetros:
  //posX = variable de posición
  //+ 2 = velocidad del movimiento
  
   image(imgMovil, posX, y + h * 0.75, w * 0.20, w * 0.20);
  //ref: https://p5js.org/reference/p5/image/
  //exp: dibuja la imagen móvil en una posición que cambia en cada fotograma.
  //parámetros:
  //imgMovil = imagen a dibujar
  //posX = posición horizontal variable
  //y + h * 0.75 = posición vertical fija
  //w * 0.12 = ancho de la imagen
  //w * 0.12 = alto de la imagen
  
    if (posX > width) {
    posX = -100;
  }
  //esto no es un comando de p5.js, es una condición de JavaScript.
  //exp: cuando la imagen sale por la derecha, vuelve a aparecer por la izquierda.

  fill(255, 250, 251);
  //ref: https://p5js.org/reference/p5/fill/
  //exp: define el color del cursor personalizado.

  textSize(28);
  //ref: https://p5js.org/reference/p5/textSize/
  //exp: define el tamaño del texto que se usará como cursor.
 
  textAlign(CENTER, CENTER);
  //ref: https://p5js.org/reference/p5/textAlign/
  //exp: centra el texto horizontal y verticalmente respecto a su posición.
  //parámetros:
  //CENTER = alineación horizontal
  //CENTER = alineación vertical
  
    text("★", mouseX, mouseY);
  //ref: https://p5js.org/reference/p5/text/
  //exp: dibuja una estrella en la posición del mouse para simular un cursor.
  //arámetros:
  //""★" = carácter que se dibuja
  //mouseX = posición horizontal del mouse
  //mouseY = posición vertical del mouse
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  //ref: https://p5js.org/reference/p5/resizeCanvas/
  //exp: ajusta el tamaño del lienzo si cambia el tamaño de la ventana.
}