let img1;
// variable para almacenar la primera imagen
// se usará para cargar y mostrar una imagen en el lienzo
// https://p5js.org/reference/#/p5/loadImage
let img2;
// variable para almacenar la segunda imagen
// se usará para cargar y mostrar una imagen en el lienzo
// https://p5js.org/reference/#/p5/loadImage

function preload() {
  img1 = loadImage('lol.png');
  // carga la imagen 'lol.png' desde los archivos del proyecto
  // preload asegura que la imagen esté lista antes de ejecutar el programa
  // https://p5js.org/reference/#/p5/preload
  img2 = loadImage('morao.png');
 // carga la imagen 'morao.png' desde los archivos
  // se usará posteriormente para animación en pantalla
  // https://p5js.org/reference/#/p5/loadImage
}

function setup() {
  createCanvas(400, 400);
  // crea un lienzo de 400x400 píxeles donde se dibuja todo
  // define el área visible del programa
  //https://p5js.org/reference/#/p5/createCanvas
}

let x = 0; 
// variable de posición horizontal para mover la imagen
// comienza en 0 y se incrementa para generar movimiento
//https://p5js.org/reference/#/p5/draw
let y = 100;
// variable de posición vertical fija de la imagen
// determina la altura en la que se dibuja la imagen
//https://p5js.org/reference/#/p5/image

let r = 0;
let g = 100;
let b = 200;
// variables de color en formato RGB
// se modificarán en el tiempo para generar cambios de color
//https://p5js.org/reference/#/p5/fill


