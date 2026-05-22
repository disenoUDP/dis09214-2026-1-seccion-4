//https://p5js.org/reference/p5/let/
// posición inicial de la foto
let chicaX = 500;

// Cuántos píxeles se mueve en cada frame.
// Un '3' es rápido.
let chicaVelocidad = 0;

//si va a la derecha (1) o izquierda (-1)
let direccion = 1;

let luciernagas = [];
// Crea una lista vacía
// Aquí se guardarán todas las luciérnagas

function preload() {
  //https://p5js.org/reference/p5/loadImage/
  flor = loadImage("florg.png");
  chica = loadImage("chica.png");
  flores = loadImage("flores.png");
  florvuelta = loadImage("florvuelta.png");
}

// setup() corre solo una vez
// y al principio de los tiempos
function setup() {
  // create canvas() necesita dos params
  // primero x o ancho
  // segundo y o altura
  createCanvas(800, 600);

  for (let i = 0; i < 20; i++) {
    // Bucle que se repite 20 veces
    // Sirve para crear 20 luciérnagas

    //https://p5js.org/reference/p5/push/
    // "push" agrega un nuevo objeto a la lista
    // Cada objeto representa una luciérnaga
    luciernagas.push({
      x: random(width),
      //https://p5js.org/reference/p5/random/
      // "random(width)" da una posición aleatoria en X
      // Hace que aparezca en cualquier parte horizontal

      y: random(height),
      // "random(height)" da posición aleatoria en Y
      // Hace que aparezca en cualquier parte vertical

      fase: random(TWO_PI), // para que no todas parpadeen igual
      // "fase" es un valor aleatorio para animación
      // Hace que cada luciérnaga brille diferente
    });
  }

  //https://p5js.org/reference/p5/imageMode/
  //cpara que el programa reconozca las coordenadas
  // al centro del lienzo y no a la esquina izq
  imageMode(CENTER);

  //https://p5js.org/reference/p5/rectMode/
  //cpara que el programa reconozca las coordenadas
  // al centro del lienzo y no a la esquina izq
  rectMode(CENTER);
}

