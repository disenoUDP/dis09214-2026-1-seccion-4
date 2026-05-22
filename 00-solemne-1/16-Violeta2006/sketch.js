let img1;
let img2;
//declaro variable
//para poner el dibujo
//fuente: dibujo propio
//https://p5js.org/reference/p5/loadImage/

let y=200;
let velocidad =2;
//declaro variable
//movimiento de img2
//en el eje y


function preload() {
  img1=loadImage("a.png");
  img2=loadImage("b.png");
  //cargar mi dibujo
  //desde sketch files
  //https://p5js.org/reference/p5/loadImage/
}

function setup() {
  createCanvas(600, 600);
  //los px de mi canvas
  //su porte/dimension 
  noCursor();
  //mi mouse sin flecha
  //que en la pantalla no se vea mi flecha de mouse
  //https://p5js.org/reference/p5/noCursor/
}

function draw() {
  background(31, 112, 85);
  //color del fondo
  //verde oscuro
  
 
  
  
  
 fill(3,79,59);
  //el color de relleno del rectangulo 
  //verde oscuro
  
  noStroke();
  //rectangulo sin borde
  //figura plana de un color
  
  rect(0,150,150,300);
  //rectangulo
  //coordenadas para que parta de la linea negra
  
   stroke(225,105,42);
 //arreglar el color de la linea
//color que resalte con el fondo
//https://p5js.org/reference/p5/rect/
  
  
  
  fill(3,79,59);
  //relleno
  //segundo rectangulo verde oscuro
  
  noStroke();
  //sin borde
  //figura de un solo color
  
  rect(495,488,150,200);
  //segundo rectangulo verde oscuro
  //al lado derecho del rectangulo rojo
  //https://p5js.org/reference/p5/rect/
  
  
  
  stroke(220,118,51);
  //color de la linea
  //naranjo
  
   strokeWeight(3);
 //grosor linea
//para que se vea mejor
  
  line(300,0,300,600);
 //linea que divide el canvas
  //posicionada verticalmente a la mitad
 //https://p5js.org/reference/p5/line/
 
  
  
  
 stroke(174,213,129);
  //codigo rgb para nuestro color
  //verde claro
  
 strokeWeight(10);
  //grosor de linea
  //grosor mayor que las otras
  
  line(100,450,100,600)
  //coordenadas para la posicion de la linea
  //abajo del ellipse blanco
  //https://p5js.org/reference/p5/line/
 
  
  
  
  stroke(240,249,225);
   //le cambiamos el color
  //con el color naranjo de la otra linea parece navidad
   
  strokeWeight(5);
  //cambiamos el grosor
  //que tenga mas presencia que la linea vertical

  line(0,450,600,450);
    //linea que divida el canvas 
  //primer cuarto de inferior a superior
  //https://p5js.org/reference/p5/line/
  
  
  
  
    stroke(115,198,182);
  //color de linea
  //verde menta
  
  strokeWeight(4);
  //grosor de linea
  //grosor mediano
  
  line(205,150,205,600);
  //coordenadas de la linea
  //linea vertical
  //comienza en la linea negra horizontal
  //https://p5js.org/reference/p5/line/
  
 
  
  
  stroke(12,10,9);
  //cambiar color de la tercera linea
  //un color menos intenso a los anteriores
  
  strokeWeight(2);
  //cambiar grosor de tercera linea
  //menos grande que las otras
  
  line(450,0,450,600);
  //cambiar el color
  //ahora parece una falda escocesa 
  //https://p5js.org/reference/p5/line/
  
 
  
    
  stroke(12,10,9);
  //el color de nuetra cuarta linea
  //repetimos el color de la linea anterior
  
  strokeWeight(5);
  //el grosor de la linea
  //el mismo que la primera linea
  
  line(0,150,600,150);
  //linea horizontal
  //segunda linea horizontal
  //en el primer cuarto del canvas
  //ahora si que es falda escocesa 
  //https://p5js.org/reference/p5/line/
  
  
 
  
  
  fill (240,249,225);
  //el relleno del rectangulo 1
  //repetimos el color de la linea 2
  
  strokeWeight(2);
  //el grosor de nuetro perimetro 
  //el perimetro del rectangulo
  
  stroke(220,118,51);
  //el color de nuetro perimetro
  //repetimos el naranjo anterior 
    
  rect(20,10,30,130);
  //rectangulo 1
  //en esquina superior izquierda 
  //https://p5js.org/reference/p5/rect/
  
  
  
 
  fill(frameCount%85,10,9);
  //animacion de color
  //el color se reinicia con el modulo 
  //aumenta el valor max de rgb
  //https://p5js.org/reference/p5/frameCount/
  //relleno de el rectangulo 2
  //repetimos el color casi negro
  
  noStroke();
  //para no incluir perimerto
  //un rectangulo sin borde
  
  rect(480,170,30,260);
  //rectangulo 2
  // posicionado en el espacio creado por lineas
  //rectangulo delgado como el 1
  //https://p5js.org/reference/p5/rect/
  
    
  fill(143,16,7);
  //relleno de rectangulo 3
  //nuevo color rojo oscuro
  
  noStroke();
  //para no incluir perimetro
  //rectangulo solido de un color
  
  rect(330,485,121,87);
  //las coordenadas de rectngulo 3
  //alinieao con linea negra vertical
  //alineado con espacio de lineas 
  //https://p5js.org/reference/p5/rect/
  
  
  
  
  fill(22,36,86);
  //relleno de nuetro ellipse 1
  //color nuevo
  // seguimos la paleta de colores escocesa 
  
  stroke(2410,249,225);
  //el perimetro de nuetro ellipse 1
  //repetimos el color casi blanco
  
  strokeWeight(2);
  //el grosor del perimetro
  //no muy grueso o resalta demasiado
  
  ellipse(120,72,30,130,6)
  //nuestra ellipse 1
  //coordenadas para estar al lado de rectangulo 1
  //https://p5js.org/reference/p5/ellipse/
  
  
  
  
  fill(12,10,frameCount%85);
  //frameCount para cambiar el color
  //85 el % de B 
  //https://p5js.org/reference/p5/frameCount/
  //color de relleno de nuestro ellipse 2
  //repetimos el casi negro
  //se vuelve un espejo del rectangulo a su derecha
  
  noStroke();
  //sin borde
  //para que sea igual al rectangulo casi negro
  
  ellipse(390,300,30,225);
  //nuestro ellipse 2
  //vertical y casi blanco
  //coordenadas para que quedara paralelo al rectangulo
  //https://p5js.org/reference/p5/ellipse/
  
  
  fill(240,249,225);
  //el relleno de nuetro elipse 3
  //se repite el casi blanco
  
  noStroke();
  //elipse sin borde
  //forma plana de solo un color
  
  ellipse(150,449,230,70)
  //elipse horizontal
  //coordenadas para quedar sobre linea blanca
  //https://p5js.org/reference/p5/ellipse/
   
  
  
  
  fill(143,16,7);
  //relleno de nuetro rectangulo 6
 //segundo rectangulo rojo
  
 stroke(174,213,129);
  //el borde del rec
  //verde claro
  
  rect(190,10,30,133);
  //coordenadas de ubicacion
  //al costado derecho del ellipse azul
  //https://p5js.org/reference/p5/rect/
  
  
  
  
  fill(115,198,182);
  //color 10
  //relleno de circulo
  noStroke();
  //sin borde
  //figura solida
  circle(450,80,80);
  //coordenadas dentro del canvas
  //tamaño de circle 
  //para que este sobre la linea negra vertical
  //https://p5js.org/reference/p5/circle/

  
  
  image(img1,5,190,190,190);
  //dibujo propio
  //añadir dibujo
  //coordenadas para ubicarlo en el canvas
  //tamaño de dibujo
  //https://p5js.org/reference/p5/image/
  
  image(img2,200,y,200,200);
  //dibujo propio
  //añadir dibujo
  //coordenadas para ubicarlo en el canvas
  //tamaño de dibujo
  //https://p5js.org/reference/p5/image/

  
  y+=velocidad;
  //la imagen se mueve en el eje
  //vertical y
 if(y > height){
  y=-200
  }
  //se repite el movimiento 
  //sale y vuelve a entrar en el canvas
  //https://p5js.org/reference/p5/height/
  
  
  textSize(50);
  //el tamaño de mi texto
  //es el tamaño de mi cursor
  
  textAlign(CENTER,CENTER);
  //el punto de agarre
  //que calce con mi cursor
  
  fill(174,213,129);
  //el color de mi texto
  //en este caso el color de mi emogi
  
  text("☞",mouseX,mouseY)
  //que mi cursor sea un emogi
  //que mi emogi se mueva con el cursor
  //https://p5js.org/reference/p5/text/
  //https://p5js.org/reference/p5/textAlign/
  //https://p5js.org/reference/p5/textSize/
  
  

  
  
  
  
  
 
  
  
  
  
  
  

  
}