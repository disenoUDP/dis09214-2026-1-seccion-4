

//let img; 
//te permite colocar una foto/imagen 
//despues de function setup() { y
//createCanvas(windowWidth, windowHeight);
//pero let img: tiene que ser puesto antes
// info de como colocar imagen 
//fue sacado de los apuntes del profesor
//https://editor.p5js.org/montoyamoraga/sketches/yIMUrukay
let img;

//let img2;
//funciona tal cual como es mencionado arriba
//pero ahora agregue ese 2
//ya que es la segunda imagen
let img2;


function setup() {
  
  //createCanvas(windowWidth, windowHeight);
 //tamano del lienzo
  createCanvas(windowWidth, windowHeight);
  //noCursor();
  //codigo para que no aparezca el cursor
  //en el lienzo
  noCursor();
  //img = loadImage('Estegosaurio dormido en un paisaje simple.png');
  // esto permite colocar la imagen que deseas
  //lo que se encuentra en ()
  //es el nombre exacto de la imagen escogida
  //https://es.dreamstime.com/estegosaurio-un-simp%C3%A1tico-personaje-de-dinosaurio-herb%C3%ADvoro-image363418476
//link de inspiracion para la imagen dinosaurio
//con ayuda de la ia chat gpt
//saque la imagen puesta
//ya que la original tenia una marca de agua y fondo blanco
//pero me gusto mucha esa imagen y pedi que sea editada
 img = loadImage('Estegosaurio dormido en un paisaje simple.png');
  
  //https://cl.pinterest.com/pin/8233211829257935/
  //enlace de la imagen pez 
  img2 = loadImage('pezz.png');
  
 
}

