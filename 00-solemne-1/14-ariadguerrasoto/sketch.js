

let persona; //usé let para declarar que esa palabra es lo que puse a continuanción, osea una imagen.
let nyancat;

let mikuchiquita;

//let x,y; //cordenadas de la miku chiquita
//let velocidadX, velocidadY; // Velocidad en cada eje

function preload() { //también usé preload para que las imagenes que subí se cargaran antes que el lienzo y draw.
  // referencia de como subir imagenes:https://p5js.org/es/reference/p5/loadImage/
  
  persona = loadImage('PERSONAGRIS.png');
  // le di un valor con = a "persona", un valor que ahora entiende p5, y despues le dije que con loadImage cargara las imagenes en mi sketch
  
 //link de fuente ilustración persona:https://si-ku.art/painting/?type_0=gallery&album_gallery_id_0=36
  nyancat = loadImage('nyancat32x32.png');

  //link de fuente imagen de cursor:ttps://nyancat.fandom.com/es/wiki/Nyan_Cat
  
  mikuchiquita = loadImage('mikuchiquita.png');
  //fuente de imagen de mikuchiquita: https://en.megahobby.jp/products/lookup-hatsune-miku
}


function setup() {
  createCanvas(500,400);
  
//x = width / 2; // Posición inicial en el centro del lienzo
  //y = height / 2;
  //velocidadX = 3; // Velocidad horizontal
  //velocidadY = 2; // Velocidad vertical

}

  
function draw() {
  
  image(nyancat, mouseX - 16, mouseY - 16); // acá tuve que forzar dibujando al cursor para que funcionara, porque no me funcionó solo poner cursor(nyancat) y que cambiase el cursor TT. Entonces, mouseX y mouseY me indican en que posicion se encuentra el mouse valga la rebundancia todo el tiempo. Entonces al poner -16 que es la mitad de 32 que son los pixeles que mide la imagen que estoy insertando, esta se posiciona justo en su medio y en el medio del cursor, creando esta superposicion que forma el efecto. Debido a esto es necesario poner "noCursor" para que el efecto este completado. 
  
//la referencia del cursor es mixta: https://p5js.org/es/reference/p5/cursor/ esta me ayudó a entender como funciona y la ia me dio una explicación más detallada.
// la fuente de la imagen de cursor esta en la linea 20!
  
  noCursor(); //al pasar el mouse por arriba del canvas se vuelve invisible
  
  //referencia: https://p5js.org/reference/p5/noCursor
  
background(183, 190, 220,3)
  //tecla insert:apreté la tecla insert con mi 6to dedo y me hizo la vida imposible, gracias a la ayuda de profe (que también necesita ayuda) logré apretarla de nuevo con mi dedo indice, la vida es bella.
//puse un fondo celeste como primer paso,y donde el draw se va actualizando todo el rato por frame quería que se viera el recorrido de los ellipses asi que le puse transparencia usando la logica de que si los primeros 3 numeros son RGB, el 4to es opacidad al igual que el fill de las figuras.
  
  //referencia: https://p5js.org/reference/p5/background/
  
  
// saqué la referencia de esta galaxia tan bonita(fui probando esos parametros en mi sketch): https://editor.p5js.org/yw6602/sketches/Ai_yRxamf
  
  
frameRate(40)// relantiza o acelera los frames si se le pone un parametro que lo indique.
  
//referencia: https://p5js.org/reference/p5/frameRate/
  
  
//PUNTITOS
  
push() // lo de push y pop lo explico en el ellipse lila (linea 88) ya que ahí hay un mejor ejemplo de como funciona.
  
fill(254, 51, 79,250); // relleno de el ellipse
//referencia de fill: https://p5js.org/reference/p5/fill/
ellipse(random(width),random(height),random(7));
  // las posiciones y tamaños son totalmente random tanto en ancho como en alto.
  // y el numero más grande de tamaño al que puede llegar en este caso es 7 px.
  //referencia: https://p5js.org/reference/p5/ellipse/
pop()
   
  
//referencia puntitos(la misma): https://editor.p5js.org/yw6602/sketches/Ai_yRxamf
  
  
noStroke(); // no lineas en las ellipses, peladas.
  
//referencia: https://p5js.org/reference/p5/noStroke/
  
  
  
  

  // ELLIPSE LILA GRIS + explicación de push() y pop()
  
  push();
  // Se aislan las figuras que están entre estos dos. Todo lo que ocurra entre ellos (traslación o rotación u otra variable) no afectará a las figuras que se dibujen después de pop() 
  
//Referencia de push() y pop():https://p5js.org/es/reference/p5/push 
//https://p5js.org/reference/p5/pop/
  
  translate(60,60);
  //trans.:mueve el obj de un punto a otro
  //referencia: https://p5js.org/examples/transformation-translate/
  
  rotate(frameCount / 38);
  //Rot. :rota la figura
  // FrameCo. : al ser una variable que cuenta los frames, hace que el valor oscile o reinicie constantemente. Al combinarlo con rotate() gira las veces que va aumentando la cuenta de draw ya que eso siempre pasa todo el rato, al rededor del eje 0,0. (Gold Experience Requiem)
  //referencia rotate: https://p5js.org/examples/transformation-rotate/
  
  //referencia de translate y rotate (como efecto): https://editor.p5js.org/p5/sketches/Form:_Star (al principio quería hacer estrellas pero lo modifiqué por circulos y les cambie los  parametros para que la traslación y rotación fuese más amplia, más que nada a prueba y error y después le pedí a la ia que me explicara de mejor manera todo)
  
  pop() // se encierran todas las acciones que hice adentro.
  
  //ELLIPSE VERDE misma accion, cambio de coordenadas y velocidades por frame)
  push()
  translate(35, 35);
  rotate(frameCount / 20);
  fill(167, 193, 133,20); 
  ellipse (20,20,100);
  pop();
  
  //ELLIPSE naranjo
  push()
  translate(35, 35);
  rotate(frameCount / 40);
  fill(253, 110, 60,15);
  ellipse (311,224,130);
  pop();
  
  //ELLIPSE Verde 2
  push()
  translate(35, 35);
  rotate(frameCount / 30);
  fill(205, 220, 191,40);
  ellipse (410,265,110);
  pop();
  
  //CIRCULO CELESTE OSCURO
  push()
  translate(35, 35);
  rotate(frameCount / 25);
  fill(135, 189, 193,15);
  ellipse (56,66,130);
  pop();
  
  //ELLIPSE ROSA CORAL
  push()
  translate(35, 35);
  rotate(frameCount / 30);
  fill(231, 47, 71,5);
  ellipse (125,140,150);
  pop();
  
  //ELLIPSE AZUL MARINO (misma accion)
  push()
  translate(30, 30);
  rotate(frameCount / 44);
  fill(92, 155, 192,30);
  ellipse (300,226,200);
  pop();
  
  
  //ELLIPSE CELESTE (misma acción)
  push();
  translate(0,0);
  rotate (frameCount/ 35);// velocidad diferente
  fill(148, 199, 213, 25);
  ellipse(181,271,200);
  pop();
  
  //FIN DE LOS ELLIPSES GIRATORIOS ULTRASONICOS (la intención general es que es un fondo que se rellena debido a las distintas velocidades de frameCount y opacidades combianadas, lo que deja estelas superpuestas)
  
 
  
   //LA REFERENCIA DE LOS RECTS ESTÁ EN LA LINEA 253 Y 254
   //RECT CHIQUITO ROJO 
  push();
  stroke(254, 130, 113,8)
  strokeWeight(9)//variacion de grosor de linea
  noFill();
  rect(234,5,60,60,14); // al añadir un valor más, se crean radios para las puntas del rect.
  pop();
  
  
  //Rect CELESTE MORADO
  push()
  stroke(198, 213, 231,20);//variacion
  strokeWeight(7);
  noFill();
  rect(437,120,33,33,9);
  pop();
  
  //RECT AMARILLO
  push()
  stroke(255, 222, 0,6);//variacion
  strokeWeight(2);
  noFill();
  rect(390,50,9,9,1);
  pop();

  
  //RECT VERDE
  push()
  stroke(249, 235, 122,5);
  strokeWeight(7);
  noFill();
  rect(9,14,70,70,21);
  pop();
  
  //RECT ROJO 
  push()
  stroke(254, 130, 113,10);
  strokeWeight(6);
  noFill();
  rect(350,262,40,40,9);
  pop();
  

  //RECT ROSA PALO
  push();
  stroke(252, 198, 206,20);
  strokeWeight(8);
  noFill();
  rect(-30,260,100,100,28);
  pop();
  
  //RECT GRIS VERDE
  push();
  stroke(209, 210, 205,16);
  strokeWeight(10);
  noFill();
  rect(462,264,70,70,14);
  pop();
  
  //RECT AZUL 
  push();
  stroke(130, 188, 236,12);
  strokeWeight(7);
  noFill();
  rect(175,174,42,42,4);
  pop();
  
  //RECT NARANJ0
  
  push()
  stroke(254, 130, 113,30);
  strokeWeight(4);
  noFill();
  rect(84,154,15,15,1);
  pop()
  

  
  ////////////////////////////////////
  

  
  //Referencia de Rect. con puntas redondeadas: https://p5js.org/es/reference/p5/rect/
  //Referencia strokeWeight: https://p5js.org/reference/p5/strokeWeight/
  
  
  
  //ELLIPSES NORMALES los otros tambien son normales pero tienen hiperactividad. (Aclaracion)
  

  
  fill(141, 180, 232,20)
  ellipse(9,386,150)
  
  //ELLIPSE LILA CLARO ESTATICO
 fill (232, 219, 226,20);
  ellipse (408,340,200); 
  
  
  //ELLIPSE ROSA CORAL ESTATICO
  fill(255, 60, 100,20)
  ellipse(95,395,200)
  
  
 fill(165, 193, 228,20)
  ellipse(230,280,170)
  
  
  //ELLIPSE AMARILO CLARO ESTATICO
  fill(255, 243, 149,20)
  ellipse(278,398,151)
  
  
  //ELLIPSE ROSA SALMON CLARO ESTATICO
 fill (254, 142, 155,20);
  ellipse (475,375,140); 
  
  
  //LINEAS Referencia: https://p5js.org/reference/p5/line/
  //se crean desde una coordenada a otra, más chicas, más largas.
  
  stroke(255, 60, 100,10)
  strokeWeight(4)
  line(260,320,0,150)
  
  stroke(255, 60, 100,10)
  strokeWeight(4)
  line(260,320,0,50)
  
  stroke(255, 60, 100,10)
  strokeWeight(4)
  line(260,320,50,0)
  
  stroke(255, 60, 100,10)
  strokeWeight(4)
  line(260,320,120,0)
  
  /////////////////////////////////////////
   image(persona,105,99,300,300); //insertar imagen ligada al nombre que se le asignó en let
  
 image(mikuchiquita, frameCount%400,frameCount%500, 80, 70);
  //al tener frameCount y un limite de numeros como parametros, lo que abarque esa catidad será el recorrido de mikuchiquita.
  
  //referencia: https://p5js.org/search/?term=image
  //la fuente de imagen esta al principio! linea 23.
///////////////////////////////////////
  
  //color picker: https://imagecolorpicker.com/es
  
}
