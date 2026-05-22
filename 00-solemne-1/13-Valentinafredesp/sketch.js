let tamano;
//let se usa para declarar una variable, que permite almacenar y modificar valores durante la ejecución del programa. let ya era parte de mis apuntes de clase
// variable que guarda el tamaño de la luna (que quise animar y no me gustó)

let ovni;
 // variable que guarda la imagen del ovni
 // ya que usé loadImage https://p5js.org/reference/p5/loadImage/

let vaca
 // variable que guarda la imagen de la vaca, también por loadImage
 //https://p5js.org/reference/p5/loadImage/

let yVaca
 // variable que controla la posición vertical (y) de la vaca
 // así animé una imagen (abducción) :p

let contador = 0;
  // let declara la variable que permite guardar valores 
 // variable que se usa para contar cuántas vacas han sido abducidas

function setup() {

createCanvas(windowWidth, windowHeight);
 // createCanvas crea el lienzo de dibujo
 // parámetros: ancho y alto usando tamaño de la ventana 
 // https://p5js.org/reference/p5/createCanvas/ (y apuntes)
  
ovni = loadImage('ovnis.png');
 // loadImage carga la imagen ovni desde un archivo
 // parámetro: se usa el nombre del archivo guardado
 // https://p5js.org/reference/p5/loadImage/
  
  // link imagen : https://es.pngtree.com/freepng/whimsical-alien-spaceships-and-ufo-clipart_15584223.html
  
  vaca = loadImage('vaca.png');
 // loadImage carga la imagen vaca desde el archivo
 // se ejecutan en setup según lo visto en clases
  
// link imagen: https://es.pngtree.com/freepng/holstein-cow_20610191.html
  
  yVaca = windowHeight - 60  
  // indica la ubicación inicial de la vaca en la parte inferior
  // windowHeight representa la altura de la ventana 
  // https://p5js.org/reference/p5/windowHeight/
  
  console.log(windowWidth, windowHeight);
  // console.log muestra en pantalla (en la consola) el tamaño de la ventana
  // parámetros: ancho y alto de la ventana 
  
  
  noCursor();
  // noCursor oculta el cursor original 
  // permite usar un cursor personalizado  
  // https://p5js.org/reference/p5/noCursor/
  
  
  
  frameRate(60)
  // frameRate indica la cantidad de cuadros por segundo
  // parámetro: 60 FPS  https://p5js.org/reference/p5/frameRate/
  
  tamano = 200
  // asigna el tamaño inicial de la luna
  // valor usado en ellipse de la luna 
  
  

}