function draw() {
  //background(245, 237, 163);
  //color del fondo
  background(245, 267, 153);
  
  
  
  //push();
  //ese codigo lo saque de la ia chat gpt
  //ya que busque que podia hacer para que 
  //al momento de modificar el color de una ellipse 
  // o rec, no se cambiaran todas las figuras
  //entonces me aconsejo que usara push(); 
  //al principio de formar una figura
push();
  //fill (71, 115, 22);
  //color verde oscuro del rectangulo
  //que se encuentra en horizontal 
  //en la parte superior del lienzo
  fill (7, 76, 2);
  //stroke (0, 1,1, frameCount%245, 95);
  //borde que cambia color en el tiempo
  //del rect mencionado anteriormente 
  stroke (0, 1,1, frameCount%245, 95);
  //strokeWeight (5)
  //grosor del rect
  strokeWeight (8);
  //rect (0, 160, windowWidth, 20);
  // posicion del rect
  rect (0, 160, windowWidth, 20);
  //pop(); 
  // fue el otro codigo que me dio chat gpt
  //para cerrar la edicion de la figura creada
  pop();
  
  
  //push();
  //codigo sacado de la ia chat gpt
  //para comenzar la edicion de una nueva figura
  push();
  //fill (135, 1, 1);
  //relleno rojo de la elipse
  //que se encuentra esquinada en la
  //esquina superior izquierda
  fill (135, 1, 1);
  //stroke (242, 187, 68);
  //borde naranjo del elipse
  stroke (242, 187, 68);
   //strokeWeight (200); 
  //el peso/grosor del borde
  strokeWeight (190); 
  //ellipse (245, 190, 61);
  //elipse y su posicion en el lienzo
  //esquina izquierda superior 
  ellipse (245, 230, 270, 250);
  //pop(); codigo sacado de la ia chat gpt
  //usada para cerrar edocion del elipse
  pop();
  
  
  //push();
  //codigo sacado de la ia chat gpt
  //para comenzar la edicion de un nuevo elipse
  push();
  //fill (245, 233, 88);
  //relleno amarillo semi vibrante
  // del nuevo elipse
  fill (245, 233, 88);
  //stroke (245, 222, 69);
  //borde no tan grueso 
  //color amariilo mas oscuro que del relleno 
  stroke (245, 222, 69);
  //strokeWeight (50)
  //grosor del borde
  strokeWeight (50)
  //ellipse (600, 600, 300, 400);
  //posicion que se encuentra la elipse
  //desde el centro esta un poco 
  //hacia la esquina inferior derecha
  ellipse (600, 600, 300, 400);
  //pop();
  //codigo para cerrar edicion den elipse
  pop();
  
  
  //push();
  // para empezar nueva figura
  push();
  //fill (85,115,2) 
  //relleno verde no tan claro 
  fill (186, 222, 95) 
  //noStroke();
  //para que el rect no tenga borde
  noStroke();
  //rect (200, 600, 2, windowHeight);
  //rectangulo cerca
  //de esq izq inferior
  rect (200, 600, 200, windowHeight);
  //pop();
  //cerrar edicion
  pop();
  
  
  //push();
  // para empezar nueva figura
  push();
  //line (800, windowWidth, 800, 0);
  //coordenadas de posicion de la 
  //liena que se encuentra 
  //vertical a la derecha
  line (800, windowHeight, 800, 0);
  //fill(97, 4, 45);
  //color burdeo oscuro de linea
  fill(97, 4, 45);
  //stroke (97, 4, 45)
  //mismo color de linea
  //es el borde
  stroke (97, 4, 45)
  //strokeWeight (20)
  //grosor de borde la linea
  strokeWeight (20)
  //pop();
  //para cerrar edicion de la figura
  
  //deje de usar pop(); aqui
  //ya que ahora no me deja 
  //modificar el grosor de la linea
   
  //push();
  // para empezar nueva figura
  push();
  //fill (186, 222, 95)  
  //color verde claro 
  //para el rectangulo 
  fill (186, 222, 95)  
  //noStroke();
  //para que el rect no tenga borde
  noStroke();
  //rect (500, 100, windowWidth, 0);
  //posicion del rectangulo
  //esq derec superior
  rect (400, 0, windowWidth, 100);
  //pop();
  //codigo de cierre de edicion de figura
  pop();
  

   
  //push();
  // para empezar nueva figura
  push();
  //fill (60, frameCount%200, 0);
  //relleno que con modulo cambia el color en el tiempo
  //colores verdes
  fill (80, frameCount%190, 0);
  //noStroke();
  //para que el rect no tenga borde
  noStroke();
  //rect (100, 600, 0, windowHeight);
  //coordenadas de rectangulo
  //esq izq inferior
  rect (100, frameCount%900, 80, windowHeight);
  //pop();
  //codigo de cierre de edicion de figura
  pop();
  
  
 //push();
  // para empezar nueva figura
  push();
  //line (00, windowWidth, 800, 0);
  //coordenadas de posicion de la 
  //liena que se encuentra 
  //vertical a la derecha
line (900, windowHeight, 900, 0) 
  //fill(97, 4, 45);
  //color burdeo oscuro de linea
  fill(97, 4, 45);
   //stroke (97, 4, 45)
  //mismo color de linea
  //es el borde
  stroke (97, 4, 45)
  //strokeWeight (10)
  //es el grosor del borde
  //use esto para ensanchar la linea
  strokeWeight (10)
  
  //cuando uso linea
  // pop(); no funciona
  // o mas bien me bloquea ciertas modificaciones 
  //para la linea

  
  //push();
  // para empezar nueva figura
  push();
  //fill (134, 168, 35);
  //color verde del rect
  fill (134, 168, 35);
  //noStroke ();
  //no borde en el rect
  noStroke ();
  //rect (700, 250, windowWidth, 0);
  //rectangulo cerca 
  //de esquina derecha superior 
  rect (700, 250, windowWidth, 70);

  //pop();
  //cierre de edicion de rect
  pop();
  
  
  
  //push();
  // para empezar nueva figura
  push ();
  //fill (245, 190.65)
  //color blanco semi transparente
  //de la elipse del centro
  fill (245, 190.65)
  //noStroke();
  //no borde en la elipse
  noStroke();
  //ellipse (windowWidth/2, windowHeight/2, 300, 200)
  //coordenda de posicion de la elipse
  ellipse (windowWidth/2, windowHeight/2, 300, 200)
  //pop();
  //cierrre de edicion de la elipse
  pop();
  
  
  //image(img, 633, 850, 350, 250);
  //es para colocar la imagen del dinosaurio tierno
  //que ya puse y descargue en p5
  //primeros numeros son para la posicion dentro del lienzo
  // y los ultimos dos son el tamaño 
  image(img, 633, 850, 350, 250);
  
  //image (img2, frameCount%900, 452, 250,231);
  //codigo para colocar segunda imagen que es el pez con gorrito
  //funciona igual que la ya mencionada
  //frameCount%900 es un modulo para hacer que el pez se mueva de un lado a otro
  //esta nadando 
  image (img2, frameCount%900, 452, 210, 131);
  

  
  
  //textSize(75)
  //ese codigo es para el tamaño de lo que se ponga en text
  //text("🪲", mouseX, mouseY);
  //text es para poder escribir algo o en este caso
  //poder un emoji 
  // mouseX y mouseY indican que es para convertir el cursor 
  //en el emoji escogido
  //mouseX indica donde esta el mouse horizontal y
  //mouseY donde esta vertical
  //info sacada de apuntes profesor 
  //https://github.com/disenoUDP/dis09214-2026-1-seccion-4/tree/main/00-docentes/sesion-02
  textSize(75)
  text("🪲", mouseX, mouseY);
  
  
  
  
  
  
  
  


  
}