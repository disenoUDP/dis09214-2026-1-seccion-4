// SOLEMNE PENSAMIENTO COMPUTACIONAL 
// woodstock puede moverse con las flechas del teclado :)


//let es declarar a continuacion viene el nombre den la variablle
// el nombre de la variable es unico 

//snupi es para la imagen del snupi
// luego caragare mi imagen png
let snupi;

// woodstock es el pajarito
// esta es la imagen que se movera 
let woodstock;

// casita es para mi curson 
// imagen png 
let lunita;

// valor de x 
//luego servira para el moovimiento del pajarito
let x = 50;

// valor de y
// servira de igual manera para el movimiento del pajarito 
let y = 50;

// setup() solo corre una vez
// y al principio de los tiempos
function setup() {
  
  //createCanvas es nuestro lienzo
  // (windowWidth, windowHeight) se acomoda
  //a todos los dispositivos, dependiendo del tamaño de la ventana
  createCanvas(600, 600);
  
  // foto sacada de pinterest 
  // https://cl.pinterest.com/pin/3307399719683237/
  // le saque el fondo en photoshop antes de subirla a p5
  snupi =
    loadImage("snoopy.png");

//foto scada de pinterest 
//  https://cl.pinterest.com/pin/143904150587089948/
// le saque el fondo en photoshop antes de subir a p5 
  woodstock = 
    loadImage ("woodstock.png");
  
  // foto sacada de pinterest 
 // https://cl.pinterest.com/pin/15340454976609525/ 
  lunita =
    loadImage ("lunita.jpeg")
    
}