// draw() ocurre después de setup()
// en bucle y se repite hasta el fin
function draw() {
  //(r,g,b) para los colores del fondo
  //0 negro 255 blanco
  //color 1
  background(106, 133, 201);

  //https://p5js.org/reference/p5/noStroke/
  //para que las figuras no tengan un contorno
  noStroke(0);

  //color 2
  //https://p5js.org/reference/p5/fill/
  fill(15, 33, 79);
  //https://p5js.org/reference/p5/rect/
  rect(windowWidth / 2, 600, windowWidth, 300);

  //color 3
  fill(21, 41, 92);
  rect(windowWidth / 2, 400, windowWidth, 200);

  //color 4
  fill(50, 78, 148);
  rect(windowWidth / 2, 230, windowWidth, 200);

  //color 5
  fill(91, 118, 186);
  rect(windowWidth / 2, 100, windowWidth, 60);

  //color 6
  fill(37, 64, 133);
  rect(windowWidth / 2, 350, windowWidth, 180);
  //50, 78, 148

  ////////////////////////////////////////////////////////////////////
  ///SOL

  noFill();

  // "frameCount" genera movimiento con el tiempo
  // "sin()" hace que el valor suba y baje suavemente (como un latido)
  let pulso = map(sin(frameCount * 0.05), -1, 1, 0, 30);
  // "map()" convierte ese valor a un rango de 0 a 30
  // "pulso" será usado para hacer crecer o encoger el círculo

  // el * es una multiplicacion
  //como decirle al computador “repite esto varias veces” o “hazlo más grande/rápido”
  //el + es para sumar es como decir: “agrégale esto”

  for (let i = 0; i < 5; i++) {
    // Bucle que se repite 5 veces (i va de 0 a 4)
    // Sirve para dibujar varios círculos uno encima de otro

    //color 7
    stroke(220, 224, 235, 80 - i * 12); // amarillo con transparencia
    // "stroke(r,g,b,a)" define el color del borde con transparencia
    // "i * 12" hace que cada círculo sea más transparente que el anterior

    //https://p5js.org/reference/p5/strokeWeight/
    //cambia el grosor
    strokeWeight(20 + i * 10);

    ellipse(400, 150, 200 + pulso);
    // El tamaño cambia con "pulso" → efecto de respiración/latido
  }

  noStroke();
  //color 8
  fill(220, 224, 235);

  //https://p5js.org/reference/p5/ellipse/
  ellipse(400, 150, 200);

  //se inserta la imagen
  //(nombre de funcion, ubicacion, tamaño)
  image(flor, 400, 500, 800, 400);

  ///////////////////////////////////////////////////
  //MOVIMIENTO CHICA
  //velocidad de la posición
  chicaX = chicaX + chicaVelocidad;
  // Suma la velocidad a la posición actual
  // Hace que la chica se mueva en la pantalla

  //"dist()" calcula distancia entre dos puntos
  // Punto 1: mouse (abeja), punto 2: chica (posición X y Y fija en 400)
  let d = dist(mouseX, mouseY, chicaX, 400);

  if (d < 150) {
    // "if" verifica una condición
    // si la distancia es menor a 150 (están cerca)

    // "3 * direccion" define cuánto y hacia dónde se mueve
    // el + le suma la direccion y hace que se mueva
    chicaX += 3 * direccion; // Solo se mueve si la abeja está cerca

    // Rebotes
    if (chicaX > 495) {
      direccion = -1;
    }
    // Si la chica pasa cierto límite derecho
    // Cambia dirección a -1 → ahora irá hacia la izquierda

    if (chicaX < 300) {
      direccion = 1;
    }
    // Si la chica pasa el límite izquierdo
    // Cambia dirección a 1 → ahora irá hacia la derecha
  }

  //https://p5js.org/reference/p5/push/
  // Guarda el estado actual del dibujo (posición, rotación, etc.)
  // Permite hacer cambios sin afectar lo demás
  push();

  //para que el programa reconozca las coordenadas
  // al centro del lienzo y no a la esquina izq
  imageMode(CENTER);

  //https://p5js.org/reference/p5/translate/
  // Mueve el sistema de coordenadas a esa posición
  // Todo lo que se después aparecerá ahí
  translate(chicaX, 400);

  //https://p5js.org/reference/p5/if/
  // Verifica si la chica se mueve a la derecha
  // "===" compara si es exactamente igual a 1
  // Si va a la DERECHA (direccion = 1), hay que girar la imagen original
  if (direccion === 1) {
    //https://p5js.org/reference/p5/scale/
    scale(-1, 1); // Efecto espejo para que mire a la derecha
    // "scale(-1,1)" invierte la imagen horizontalmente
  }

  // "else" significa "si no se cumple lo anterior"
  // O sea: si NO va a la derecha
  //https://p5js.org/reference/p5/if/
  else {
    // Si va a la IZQUIERDA (direccion = -1), la imagen original ya sirve
    //https://p5js.org/reference/p5/scale/
    scale(1, 1); // Dibuja la imagen normal, tal cual está
  }
  //se inserta la imagen en el nuevo la imagen en el nuevo (0, 0).
  // Es crucial poner 0,0 aquí, porque el punto de anclaje
  //lo definimos con translate().
  image(chica, 0, 0, 200, 200);

  //https://p5js.org/reference/p5/pop/
  // Restaura el estado anterior del dibujo
  // Deshace cambios como translate, scale, rotate, etc.
  // asi no afectan lo demás
  pop();

  //////////////////////////////////////////////////////////////
  //FLORES
  //se inserta la imagen
  //(nombre de funcion, ubicacion, tamaño)
  image(flores, 160, 400, 400, 400);

  //se inserta la imagen
  //(nombre de funcion, ubicacion, tamaño)
  //https://p5js.org/reference/p5/image/
  image(florvuelta, 650, 400, 400, 400);

  //https://p5js.org/reference/p5/noStroke/
  //para que las figuras no tengan un contorno
  noStroke();

  //https://p5js.org/reference/p5/for/
  // "for" es un bucle que repite código varias veces
  // "let l" crea una variable temporal para cada luciérnaga de la lista
  for (let l of luciernagas) {
    // cambiar color con seno
    // Indica que se usará una función matemática (sin)
    // Sirve para crear cambios suaves en el tiempo
    let brillo = map(sin(frameCount * 0.05 + l.fase), -1, 1, 0, 255);
    // "frameCount" aumenta constantemente → genera animación
    // "sin()" usa ese valor para crear una onda suave (sube y baja)
    //https://p5js.org/reference/p5/sin/
    //https://p5js.org/reference/p5/frameCount/

    // "l.fase" hace que cada luciérnaga no esté sincronizada
    // "map()" transforma el resultado de -1 a 1 → a valores de color (0 a 255)
    //https://p5js.org/reference/p5/map/

    //color 9 y 10
    fill(255, 255, brillo); // de blanco a amarillo

    // Usa la posición guardada en cada
    // luciérnaga (l.x, l.y) y el tamaño de 10x10
    ellipse(l.x, l.y, 10, 10);

    // pequeño movimiento flotante
    // "random(-1,1)" genera un número entre -1 y 1
    // Se suma a la posición → mueve la luciérnaga izquierda/derecha
    l.x += random(-1, 1);

    // Igual que antes pero en vertical
    // Hace que suba o baje ligeramente
    l.y += random(-1, 1);
  }

  ////////////////////////////////////////////////////////////////////
  //MOUSE ABEJA
  //esconde el mouse para remplazarlo
  //luego por la abeja
  //https://p5js.org/reference/p5/noCursor/
  noCursor();

  //https://p5js.org/reference/p5/textSize/
  //Para cambiar tamaño del texto
  textSize(60); // Tamaño de la abeja

  //https://p5js.org/reference/p5/textAlign/
  //cpara que el programa reconozca las coordenadas
  // al centro del lienzo y no a la esquina izq
  textAlign(CENTER, CENTER);

  //https://p5js.org/reference/p5/text/
  //Las '' traducen lietralmente lo que se pone
  //por eso al poner un emoji lo traduce literalmente al cursor
  text("🐝", mouseX, mouseY);
}
