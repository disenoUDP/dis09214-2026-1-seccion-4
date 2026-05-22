//SOLEMNE 1
//AL FINAL DE TODO DEJE LOS COLORES ENUMERADOS
//CON SUS RESPECTIVOS CODIGOS
//NINGUNO SE REPITE EN ESA LISTA


//let sirve para declarar y darle un valor
//estas son para las imagenes que iran mas
//adelante
//LAS DIBUJE YO DIGITALMENTE
//fuente: yo misma, le puse empeño a los dibujos
//https://p5js.org/reference/p5/let/

//este es el del mouse tiene los ojos saltones
let pezLoquito;
//este es el que se mueve de lado a lado
let pecesito;
//el protagonista del lienzo
let gatito;

//guarda la posicion horizontal del pez
//que se mueve de derecha a izquierda
//lo uso mas abajito
//https://p5js.org/reference/p5/let/
let xPez;


//se ejecuta antes de setup y se usa para
//cargar archivos antes de que empiece el sketch
//https://p5js.org/reference/p5/preload/
function preload() {
  
  //carga las imagenes y la guarda para usarlas despues
  //le proporciona una ruta al archivo
  //asi el compu sabe donde encontrarlas
  //y no explota en el intento
  //todas esa imagenes las uso mas adelante
  //https://p5js.org/es/reference/p5/loadImage/
  pezLoquito = loadImage("pezloquito.png");
  pecesito = loadImage("pecesito.png");
  gatito = loadImage("gatito.png");
}
  

//corre una sola vez al inicio del programa
//se usa para preparar el lienzo y 
//configuraciones iniciales
//https://p5js.org/reference/p5/setup/
function setup() {
  
  //crea el lienzo
  //hace que el canvas tome el tamaño que quiero
  //le pregunte a la consola cuanto media el espacio 
  //en el que estaba trabajando y puse esos numeros
  //https://p5js.org/es/reference/p5/createCanvas/
  //https://p5js.org/es/reference/p5/windowWidth/
  //https://p5js.org/es/reference/p5/windowHeight/
  createCanvas(649, 848);
  //console.log(windowWidth, windowHeight);
  //habia puesto que fuera del tamaño del navegador pero
  //despues me di cuenta de que al agrandar el lienzo se
  //desarmaba toda la composicion
  //asi que le pregunte a la consola cuanto media el lienzo del
  //tamaño que a mi me gustaba y le cambie los parametros por 
  //esa respuesta
  
  
  //oculta el cursor normal
  //en este caso lo uso para reemplazarlo
  //por una imagen previamente cargada
  //https://p5js.org/es/reference/p5/noCursor/
  noCursor();

  //width representa el ancho del lienzo
  //al asignar xPez = width, el pez que se mueve
  //parte justo desde el borde derecho de la pantalla.
  //https://p5js.org/es/reference/p5/width/
  xPez = width;

  //hace que los rectangulos se dibujen
  //tomando de referencia su centro
  //ayuda mucho a ordenar la composicion
  //https://p5js.org/es/reference/p5/rectMode/
  rectMode(CENTER);
}

