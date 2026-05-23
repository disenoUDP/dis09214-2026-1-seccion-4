// Solemne 02
// Pensamiento computacional
// Trinidad Vasquez Cabrera
// 22-05-2026
// Creado con p5.js version

// Obra tomada como referencia:
// Album cumbia chilombiana
// 2006
// por la banda chilena Chico Trujillo
// cover 'Medallita'
// cancion original de Calixto Ochoa
// Mi respuesta usa movimiento en la flor
// al tocar se reproduce Medallita
// y el cursor sea una medallita

// Declarar variables

// codigo de Alejandro Fernandez //
// gitHub piromantiixo
// estudiante de la seccion de Matias Serrano
// p5js https://share.google/y3TbRblLPjZJJi020
// Para integrar la cancion

//////////////////
// let cancion; //
//////////////////

// cargar cancion
// upload file

// let crea una variable

// let lo uso para guardar la canción
// Variable para la musica
let medallita;

// cargar imagenes
// upload file

// let lo uso para guardar la imagen del hombre
// Variable imagen hombre
let hombre;

// let lo uso para guardar la imagen de la flor
// variable imagen flor
let flor;

// quiero que hombre sea la imagen del hombre
// quiero que flor sea la imagen de la flor

// codigo usado en la anterior solemne
// https://www.youtube.com/watch?v=fEs4UkxnWDk&t=153s

// preload carga archivos antes de iniciar el programa
// La uso para asegurar que imagenes y musica carguen bien

function preload() {
  // loadImage carga una imagen.
  // https://p5js.org/reference/p5/loadImage/

  // La uso para que hombre sea esa imagen
  // variable = loadImage ('nombre.png')
  // https://kolala.cl/product/chico-trujillo-cumbia-chilombiana/
  // recortada en
  // https://www.photoroom.com/es/tools/background-remover
  hombre = loadImage("hombre.png");

  // La uso para que flor sea esa imagen
  // variable = loadImage ('nombre.png')
  // https://es.vecteezy.com/foto/23458300-plumeria-flor-aislado-ilustracion-ai-generativo
  // recortada en
  // https://www.photoroom.com/es/tools/background-remover
  flor = loadImage("flor.png");

  // codigo de Alejandro Fernandez //
  // gitHub piromantiixo
  // estudiante de la seccion de Matias Serrano
  // p5js https://share.google/y3TbRblLPjZJJi020

  ///////////////////////////////////
  //soundFormats("mp3");           //
  //cancion = loadSound("sdi.mp3");//
  //}                              //
  ///////////////////////////////////

  // soundFormats define el formato de audio.
  // La uso para indicar que el audio es mp3.
  // https://p5js.org/reference/p5/loadSound/
  soundFormats("mp3");

  // cargar cancion
  // loadSound carga un archivo de sonido
  // La uso para importar que medallita es ese sonido
  medallita = loadSound("medallita.mp3");
}

function setup() {
  // quiero que el cursor original sea una medallita
  // asi que oculto el cursor con noCursor ();
  // luego de que posicione todo
  // defino el emoji y tamaño
  // si no, no se vera
  // https://p5js.org/reference/p5/noCursor/
  noCursor();

  // createCanvas crea el espacio de dibujo
  // formato libre
  createCanvas(500, 540);
}

function draw() {
  // quiero que el fondo sea amarillo
  // color generado en
  // https://htmlcolorcodes.com/es/
  // background (r, g, b);
  background(255, 216, 43);
  // lineas para crear el fondo
  // manteniendo colores del album

  // for repite varias veces
  // crear lineas paralelas
  // Repite mientras x sea menor que el ancho
  // x comienza en 0 y avanza de 30 en 30.
  for (let x = 0; x < width; x += 30) {
    // color lineas
    // stroke cambia el color de las líneas
    // https://p5js.org/reference/p5/line/
    stroke(237, 198, 17);

    // strokeWeight cambia el grosor de línea
    // grosor
    strokeWeight(8);

    // line dibuja una línea
    // para el fondo
    // line(x1, y1, x2, y2)
    // x = posición horizontal
    // y = posición vertical
    line(x, 0, x, height);
  }

  // imagen hombre
  // image (imagen que quiero mostrar, posicion horizontal,
  // posicion vertical, ancho de la imagen. alto de la imagen)
  // https://p5js.org/reference/p5/image/
  image(hombre, 5, 67, 490, 500);

  // Quiero que la flor rote en su eje

  // codigo chat gpt //
  ////////////////////////////////////////
  // prompt                             //
  // quiero que flor gire               //
  // en su mismo eje como rotando       //
  // respuesta                          //
  // push();                            //
  // translate(255, 145);               //
  // rotacion                           //
  // rotate(frameCount * 0.03);         //
  // imageMode(CENTER);                 //
  // image(flor, 110, 110, 110, 110);   //
  // pop();                             //
  // }                                  //
  ////////////////////////////////////////

  // push guarda la configuración actual
  // Lo uso para que la rotación no afecte todo
  // https://p5js.org/reference/p5/push/?utm_source=
  push();

  // mover punto al centro de la flor
  // translate mueve el punto de origen
  // centro la flor antes de girarla
  translate(255, 175);

  // rotate rota elementos
  // Lo uso para hacer girar la flor
  // https://p5js.org/reference/p5/rotate/
  // frameCount genera movimiento automático
  // * significa multiplicar
  // (frameCount * velocidad)
  rotate(frameCount * 0.08);

  // imageMode cambia el punto de referencia
  // Lo uso para dibujar desde el centro
  // sin el imageMode (CENTER)
  // la flor gira alrededor del punto
  // no en el punto
  imageMode(CENTER);

  // image dibuja la flor
  // La uso para mostrar la flor girando
  image(flor, 0, 0, 110, 110);

  // pop recupera la configuración anterior
  // Lo uso para volver a la posición normal
  pop();

  // defino emoji y tamaño del cursor

  // quiero un cursor de medallita
  // tamaño del emoji
  // https://p5js.org/reference/p5/text/
  textSize(50);

  // dibujar emoji siguiendo el mouse
  // Uso text() para dibujar un emoji
  text("🏅", mouseX, mouseY);
}

// codigo de Alejandro Fernandez //
// gitHub piromantiixo
// estudiante de la seccion de Matias Serrano
// p5js https://share.google/y3TbRblLPjZJJi020
// Para integrar la cancion
////////////////////////////////
// function mousePressed() {  //
// if (!cancion.isPlaying()) {//
// cancion.play();            //
// cancion.setVolume(0.5);    //
// } else {                   //
// cancion.pause();           //
// }                          //
////////////////////////////////

// quiero que al presionar el mouse
// inicie la cancion pero que no pare
// mousePressed detecta un click
// Lo uso para iniciar la música
function mousePressed() {
  // if toma decisiones
  // Lo uso para revisar si la canción ya suena
  // https://p5js.org/examples/conditionals-if-else/

  // cancion.isPlaying()
  // pregunta si la canción está sonando.
  // ! significa no
  // si la canción NO está sonando
  if (!medallita.isPlaying()) {
    // medallita es el audio
    // .play() significa reproducir
    // reproducir medallita
    medallita.play();
    // setVolume cambia el volumen del sonido
    // 0.5 = volumen al 50%
    medallita.setVolume(0.5);

    // elimine else porque no quiero que pare
    // solo que termine la cancion
    // else {
    // cancion.pause();
  }
}
