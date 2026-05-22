//hola
//mi objetivo es recrear el meme de boric 
//pero con coding >:3
//y de una manera más bonita

let boric;
let flag;
//esto los hace existir, los manifiesta
//let declara una nueva variable, en este caso,
//nuestras fotos


//parametros para movimiento horizontal 
//de las nubes
let x = 10;
let y = 0;
let direccion = 1;
//esto más tarde nos ayudará con el movimiento
//y con la velocidad de este

 

function setup() {
  createCanvas(1000, 1000);
  
//esto carga la foto de boric de nuestra carpeta al sketch
//más abajo 
  //link: https://uchile.cl/presentacion/historia/grandes-figuras/presidentes-de-chile-ex-estudiantes-de-la-u/gabriel-boric-font
  boric = loadImage("boric.png");
  
  //esto hace lo mismo, pero con la foto de una 
  //bandera chilena 
  //link: https://imagenpng.com/imagenes-bandera-chile-png/#google_vignette
   flag = loadImage("flag.png");
  
  
  //esto se puede aplicar al sketch después
  //de cargar la foto a nuestros archivos
  //puse un corazón que encontré bonito
    cursor("corazon.png");
}


function draw() {
  
  //esto hace que el fondo cambie de color con
  //el movimiento horizontal del mouse, simulando un
  //atardecer pq soy muy cursi
  //MouseX Registra la posición del ratón en relación
  //con la esquina superior izquierda
  r = map(mouseX, 0, width, 90,  255);
  g = map(mouseX, 0, width, 2, 50);
  b = map(mouseX, 0, width, 190, 255);
  background(r, g, b);
  

  //boric que se mueve lentamente hacia abajo, 
  //la foto pertenece a la universidad de chile, eso sí le saqué el fondo
 //framecount en Y es lo que hace que baje de a poquito
   image(boric,400, frameCount/7,
       655, 650)
  
  
  //movimiento de las nubes
  //de derecha a izq
  //movimiento hacia la derecha
   if (x < 10)
    direccion = 1;
  //movimiento hacia la izq
   if (y > 370)
    direccion = -1;
  
  //esto define velocidad de direccion
    x = x + 2 * direccion;
  y = x;

  
  //nubes con movimiento
  //color nubes y sacandole tambien los bordes
  //decidí que fueran parcialmente transparentes,
  //eso me recuerda a la verdadera imagen de una nube 
  fill(250, 100, 250, 150);
  noStroke()
  
  //ubicaciones de los elipses que conforman la nube
 ellipse (90 + x, 150, 80, 50)
  ellipse (130 +  x, 145, 85 , 90)
  ellipse(165+ x, 135, 100, 90)
  ellipse(200 + x, 150, 100, 70)
  
  //elegí estos colores porque en un atardecer las nubes
 //toman un color entre rosando y naranjo
  
  //color, bordes y transparencia segunda nube
    fill(255, 30, 220, 130)
  noStroke()
  //elipses que conforman a la 2da nube
   ellipse (290 + x/2, 250, 80, 50)
  ellipse (230 + x/2, 245, 85 , 90)
  ellipse(265 + x/2, 235, 100, 90)
  ellipse(300 + x/2, 250, 100, 70)
  
  
   //sol
  //color del sol
  fill(r * 4, g * 3, b * 2)
  ellipse(250,480,250,250)
   fill(r * 130, g * 6, b * 2)
  //tamaño y ubicación del sol
  ellipse(250,480,200,200)
  
  
  //intento de cordillera
  //con triangulos
  fill(20, 7, 50);
  triangle(100, 675, 805, 520, 986, 675);
  triangle(0, 675, 105, 520, 886, 675);
  triangle(0, 655, 558, 420, 886, 675);
    
    noStroke();
  
  //intento del resto del fondo de la cordillera
  rect(0, 650, 1000, 500);
  
  
  // el resto de los rectangulos van a ser edificios
  fill(240, 100, 200) //rosita
 rect(100, 700, 70,500)
  rect(500, 750, 60, 500)
  rect(700,740, 70, 500)
//agregar otros edificios de variados colores,
  //para hacer una hermosa ciudad
  // fill es para el color
  //rect hace aparecer los rectangulos

  fill(95, 20, 250)// edificios azules
  rect(380, 750, 70, 500)
  rect(600,780, 60, 500)
 rect(210, 800, 60,500)
  rect(850,760, 70, 500)

  fill(150,0,150)//edificios morados
  rect(50,800,70,500)
  rect(350,850, 90, 500)
  rect(650,830, 90, 500)
  
  
  //finalmente agregar la imagen 
  //de una banderita chilena
   image(flag, 170, 610, 200, 200)
  
  //quise agregarle un texto pero por razones 
  //éticas y academicas voy a poner estudien 
 textSize(82); //tamaño del texto 
  fill('yellow');
  //color del texto
  text('estudien', 56, 220);
  //lo que contiene el texto y su ubicacion
  
  
 
}