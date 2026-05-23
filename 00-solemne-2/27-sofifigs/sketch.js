//solemne 02: respuesta a una obra de arte.
//obra: "Destello" - Kid Voodoo (canción chilena-2025)
//
//descripción breve: "Destello" de Kid Voodoo es una canción que explora la
//intensidad del amor y la aceptación de su transitoriedad.
//El narrador promete estar presente para su pareja "hasta que te aburras
//de mi", a pesar de saber que todo debe terminar.
//está visualización representa esa intensidad a través de un destello
//central que "respira", simbolizando el corazón de una relación de años
//las 4 capas de partículas que orbitan representan cada año, mientras
//que el fondo estrellado crea un contexto cósmico: la relación existe en la
//inmesidad del universo, pequeña pero luminosa, fragíl pero profundamente
//significativa.

//concepto visual: fondo estrellado que crea profundidad y contexto cósmico
//un destello central que "respira" usando una función de sinusoide
// 4 capas de particulas orbitando el centro (representando relación de años)
//cambio de color según el cursor (presencia del otro)
//lineas conectivas que representan la continuidad de la relación

//exp = explicación de lo que hace el comando.

// CRÉDITOS DE COLABORACIÓN TÉCNICA:
//Con la asistencia técnica de Manus AI.
//Manus AI colaboró específicamente en:
//1. Lógica matemática de las órbitas: Uso de funciones trigonométricas (sin/cos)
//para calcular las posiciones circulares de las partículas.
//2. Sistema de estrellas: Implementación del arreglo (array) y la lógica de
//parpadeo aleatorio individual.
//3. Optimización de funciones: Estructuración de las funciones personalizadas
//(dibujarEstrellas, dibujarCapaDeParticulas, etc.) para un código más limpio.

//exp: crea una variable
//ref: https://p5js.org/es/reference/p5/let/
//variable global para almacenar el tiempo y usarlo en las funciones sinusoidales

let tiempoGlobal = 0;

//variable para almacenar el estado de interacción del usuario (si el mouse está cerca)
//exp: crea una variable
//ref: https://p5js.org/es/reference/p5/let/
let mousePresente = false;

//para almacenar las estrellas del fondo
//exp: crea una variable
//ref: https://p5js.org/es/reference/p5/let/
let estrellas = [];

//variable para el color del destello (cambia según interacción)
//exp: crea una variable
//ref: https://p5js.org/es/reference/p5/let/
let colorDestello;

