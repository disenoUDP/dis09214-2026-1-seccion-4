//solemne_01

//no olvidar el ;

 // imagen corazon 
 // se mueve
 let cora;
 // imagen ojo_1
 // fija
 let img1;
 // imagen ojo_2
 // fija
 let img2;

 //let tamano;

 // posicion eje x
 // cora
 let posx = 285;
 // posicion eje y
 // cora
 let posy = 200;
 // velocidad vertical
 //cora
 let velocidadY = 3;
 // velocidad horizontal
 // cora
 let velocidadX = 3;



  // imagenes utilizadas
  // ilustadas en infinite painter
  function preload(){
  img1=loadImage('ojo_01.png');
  img2=loadImage('ojo_02.png');
  cora=loadImage('CORAZON_2.png');
}
  function setup() {

  //formato de fondo
  //adaptable segun dispositivo
  
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth, windowHeight);
  
  // cursor
  // modifica el aspecto 
  // imagen propia
  cursor("CORAZON_.png")

}
// condicion del tamaño
//tamano = 20;
//tamano = tamano + 4;
// al final no fue utilizado



  function draw() {
  // color de lienzo
  // RGB
  background(200, 235, 255);
  // cordenada imagen 1
  image(img1, 500, 290, 500, 500);
  // cordenada imagen 2
  image(img2, 0, 280, 400, 400);


  // permite que el corazon se mueva
  // libre en el lienzo
  image(cora, posx, posy, 60, 60);

  // movimiento 
  // actualiza el movimiento 
  // eje y
  posy += velocidadY;

  // rebote 
  //vertical
  if (posy <= 0 || posy + 60 >= height) {
  velocidadY *= -1;
}
  // movimiento 
  // actualiza el movimiento 
  // eje x
  posx +=  velocidadX;
  
  // rebote 
  // horizontal
  if (posx <= 0 || posx + 60 >= width) {
  velocidadX *= -1;
}

  // https://p5js.org/reference/p5/rect/
  // rectangulos de la parte superior
  // tipo cadena
  // al agregar un dato se redondea la forma
  // al agregar 3 se redondea la parte inferior
  // base izquierda
  // quitar contorno
 fill(225,225,225);
  noStroke();// sin contorno
  rect(0 , 0, 50, 0,);
  
 fill(240, 127, 175);
  noStroke();// sin contorno
  rect(20, 10, 50, 10);
  
   fill(255, 255, 177);
  noStroke();// sin contorno
  rect(40, 20, 50, 10);
  
   
   fill(189, 127, 240);
  noStroke();// sin contorno
  rect(60, 30, 50, 10);
  
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(80, 40, 50, 10);
  
  fill(100, 50, 175);
  noStroke();// sin contorno
  rect(100, 50, 50, 10);
  
  fill(147, 127, 240);
  noStroke();// sin contorno
  rect(120, 60, 50, 10);
  
   
   fill(213, 127, 240);
  noStroke();// sin contorno
  rect(140, 70, 50, 10);
  
  fill(225,225,225);
  noStroke();// sin contorno
  rect(160, 80, 50, 10);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(180, 90, 50, 10);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(200, 100, 50, 10);
  
   
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(220, 110, 50, 10);
  
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(240, 120, 50, 10);
  
 
  
  
  
  // crecimiento decreciente
  // mantener colores
  // lado izquierdo
  // a partir del quinto cambiar el orden
  // para que quede encima
  fill(225,225,225);
  noStroke();// sin contorno
  rect(0 , 0, 10, 50,);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(20, 10, 10, 50);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(40, 20, 10, 50);
  
   
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(60, 30, 10, 50);
  
  
  // cambio de orden
  // cambia el rect al lado derecho
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(120, 40, 10, 50);
  
  fill(100, 50, 175);
  noStroke();// sin contorno
  rect(140, 50, 10, 50);
  
  fill(147, 127, 240);
  noStroke();// sin contorno
  rect(160, 60, 10, 50);
  
  fill(213, 127, 240);
  noStroke();// sin contorno
  rect(180, 70, 10, 50);
    
  fill(225,225,225);
  noStroke();// sin contorno
  rect(200, 80, 10, 50);
  
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(220, 90, 10, 50);
  
    
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(240, 100, 10, 50);
  
   fill(189, 127, 240);
  noStroke();// sin contorno
  rect(260, 110, 10, 50);
  
   
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(280, 120, 10, 50);
  

  // repetir accion en el lado contrario
  // base lado derecho
  // restar 
  
  fill(225,225,225);
  noStroke();// sin contorno
  rect(550 , 0, 50, 10,);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(530, 10, 50, 10);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(510, 20, 50, 10);
  
   
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(490, 30, 50, 10);
  
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(470, 40, 50, 10);
  
  fill(100, 50, 175);
  noStroke();// sin contorno
  rect(450, 50, 50, 10);
  
  fill(147, 127, 240);
  noStroke();// sin contorno
  rect(430, 60, 50, 10);
  
  fill(213, 127, 240);
  noStroke();// sin contorno
  rect(410, 70, 50, 10);
  
  fill(225,225,225);
  noStroke();// sin contorno
  rect(390, 80, 50, 10);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(370, 90, 50, 10);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(350, 100, 50, 10);
  
   
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(330, 110, 50, 10);
  
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(310, 120, 50, 10);
  
 
  // crecimiento decreciente del rectangulo 
  // para crear la forma tipo cadena 
  fill(225,225,225);
  noStroke();// sin contorno
  rect(590, 0, 10, 50);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(570, 10, 10,50);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(550, 20, 10, 50);
  
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(530, 30, 10, 50);
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(460, 40, 10, 50);
  
  fill(100, 50, 175);
  noStroke();// sin contorno
  rect(440, 50, 10, 50);
  
  fill(147, 127, 240);
  noStroke();// sin contorno
  rect(420, 60, 10, 50);
  
  fill(213, 127, 240);
  noStroke();// sin contorno
  rect(400, 70, 10, 50);
  
  fill(225,225,225);
  noStroke();// sin contorno
  rect(380, 80, 10, 50);
  
  fill(240, 127, 175);
  noStroke();// sin contorno
  rect(360, 90, 10, 50);
  
  fill(255, 255, 177);
  noStroke();// sin contorno
  rect(340, 100, 10, 50);
  
  fill(189, 127, 240);
  noStroke();// sin contorno
  rect(320, 110, 10, 50);
  
  fill(127, 220, 240);
  noStroke();// sin contorno
  rect(300, 120, 10, 50);
 
  
  // base lineas
  // cambiar color por unidad (stroke)
  // grosor linea (strokeWeigtht)
  
  stroke(230,211,247);//color linea
 line(0,0,windowWidth, windowHeight);
  
  stroke(200,162,235)//color linea
 line(0,20,windowWidth, windowHeight);
  
  stroke(182,127,232);//color linea
 line(0,40,windowWidth, windowHeight);

  stroke(170,111,224);//color linea
 line(0,60,windowWidth, windowHeight);

  stroke(150,84,209);//color linea
 line(0,80,windowWidth, windowHeight);

  stroke(132,72,186);//color linea
 line(0,100,windowWidth, windowHeight);

  stroke(107,52,158);//color linea
 line(0,120,windowWidth, windowHeight);

  stroke(94,44,140);//color linea
 line(0,140,windowWidth, windowHeight);

  stroke(80, 30,120);//color linea
 line(0,160,windowWidth, windowHeight);

  stroke(70,28,110);//color linea
 line(0,180,windowWidth, windowHeight);

  stroke(60,22,100);//color linea
 line(0,200,windowWidth, windowHeight);

  stroke(55,20,97);//color linea
 line(0,220,windowWidth, windowHeight);

  stroke(40,10,80);//color linea
 line(0,240,windowWidth, windowHeight);

  
  //cambio de lado
  //cambio de color
  // las lines se interceptan 
  // ilusion de puntos de fuga
  
    stroke(252,197,229);//color linea
 line(windowWidth, 0, 0,windowHeight);
  
  stroke(230,180,218)//color linea
 line(windowWidth, 20, 0,windowHeight);
  
  stroke(214,176,214);//color linea
 line(windowWidth,40, 0, windowHeight);

  stroke(200,160,198);//color linea
 line(windowWidth,60, 0, windowHeight);

  stroke(200,154,200);//color linea
 line(windowWidth,80,0, windowHeight);

  stroke(200,140,180);//color linea
 line(windowWidth,100,0, windowHeight);

  stroke(200,130,172);//color linea
 line(windowWidth, 120,0,windowHeight);

  stroke(200,100,170);//color linea
 line(windowWidth,140,0, windowHeight);

  stroke(200,80,140);//color linea
 line(windowWidth,160,0, windowHeight);

  stroke(200,50,120);//color linea
 line(windowWidth, 180,0,windowHeight);
  
  stroke(200,30,100);//color linea
 line(windowWidth,200,0, windowHeight);

  stroke(200,20,97);//color linea
 line(windowWidth, 220,0, windowHeight);

  stroke(200,6,101);//color linea
 line(windowWidth,240,0, windowHeight);
  
  
  // circulo morado transparente
  //posx, posy, anchox, alto
  // fill color
  // al agregar un digito se modifica la transparencia
  fill(146, 144, 230,200);
  noStroke();
  //figura con color
  ellipse(30,30,100,100);
  
    
  // los circulos sigientes solo tendran el contorno
  // van en aumento para el efecto deseado ( lo llamare "ondas")
    
  //color linea
  stroke(224, 224, 245);
  // grosor de lineas
  // modofica todas las lineas
  strokeWeight(4.5);
  // quita el color de fondo
  // solo queda la linea exterior
  noFill();
  ellipse(35,35,120,120);
  
   //color linea
  stroke(182, 180, 247);
    noFill()
  ellipse(40,40,140,140);
  
     //color linea
  stroke(136, 133, 224);
    noFill();
  ellipse(45,45,160,160);
  
     //color linea
  stroke(108, 105, 191);
    noFill();
  ellipse(50,50,180,180);
  
     //color linea
  stroke(108, 105, 191);
    noFill();
  ellipse(55,55,200,200);
  
  //color linea
  stroke(46, 42, 150);
    noFill();
  ellipse(60,60,220,220);
  

  // circulo aamarillo transparente
  // segunda figura ondas
  // figura principal
  // segun esta me guiare para los siguentes circulos con solo en contorno
  fill(255, 236, 158,100);
  noStroke();
  ellipse(330,130,300,300);

  
  // ondas
  // crece 20 cada vez
  // el color de linea permite formar el efecto
  stroke(252, 239, 183);
  noFill();
  ellipse(330,130,310,310);
  
   stroke(242, 223, 147);//color linea
  noFill();
  ellipse(330,130,320,320);
  
  
   stroke(240, 215, 117);//color linea
  noFill();
  ellipse(330,130,330,330);
  
  
   stroke(222, 193, 76);//color linea
  noFill();
  ellipse(330,130,340,340);
  
  
   stroke(212, 180, 49);//color linea
  noFill();
  ellipse(330,130,350,350);
  
  
   stroke(209, 174, 32);//color linea
  noFill();
  ellipse(330,130,360,360);
  
  
   stroke(196, 160, 14);//color linea
  noFill();
  ellipse(330,130,370,370);
  
  
   stroke(186, 150, 2);//color linea
  noFill();
  ellipse(330,130,380,380);
  
  
  
  // https://p5js.org/reference/p5/bezierPoint/
  // curva con circulo en movimiento 
  //cordenadas de la curva
  // modifica curva
  // ubicacion y forma
  
  stroke(162, 189, 247);
  let x1 = 0;
  let x2 = 100;
  let x3 = 700;
  let x4 = 30;
  let y1 = 0;
  let y2 = 10;
  let y3 = 800;
  let y4 = 700;

  // caracteristicas curva
  noFill();// sin color 
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  // cordenadas del circulo
  // en mivimiento
  let t = 0.5 * sin(frameCount * 0.01) + 0.5;
  let x = bezierPoint(x1, x2, x3, x4, t);
  let y = bezierPoint(y1, y2, y3, y4, t);

  // circulo
  //caracteristicas
  // color y tamaño
  fill(240, 127, 201);
  circle(x, y, 50);

  
  // cuadrado naranja
  // se reduce el tamaño y cambia el color
  // para crear el patron
  rect(400,400,70);
  fill(245, 163, 90, 150);// color
  
  rect(400,400,60);
  fill(245, 163, 90, 150);// color
  
    rect(400,400,50);
  fill(245, 163, 90, 150);// color
  
    rect(400,400,40);
  fill(245, 163, 90, 150);// color
  
  
  // cudrado verde grande
  // se reduce el tamaño y cambia la tonalidad
  //para formar el patron
   rect(450,350,70);
  fill(188, 227, 137,150);// color
    
   rect(450,350,60);
  fill(188, 227, 137,150);// color
  
    rect(450,350,50);
  fill(188, 227, 137,150);// color
  
  // cuadredo rosa
  // se reduce el tamaño y cambia el color
  // para formar el patron
  rect(500,300,70);
  fill(137, 227, 182, 150);// color
  

  
     rect(500,300,60);
  fill(137, 227, 182, 150);// color
  
    rect(500,300,50);
  fill(137, 227, 182, 150);// color
  
    rect(500,300,40);
  fill(137, 227, 182, 150);// color

  // circulo de la esquina inferior izquierda
  // cambia de color de forma suave
  // https://p5js.org/reference/p5/map/
  // permite manejar el color
  // segun el tiempo
  // frameCound siempre va en aumento
  let r = map(sin(frameCount * 0.03),
              -1, 1, 200, 255);
  let g = map(sin(frameCount * 0.02 + 2),
              -1, 1, 100, 255);
  let b = map(sin(frameCount * 0.02 + 4),
                -1, 1, 0, 150);
  // izquierda
  fill(r, g, b);// color segun parametro
  noStroke(); // sin contorno
  ellipse(0, 800, 340, 340);
  
  // el circulo inferior derecho
  //  cambia de color rapidamente
  //  fremecount va en aumento
  //  permite que los colores cambien 
  let r2 = map(sin(frameCount * 0,90),
              -1, 1, 200, 255);
  let g2 = map(sin(frameCount * 1 + 2),
              -1, 1, 100, 255);
  let b2 = map(sin(frameCount * 0.02 + 4),
                -1, 1, 0, 150);
  // circulo derecho 
  // al otro extremo del lienzo
  fill(r2,g2, b2);
  noStroke();// sin contorno
  ellipse(900, 760, 300, 300);

  // https://p5js.org/examples/calculating-values-interpolate/
  // https://p5js.org/examples/animation-and-variables-animation-with-events/
  // base para el codigo de movimiento
  // mas lo visto en la clase pasada
  image(cora, posx, posy, 60, 60);

  // movimiento corazon 
  // permite que revote en todo el lienzo
  // para que quede encima de lo demas
  posx += velocidadX;
  posy += velocidadY;
  
  // permite que se mueva por el lienzo
  // rebote eje x
  if (posx <= 0 || posx + 60 >= width) {
   velocidadX *= -1;
}
  //rebote
  // eje y
  if (posy <= 0 || posy + 60 >= height) {
  velocidadY *= -1;
  
}

}