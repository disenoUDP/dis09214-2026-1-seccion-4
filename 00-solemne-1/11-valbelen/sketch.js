let color1, color2;
//let es para declarar una nueva variable
//https://p5js.org/es/reference/p5/let/
let boynextdoor;
// ; para hacerle saber al computador cuando termina cada linea
let x = 800;
let y = 800;
let woonhak;

function preload() {
  //https://p5js.org/es/reference/p5/preload/
  //preload() carga una imagen antes de q el sketch comience
  //si cargas la imagen sin preload puede q desaparezca en ciertos frames
  //el sketch comienza cuando las imagenes estan listas
  //https://p5js.org/reference/p5/loadImage/

  woonhak = loadImage("woonhak.jpg");
  //https://mydramalist.com/people/120467-kim-woon-hak?lang=es-ES
  //loadimage carga una imagen
  //https://p5js.org/reference/p5/loadImage/

  boynextdoor = loadImage("boynextdoor-interview.jpg.webp");
  //https://www.rollingstone.com/music/music-features/boynextdoor-new-ep-1999-1235096628/
}
//pared ladrillos
let canvW = 800; //ancho pared ladrillo
// = es para asignar valor
let canvH = 800; //altura pared ladrillos
let brickW = 40; //tamano ladrillo ancho
let brickH = 20; //tamano ladrillo alto
let rows = canvW / brickH;
let columns = canvH / brickH;
//vi esto para hacerlo
//https://editor.p5js.org/pandahya/sketches/4U4MUW01w

function setup() {
  //https://p5js.org/es/reference/p5/setup/
  // setup se llama para empezar el dibujo solo una vez
  //parentesis para que funcione la funcion
  //{} son para empezar y terminar un bloque de codigo
  //https://p5js.org/tutorials/organizing-code-with-functions/#:~:text=The%20keyword%20function%20lets%20p5,the%20play%20button%20is%20pressed.

  createCanvas(1122, 854);
  //https://p5js.org/es/reference/p5/createCanvas/
  //primeros dos parametros son para definir altura y ancho del lienzo
}

