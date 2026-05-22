// let para declarar que va haber un conejito
let conejito;
// let para declarar que va haber una estrella
let estrella;
//let para declarar que va haber una imagen de un sol con una nube
let solnube;

// declarar que algo suceda 1 vez y para siempre
function setup() {
  //crear un lienzo de 600 x 600
  createCanvas(600, 600);

  // subir imagen de conejito
  conejito = loadImage("conejito2.jpeg");
  // subir imagen de estrella 
  estrella = loadImage("estrella.png");
  // subir imagen de sol y nube
  solnube = loadImage("solnube.avif");
  
  // poner el cursor con una imagen de conejito que ya subi previamente
  cursor("conejito2.jpeg");
}

function draw() {
  //color de fondo gris
  background(220);``

  // 1. Color Turquesa del rectángulo inicial
  // Parámetros: R(64), G(224), B(208)
  // Color Turquesa del rectángulo cambia a color durazno (Dinámico)
  fill(frameCount % 378, 224, 208);
  // Rectángulo 1 cerca de la esquina superior izuierda
  // Parámetros: x, y, w, h
  rect(50, 50, 100, 50);

  // 2. Color Fucsia del rectángulo (Estático)
  // Parámetros: R(255), G(0), B(255)
  fill(255, 0, 255);
  // Rectángulo 2 cerca de la esquina superior derecha
  rect(450, 50, 100, 50);

  // 3. Color Amarillo oscuro del rectángulo inicial
  // Parámetros: R(218), G(165), B(32)
  // Color Turquesa del rectángulo cambia a color rojo (Dinámico)
  fill(218, frameCount % 165, 32);
  // Rectángulo 3 al medio abajo
  rect(250, 500, 100, 80);

  // 4. Color Blanco del elipse (Estático)
  // Parámetros: Grayscale(255)
  fill(255);
  // Elipse 1 al medio
  // Parámetros: x, y, w, h
  ellipse(300, 300, 40, 40);

  // 5. Color Azul del elipse (Estático)
  // Parámetros: R(0), G(71), B(171)
  fill(0, 71, 171);
  // Elipse 2 cerca del medio del cuadrante 3 (esquina inferior izquierda)
  ellipse(100, 400, 60, 60);

  // 6. Color Naranja del elipse (Estático)
  // Parámetros: R(255), G(127), B(80)
  fill(255, 127, 80);
  // Elipse 3 cerca del medio del cuadrante 2 (esquina superior derecha)
  ellipse(500, 200, 30, 30);

  // 7. Color Verde Lima del cuadrado (Estático)
  // Parámetros: R(50), G(205), B(50)
  fill(50, 205, 50);
  // Figura Extra 1: Cuadrado en el cuadrante 1 (esquina superior izquierda)
  rect(20, 200, 40, 40);

  // 8. Color lila del circulo (Estático)
  // Parámetros: R(230), G(230), B(250)
  fill(230, 230, 250);
  // Figura extra 2: Círculo pequeño cerca de la esquina inferior derecha
  ellipse(550, 550, 15, 15);

  // --- IMAGEN ESTÁTICA ---
  // Se dibuja siempre en la misma posición
  // Parámetros: imagen, x, y, ancho, alto
  // la imagen de estrella salió de (referencia) : https://es.pngtree.com/freepng/star-cartoon-stars-cute_20423654.html
  // La estrella se encuentra en el cuadrante 4 (como al medio de la esquina inferior derecha)
  image(estrella, 0.7*width, 0.7*height, 80, 80);

  // --- IMAGEN DINÁMICA ---
  // la imagen del sol y la nube salió de (referencia) : https://www.freepik.es/fotos-vectores-gratis/adorable-clipart-sol-nubes
  // la imagen del sol y la nube se mueve de izquierda a derecha, manteniendose a la misma altura de 80 pixeles
  image(solnube, frameCount, 0.4*height, 80, 80);
}
