//requisito 1 8 figuras 2D, incluyendo: 3 elipses 3 rectángulos
//requisito 2 10 colores distintos, incluyendo: 2 de ellos deben variar en el tiempo 
//requisito 3 1 cursor distinto al original 
//requisito 4 2 líneas de comentarios por cada línea de código que explique lo que hace esa líneas, los valores de los parámetros y la referencia al enalce de la documentación de p5.js que corresponda.
//requisito 5 2 imágenes con una fuente clara, declarada, no robar sin decir de dónde viene la imagen, y con el crédito correspondiente. 1 debe ser estática 1 debe ser dinámica / en movimiento 
//requisito 6 uso de operador modulo para crear un efecto visual que se repita cada cierto tiempo.


//let es para declarar una nueva variable y el igual para asignar   //valor
   //https://p5js.org/es/reference/p5/let/
 //estos datos son para luego hacer el movimiento de las figuras, en 
 //este caso las nubes
let x = -200;
let y = -100;
let z = -200;
let m = -210;


//la función a continuación es para cargar la imagen
  //https://p5js.org/es/reference/p5/image/
function preload() {
  
//LUNA
//la imagen viene del canal Higbee Productions, originalmente de la serie Teletubbies
  //https://www.google.com/search?sca_esv=1bdaceadb8cfd14b&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn60DczFdcvPnuv8WQohHLTaMb_WtLz8zQ41bNqiqMK_0GCDA2eBSrpJajLJh54y7KhefI_dvRXyUnknSrVPAkUhcr_Cu04VQ-0wgsjbsKEaMj3EY9O_snkZJYaITfeySXEOLH1dekEB-c5YCs5fRmk7M5kEaVWW4G7R213C39MZnTl7KQmu87mGcIPo8T4el6MBpNaGUr1h3uQ8m1jzethC3uw8k&q=luna+teletubbies&sa=X&sqi=2&ved=2ahUKEwiPxsT8hOSTAxV7rZUCHcPgJpQQtKgLegQIERAB&biw=1920&bih=945&dpr=1#sv=CAMSVhoyKhBlLW1nLTZmUWRRVWtoMGFNMg5tZy02ZlFkUVVraDBhTToOTDE3S0x6Q0RaUEt3QU0gBCocCgZtb3NhaWMSEGUtbWctNmZRZFFVa2gwYU0YADABGAcg_sP_ugdKCBABGAEgASgB
  img = loadImage('lunaa.png');
  
//MARTHA HABLA
//imagen rescatada de google de un video de MarthaHablaFan
 //https://www.google.com/search?q=marta+habla&sca_esv=1bdaceadb8cfd14b&udm=2&biw=1920&bih=945&ei=g1LZafuyB_eq1sQP9uiz4A8&ved=0ahUKEwi7gKWaheSTAxV3lZUCHXb0DPwQ4dUDCBI&uact=5&oq=marta+habla&gs_lp=Egtnd3Mtd2l6LWltZyILbWFydGEgaGFibGEyBRAAGIAEMgUQABiABDIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAtIoRlQAFjyF3ABeACQAQCYAbkDoAGNCKoBCTkuMS4xLjAuMbgBA8gBAPgBAZgCDaACxAjCAgoQABiABBiKBRhDwgIIEAAYgAQYsQPCAg4QABiABBiKBRixAxiDAcICCxAAGIAEGLEDGIMBwgINEAAYgAQYigUYQxixA8ICBxAAGIAEGAqYAwCSBwoxMC4xLjEuMC4xoAffPLIHCTkuMS4xLjAuMbgHvwjCBwUwLjUuOMgHKYAIAQ&sclient=gws-wiz-img#sv=CAMSVhoyKhBlLUlMV1VqT1oycFJfMlVNMg5JTFdVak9aMnBSXzJVTToOT1Q0MjVmVGhpakZ3Q00gBCocCgZtb3NhaWMSEGUtSUxXVWpPWjJwUl8yVU0YADABGAcg_4y25QdKCBABGAEgASgB
  martha = loadImage('marthaaa.png');
  
  
//CURSOR
//imagen cursor viene de Pngtree, una página de imagenes gratis
  //https://es.pngtree.com/freepng/summer-fireflies-clip-art_6018069.
  luci = loadImage('luci.png'); 
 
}


