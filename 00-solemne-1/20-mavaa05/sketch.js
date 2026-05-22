// ahi agrego la imagen 
//siempre tengo que integrarla en el archivo del codigo para que pueda aparecer 
//Crea una variable donde se guardará la imagen del perrito
let img;
// ahora proporcional
//Posición horizontal del perrito (2% desde la izquierda).
let x = 0.02;
//Posición vertical (75% hacia abajo)
let y = 0.75; 

//es la velocidad en la que se mueve el perrito
//0.010 se refiere a la rapidez
let velocidad = 0.010; // proporcional




//Se ejecuta antes de todo, sirve para cargar archivos.
function preload(){
  //asi hago que la imagen aparezca 
 //https://p5js.org/reference/p5/loadImage/
  
  img = loadImage('perrito corriendo.png');
  //no consegui el link del mismo perrito que habia agarrado
  //termie en la compu de la u y no tenia el historial
  //aca lo mismo
  //https://png.pngtree.com/background/20231019/original/pngtree-little-girl-hiding-in-a-cardboard-infant-display-delightful-photo-picture-image_5623959.jpg
  img2 = loadImage('nina escondida.png');
  //y aca tambien lo mismo
  //https://png.pngtree.com/png-clipart/20250101/original/pngtree-baby-chicken-picture-png-image_18537413.png
  img3 = loadImage('pollito.png')
}

function setup() {
  //Crea el “lienzo” del tamaño de la pantalla
  //asi hago que el tamaño del lienzo mida 
  //lo que mide la pantalla dl dispositivo
//https://p5js.org/reference/#/p5/windowWidth
  createCanvas(windowWidth, windowHeight);
  //ahi elimino el cursor 
//https://p5js.org/reference/#/p5/noCursor
  noCursor();
}
//hace que sea responsive la pantalla 
//chat gpt me ayudomcon este codigo 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//hace que se repita todo el tiempo
//ahi se empieza a poner los comados para que aparezcan 
//aqui no puse nada yo porq no modifio eso
function draw() {
  //este numero corresponde al color del fondo 
  // R, G, B 
  background(204,227,154);
  
  // LINEAS RESPONSIVE
  
  //LINEA 1 
  //ESOS sON LOS COLORES DE LA LINEA
  stroke(255,185,176)
// este es el grosor de la linea 
  // tambien es responsive 
  //https://p5js.org/reference/#/p5/strokeWeight
  strokeWeight(width * 0.01)
  //estas son las coordenadas de posicion de la linea 
  //https://p5js.org/reference/#/p5/line
  line(width , height, width , 0)

  //esto es lo mismo que el de arriba
  strokeWeight(width * 0.02)
  line(width * 0.3, height, width * 0.3, 0)
// aqui tambien se repite lo mismo
  strokeWeight(width * 0.03)
  line(width * 0.25, height, width * 0.25, 0)
// y aqui de nuevo lo mismo
  strokeWeight(width * 0.015)
  line(width, height * 0.6, 0 , height * 0.6)
  
  
  
  // COLOR DINÁMICO
 // https://p5js.org/reference/#/p5/frameCount
  //eso hace que eor cambie 
  //tuve que pedirle ayuda a chat gpt porque no encontraba la foma de hacer qu equedara bien 
  //framecount es el contador de las caras 
  //el * representa la velocidad con la que va a cambiar 
  let tColor = frameCount * 0.05;

  //primera elipse izq/arriba
   // elipses que cambian de color 
  //aqui le doy el comando par que se modifique en el tiempo 
  // sin()crea un movimiento suave como ondas 
  // los numeros dicen el color 
  // en rango de azules 
  //porque 
  let r1 = sin(tColor) * 20 + 80;
  let g1 = sin(tColor + 2) * 30 + 120;
  let b1 = sin(tColor + 4) * 40 + 200;
  

// no stroke es sin borde 
  noStroke();
  //fill es el color de relleno
  fill(r1, g1, b1);
  //ahi se dibuja el circulo con las coordenadas de posicion  de tamaño
  ellipse(width * 0.2 ,height * 0.2, width * 0.25, width * 0.25);

  
  // segunda elipse derecha/abajo
  //aca repeti los mismos comandos para que tambien cambiara los colores
  // pero con otros valores 
  let r2 = sin(tColor + 1) * 20 + 60;
  let g2 = sin(tColor + 3) * 30 + 110;
  let b2 = sin(tColor + 5) * 40 + 180;

  fill(r2, g2, b2);
  ellipse(width * 0.7,height * 0.9, width * 0.15, height * 0.2);

  
  
  

  //triangulo superior izq
  //con el framecount tmaien es otra opcion de cambiar los colores  
  fill(frameCount%250,173,125)
  //el triangulo tiene tres puntas entonces se utilizan 6 coordenadas para programarlo y que aparezca 
  triangle(
    width * 0.3, height * 0.1,
    width * 0.1, height * 0.25,
    width * 0.3, height * 0.3
  );
  
  //imagen de la niña 
  // las primeras coordenadas son de la posicion en la que esta la niña en x e y 
  //las segundas coordenadas corresponden a el tamaño total de la imagen 
  image(img2,
    width * 0.2,
    height * 0.1,
    width * 0.2,
    height * 0.25
  );
  
  
  //primer retangulo arriba/izq
  //el fill corresponde a los r,g,b de la figura 
  // los valores de rect modifican la posicion de en la que esta la figura posicionada 
  // todo sigue siendo responsive
  fill(255,227,150)
  rect(width * 0.23, height * 0.25, width * 0.2, height * 0.3);

  // rectangulo de abajo/izq
  fill(245,204,137)
  rect(width * 0.7, height * 0.65, width * 0.25, height * 0.25);

  //rectangulo arriba/derecha
  fill(255,238,173)
  rect(width * 0.55, height * 0.15, width * 0.3, height * 0.25);

  //circulo arriba derecha
  fill(100,155,255)
  ellipse(width * 0.8, height * 0.3, width * 0.25, height * 0.35);
  
  //circulo medio
  fill(222,242,255)
  ellipse(width * 0.45, height * 0.55, width * 0.2, width * 0.2);
  
  //  PERRITO RESPONSIVE
  //aqui hago que el px y py correspondan al valor de la pantalla
  //asi se mueve el perrito independiente del tamaño de toda la pantalla en la que este
  //asi no use modulo 
  //arriba para el color del triangulo si use modulo asi que esa parte de la rubrica estaria lista 
  let px = x * width;
  let py = y * height;

  //aca tambien le digo que mantenga su tamaño independiente de la pantalla en la que este 
  let perroW = width * 0.2;
  let perroH = height * 0.25;

  //aca ya le mando al perro los comandos que le dije que queria que significara cada cosa en las lineas anteriores 
  image(img, px, py, perroW, perroH);

  
  //esto dictamina la velocidad en la que el perrito se mueve 
  //tanto de ida como de regreso
  x += velocidad;

  if (px > width - perroW) {
    velocidad = -0.05;
  }

  if (px < 0) {
    velocidad = 0.05;
  }
  
  
  
  //  CURSOR
  // el pollito sera el cursor y el perrito estaria persiguiendolo
  //pero no supe como hacer que se moviera mas el perrito asi que solo se mueve a los lados 
  //la posicion en x y en y del mouse se dictamina con los primeros dos coordenadas despues de que llame a la imagen 
  //los otros dos se refieren a el tamaño que igual era medio ireelevante porque igual la imagen es petit 
  //pero bueno ahora se mantiene del mismo tammaño en todas las pantalolas tambien 
  image(img3, mouseX, mouseY, width * 0.03, width * 0.03);
}