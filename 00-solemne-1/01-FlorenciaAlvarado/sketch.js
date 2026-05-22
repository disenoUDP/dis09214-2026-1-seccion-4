let imgBurbujas; //https://p5js.org/reference/p5/let/
let imgFija;
//sirve para crear la variable donde guardo mi imagen. Agrego nombres a imagenes distintas para diferenciar.
let x=-50// acá veo variables para la imagen que se movera. Pongo negativo para que empiece fuera de la pantalla, ya que el canvas empieza en 0.

let y=300// Puse 300 para que empiece en una altura media de la pantalla. https://p5js.org/tutorials/animating-with-media-objects/ ambas variables me sirven para guardar una posición especifica en el canvas.


function preload() {  //sirve para cargar la imagen antes de mostrarla, siempre que se use loadImage hay que poner esta función. https://p5js.org/reference/p5/preload/

  imgBurbujas=loadImage('Diseño sin título (12).png'  ); //aca cargo la imagen que se movera. https://images.unsplash.com/photo-1625842312072-7ff20b09abf9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=andrew-keymaster-3vf0fBw15HY-unsplash.jpg

   imgFija=loadImage ( 'Diseño sin título (13).png' ); //sirve para cargar la imagen en el canvas, tiene que ir con comillas, sino no carga. Para hacer esto es necesario subir el archivo en sketch files, en la pestaña del costado izquierdo. https://p5js.org/reference/p5/loadImage/ Enlace imagen.
//https://images.unsplash.com/photo-1729892935767-50bb36a38589?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=steve-johnson-MC2Hqdm0TeY-unsplash.jpg&w=2400
}

 function setup() {
  createCanvas(600, 600);
   noCursor (); // esconde el cursor, va sin parametros, ya que solo le dice al programa que lo oculte. https://p5js.org/reference/p5/noCursor/
  textSize (60); // define tamaño texto, en este caso de emoji dentro de la pantalla https://p5js.org/reference/p5/text/
 }