//exp: la función setup se ejecuta una sola vez, se usa para preparar el
//espacio donde aparecera la animación.
//ref:https://p5js.org/reference/p5/setup/
function setup() {
  //exp: crea el lienzo.
  //parámetros: (ancho, alto) = (windowWidth, windowHeight) tamaño de //ventana del navegador
  //ref: https://p5js.org/es/reference/p5/createCanvas/
  createCanvas(windowWidth, windowHeight);

  //exp: deshabilita el dibujo de puntos, líneas y contornos de figuras
  //no tiene parámetros
  //ref: https://p5js.org/reference/p5/noStroke/
  noStroke();

  //inicializar el color del destello en un azul profundo (representa el inicio)
  //exp:crea un objeto p5.Color.
  //parámetros: (r,g,b) = (rojo, verde, azul)
  //ref: https://p5js.org/es/reference/p5/color/
  colorDestello = color(30, 100, 255, 200);

  //generar las estrellas del fondo
  generarEstrellas();
}
//exp: es la función central de un sketch, permite crear animación y
//movimiento.
//ref: https://p5js.org/es/reference/p5/draw/
function draw() {
  //exp: establece el color a utilizar para el fondo del lienzo.
  //parámetros: (r,g,b) = (rojo, verde, azul) = (10, 10, 25)
  //ref: https://p5js.org/es/reference/p5/background/
  //utilizó fondo oscuro para la sensación de nocturno y nostálgico.
  background(5, 5, 15, 50);

  //dibuja todas las estrellas del fondo llamando a la función correspondiente
  //exp: genera y posiciona el fondo espacial
  //sin parámetros
  dibujarEstrellas();

  //incrementar el tiempo global para usar en funciones sinusoidales (moverse)
  tiempoGlobal += 0.02;

  //calcular la distancia entre el mouse y el centro del canvas usando dist()
  //exp: crea una variable
  //ref: https://p5js.org/es/reference/p5/let/
  let distanciaAlMouse = dist(mouseX, mouseY, width / 2, height / 2);

  //IF: Verificar si el mouse está cerca del centro (dentro de 200 píxeles)
  //exp: una forma de elegir si ejecutar un bloque de código.
  //parámetros:(condicion)
  //ref: https://p5js.org/es/reference/p5/if/
  if (distanciaAlMouse < 200) {
    //si el mouse está cerca, cambiar el estado de presencia a verdadero
    mousePresente = true;

    //cambiar el color del destello a un amarillo brillante e intenso
    colorDestello = color(255, 220, 50, 220);
  } else {
    //si el mouse no está cerca, cambiar el estado de presencia a falso
    mousePresente = false;

    //volver al color azul profundo original
    colorDestello = color(30, 100, 255, 200);
  }
  //dibujar el destello central que respira llamando a la función correspondiente
  dibujarDesteloCentral();

  //for loop: dibujar 4 capas de particulas (representando los 4 años)
  //exp: repite bloque de códigos con un número de iteraciones
  //parámetros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let ano = 0; ano < 4; ano++) {
    //dibujar las partículas para cada año llamando a la función correspondiente
    dibujarCapaDeParticulas(ano);
  }
  //dibujar lineas conectivas llamando a la función correspondiente
  dibujarLineasConectivas();
}
//función para generar las estrellas del fondo
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function generarEstrellas() {
  //for loop: Crear 150 estrellas distribuidas aleatoriamente
  //exp: repite bloque de códigos con un número de iteraciones
  //parámetros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let i = 0; i < 150; i++) {
    //crear un objeto para cada estrella con propiedades aleatorias
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let estrella = {
      //posición X aleatoria en el canvas usando random()
      x: random(width),

      //posición Y aleatoria en el canvas usando random()
      y: random(height),

      //tamaño aleatorio entre 1 y 3 píxeles usando random()
      tamano: random(1, 3),

      //brillo aleatorio entre 100 y 255 usando random()
      brillo: random(100, 255),

      //velocidad de parpadeo aleatoria usando random()
      velocidadParpadeo: random(0.02, 0.08),

      //fase de parpadeo aleatoria usando random()
      faseParpadeo: random(TWO_PI),
    };
    //agregar la estrella recién creada al array de estrellas
    estrellas.push(estrella);
  }
}
//función para dibujar todas las estrellas
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function dibujarEstrellas() {
  //for loop: iterar sobre cada estrella almacenada en el array
  //for exp: repite bloque de códigos con un número de iteraciones
  //parámetros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let i = 0; i < estrellas.length; i++) {
    //obtener la estrella actual del array usando el índice i
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let estrella = estrellas[i];

    //calcular el brillo actual usando una funcion sinusoide (moverse)
    //exp for: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    //exp sin: calcula el seno de un ángulo
    //parámetros: (angulo)
    //ref: https://p5js.org/es/reference/p5/sin/
    let brilloActual =
      150 +
      sin(tiempoGlobal * estrella.velocidadParpadeo + estrella.faseParpadeo) *
        100;

    //aplicar el color de la estrella con el brillo calculado
    //exp: establece color en las formas
    //parámetros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/fill/
    fill(255, 255, 255, brilloActual);

    //desactivar el trazo para que las estrellas sean puntos limpios
    //exp: deshabilita el dibujo de puntos, líneas y contornos de figuras
    //no tiene parámetros
    //ref: https://p5js.org/reference/p5/noStroke/
    noStroke();

    //dibujar la estrella como un pequeño circulo usando ellipse()
    //exp: dibuja un elipse
    //parámetros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(estrella.x, estrella.y, estrella.tamano, estrella.tamano);
  }
}
//funcion para dibujar el destello central
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function dibujarDesteloCentral() {
  //guardar el estado de transformacion actual usando push()
  //push exp: comienza un grupo de dibujos que tiene su propio estilo
  //parámetros: (sin parametros)
  //ref: https://p5js.org/reference/p5/push/
  push();

  //mover el sistema de coordenadas al centro del canvas usando translate()
  //exp: traduce el sistema de coordenadas
  //parámetros: (x, y)
  //ref: https://p5js.org/reference/p5/translate/
  translate(width / 2, height / 2);

  //calcular el tamaño del destello usando una funcion sinusoide (moverse)
  //exp: crea una variable
  //ref: https://p5js.org/es/reference/p5/let/
  //exp sin: calcula el seno de un ángulo
  //parámetros: (angulo)
  //ref: https://p5js.org/es/reference/p5/sin/
  let tamano = 100 + sin(tiempoGlobal) * 50;

  //aplicar el color del destello que cambia segun la interacción (IF)
  //exp: establece color en las formas
  //parámetros: (r,g,b) = (rojo, verde, azul)
  //ref: https://p5js.org/es/reference/p5/fill/
  fill(colorDestello);

  //desactivar el trazo para el destello central
  //exp: deshabilita el dibujo de puntos, líneas y contornos de figuras
  //no tiene parámetros
  //ref: https://p5js.org/reference/p5/noStroke/
  noStroke();

  //dibujar el circulo central usando la funcion ellipse()
  //exp: dibuja un elipse
  //parámetros: (x, y , w, [h] )
  //ref: https://p5js.org/es/reference/p5/ellipse/
  ellipse(0, 0, tamano, tamano);

  //aplicar un color mas claro para el brillo interior (celeste o amarillo suave)
  //exp: una forma de elegir si ejecutar un bloque de código.
  //parámetros:(condicion)
  //ref: https://p5js.org/es/reference/p5/if/
  if (mousePresente) {
    //si el mouse esta presente, usar un amarillo mas claro para el brillo
    //exp: establece color en las formas
    //parámetros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/fill/
    fill(255, 255, 150, 150);
  } else {
    //si no, usar un celeste claro para el brillo del azul
    //exp: establece color en las formas
    //parámetros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/fill/
    fill(150, 200, 255, 150);
  }
  //dibujar un circulo mas pequeño en el centro usando ellipse()
  //exp: dibuja un elipse
  //parámetros: (x, y , w, [h] )
  //ref: https://p5js.org/es/reference/p5/ellipse/
  ellipse(0, 0, tamano * 0.5, tamano * 0.5);

  //restaurar el estado de transformacion original usando pop()
  //exp:finaliza un grupo de dibujos que contiene sus propios estilos y transformaciones.
  //no tiene parametros
  //ref: https://p5js.org/es/reference/p5/pop/
  pop();
}
//funcion para dibujar una capa de particulas (cada año)
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function dibujarCapaDeParticulas(ano) {
  //guardar el estado de transformacion actual usando push()
  //exp:comienza un grupo de dibujo que contiene sus propios estilos y transformaciones.
  //no tiene parámetros
  //ref: https://p5js.org/es/reference/p5/push/
  push();

  //mover el sistema de coordenadas al centro del canvas usando translate()
  //exp: traduce el sistema de coordenadas
  //parámetros: (x, y)
  //ref: https://p5js.org/reference/p5/translate/
  translate(width / 2, height / 2);

  //calcular el radio de orbita basado en el año (moverse)
  //exp: crea una variable
  //ref: https://p5js.org/es/reference/p5/let/
  let radioOrbita = 80 + ano * 40;

  //calcular la velocidad de rotacion basada en el tiempo (moverse)
  //exp: crea una variable
  //ref: https://p5js.org/es/reference/p5/let/
  let velocidadRotacion = tiempoGlobal * (1 - ano * 0.1);

  //forloop anidado:dibujar 8 particulas en cada orbita
  //for exp: repite bloque de códigos con un número de iteraciones
  //parámetros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let i = 0; i < 8; i++) {
    //calcular el angulo de cada particula usando trigonometria
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let angulo = (TWO_PI / 8) * i + velocidadRotacion;

    //calcular la posicion X de la particula usando cos()
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    //exp cos: calcula el coseno de un ángulo
    //parámetros: (angulo)
    //ref: https://p5js.org/es/reference/p5/cos/
    let posX = cos(angulo) * radioOrbita;

    //calcular la posicion Y de la particula usando sin()
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    //exp sin: calcula el seno de un ángulo
    //parámetros: (angulo)
    //ref: https://p5js.org/es/reference/p5/sin/
    let posY = sin(angulo) * radioOrbita;

    //guardar el estado de transformacion para esta particula individual
    //exp:comienza un grupo de dibujo que contiene sus propios estilos y transformaciones.
    //no tiene parámetros
    //ref: https://p5js.org/es/reference/p5/push/
    push();

    //mover a la posicion calculada de la particula usando translate()
    //exp: traduce el sistema de coordenadas
    //parámetros: (x, y)
    //ref: https://p5js.org/reference/p5/translate/
    translate(posX, posY);

    //calcular el tamaño de la particula segun el año
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let tamanoParticula = 10 - ano * 1.5;

    //aplicar color a la particula con tonos azules y amarillos segun interaccion
    //exp:una forma de elegir si ejecutar un bloque de codigo
    //parámetros: (condicion)
    //ref: https://p5js.org/es/reference/p5/if/
    if (mousePresente) {
      //si el mouse esta presente, usar tonos amarillos
      //exp: establece color en las formas
      //parámetros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/fill/
      fill(255, 200 + ano * 10, 100, 150);
    } else {
      //si no, usar tonos azules
      //exp: establece color en las formas
      //parámetros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/fill/
      fill(100, 150 + ano * 20, 255, 150);
    }
    //desactivar el trazo para las particulas
    //exp: deshabilita el dibujo de puntos, líneas y contornos de figuras
    //no tiene parámetros
    //ref: https://p5js.org/reference/p5/noStroke/
    noStroke();

    //dibujar la particula como un círculo usando ellipse()
    //exp: dibuja un elipse
    //parámetros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(0, 0, tamanoParticula, tamanoParticula);

    //restaurar el estado de transformación individual usando pop()
    //exp:finaliza un grupo de dibujos que contiene sus propios estilos y transformaciones.
    //no tiene parámetros
    //ref: https://p5js.org/es/reference/p5/pop/
    pop();
  }
  //restaurar el estado de transformación general usando pop()
  //exp:finaliza un grupo de dibujos que contiene sus propios estilos y transformaciones.
  //no tiene parámetros
  //ref: https://p5js.org/es/reference/p5/pop/
  pop();
}
//función para dibujar lineas conectivas entre las particulas
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function dibujarLineasConectivas() {
  //guardar el estado de transformación actual usando push()
  //exp:comienza un grupo de dibujo que contiene sus propios estilos y transformaciones.
  //no tiene parámetros
  //ref: https://p5js.org/es/reference/p5/push/
  push();

  //mover el sistema de coordenadas al centro del canvas usando translate()
  //exp: traduce el sistema de coordenadas
  //parámetros: (x, y)
  //ref: https://p5js.org/reference/p5/translate/
  translate(width / 2, height / 2);

  //establecer el color de las lineas con transparencia (azul o amarillo)
  //exp:una forma de elegir si ejecutar un bloque de código
  //parámetros: (condicion)
  //ref: https://p5js.org/es/reference/p5/if/
  if (mousePresente) {
    //líneas amarillas si hay interaccion
    //exp: establece color a formas
    //parámetros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/stroke/
    stroke(255, 220, 100, 80);
  } else {
    //líneas azules si no hay interaccion
    //exp: establece color a formas
    //parámetros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/stroke/
    stroke(100, 150, 255, 80);
  }
  //establecer el grosor de las lineas usando strokeWeight()
  //exp: establece el ancho del trazado
  //parámetros: (ancho)
  //ref: https://p5js.org/es/reference/p5/strokeWeight/
  strokeWeight(1);

  //for loop:dibujar lineas conectivas entre las capas de años
  //exp:grupo de declaraciones con nombre
  //parámetros:marcadores de posición para los valores que se proporcionaran cuando se llame a la función.
  //ref: https://p5js.org/es/reference/p5/function/
  for (let ano = 0; ano < 3; ano++) {
    //calcular el radio de orbita para la línea (moverse)
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let radioOrbita = 80 + ano * 40;

    //calcular la velocidad de rotación para la linea (moverse)
    //exp: crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let velocidadRotacion = tiempoGlobal * (1 - ano * 0.1);

    //for loop anidado: dibujar lineas entre los 8 puntos de la orbita
    //exp: repite bloque de códigos con un número de iteraciones
    //parámetros: (inicialización; condición; actualización)
    // ref: https://p5js.org/reference/p5/for/
    for (let i = 0; i < 8; i++) {
      //calcular el ángulo del punto actual usando trigonometria
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      let angulo = (TWO_PI / 8) * i + velocidadRotacion;

      //calcular la posición X del punto actual usando cos()
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      let posX = cos(angulo) * radioOrbita;

      //calcular la posición Y del punto actual usando sin()
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      //exp sin: calcula el seno de un ángulo
      //parametros: (angulo)
      //ref: https://p5js.org/es/reference/p5/sin/
      let posY = sin(angulo) * radioOrbita;

      //calcular el angulo del siguiente punto en la orbita
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      let anguloProximo = (TWO_PI / 8) * ((i + 1) % 8) + velocidadRotacion;

      //calcular la posición X del siguiente punto usando cos()
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      let posXProximo = cos(anguloProximo) * radioOrbita;

      //calcular la posición Y del siguiente punto usando sin()
      //exp: crea una variable
      //ref: https://p5js.org/es/reference/p5/let/
      let posYProximo = sin(anguloProximo) * radioOrbita;

      //dibujar una linea entre los dos puntos calculados usando line()
      //exp:dibuja una línea recta entre dos puntos.
      //parámetros: (x1, y1, x2, y2)
      //ref: https://p5js.org/es/reference/p5/line/
      line(posX, posY, posXProximo, posYProximo);
    }
  }
  //restaurar el estado de transformación original usando pop()
  //exp:finaliza un grupo de dibujos que contiene sus propios estilos y transformaciones.
  //no tiene parámetros
  //ref: https://p5js.org/es/reference/p5/pop/
  pop();
}
//función para redimensionar el canvas cuando la ventana cambia de tamaño
//exp:es llamada cuando la ventana del navegador cambia de tamaño
//no tiene parámetros
//ref: https://p5js.org/es/reference/p5/windowResized/
function windowResized() {
  //redimensionar el canvas al nuevo tamaño de la ventana usando resizeCanvas()
  //exp:cambia el tamaño del lienzo a un ancho y alto determinados
  //parámetros: (ancho, alto, [noRedraw])
  //ref: https://p5js.org/reference/p5/resizeCanvas/
  resizeCanvas(windowWidth, windowHeight);

  //limpiar el array de estrellas para regenerarlas
  estrellas = [];

  //volver a generar las estrellas para el nuevo tamaño del canvas
  generarEstrellas();
}