//setup es para comenzar a configurar y se pone sólo una vez, y al inicio
//https://p5js.org/es/reference/p5/setup/
//y los parentesis son para ejecutar la acción, sin los parentesis, la funcion no funciona
function setup() {
  //windowWidth y window Height significa tan amplio como la pantalla dispuesta
  //https://p5js.org/reference/p5/windowWidth/
  createCanvas(1000,650)
  //angle mode hace que la medida de angulo al rotar sea de grados
  //https://p5js.org/reference/p5/angleMode/
  angleMode(DEGREES);

//Aquí intenté poner: cursor ('luci') por el nombre que dejé más arriba al cargar la imagen acá, pero no me funcionó y tuve que poner .png, si no no cargaba la imagen
 cursor('luci.png'); 
}  
function draw() {
  //background es el fondo, y los parámetros son 
  //(negro-blanco, transparencia) o (rojo, verde, azul)
  //https://p5js.org/reference/p5/background/
  background(20,100, 180);
  background(10,210)
  
  
 //PARÁMETROS PARA EL MOVIMIENTO
  //no encontré una referencia pero anoté de la clase que cada vez 
  //que aumentara la cantidad de frame, x va a aumentar el valor que 
  //se le suma
  x=x+0.05
  y=y+0.15
  z=z+0.1
  m=m+0.4
  
  
//REPETICIÓN DEL MOVIMIENTO
  //if es si (en este caso), cada vez que llegue a más de 1800 
  //volverá al inicio. 
    //https://p5js.org/es/reference/p5/if/
  if(x>1200){
    x=-200
  }
  if(y>1200){
    y=-100
  }
  if(z>1200){
    z=-100
  }
  if(m>1100){
     m=-150
     
}
  
//PASTO
//quise que quedara en el fondo con un color más opáco por ser de noche
  //push y pop son para delimitar el efecto en este caso rotación a 
  //una sola forma, push abre y pop cierra.
    //https://p5js.org/reference/p5/push/
  push()
   //noStroke elimina el trazo en las figuras
    //https://p5js.org/reference/p5/noStroke/
   noStroke()
   //Aquí me puse a jugar e intenté ver que pasaba si ponía otro 
   //parámetro, y me di cuenta que era transparencia. Esto porque 
   //antes intenté hacer lo mismo que con el fondo para oscurecerlo y 
   //no me funcionó :(   
   //fill es para rellenar la forma (r,g,b,transparencia)
   //https://p5js.org/es/reference/p5/fill
   fill(0,255,90,23)
   rect(0, 570, windowWidth, 350)
  pop()
  
  
//FLOR DERECHA
//flor con muchos pétalos para que no se vea vacía
  push()
  //translate es para mover el origen (0,0), ocupando push y pop hice 
  //que sólo afectara a esta figura y no a toda la composición.
   //https://p5js.org/reference/p5/translate/
  translate(0,90)

  //CAMBIO DE COLOR
    //FrameCount es la cantidad de frames o fotogramas que se han 
    //mostrado desde que comienza a ejecutarse. Con el "%" hace que 
    //cada ciertos fotogramas comience de nuevo, en este caso 255.
     //https://editor.p5js.org/enickles/sketches/M4T5Bc3ms
   fill(frameCount % 255, 100, 200);
  
//PETALOS TRASEROS
   push()
    //rotate es para rotar la figura y el parámetro dentro de los 
    //parentesis es el angulo a rotar.
      //https://p5js.org/reference/p5/rotate/
    rotate(40)
    //ellipse crea un elipse con los siguientes parámetros 
    //(x, y, ancho, largo)
    ellipse(466,278, 20, 70);
   pop()
  
   push()
    rotate(40)
    ellipse(470,215, 20, 70);
   pop()
  
   push()
    rotate(135)
    ellipse(205,-455, 20, 70);
   pop()
  
   push()
    rotate(135)
    ellipse(205,-520, 20, 70);
   pop()
  
//PETALOS DELANTEROS
   ellipse(200,460, 20, 70);
   ellipse(236,490, 70, 20);
   ellipse(165,490, 70, 20);
   ellipse(200,520, 20, 70);

//CENTRO FLOR
   fill(frameCount % 255, 80,70);
    ellipse(200,490, 30, 30);
  pop()
  
  
//FLOR IZQUIERDA
  //copié y trasladé la flor
  //cambié sus colores para que no se vean iguales, entonces si la otra varia de rojo a morado, esta de azul a rosado
 push()
 translate(-120,90)
  fill(150, 50, frameCount % 255);
  
  //PÉTALOS TRASEROS
   push()
    rotate(40)
    ellipse(466,278, 20, 70);
   pop()
  
   push()
    rotate(40)
    ellipse(470,215, 20, 70);
   pop()
  
   push()
    rotate(135)
    ellipse(205,-455, 20, 70);
   pop()
  
   push()
    rotate(135)
    ellipse(205,-520, 20, 70);
   pop()
  
  //PÉTALOS DELANTEROS
   ellipse(200,460, 20, 70);
   ellipse(236,490, 70, 20);
   ellipse(165,490, 70, 20);
   ellipse(200,520, 20, 70);
  
  //CENTRO FLOR
   fill(255, frameCount % 250,70);
    ellipse(200,490, 30, 30);
 pop()
  

//UBICACIÓN LUNA
//quiero que se ubique en la esquina superior derecha
  //con esto el draw dibujará la imagen (coloca la imagen, imagen en 
  //esquina derecha (x), y)
  //https://p5js.org/reference/p5/width/
  image(img, width - img.width, 0);

  
//EDIFICIO IZQUIERDO
//este edificio se ubica en la parte trasera, dando este efecto de profundidad, por eso mismo sus colores son más oscuros
//la primera vez que pensé en hacer edificios se me vino a la mente el ending de digimon 1, solo que ese no cuenta con cambio de color por profundidad
//https://www.google.com/search?sca_esv=1bdaceadb8cfd14b&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnWL6Swv3cGYGr8GhrqffhqWQeKrzHXR8CrIbqBEGtaz2oeuogojn39yKgn18EXMkpc2JuBCUy_3Tr-UhwendG-wOrJoYV2xGafsX0YE_mDQJYIN3yJpwNMjonE28RRHrYbOh_YMxyI1u1ItSMO6iHoczit9qO3WS8_Ume9IWgFwZRMt8J96QgLPqGi6TbUHffdGCgx0d9nTFs8AMJsAUP-jm5fX4&q=digimon+ending+1&sa=X&sqi=2&ved=2ahUKEwiJzqXBiOSTAxVerZUCHcvlLXsQtKgLegQIFRAB&biw=1920&bih=945&dpr=1#sv=CAMSVhoyKhBlLVk4aV9UR1hyYU1iUXFNMg5ZOGlfVEdYcmFNYlFxTToOWEo1d0stZTZpa2hBUk0gBCocCgZtb3NhaWMSEGUtWThpX1RHWHJhTWJRcU0YADABGAcgzPuksgFKCBABGAEgASgB
//ese es el link, por si no saben a lo que me refiero
  fill(4,4,4);
   //rect es para hacer un rectangulo con los siguientes parámetros 
   //(x, y, ancho, largo)
     //https://p5js.org/es/reference/p5/rect/
   rect(400,100, 150, 500)
  
  //VENTANAS
  fill(40,40,40);
    rect(433,144,20,20)
    rect(493,144,20,20)
    rect(433,194,20,20)
    rect(493,194,20,20)
    rect(433,244,20,20)
    rect(433,294,20,20)
    rect(433,344,20,20)
    rect(433,394,20,20)
    rect(433,444,20,20)
    rect(433,494,20,20)
    rect(433,544,20,20)
  

  
//NUBES
//las nubes se ubican por encima del edificio izquierdo, porque se esta manera, la nube más baja pasa sobre el edificio
  //(negroblanco, transparencia)
  fill(255, 255,255)
  push()
   noStroke()
   //(valor xyz para que se muevan en x, y, ancho, alto)
  //nube más larga y lenta, es la que se ubica más arriba
   ellipse(y , 50, 50, 20);
   ellipse(y , 56, 120, 20);
  
  //nube pequeña pero más rápida, se ubica al medio de las otras dos
   ellipse(x , 8, 202, 20);
   ellipse(x , 16, 400, 20);
  
  //nube mediana con velocidad intermedia, esta no puede ir más rápido que la anterior porque si no se ve en forma de escalera
   ellipse(z , 102, 200, 40);
   ellipse(z , 85, 120, 20);
   ellipse(z , 120, 120, 20);
  pop()
  

  

//EDIFICIO DERECHO
//para seguir con este efecto de profundidad, este edificio es más claro y se encuentra un poco más cerca, lo mismo con las ventanas
  fill(30,30,30);
  rect(560,150, 150, 470)
  
  //VENTANAS
   fill(120,120,120)
   push()
   //copié y pegué las ventanas y las trasladé moviendo el origen
   translate(160,40)
     rect(433,144,20,20)
     rect(493,144,20,20)
     rect(433,194,20,20)
     rect(493,194,20,20)
     rect(433,244,20,20)
     rect(493,244,20,20)
     rect(433,294,20,20)
     rect(493,294,20,20)
     rect(433,344,20,20)
     rect(493,344,20,20)
     rect(433,394,20,20)
     rect(493,394,20,20)
     rect(433,444,20,20)
     rect(493,444,20,20)
     rect(433,494,20,20)
     rect(493,494,20,20)
     rect(433,544,20,20)
     rect(493,544,20,20)
   pop()

  
//EDIFICIO CENTRAL
//y por último, este edificio, como dije, por profundidad se encuentra más cerca y de una tonalidad más clara, por la cercanía a la pantalla
   fill(40,40,40);
   rect(490,200, 150, 435)
  
  //VENTANAS
   fill(160,160,160)
   push()
   //copié y pegué las ventanas y las trasladé moviendo el origen
   translate(90,90)
     rect(433,144,20,20)
     rect(493,144,20,20)
     rect(433,194,20,20)
     rect(493,194,20,20)
     rect(433,244,20,20)
     rect(493,244,20,20)
     rect(433,294,20,20)
     rect(493,294,20,20)
     rect(433,344,20,20)
     rect(493,344,20,20)
     rect(433,394,20,20)
     rect(493,394,20,20)
     rect(433,444,20,20)
     rect(493,444,20,20)
     rect(433,494,20,20)
     rect(493,494,20,20)
   pop()
  
  
  
//FAROLES
//pensé en las calles que antes o algunas que aún tienen luces cálidas para alumbrar
  fill(1)
  rect(260, 400, 5, 170) //izq
  rect(360, 400, 5, 170) //der
  
  //LUZ
  //tiene ambos colores para simular una difuminación y concentración de luz
   push()
    noStroke()
    //amarillo 
    fill(200,200,0) 
     circle(263,400,25) //izq
     circle(363,400,25) //der
    
    //naranja
    fill(250,150,0)
     circle(263,400,15) //izq
     circle(363,400,15) //der
   pop()

  
//ÁRBOL 1 izquierda
  //No quise mover una por una cada figura, asi que moveré el origen
  push()
  translate(500,0)
   //ÁRBOL TRONCO
    fill(141,78,55,170)
      rect(290,500,20,70)
 
    //ÁRBOL HOJAS
    push()
     noStroke()
     fill(50,134,20)
      ellipse(290,500,60,20)
      ellipse(310,500,60,20)
      ellipse(301,490,50,40)
    pop()
  pop()
  
//ÁRBOL 2 derecho, más petite
  //No quise mover una por una cada figura, asi que copié y moví el origen
  push()
  translate(600,0)
   //ÁRBOL TRONCO
    fill(141,78,55,120)
      rect(290,500,20,70)
 
  //ÁRBOL HOJAS
    push()
     noStroke()
     fill(50,134,90)
      ellipse(290,510,60,30)
      ellipse(310,510,60,30)
      ellipse(301,500,50,40)
    pop()
  pop()
  
//UBICACIÓN MARTHA
  //quise poner a martha porque quería a un perrito caminando por el pasto de la ciudad
  image(martha, m, 520, 150, 100);

}