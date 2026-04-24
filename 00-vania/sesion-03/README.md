# sesion-03

viernes 27 marzo 2026

## imprimir en consola

no todo tiene que ocurrir en el lienzo, de hecho hasta el momento hemos usado 2 secciones del editor de p5.js: a la izquierda tenemos el editor de código y a la derecha tenemos el lienzo o canvas, que es el espacio donde ocurren las cosas visuales.

pero también tenemos una consola, que es un espacio tras bambalinas donde podemos imprimir información usando la función `console.log()`. esta función recibe uno o más parámetros separados por comas, y los imprime en la consola.

## tasa de refresco y conteo de cuadros

p5.js tiene una tasa de refresco de 60 cuadros por segundo, lo que significa que la función `draw()` corre 60 veces cada segundo. esto es útil para crear animaciones fluidas, pero a veces queremos reducir esta tasa para crear efectos más lentos o para ahorrar recursos.

gracias a la función `frameRate()`, podemos establecer la tasa de refresco a un valor específico. por ejemplo, `frameRate(10)` hará que `draw()` corra 10 veces por segundo, lo que puede ser útil para crear animaciones más lentas.

ojo que `frameRate()` debe ser llamada dentro de `setup()`, para que se establezca al inicio del programa, además de que es solamente una cota máxima, es decir, si el programa no puede mantener esa tasa de refresco, se ajustará automáticamente a una tasa más baja.

<https://p5js.org/reference/p5/frameRate/>

p5.js también tiene una variable llamada `frameCount`, que cuenta cuántas veces ha corrido la función `draw()`. esta variable es útil para crear animaciones basadas en el tiempo, ya que podemos usarla para calcular cuánto tiempo ha pasado desde el inicio del programa.

<https://p5js.org/reference/p5/frameCount/>

## líneas en 2D

para dibujar líneas en p5.js, usamos la función `line()`, que recibe cuatro parámetros: las coordenadas x, y del punto de inicio, y las coordenadas x, y del punto de fin. por ejemplo, `line(0, 0, windowWidth, windowHeight)` dibuja una línea diagonal desde la esquina superior izquierda hasta la esquina inferior derecha del lienzo.

ojo que como empezamos contando desde 0, la esquina superior izquierda es (0, 0), y la esquina inferior derecha es estrictamente (windowWidth - 1, windowHeight -1).

<https://p5js.org/reference/p5/line/>

## arcos en 2D

para dibujar arcos en p5.js, usamos la función `arc()`, revisar la documentación porque tiene muchísimos parámetros y es muy flexible.

<https://p5js.org/reference/p5/arc/>

## operador modulo

el operador modulo es un operador matemático que devuelve el resto de la división entre dos números. en p5.js, se representa con el símbolo `%`. por ejemplo, `5 % 2` devuelve `1`, porque 5 dividido por 2 es 2 con un resto de 1.

<https://en.wikipedia.org/wiki/Modulo>

## cursor

primero hicimos que el cursor no fuera visible cuando estuviéramos sobre la canvas, usando la función `noCursor()`. esta función la incluimos dentro de setup() para que solamente ocurra una vez y al principio del programa.

## práctica profesional de vania paredes

vania paredes es la ayudante del curso, y hoy mostró su trabajo en la práctica profesional que está desarrollando este semestre en la empresa chilena Local Variable Studio <https://www.localvariablestudio.com/>, fundada y dirigida por guillermo ,ontecinos.

esta semana vania ha estado exhibiendo en un proyecto interactivo, consistente en una cámara que detecta el movimiento de las personas y superpone varias capas de video con distintos desfases de tiempo, logrando una imagen que contiene varios momentos en uno.

este proyecto está siendo exhibido en el centro cultural gabriela mistral, como una obra inspirada la ópera splitting/absence del artista sokio, con textos de gordon matta-clark.

## primera parte de la clase

ojo este código necesita la imagen subida al proyecto.

<https://editor.p5js.org/montoyamoraga/sketches/fF0VBakX3>

