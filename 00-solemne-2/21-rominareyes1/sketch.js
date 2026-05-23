// Solemne 02
// para esta solemne me base en las lineas de nazca
// elegi las Lineas de Nazca, que son unos geoglifos
// gigantes grabados en el desierto de Peru
// por la cultura Nazca entre el 200 a. C. y el 500 d. C.
// Como es uno de los lugares mas secos del mundo
// los dibujos se mantuvieron intactos porque solo sacaban
// las piedras oscuras del suelo para que se viera
// la tierra clara de abajo

// me base especialmente en el Colibri
// una figura de 96 metros que se cree que usaban
// como calendario o en rituales para pedir que lloviera
// imagen de referencia para crear el colibri
// https://arte.laguia2000.com/wp-content/uploads/2016/03/El-colibri.jpg

// ¿QUE QUIERO HACER?
// quiero que el colibri se mueva junto con el mouse
// tambien que haya un contador de "dias"
// que en realidad seran los segundos
// donde no llueve ya que, donde se encuentran
// estas figuras es un lugar muy arido

// variable para contar los dias de sequia pero
// vendrian siendo los segundos que pasan sin llover
let dias = 0;

function setup() {
  // lienzo del porte de la pantalla y se ajusta
  createCanvas(windowWidth, windowHeight);
  // esconde el cursor
  noCursor();
}

function draw() {
  // LLUVIA
  // esta se genera al presionar el mouse
  if (mouseIsPressed) {
    // cambia el color del fondo como si
    // estuviera lloviendo
    // color mas grisaceo
    background(80, 90, 100);

    // reinicia el contador de la sequia a 0
    dias = 0;

    // LLUVIA CON GOTAS EN MOVIMIENTO
    // color azul claro transparente
    stroke(150, 200, 255, 200);
    // grosor de las gotas
    strokeWeight(1.5);

    // fija la secuencia aleatoria de las gotas para
    // que sigan su carril X
    // http://p5js.org/reference/p5/randomSeed/
    randomSeed(50);

    // hace 25 gotas de lluvia que caen vertical
    for (let i = 0; i < 25; i++) {
      // posicion de las gotas horizontal al azar
      let gotaX = random(0, width);

      // posicion inicial aleatoria en el eje Y
      let yInicial = random(0, height);

      // esta linea hace que las gotas bajen multiplicando
      // los frames por la velocidad
      // el % height hace que cuando la gota
      // toca el fondo, vuelva a aparecer arriba
      let gotaY = (yInicial + frameCount * 12) % height;

      // DIBUJO LLUVIA
      // la gota es recta vertical con 15 px de largo
      line(gotaX, gotaY, gotaX, gotaY + 15);
    }
  } else {
    // si el fondo no se presiona se mantiene
    // en sequia, un color mas arena
    background(210, 180, 140);
  }

  // RECUENTO DIAS
  // este solo cuenta cuando NO esta lloviendo
  // aqui cada frame equivale a un segundo exacto
  // para poder hacer como el recuento de "dias"
  if (frameCount % 60 == 0) {
    // sube el contador cada que pase un segundo
    dias = dias + 1;
  }

  // TEXTURA DEL DESIERTO
  // esto evita que los elipses de fondo parpadeen
  randomSeed(10);

  // color de relleno de lo que simula las piedras
  fill(140, 110, 80);
  // para que no tengan un borde de color
  noStroke();

  // dibuja 40 elipses simples aleatoriamente
  // por el que simula el suelo
  for (let i = 0; i < 40; i++) {
    // se utiliza el width y height para que las
    // piedras se distribuyan bien sin importar
    // el tamaño de la pantalla
    ellipse(random(0, width), random(0, height), 15, 15);
  }

  // DIBUJO DEL COLIBRI
  push();
  // esto hace que el origen del dibujo sea en el cursor
  translate(mouseX, mouseY);

  // todo para hacer las lineas del geoglifo
  // color cafe oscuro acorde a las lineas de nazca
  stroke(90, 50, 30);
  // el grosor de las lineas
  strokeWeight(6);
  // que estas lineas sean sin relleno
  noFill();

  // esta linea representa el pico del colibri
  line(0, -50, 0, -140);

  // torso del ave
  // linea de los hombros
  line(-15, -50, 15, -50);
  // lateral izquierdo del cuerpo
  line(-15, -50, -15, 80);
  // lateral derecho del cuerpo
  line(15, -50, 15, 80);

  // cola del colibri
  // cierre del torso de abajo
  line(-15, 80, 15, 80);
  // barra horizontal de la cola
  line(-25, 120, 25, 120);
  // eje central que une el cuerpo con la cola
  line(0, 80, 0, 120);

  // lineas de plumas de la cola
  // pluma 1 (izquierda a derecha)
  line(-25, 120, -25, 160);
  // pluma 2
  line(-13, 120, -13, 180);
  // pluma 3 la central
  line(0, 120, 0, 200);
  // pluma 4
  line(13, 120, 13, 180);
  // pluma 5 (ultima)
  line(25, 120, 25, 160);

  // creacion movimiento hacia arriba y hacia abajo
  // para la simulacion del aleteo de un colibri
  let alasMov = sin(frameCount * 0.4) * 35;

  // lineas de las alas
  // ala derecha 1 + movimiento
  line(15, -30, 140, -50 + alasMov);
  // ala derecha 2 + movimiento
  line(15, -20, 140, -20 + alasMov);
  // ala derecha 3 + movimiento
  line(15, -10, 100, 10 + alasMov);

  // ala izquierda 1 + movimiento
  line(-15, -30, -140, -50 + alasMov);
  // ala izquierda 2 + movimiento
  line(-15, -20, -140, -20 + alasMov);
  // ala izquierda 3 + movimiento
  line(-15, -10, -100, 10 + alasMov);

  // restaura el lienzo para que no afecte los textos
  pop();

  // TEXTOS LLUVIA
  noStroke();
  // color del texto
  fill(255);
  // tamaño del texto
  textSize(20);

  // cada que presiono el mouse aparece el
  // texto del milagro
  if (mouseIsPressed) {
    text("¡Ocurrió un milagro: Está lloviendo sobre Nazca!", 40, 45);
    // si el mouse se presiona muestra el
    // contador fijado en 0
    text(dias + " Días sin lluvia en Nazca.", 40, 80);

    // si el mouse NO se presiona muestra
    // el texto y cuenta los dias que van pasando
  } else {
    text(dias + " Días sin lluvia en Nazca.", 40, 80);
  }
}