function draw() {
  background(0);
  //pinta el fondo de negro en cada frame
  //evita que los dibujos anteriores queden en pantalla
  // https://p5js.org/reference/#/p5/background
  
  
  
  r = (r + 1) % 256; 
  // incrementa el color rojo con el tiempo
  // el % 256 hace que el valor vuelva a 0 al pasar 255, creando un ciclo continuo 
  // https://p5js.org/reference/#/p5/modulo
  g = (g + 2) % 256;
 // incrementa el color verde con el tiempo
  // el operador modulo (%) limita el valor entre 0 y 255  creando un ciclo continuo
  // https://p5js.org/reference/#/p5/modulo
  b = (b + 3) % 256;
   // incrementa el color azul con el tiempo
  // genera variación constante de color en el tiempo 
  // https://p5js.org/reference/#/p5/modulo
  
  
  x = x + 1; //velocidad
  //aumenta la psición horizontal de la imagen
  //esto produce movimiento automático en pantalla
  // https://p5js.org/reference/#/p5/draw
  
  
  
  image(img1, 230, 230, 150, 150); // (imagen, x, y)
  // dibuja la imagen img1 en la psición (230, 230)
// 150x150 define el tamaño de la imagen
  //https://p5js.org/reference/#/p5/image
  //https://pikmin.nintendo.com/es/ 
  //link de la página oficial de nintendo
  //https://pikmin.nintendo.com/_images/hoverable-pikmin/pikmin-red-lay/pikmin-red-lay-leaf.webp
  //link de la imagen del pikmin rojo
  // criaturita proveniente del juego PIKMIN
  //https://pikmin.nintendo.com/es/piklopedia/#!/red-pikmin
  //piklopedia pikmin rojo
  
  
  
  
  
  
  
  //fill= rellenar
  //dar valor en RGB
  // https://htmlcolorcodes.com/es/
  
  
  // FIGURAS:
  
  //RECTÁNGULOS
  fill(227, 27, 204) //relleno en valor rgb
  //define el color de relleno en formao rgb
  //afecta a las figuras q se dibujan después
  //https://p5js.org/reference/#/p5/fill
  rect(250, 20, 120, 120); 
  //dibuja un rectángulo y le da su posición
  //120x120 define ancho y alto
  //https://p5js.org/reference/#/p5/rect
  
  fill(150, 27, 227)  //relleno en valor rgb
  //cambia el color del relleno
  //prepara el color para la siguiente figura
  //https://p5js.org/reference/#/p5/fill
  rect(200, 60, 100, 120);
  // dibuja otro rectángulo con distinta posición y tamaño
  //crea composición visual en pantalla
  // https://p5js.org/reference/#/p5/rect
  
  fill(27, 140, 227) //relleno en valor rgb
  //nuevo color
  //se usa para diferenciar visualmente las figuras
  //https://p5js.org/reference/#/p5/fill
  rect(150, 100, 80, 120);
  //dibuja un rectángulo más pequeño
  //contribuye a la composición de capas
  //https://p5js.org/reference/#/p5/rect
  
  fill(36, 218, 224) //relleno en valor rgb
  //define color 
  //se usa antes de dibujar otra figura
  //https://p5js.org/reference/#/p5/fill
  rect(100, 140, 75, 120);
  //dibuja un rectángulo en otra posición
  //mantiene la estructura visual
  //https://p5js.org/reference/#/p5/rect
  
  
  
  //CÍRCULOS
  fill(255, 0, 0); //relleno en valor rgb
  //establece color rojo para la siguiente figura
  //https://p5js.org/reference/#/p5/fill
  ellipse(90, 315, 130);
  //dibuja una elipse en la posición indicada 
  //el tercer parámetro define el tamaño
  //https://p5js.org/reference/#/p5/ellipse
  
  fill(255, 115, 0); //relleno en valor rgb
  //cambia al color naranja para la siguiente figura
  //https://p5js.org/reference/#/p5/fill
  ellipse(110, 315, 100);
  // dibuja otra elipse más pequeña
  //genera efecto de superposición
  //https://p5js.org/reference/#/p5/ellipse
  
  fill(255, 195, 0); //relleno en valor rgb
  //establece color amarillo para la siguiente figura
  //https://p5js.org/reference/#/p5/fill
  ellipse(130, 315, 70)
  //dibuja una elipse aún más pequeña 
  //crea efecto visual tipo degradado
  //https://p5js.org/reference/#/p5/ellipse
  
  fill(138, 227, 32); //relleno en valor rgb
  //define color verde para la siguiente figura 
  //https://p5js.org/reference/#/p5/fill
  ellipse(150, 315, 40)
  //se genera última elipse
  //completa la secuencia de formas
  //https://p5js.org/reference/#/p5/ellipse
  
  
  //TRIÁNGULOS
  // seis argumentos x triángulo
  fill(b, r, g);
  //usa valores variables rgb que cambian con el tiempo
  //genera color dinámico
  //https://p5js.org/reference/#/p5/fill
  triangle(12,44,123, 73, 23, 234)
  //dibuja un triángulo usando 3 puntos (x, y)
  // cada par de valores represente un vértice
  //https://p5js.org/reference/#/p5/triangle
  
  fill(r, g, b)
  //cmbia el orden de los colores rgb
  //produce un efecto visual diferente 
  //https://p5js.org/reference/#/p5/fill
  triangle(12, 44, 87, 45, 23, 234)
  //dibuja otro triángulo con la misma forma
  //añade complejidad visual
  //https://p5js.org/reference/#/p5/triangle
  
    
  noStroke();
  //elimina el borde de las figuras 
  // hace que solo se vea el relleno
  // https://p5js.org/reference/#/p5/noStroke

  image(img2, x, y, 180, 180);
  //dibuja la imagen img2 en  la posición (x, y) dentro del lienzo
  //los valores 180, 180 corresponden al ancho y alto de lla imagen 
  //https://p5js.org/reference/#/p5/image
  ////https://pikmin.nintendo.com/es/ 
  //link de la página oficial de nintendo
  //https://pikmin.nintendo.com/_images/layouts/piklopedia/thumbnails/purple-pikmin.webp
   //link de la imagen del pikmin morado
  // criaturita proveniente del juego PIKMIN
  //https://pikmin.nintendo.com/es/piklopedia/#!/purple-pikmin
  //piklopedia pikmin morado
  
  
  
  
  
  
  
x = x + 2;
  //incrementa la posición horizontal en cada frame
  //el valor 2 define la velocidad del desplazamiento hacia la derecha
  //https://p5js.org/reference/#/p5/draw

if (x > width) {
  //evalua si la imagen ha salido completamente por el borde derecho del lienzo
  // width representa el ancho del canvas (400) en este caso
  //https://p5js.org/reference/#/p5/width
  
  x = -180; // vuelve a aparecer desde la izquierda
  //reinicia la posición de la imagen fuera del lado izq del canvas
  // el valor -180 corresponde al ancho de la imagen para q reaparezca suavemente 
  //https://p5js.org/reference/#/p5/image
}
  
  noCursor(); // oculta cursor normal
  //oculta el cursor original del sistema
  //permite usar un cursor personalizado
  //https://p5js.org/reference/#/p5/noCursor

  textSize(64); // tamaño del emoji
  //define el tamaño del emoji
  //tamaño del cursor en este caso
  //https://p5js.org/reference/#/p5/textSize
  
  text("🚀", mouseX - 16, mouseY + 16);
  //dibuja un emoji en la posición del mouse
  // reemplaza e cursor con un elemento visual personalizado
  // https://p5js.org/reference/#/p5/text
  
}