```javascript
// previa solemne 1

// let es para declarar
// a continuacion viene el nombre
// de la variable
// ese nombre debe ser UNICO
let tamano;


// setup() corre solo una vez
// y al principio de los tiempos
function setup() {
  // createCanvas() necesita dos params
  // primero x o ancho
  // segundo y o altura
  createCanvas(windowWidth, windowHeight);
  
  // console.log permite imprimir en consola
  // acepta varios params separados por ,
  console.log(windowWidth, windowHeight);
  
  // noCursor();
  
  // valor maximo de tasa de refresco
  // se mide en cuadros por segundo
  frameRate(10);
  
  // condiciones de inicio del dibujo
  tamano = 10;
  
  cursor("donpancho.png");
}


// draw() ocurre despues de setup()
// en bucle y se repite hasta el fin
function draw() {
  background(255, 0, 255);
  
  // tamano aumenta
  tamano = tamano + 2;
  
  stroke(0, 255, 255);
  fill(120, 0, 0);
  // noStroke();
  strokeWeight(10);
  
  // posX, posY, anchoX, altoY
  ellipse(
    windowWidth/2,
    windowHeight/2,
    tamano,
    tamano
  );
  
  stroke(0, 0, 255);
  fill(100, 200, 10);
  strokeWeight(1);
  
    // linea que va entre arriba izquierda
  // y abajo derecha
  line(
    0, 0,
    windowWidth, windowHeight);
  
    line(
    windowWidth, 0,
    0, windowHeight);
  
  
  // https://p5js.org/reference/p5/arc/
   // arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
  arc(mouseX, mouseY, 20, 20, PI + QUARTER_PI, 0, CHORD);
  
  
  ////////////////////////////////
  // la funcion modulo
  // divide y te responde el resto
  ////////////////////////////////
  
  console.log(frameCount);
}
```

## segunda parte de la clase

ojo este código necesita la imagen subida al proyecto.

<https://editor.p5js.org/montoyamoraga/sketches/yIMUrukay>

```javascript

// solemne 1

// minimos

// 8 figuras 2D en total
// incluyendo
// 3 elipses
// 3 rectangulos

// 3 lineas

// 10 colores distintos
// al menos dos que varíen en el tiempo

// un cursor distinto al original

// cada linea de comando
// con referencia al link de la referencia de p5.js
// con explicacion textual de los parametros

// dos imagenes
// una se mueve, una no se mueve

//https://p5js.org/reference/p5/loadImage/

let javiera;

function setup() {
  createCanvas(400, 400);
  javiera = loadImage("javieraasi.jpg");
}

function draw() {
  background(220);
  image(javiera,
        0, frameCount,
        100, windowHeight);
  image(javiera,
        100, 50,
        100, windowHeight);
  image(javiera,
        200, 100,
        100, windowHeight);
}
```

## instrucciones solemne-1

estos son los mínimos necesarios para la solemne 1, que es la primera evaluación del curso.

son 6 requisitos, cada uno será evaluado con puntaje entre 0.0 y 1.0, y la nota final de la solemne 1 se calcula como la suma de los puntajes de cada requisito, más el punto base, para lograr la nota máxima 7.0.

### requisito 1

8 figuras 2D, incluyendo:

- 3 elipses
- 3 rectángulos

### requisito 2

10 colores distintos, incluyendo:

- 2 de ellos deben variar en el tiempo

### requisito 3

- 1 cursor distinto al original

### requisito 4

2 líneas de comentarios por cada línea de código que explique lo que hace esa líneas, los valores de los parámetros y la referencia al enalce de la documentación de p5.js que corresponda.

## requisito 5

2 imágenes con una fuente clara, declarada, no robar sin decir de dónde viene la imagen, y con el crédito correspondiente.

- 1 debe ser estática
- 1 debe ser dinámica / en movimiento

## requisito 6

uso de operador modulo para crear un efecto visual que se repita cada cierto tiempo.

### descuentos

- si el código no tiene comentarios, se descontarán 3 puntos.
- si el código tiene comentarios pero no explican lo que hace cada línea, se descontarán 2 puntos.
- si no se incluyen referencias ni fuentes ni créditos, se descontarán 5 puntos.

### horario de entrega

la solemne empieza desde ahora, y termina el viernes 10 de abril a las 5:00pm, hora de santiago de chile.
