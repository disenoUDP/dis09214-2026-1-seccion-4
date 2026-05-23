//Canción "Yo digo que las estrellas" de Silvio Rodríguez.

//Las estrellas no brillan igual todo el tiempo, igual que
//las personas. Las estrellas  sólo son visibles en la
//oscuridad, en las adversidades.
//La canción habla de la esencia de cada uno, de rechazar la
//falsedad.
//Genera calma, aceptación y empoderamiento; de
//andar sin escudos por la vida.

//Variable para declarar canción.
//function preload() es una función para precargar la música.
//soundFormats() es para elegir el fotmato de la canción.
//Mencionar el nombre de la canción tal cual está guardada.
//https://share.google/y3TbRblLPjZJJi020
let canción;
function preload() {
  soundFormats("mp3");
  canción = loadSound("Yo Digo Que las Estrellas.mp3");
}

//https://p5js.org/reference/p5/let/
//let ángulo=0 es una variable que indica que inicia en la posición original.
let estrellas;
let ángulo = 0;

function setup() {
  //Utiliza windowWidth y windowHeight para que el lienzo
  //ocupe todo el ancho y el alto de la pantalla.
  createCanvas(windowWidth, windowHeight);
  background(10, 17, 26);

  //createGraphics crea un lienzo oculto del alto y ancho de
  //la pantalla y lo guarda dentro de la
  //variable "estrellas", declarada anteriormente.
  //Este lienzo guarda las 700 estrellas.
  //https://p5js.org/reference/p5/createGraphics/
  estrellas = createGraphics(width, height);

  //https://p5js.org/reference/p5/for/
  //for es un bucle utilizado para crear las 700 estrellas.
  //let i=0;  indica que se comienza a contar desde 0.
  //i< 700; indica que el bucle se ejecutará mientras i sea
  //menor a 700.
  //Cuando i llegue a 700 el bucle se detiene.
  //i++ significa que se le suma 1 al valor actual.
  //Si el número es menor, la cantidad de estrellas disminuiría
  //y el lienzo se vería muy vacío.
  //Si el número es mayor, la cantidad de estrellas aumenta y no s3
  //logra distinguir con claridad cada estrella.
  //700 es un número en el cual las estrellas logran distinguirse
  //con claridad.
  //let x declara una variable para coordenadas
  //horizontales(ancho de la pantalla).
  //random indica que se elige un número aleatorio entre 0 y
  //el ancho de la pantalla.

  //let y declara una variable para las coordenadas
  //verticales (alto de la pantalla).
  //random indica que se elige un número aleatorio desde 0 y
  //el alto de la pantalla.

  //dist calcula la distancia entre dos puntos.
  //https://p5js.org/es/reference/p5/dist/
  //x,y son las coordenadas actuales de las estrellas.
  //width / 2, height / 2 divide el ancho y el alto de la
  //pantalla para dar con el centro de ella.
  for (let i = 0; i < 700; i++) {
    let x = random(width);
    let y = random(height);
    let distancia = dist(x, y, width / 2, height / 2);

    //https://p5js.org/reference/p5/if/
    //if indica que si la distancia es menor a 0.3
    //dibuje una estrella, pero si la distancia es
    //mayor a 0.3, la estrella no se dibujará.
    //distancia es la variable que utilicé para calcular la
    //separación entre las estrellas y el centro del lienzo.
    //width*0.3 multiplica el ancho de la pantalla por el 0.3
    //de esta.
    //Define un radio desde el centro de la pantalla.
    //Mientras mayor sea el número, más grande será el radio.
    //let alpha es una variable para declarar la opacidad
    //de las estrellas.
    //https://p5js.org/es/reference/p5.Color/setAlpha/
    //map toma la distancia actual y la convierte en
    //valor de transparencia.
    //https://p5js.org/es/examples/calculating-values-map/
    //33 es el valor de opacidad que llega hasta 0.
    //33 es un valor que deja ver las estrellas que
    //están detrás una de otra.
    //Mientras mayor sea el número, mayor la saturación.
    //noStroke() quita el contorno de todas las estrellas.
    //https://p5js.org/reference/p5/noStroke/

    //https://p5js.org/reference/p5/fill/
    //fill  (204,163, 122) son los valores para darle color a
    //las estrellas.
    //alpha es el que le da la opacidad a cada una según su
    //posición.
    //estrellas.ellipse ubica el círculo formado por todas las estrellas
    //en coordenadas aleatorias con un  radio entre 20 y 60 pixeles.
    if (distancia < width * 0.3) {
      let alpha = map(distancia, 0, width * 0.3, 33, 0);
      estrellas.noStroke();
      estrellas.fill(204, 163, 122, alpha);
      estrellas.ellipse(x, y, random(20, 60));
    }
  }
}

function draw() {
  //background(10, 17, 26,) color del lienzo.
  //13 es el valor de opacidad que permite distinguir de mejor
  //manera una estrella de otra.
  //Mientras mayor sea el número, mayor será la opacidad.

  //image(estrellas) coloca el lienzo oculto con
  //las 700 estrellas creado anteriormente
  //y lo coloca en las coordenadas (0,0).
  background(10, 17, 26, 13);

  //Guarda el estado original.
  //https://p5js.org/reference/p5/push/
  push();

  //El centro de mi lienzo coincide con el centro del círulo de estrellas.
  //https://p5js.org/es/reference/p5/imageMode/
  imageMode(CENTER);

  //Origen en el centro del lienzo.
  //Toma el ancho y el alto de mi lienzo y lo divide en dos
  //para dar con el centro.
  //https://p5js.org/es/examples/transformation-translate/
  translate(width / 2, height / 2);

  //Si se suma, las estrellas se mueven hacia la derecha
  //Si se resta, las estrellas se mueven hacia la izquierda.
  //Mientras mayor sea el valor, más rápido giran las estrellas.
  //0.002 es la velocidad de rotación para que logren apreciar la figura.
  //Si el número es mayor, la figura gira demaciado rápido, lo que
  //impide que la obra se aprecie en su totalidad.
  ángulo = ángulo + 0.002;

  //https://p5js.org/es/examples/transformation-rotate/
  //Permite que la figura rote.
  rotate(ángulo);

  //(0,0) coloca las estrellas en el origen.
  //image coloca la imagen de las estrellas creada en el lienzo anterior.
  image(estrellas, 0, 0);

  //Vuelve al estado original.
  //https://p5js.org/reference/p5/pop/
  pop();
}

function mousePressed() {
  //https://p5js.org/reference/p5/mousePressed/
  //Si la canción no suena, al hacer click comienza a sonar.
  //canción.play(); inicia la reproducción de la canción.
  //canción.setVolume() ajusta el volumen de la canción
  //0.5 de volumen no suena ni muy fuerte ni muy despacio.
  if (!canción.isPlaying()) {
    canción.play();
    canción.setVolume(0.5);

    //Si la canción está sonando, al hacer click la canción se pausa.
  } else {
    canción.pause();
  }
}