function draw() {
  background(144, 144, 245); // Elige el color del fondo. Orden RGB, el primero sirve para el rojo, el segundo para verde y el tercero para azul. https://p5js.org/reference/p5/background/

  
  let t= (sin(frameCount * 0.05) + 1); //framecount cuenta el numero de frames que se han mostrado desde que empezo el programa, sin hace que los valores oscilen entre -1 y 1 y mas el 0.05 generan un movimiento suave, de esta forma los colores no cambian drasticamente. El +1 mueve el rango para arriba, ya que sin igual da negativos como -1, pero lerpcolor necesita valores que no sean negativos. https://p5js.org/es/reference/p5/sin/ https://p5js.org/es/reference/p5/frameCount/
  
  let c1 = color(255, 7, 60 ); //rojo
  let c2 = color(100, 156, 240); //azul
  let c = lerpColor (c1,c2,t); //este paso sirve para combinar los colores, pasando del c1 al c2.https://p5js.org/reference/p5/lerpColor/
  
  let c3 = color(245, 108, 9); //naranjo
  let c4 = color(255, 157, 86)//segundo naranjo
  let b= lerpColor (c3,c4,t); //combina colores
  
  
   image(imgFija,0,0); // con esto, hacemos que la imagen aparezca en la pantalla, sus parametros son x e y, en este caso lo queria de tamaño completo, por eso el archivo de foto esta en 600 pixeles y puse 0,0. https://p5js.org/reference/p5/loadImage/

    image(imgBurbujas,x,y,300,300); //aca, puse los parametros de img,x,y para que de esta forma funcione lo primero que puse con let, de esta forma se ubica en -50 y en 300 dentro del canvas. El 300,300 define el tamaño de imagen.
  
  x=(x+2) % width;//al agregar un número positivo hacemos que el objeto se mueva a la derecha, y si le agregamos uno negativo avanza a la izquierda. Originalmente x=0 (borde izquierdo) por eso se agrega o resta numero para mover. Mientras más alto el numero, más rapido avanza.
  
  noStroke(0); //sirve para no ponerle trazo/borde a la figura. https://p5js.org/reference/p5/noStroke/
  fill(30, 59, 250,100); // sirve para rellenar la figura con un color, que se elige mediante RGB, en este caso agregue el ultimo parametro 100 para darle transparencia al color. https://p5js.org/reference/p5/fill/
  rect(10, 10, 300, 80); // sirve para dibujar rectángulos,sus parametros son X,Y,W,H. Siendo x, la posición horizontal, y, la posición vertical, W el ancho y H el alto. https://p5js.org/reference/p5/rect/
  
  noStroke(0);
  fill(30, 59, 250,100);
  rect(190,440,400,150);
  
  noStroke(0);
  fill(255, 0, 21,100)
  rect(390,10,200,320)

  noStroke(0);
  fill(255, 0, 21,100)
  rect(10,200,150,390)
  
  
  fill(255, 135, 137);
  ellipse(300,300,500,500); //primer circulo de base.
  
  fill(b);
  ellipse(300,300,450,450); //segundo circulo que varia color entre c3 y c4.
  
  fill(245, 108, 9);
  ellipse (300,300,400,400); //tercer circulo.
  
  fill(b)
  ellipse(300,300,350,350) //cuarto circulo que varia color entre c3 y c4.
  
  fill(255, 7, 60)
  ellipse(300,300,300,300) //quinto circulo.
  
  fill (c);
  ellipse(300,300,250,250); //sexto circulo que varia color entre el rojo y el azul.
  
  fill(255, 7, 60 );
  ellipse( 300,300,200,200); //septimo circulo.
  
  fill(c);
  ellipse(300,300,150,150); //octavo circulo que varia color entre el rojo y el azul.
  
  fill(255, 7, 60)
  ellipse(300,300,100,100); //noveno circulo.
  

  stroke(168, 172, 255)
  strokeWeight(10);
  line(0,30,450,30)//linea de arriba
  
  stroke(168, 172, 255)
  strokeWeight(10);
  line(0,570,450,570); // genera una linea, los parametros son X1,Y1,X2,Y2. Siendo X1 posición horizontal del punto inicial,  Y1 posición vertical del punto inicial, X2 posición horizontal del punto final y Y2 posición vertical del punto final. https://p5js.org/reference/p5/line/

  noStroke(0);
  fill(237, 44, 66,)
  ellipse(
    (frameCount * 5) % 600, // el número 5 calcula la velocidad, numero mas alto, más rapido y mas bajo, más lento., 50 y 50 para que sea un circulo y el parametro de 30 calcula verticalmente donde empieza. El % es el perador módulo, y el numero como el 600, sirve para definir el limite, en este caso del ancho del canvas, para que avance de izquierda a derecha hasta el final.
    30, 50,50) //https://p5js.org/reference/p5/frameCount/
  
  noStroke(0);
  fill(237, 44, 66,)
  ellipse(
    (frameCount * 5) % 600, //aca solo cambie parametros de ubicación, en vez de 30, puse 570 para que este abajo.
    570,50,50);
  
 image(imgBurbujas,x,y,300,300); //aca, puse los parametros de img,x,y para que de esta forma funcione lo primero que puse con let, de esta forma se ubica en -50 y en 300 dentro del canvas. El 300,300 define el tamaño de imagen.
 
  x=(x+2) % width;//al agregar un número positivo hacemos que el objeto se mueva a la derecha, y si le agregamos uno negativo avanza a la izquierda. Originalmente x=0 (borde izquierdo) por eso se agrega o resta numero para mover. Mientras más alto el numero, más rapido avanza.

  text ("🤍", mouseX, mouseY); // la palabra text permite escribir algo o poner un emoji en la pantalla, en este caso cambia el cursor por un emoji, el parametro mouseX indica donde esta el mouse horizontal y mouse Y donde esta en vertical, sirve para dibujar el emoji exactamente en donde esta el mouse. Va al final de todas las figuras, para que pase por encima de estas y no por abajo. https://p5js.org/reference/p5/mouseX/ https://p5js.org/reference/p5/mouseY/ 
  
  
}

 