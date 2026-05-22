let x = 0;
let y = 0;
let velocidad = 4;
let steven;
function preload() {
  steven = loadImage("stevenuniverse.png");
  gatogalleta = loadImage("Gatogalletaaa.jpg");
  //imagen de Steven: https://es.wikipedia.org/wiki/Archivo:Steven_Universe_sprite.png
  //imagen de gatogalleta: https://steven-universe.fandom.com/es/wiki/Gatogalleta
}

function setup() {
  createCanvas(700, 600);

  //// fotos y cursor////
  gatoGalleta = loadImage("gatogalleta.jpeg");
  //imagen del gatoGalleta: https://cl.pinterest.com/pin/848224911061398744/
  //imagen de Steven: https://es.wikipedia.org/wiki/Archivo:Steven_Universe_sprite.png
  //esto es para asignar un comando para que el compu
  //entienda que llamamos esa imagen que subimos al archivo

  cursor("gatogalleta.jpeg");
  //esto hace que el cursor se transforme en la imagen que
  //pusimos anteriormente, asi en vez del cursor, sale la imagen
}

function draw() {
  background(140, 92, 207);
  //son los colores del fondo
  //en modo rgb osea rojo, verde, azul.

  //// ojo volador ////
  noStroke();
  fill(212, 163, 207);
  ellipse(x, y, 70, 30);
  // este es la fonda del platillo o ojo volador que esta mas atras
  // para poder sostener el siguiente circulo
  fill(108, 163, 207);
  ellipse(x, y, 15, 15);
  // el fill es para el relleno de la elipse
  // y se pone el x, y en la elipse para que parta
  // de la coordenada 0,0 osea, de la esquina
  // va a ser el interior del elipse anterior  

  x += velocidad;
  y += velocidad;
  // esto quiere decir que x + la velocidad que le
  //demos en los parametros, va a ir en diagonal

  if ((x > width, y > height)) {
    x = 0;
    y = 0;
  }
  //width y heigth se utilizan para nombras los bordes
  // lo de xy= 0 hace que tenga un limite de extension
  // por lo que va a volver a empezar, se le ponen los
  // asi se puede mover los elipses anteriores

  //// fondo y paisaje ////
  rect(0, 200, 700, 300);
  //es el color de fondo como si fuera el mar
  // por eso es de un color celeste
  // esto es para darle color a la linea
  //y los numero de line son desde la esquina
  // superior izquierda hasta el centro del lienzo

  noStroke();

  fill(59, 6, 253);
  ellipse(500, 320, 600, 400);
  // 01 como las montañas van caba vez mas abajo visualmente, designe el 
  //color mas azul para el de la montaña de mas al fondo
  //y que fuera mas grande

  fill(92, 17, 224);
  ellipse(200, 500, 500, 600);
  // 02 es la segunda mas grande, es de un color mas morado
  //para que continue con el degrade de color y es un
  //poco mas abajo de la aterior

  fill(104, 43, 187);
  ellipse(500, 550, 500, 500);
  // 03 la siguiente es mas morada todavia con unos subtonos de 
  //rojo haciendo que se acerque al rosa, es mas baja que la anterior

  fill(70, 30, frameCount);
  ellipse(300, 600, 500, 400);
  // 04 la siguiente es la elipse mas pequeña de todas y de un color mas intenso
  //dando alusion a que esta mas cerca, es en donde la imagen de steven 
  //va a estar encima, tambien va a cambiar de color

  //// rectangulos de mas alfrente ////
  fill(35, 7, 100);
  rect(0, 500, 700, 550);
  // 01 es el morado mas cerca del azul para hacer dos niveles de profundidad
  // va a estar en la parte inferior de lienzo

  fill(35, 0, 71);
  rect(0, 550, 800, 400);
  // 02 se ubica en la parte mas inferior, ambos rectangulos estan mas alfrente del lienzo y 
  //en la parte mas abajo
  

  //// sol ////
  fill(250, frameCount, 71);
  ellipse(600, 100, 40, 40);
  // quiero que el color del sol se cambie de rojo a un amarillo, para eso puse frameCount 
  // que va de rojo a un color amarillo
  //esta en el cielo casi en la esquina superior derecha

  //// imagenes ////

  image(steven, 200, 350, 100, 100);
  //esto permite poner la imagen y su posicion
  //en el lienzo, va a estar parado sobre la elipse 04 

  image(gatogalleta, frameCount, 480, 150, 100);
  // se va a mover horizontalmente por sobre los rectangulos 01 y 02
  //recorriendo hasta desaparecer por el lado derecho
}