function draw() {
  
 let verde = abs((frameCount % 300) - 150);  // let para luz del ovni que varía
  // frameCount cuenta los frames del programa
  // abs convierte valores negativos en positivos para que el color suba y baje
  // https://p5js.org/reference/p5/frameCount/
  // https://p5js.org/reference/p5/abs/
  
  background(10, 20, 60);  // color 1 fondo
  // background define el color de fondo en RGB
  // parámetros: rojo, verde, azul  
  // https://p5js.org/reference/p5/background/
  
  let xBase = windowWidth / 2 - 40;
  // calcula la posición base del ovni en eje X
  // windowWidth representa el ancho de la pantalla
  
  let centroX = xBase + 150;
  // calcula el centro del ovni para alinear elementos
  // se usa para posicionar luz y vaca
  
  yVaca = yVaca - 2;  //vaca sube
  // disminuye la posición Y para hacer que la vaca suba
  // genera animación vertical 
  
 if (yVaca < windowHeight / 6 + 150) {
  contador = contador + 1;
  yVaca = windowHeight - 60;
} // if permite controlar cuándo ocurre una acción según una condición
  // lo uso para crear un loop de abducción 
  //https://p5js.org/reference/p5/if/
  //// se asigna un nuevo valor a yVaca para reiniciar su posición
  
  
///////////////// escena ovni/vaca/luz
  
noStroke();
  // noStroke elimina el borde de las figuras
  // https://p5js.org/reference/p5/noStroke/
  
fill(0, verde, 0, 120);   //color 2 luz ovni
  // fill define el color de relleno con transparencia
  // parámetros: RGB + alpha  
  // https://p5js.org/reference/p5/fill/

triangle(
  centroX, windowHeight / 6 + 150,
  centroX - 100, windowHeight / 1,
  centroX + 100, windowHeight / 1
); // representa la luz del ovni 
   // triangle dibuja un triángulo con 3 puntos (x1,y1,x2,y2,x3,y3)
   // los parámetros definen la punta superior y la base inferior del rayo del ovni
   // https://p5js.org/reference/p5/triangle/
  
    image(vaca, centroX - 40, yVaca, 80, 80);  
 // image dibuja la imagen de la vaca en pantalla
  // parámetros: imagen, posición y tamaño 
  // https://p5js.org/reference/p5/image/
  
image(ovni, windowWidth / 2 - 40, windowHeight / 6 , 300, 300);
   // image dibuja el ovni en el canvas
   // parámetros: posición x,y y tamaño
  //  https://p5js.org/reference/p5/image/
 
  
  
///////////////////////// luna 
  
noStroke();
  // elimina bordes de la luna
  // https://p5js.org/reference/p5/noStroke/
  
  fill(255, 255, 200); // luna color 3
  // fill define el color amarillo claro para la luna
  // parámetros: RGB 
  // https://p5js.org/reference/p5/fill/

  ellipse(  
    windowWidth /6,
    windowHeight/3,   
    tamano,
    tamano);
  // ellipse dibuja una elipse (luna)
  // parámetros: posición y tamaño, luna un poco más arriba del centro horizontal
  // usando las medidas de pantalla
  // https://p5js.org/reference/p5/ellipse/
  
  
  
///////////////////estrellas
  
  fill(255); //  color 4
  // fill define color blanco con sólo un parámetro
  // usado para la estrella más alta

ellipse(600, 80, 5, 5);
  // estrella 1 (posición fija) 
  // ellipse para dibujarla

  fill(200, 100, 255); // color 5
  // fill define color morado claro
  // RGB personalizado 
  
ellipse(300, 150, 5, 5);
   // estrella 2 (posición fija) 
   // ellipse para dibujarla

    fill(255, 100, 100);  // color 6
  // fill define color rosado
  // RGB personalizado
  
ellipse(800, 300, 5, 5);
   // estrella 3 (posición fija) 
   // ellipse para dibujarla
  
  
  
  
//////////////////nube(?

  
 fill(200, 200, 230); // color 7 
 // fill color claro de nube
  // RGB personalizado
  
ellipse(150, 100, 60, 40);
ellipse(180, 100, 60, 40);
   // dos elipses forman una nube
  // ubicados de manera q queden juntos usando medidas de ventana
  
 fill(150, 150, 150); //color 8 
  // fill color gris nube
  // RGB personalizado
  
ellipse(windowWidth - 150, 180, 60, 40);
ellipse(windowWidth - 120, 180, 60, 40);
  // dos elipses forman una segunda nube
  // ubicados de manera q queden juntos usando las medidas de ventana
  
  
  
  ///////////////////edificios
  
  // edificio derecha se ilumina con la luz ovni
  
 fill(10 + verde/5, 10 + verde/5, 20 + verde/5);   //color 9
  // fill cambia color del edificio según la luz del ovni
  // usa variable verde para efecto dinámico

rect(windowWidth / 2 + 200, 400, 160, 500);
   // rect dibuja edificio derecho que se ilumina
  // parámetros: x, y, ancho, alto 
  // https://p5js.org/reference/p5/rect/

// edificios izquierda
  
  fill(20, 20, 40); //color 10
  // fill() color edificios izquierdos
  // RGB oscuro
  
rect(windowWidth / 2 - 600, 600, 300, 400);
rect(windowWidth / 2 - 240, 670, 80, 300);
  // rect dibuja edificios
  // los parámetros se ajustan para que queden cercanos
  
  
  
  /////////////////////// cursor alien

textSize(50);
  // textSize define tamaño del texto (emoji del mouse)
  // parámetro: tamaño en píxeles
  // https://p5js.org/reference/p5/textSize/
  
text("👽", mouseX, mouseY);
  // text dibuja emoji como cursor personalizado
  // mouseX y mouseY son coordenadas del cursor 
  // https://p5js.org/reference/p5/mouseX/
  
  textSize(20);
  // textSize define el tamaño del texto abducción en píxeles 
 // parámetro: 20 indica el tamaño del texto
  
fill(0, 255, 0);
  // fill define el color del texto RGB (verde)
  
text("Vacas abducidas: " + contador, 100, 500);
  // text dibuja un texto en la pantalla en una posición específica
  // parámetros: contenido del texto y coordenadas x=100, y=500
  
  
  //fin!
  
}