function draw() {
  //https://p5js.org/reference/p5/function/
  //https://p5js.org/es/reference/p5/draw/
  // funcion central de un sketch, funciona continuamente hasta que se pare
  //se acciona despues de setup

  //CURSOR
  cursor("p1.jpeg");
  //https://p5js.org/reference/p5/cursor/
  // cambia cursor a una imagen
  //https://kpop.fandom.com/es/wiki/Jiung

  //COLOR 3
  background(211);
  //https://p5js.org/es/reference/p5/background/
  // es el color de fondo del canvas
  //con un valor de 0 a 255 es gris
  //0 es negro, 255 es blanco
  //con 3 parametros es (R, G , B) rojo, verde, azul por default

  //COLOR MURALLA
  fill(211);
  //https://p5js.org/reference/p5/fill/
  // fill se usa para colorear formas
  //ocupa los mismos parametros que background, rgb por default

  //BORDES LADRILLOS
  //COLOR 4
  stroke(0);
  //stroke es para darle borde a una figura
  //https://p5js.org/reference/p5/stroke/
  //color negro

  //PARED LADRILLOS

  for (let i = 0; i < rows; i++) {
    //for() es para repetir un bloque de codigo un numero especifico de veces
    //https://p5js.org/reference/p5/for/

    for (let j = 0; j < columns; j++) {
      if (j % 2) {
        // if() es para ejecutar el bloque de codigo con una condicion
        // https://p5js.org/es/reference/p5/if/

        rect(i * brickW + brickW / 2, j * brickH, brickW, brickH);
      } else {
        rect(i * brickW, j * brickH, brickW, brickH); // x, y, width, height

        //else va seguido de if y se pone si esq la condicion es falsa
        //https://p5js.org/es/reference/p5/if/
      }
    }
  }

  push(); //junto a pop(); se llama para que solo afecte a un grupo y no todas las formas

  // TELE MONITOR

  stroke(0); // color negro
  strokeWeight(3); // establece el valor de linea de stroke
  //https://p5js.org/es/reference/p5/strokeWeight/
  //queria que la tele tuviera un borde grueso

  rectMode(CENTER);
  //https://p5js.org/es/reference/p5/rectMode/
  //crea el rectangulo desde el centro

  color1 = color(31, 248, 255);
  // queria que la tele cambiara de color
  //variables linea 1
  // los parametros son de rgb

  color2 = color(255, 143, 192);
  let amt = (sin(frameCount % 10) + 1) / 2;
  //uso de modulo para que cambiara continuamente y no solo una vez
  // operador módulo -> divide por el número a su derecha, pero devuelve el resto
  // https://editor.p5js.org/enickles/sketches/M4T5Bc3ms
  //sin() calcula el seno de un angulo, la cantidad de interpolación según el  frameCount
  //https://p5js.org/es/reference/p5/sin/
  //framecount  rastrea el numero de fotogramas que se han mostrado desde que el programa empezó
  //https://p5js.org/es/reference/p5/frameCount/

  let cambiaColor = lerpColor(color1, color2, amt);
  // para que calcule un color entre los dos colores elegidos
  //https://p5js.org/es/reference/p5/lerpColor/
  fill(cambiaColor); // color 5 y color 6
  //para que el rectangulo por dentro cambie de color
  rect(1122 / 2, 854 / 2, 290, 190);
  //https://p5js.org/es/reference/p5/rect/
  //queria que el rectangulo estuviera en el centro del lienzo
  //parametros rectangulo (x, y, ancho, altura)

  pop(); //termina push

  //POSTER

  imageMode(CENTER);
  //https://p5js.org/reference/p5/imageMode/
  //crea la imagen desde el centro

  //queria aparentar que era un poster en la muralla
  image(boynextdoor, 1122 / 2, 200, 230, 170);
  //parametros: el primer parametro establece la imagen q se va a colocar
  //el segundo y el tercerro las coordenadas de la esquina superior izquierda
  // el cuarto y quinto parametro son el ancho y alto y son opcionales
  //queria que la imagen estuviera en el medio de los dos mini rectangulos
  //https://p5js.org/es/reference/p5/image/

  //cuadro 1 ROSADO
  fill(245, 39, 128); //color 7
  //https://p5js.org/reference/p5/fill/
  rect(80, 100, 70, 90);
  //https://p5js.org/es/reference/p5/rect/

  //las elipses son la pintura del cuadro
  //elipse 1
  fill(242, 245, 39); //color 8
  ellipse(115, 120, 20, 20);
  //elipse parametros (x, y, ancho, largo);
  //se crea desde el centro
  //https://p5js.org/es/reference/p5/ellipse/

  //elipse 2
  fill(153, 201, 64); //color 9
  ellipse(115, 150, 20, 20);

  //cuadro 2 MORADO
  fill(205, 125, 255); //color 10
  //https://p5js.org/reference/p5/fill/
  rect(850, 140, 70, 90);

  //el triangulo y el circulo son la pintura del cuadro
  fill(39, 245, 63);
  triangle(850, 200, 890, 200, 890, 150);
  //https://p5js.org/es/reference/p5/triangle/
  //los primeros dos parametros especifican su primer punto (x1,y1)
  // los del medio el segundo punto (x2, y2)
  // y los dos finales el tercer punto (x3, y3)

  //elipse 3
  fill(245, 166, 39);
  ellipse(
    //(x, y, ancho, largo)
    890,
    200,
    30,
    30
  );

  //BASE TELE
  fill(0);
  rect(1122 / 2, 522, 20, 60);
  //https://p5js.org/es/reference/p5/rect/
  //abajo del rectangulo grande

  // BASE MESA
  //queria hacer una mesa en donde se apoyara la tele
  fill(89, 50, 39);
  noStroke();
  //no le hace borde a la figura
  //https://p5js.org/reference/p5/noStroke/
  rect(0, 570, width, 20); // x, y, width, height

  // PATAS MESA
  rect(0, 570, 15, 237);
  rect(1105, 570, 15, 237);

  //IMAGEN MOVIMIENTO
  //queria que fuera como una personita caminando en frente de la mesa
  image(woonhak, x, y, 50, 50);
  x += 2; // se mueve hacia la derecha
  // cambia la variable de un numero
  // le añade 2
  //https://p5js.org/reference/p5/Number/
  if (x > width) x = -50;
  // vuelve a la posicion
  //https://p5js.org/reference/p5/Number/
}