//funciona continuamente SIEMPRE
//todo lo que este en esta parte se redibuja constantemente
//por eso aqui pasa el movimiento de pez
//https://p5js.org/reference/p5/draw/
function draw() {
  
  //pinta el fondo del lienzo de un color
  //en este caso rgb
  //https://p5js.org/es/reference/p5/background/
  background(171, 194, 212);
  //color 11, esta desordenado porque no habia considerado
  //el fondo
  //es celestito claro tambien 

  //aqui se definen los tonos que van a cambiar entre si
  //dentro de los parentesis va (r, g, b)
  //https://p5js.org/es/reference/p5/color/
  let colorA1 = color(140, 127, 101);
  //color 1 cafe oscuro///////
  let colorB1 = color(75, 128, 168);
  //color 2 celeste oscuro
  
  //cuenta cuantos frames han pasado desde
  //que comenzo el sketch
  //con esta formula genera un valornel cual sirve para 
  //que se mexclen los colores suavemente
  //https://p5js.org/es/reference/p5/sin/
  //https://p5js.org/es/reference/p5/frameCount/
  let t1 = (sin(frameCount * 0.02) + 1) / 2;
  
  //varia entre los dos colores
  //Si t1 vale 0, toma el primer color
  //si vale 1, toma el segundo
  //si está entre medio crea una mezcla progresiva
  //https://p5js.org/es/reference/p5/lerpColor/
  //ESTO LO USO MAS ABAJITO
  let colorCambiante1 = lerpColor(colorA1, colorB1, t1);

  
  //exactamente lo mismo que el anterior
  //solo que cambian los colores a usar
  ////https://p5js.org/es/reference/p5/color/
  let colorA2 = color(2, 30, 52);
  //color 3 azul tipo marino////
  let colorB2 = color(169, 207, 243);
  //color 4 celeste full claro
  
  //aqui no se usa sin
  //se usa cosa que tambien oscila entre -1 y1
  //se usa para que el segundo color cambie con 
  //una variacion mas suavecita
  //https://p5js.org/es/reference/p5/cos/
  let t2 = (cos(frameCount * 0.02) + 1) / 2;
  
  //mezcla dos colores 
  //pero ahora usando el valor t2
  //https://p5js.org/es/reference/p5/lerpColor/
  //ESTO LO USO MAS ABAJITO
  let colorCambiante2 = lerpColor(colorA2, colorB2, t2);

  //le quita el borde a las figuras 2d
  //por esto ninguna en la composicion tiene borde
  //https://p5js.org/es/reference/p5/noStroke/
  noStroke();
  

  // RECTANGULOS
  
  
  //dibuja un rectángulo y como antes use rectMode(CENTER)
  //los dos primeros valores corresponden al centro del 
  //rectángulo width * 0.20 lo ubica al 20% del ancho del         
  //lienzo, 100 es su altura en pantalla, y 400, 200 son 
  //ancho y alto.
  //ARRIBA NOMBRE EL colorCambiante1
  ////https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(colorCambiante1);
  rect(width * 0.20, 100, 400, 200);
  
  
  //cambia el color de relleno al segundo 
  //color animado y dibuja un rectángulo al 75% 
  //del ancho y 25% del alto del lienzo.
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  //ARRIBA EXPLIQUE EL colorCambiante2
  fill(colorCambiante2);
  rect(width * 0.75, height * 0.25, 300, 100);
  

  //cambia el color de relleno al segundo
  //color animado
  //dibuja un rectangulo al 10% del ancho del lienzo
  //y 700 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  //ARRIBA EXPLIQUE EL colorCambiante2
  fill(colorCambiante2);
  rect(width * 0.10, 700, 200, 700);
  
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 90% del ancho del lienzo y 
  //650 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(180, 151, 107);
  //color 5 cafe tipo mostaza
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.90, 650, 1000, 50);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 90% del ancho del lienzo y 
  //450 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(254, 243, 211);
  //color 6 amarillo pastel
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.90, 450, 20, 500);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 20% del ancho del lienzo y 
  //100 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(254, 243, 211);
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.20, 100, 20, 500);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 10% del ancho del lienzo y 
  //450 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(140, 127, 101);
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.10, 450, 20, 900);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 10% del ancho del lienzo y 
  //450 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(254, 243, 211);
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.10, 450, 500, 100);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 70% del ancho del lienzo y 
  //750 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(140, 123, 101);
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.70, 750, 400, 100);
  
  //dibuja un rectangulo con los valores
  //en rgb 
  //esta al 70% del ancho del lienzo y 
  //50 es su altura en pantalla
  //https://p5js.org/es/reference/p5/rect/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/fill/
  fill(254, 243, 211);
  //los ultimos dos numeros son el tamaño del
  //rectangulo
  rect(width * 0.70, 50, 400, 20);




  /// CIRCULOS //////

  //dibuja una elipse
  //Como el ancho y el alto son iguales
  //visualmente funciona como un círculo grande 
  //detras del gatito
  //fill lo rellena en rgb
  //esta al 50% del ancho de lienzo 
  //200 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //https://p5js.org/es/reference/p5/fill/
  ////https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  fill(206, 217, 235);
  //los ultimos dos numeros son el tamaño del
  //elipse
  ellipse(width * 0.50, 200, 260, 260);
  
  //dibuja una elipse
  //Como el ancho y el alto son iguales
  //visualmente funciona como un círculo pequeño
  //circulo pequeño detras del gatito
  //fill lo rellena en rgb
  //esta al 50% del ancho de lienzo 
  //200 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //https://p5js.org/es/reference/p5/fill/
  ////https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  ////circulo adentro del circulo grande/////
  fill(15, 36, 67);
  //color 7 azul rey
  //los ultimos dos numeros son el tamaño del
  //elipse
  ellipse(width * 0.50, 200, 200, 200);

  
  //dibuja una elipse
  //Como el ancho y el alto son iguales
  //visualmente funciona como un muy círculo pequeño
  //fill lo rellena en un color que cambia en 
  //el tiempo usando colorCambiante1
  //esta al 50% del ancho de lienzo 
  //200 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //https://p5js.org/es/reference/p5/fill/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  //////circulo pequeño que cambia de color////////
  //ARRIBA EXPLIQUE EL colorCambiante1
  fill(colorCambiante1);
  //los ultimos dos numeros son el tamaño del
  //elipse
  ellipse(width * 0.70, 300, 100, 100);
  
  //dibuja una elipse
  //Como el ancho y el alto son diferentes
  //se ve como un huevito
  //fill lo rellena en rgb
  //esta al 10% del ancho de lienzo 
  //610 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //https://p5js.org/es/reference/p5/fill/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  ////// elipse que parece huevito//////
  fill(129, 160, 204);
  //color 8 celeste grisaceo
  //los ultimos dos numeros son el tamaño del
  //elipse
  ellipse(width * 0.10, 610, 120, 150);
  
  //dibuja una elipse
  //Como el ancho y el alto son iguales
  //visualmente funciona como un círculo pequeño
  //fill lo rellena en rgb
  //esta al 90% del ancho de lienzo 
  //500 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //https://p5js.org/es/reference/p5/fill/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  //////circulo cafe pequeño//////
  fill(153, 116, 89);
  //color 9 cafe mostaza oscuro
  //los ultimos dos numeros son el tamaño del
  //elipse
  ellipse(width * 0.90, 500, 80, 80);
  
  //////circulo cafe mas pequeño//////
  //dibuja una elipse
  //Como el ancho y el alto son iguales
  //visualmente funciona como un círculo pequeño
  //fill lo rellena en rgb 
  //https://p5js.org/es/reference/p5/fill/
  ///AQUI ESTA EL MODULO////
  //frameCount cuenta cuantos frames han pasado desde
  //que empezo el programa
  //%255 hace que el valor se repita de 0 a 255
  //https://p5js.org/es/reference/p5/frameCount/
  fill(90, 100, frameCount%255);
  //color 10 verdecito
  //esta al 90% del ancho de lienzo 
  //500 es su altura en pantalla
  //los otros dos numeros son el tamaño del circulo
  //los ultimos dos numeros son el tamaño del
  //elipse
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/ellipse/
  ellipse(width * 0.90, 500, 60, 60);

  ////gatito grande protagonista/////////
  //dibuja una imagen en el lienzo
  //Aquí se coloca el gato más o menos al centro 
  //y se escala a 400 por 400 píxeles
  //width / 2 y height / 2 ayudan a ubicarlo 
  //respecto al centro del canvas
  //los ultimos numeros son el tamaño en pixeles
  //https://p5js.org/es/reference/p5/image/
  //https://p5js.org/es/reference/p5/width/
  //https://p5js.org/es/reference/p5/height/
  image(gatito, width / 2 - 200, height / 2 - 150, 400, 400);

  ///////pez en movimiento///////
  //dibuja el pez en movimiento usando xPez como 
  //coordenada horizontal
  //Como esa variable cambia en cada frame
  //el pez se desplaza
  // los otros dos numeros son el tamaño
  //https://p5js.org/es/reference/p5/image/
  //https://p5js.org/es/reference/p5/height/
  //los ultimos numeros son el tamaño en pixeles
  //MAS ARRIBA EXPLICO EL xPez
  image(pecesito, xPez, height / 2 - 90, 120, 120);

  //significa restarle 2 a xPez en cada frame 
  //como la coordenada horizontal disminuye
  //el pez se mueve hacia la izquierda
  //https://p5js.org/reference/p5/draw/
  //MAS ARRIBA EXPLICO EL xPez TAMBIEN
  xPez -= 2;
  
  //pregunta si el pez ya salió completamente 
  //por el lado izquierdo
  //Si eso pasa xPez vuelve al valor width
  //reaparece desde el borde derecho 
  //Así se genera un movimiento en bucle sin fiin
  //nadara en la pantalla hasta el fin de los tiempos
  //https://p5js.org/reference/p5/if/
  //https://p5js.org/es/reference/p5/width/
  //MAS ARRIBA EXPLICO EL xPez TAMBIEN
  if (xPez < -120) {
    xPez = width;
  }

  ////////mouse pez///////
  //dibuja al pez siguiendo la posicion del mouse fantasma
  //mousex y mousey entregan la posicion actual del
  //mouse en el lienzo
  //se resta 40 para centrar la imagen respecto al puntero
  //150 es el tamaño en pixeles
  //https://p5js.org/es/reference/p5/image/
  //https://p5js.org/es/reference/p5/mouseX/
  //https://p5js.org/es/reference/p5/mouseY/
  image(pezLoquito, mouseX - 40, mouseY - 40, 150, 150);
}

//////COLORES/////
//color 1 (140, 127, 101)
//color 2 (75, 128, 168)
//color 3 (2, 30, 52)
//color 4 (169, 207, 243)
//color 5 (180, 151, 107)
//color 6 (254, 243, 211)
//color 7 (15, 36, 67)
//color 8 (129, 160, 204)
//color 9 (153, 116, 89)
//color 10 (90, 100, frameCount%255)
//color 11 (171, 194, 212)