// draw () ocurre despues de setup()
//y ocurre en bucle, hasta el fin de los tiempo 
function draw() {
  
  // background() ocupa todo el canvas
  // puede ser en 
  // ( escala de grises)
  // (escala de grises, trasparencias)
  // (R, G, B)
  // (R, G, B, trasparencias)
  
  // color fondo 
background (221, 224, 211);


  
// elipseMode (CORNER) significa que x, y parte desde la esquina
  // en vez del centro que es el estandar de la elipse 
ellipseMode(CORNER);
  
  // noStroke() quita la linea del borde
  // esta en estandar al momento de dibujar una figura 2D
  noStroke();
  

  //declaracion valores primer colores primer elipse 
  // colores estable para el cambio de color del primer elipse
 let g1 = 103
  let b1= 84
  
  // parametros de cambio de rojo en rgb 
   sin(frameCount * 0.0);
  let r1 = map(sin(frameCount * 0.1), -1, 1, 0, 60);
  
  //fill es para pintar el primer elipse 
  // (r, g ,b)
  fill(r1, g1, b1);
  
  ellipse(0, 0, 200, 150);
  // el elipse parte desde los primeros puntos de lienzo 
  // el tercer cuarto parametyro es el ancho y largo 
  ellipse(0, 0, 200, 150);
  
  // color segundo elipse
  //ellipseMode sigue contando en este ellipse
  fill (193, 217, 200);
  
  // inicio desde el final del primer elipse 
  // para que queden juntos
  ellipse (200, 0, 100, 150);
  
  // primer rectangulo: rectMode(CORNER)
  // para que las cordenadas de inicio partan desde la esquina izquiera
    rectMode(CORNER);
  
  //color primer rectangulo 
  // (R, G, B)
  fill(181, 211, 201);
  
  // cordenada uno y dos = posicion desde la esquina superior izquiera
  // tercero y cuarto, ancho y largo 
  rect(300, 0, 250, 150);
  
// color que rellena el el elipse sobre rectangulo 
  //(R, G, B)
  fill(138, 160, 163);
  
  // elipse que va encima del primer rectangulo
  // posicion x, y, largo, ancho
  // igual que el rectangulo, para que qude perfectamente alineado
  ellipse (300, 0, 250, 150);
  
  // declaraciones colores fijos 
  //para el cambio de color del ultimo elipse de la primera fila
  let g2 = 124
  let b2 = 111
  
  // parametros ocilacion color rojo
   sin(frameCount * 0.0);
  let r2 = map(sin(frameCount * 0.2), -1, 1, 0, 100);

  //relleno del ultimo elipse de la primera linea
  fill(r2, g2, b2);
  
  // parametris del ultimo elipse de la primera fila
    ellipse (550, 0, 50, 150);
  
  // color primer elipse segunda linea
  //(r, g, b)
  fill (193, 217, 212);
  
  // primer y segundo parametro, x, y
  // tercer parametro, tamaño, como es un circulo solo necesita un parametro y deja en ancho y largo iguales 
  ellipse (0, 150, 150);
  
  // color segundo elipse segunda fila
  //(r, g, b)
fill(169, 204, 189);
  
  //segundo elipse, segunda fila
  // parametros, incio desde la esquina superior izquierda 
  ellipse (150, 150, 200, 150);
  
  // color tercer elipse, segunda fila
  // (r, g, b)
   fill (147, 175, 181);
  
  // tercer elipse, segunda fila 
// (x, y, ancho, largo)
  ellipse (350, 150, 40, 150);
  
  //cuarto elipse, segunda fila 
  // sin fill() porque es el mismo color que el anterior 
  ellipse (390, 150, 60, 150);
  
  
  // quinto elipse, segunda fila 
  //sin fill() porquue es el mismo color q  ue los dos anteriores
  ellipse (450, 150, 150);
  
  //rectMode para que empieza desde la esquina superior izquiera 
  // abarca elipses de la tercera y cuarta fila
   rectMode(CORNER);
  
  //color especifico del rectangulo
  // hay codigo porque cambia a diferencia de los elipses anteriores 
  // va arriba del tamaño del rectangulo
  //el computador lee de arriba hacia abajo
  //el color siempre tiene que ir antes que la figura 
  fill(181, 211, 201);
  
  // inicio del rectangulo desde la mitad eje y
  // largo del dobre que los elipses
  // porque esta detras de varios elipses
  rect(0, 300, 270, 300);
  
  //color priumer rectangulo, tercera fila
  // (r, g, b)
    fill(144, 153, 112);
  
  // elipse parte del mismo punto que rectangulo que va detras
  // 90 pixelñes de ancho, 150 de largo 
  // mitad de largho que el rectangulo porque este abarca las ultimas dos lineas
  ellipse (0, 300, 90, 150);
  
// color dse los siguientes dos elipses
  //(r, g, b)
  fill(128, 145, 144);
  
  // segundo elipse, tercera fila 
// uy delgado, 30 pixeles de ancho
  ellipse (90, 300, 30, 150);
  
  // tercer elipse, tercera fila
  // sin fill() porque el color del anterior le aplica tambien a este 
  ellipse (120, 300, 150);
  
  // colores fijos colores
  // para el cuarto elipse de la tercera fila
  let g3 = 156
  let b3 = 164
  
// parametros de ocilacion 
  // del rojo
   sin(frameCount * 0.0);
  let r3 = map(sin(frameCount * 0.02), -1, 1, 0, 150);

  // relleno cuarto elipse tercera fila
  fill(r3, g3, b3);
  
  // cuarto elipse, tercera fila
    ellipse (270, 300, 280, 150);

  
  // color quinto elipse, tercera fila
  // (r, g, b)
     fill (147, 175, 181);
  
  //quinto elipse, tercera fila
  // para calcular cordenadas se suman el ancho de los elipses anterires y ahi empieza el elipse 
  ellipse (550, 300, 50, 150);
  
  // color elipse uno, linea cuatro
 // (r, g, b)
   fill (99, 137, 146);
  
  // primer cuadrado, linea 4 
  // eje y es divido en 4 para saber donde empezar 
  ellipse (0, 450, 200, 150);
  
  // color segundo elipse, ultima fila 
  //(r, g, b)
    fill (147, 175, 181);
  
  //segundo elipse, ultima fila 
  //con tamaño especifico para que quede dentro del rectangulo  
  ellipse (200, 450, 70, 150);

  // sin fill() porque es el mismo color que en anterior
  //posicion y tamaño del elipses 
    ellipse (270, 450, 55, 150);
  
  // color cuarto elipse, ultima fila 
  //(r,g, b)
  fill(193, 217, 212);
  
  //cuarto elipse, ultima fila 
  // posicion x, y , tamaño
  ellipse (325, 450, 160, 150);
  
  // rectMode (CORNER) para que parta desde la esquina izquierda
  // aplica al siguiente rectangulo 
  rectMode(CORNER);
  
  // color ultimo rectangulo
 //(r, g, b)
  fill(181, 211, 201);
  
  // ultimo rectangulo
  // cordenadas de posicion + tamaño
  rect(485, 450, 115, 150);
  
  //color ultimo elipse 
  //(r, g, b)
    fill (138, 160, 163);
  
  //ultimo elipse 
  // cordanas de posicion + tamño 
  ellipse (485, 450, 115, 150);
  
  // imagen esnupi
  // subida desde el compu 
   image(snupi,
         // cordenadas
         //(x,y)
        0, 485,
         // tamaño
         // (largo, ancho)
         // para que quedara bien la proporcion largo-aqncho me ayude con photoshop
       200, 131);

  
  
   

  
  // parametros para que woodstock se pueda mover
  // con las flechas del teclado
    if (keyIsDown(LEFT_ARROW)) x -= 3; 
  if (keyIsDown(RIGHT_ARROW)) x += 3; 
  if (keyIsDown(DOWN_ARROW)) y += 3;
  if (keyIsDown(UP_ARROW)) y -= 3; 
  
  // imagen woodstock
  image (woodstock, 
         // para que siga las teclas de las flechas
        x, y, 
         // tamaño imagen 
        75, 83)
  
  
  // para que siga el cursor
   image(lunita,
         // parametros que hacen que la imagen siga el cursor 
         mouseX, mouseY, 
         // tamaño 
         60, 60);
  
 //para ocultar el cursor original
  noCursor();
  
  
}
  
  

  
  