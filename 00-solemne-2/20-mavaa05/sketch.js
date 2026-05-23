//Solemne II Maria Pulgar
// Pensamiento computacional
// 22 / 05 / 26
// En esta ocasion decidi utilizar como obra
// y mas que obra, obras de la banda rawayana
// banda muy conocida y representativa de mi pais
// mi proposito es hacer una especie de secuencia o juego con boton
// no se si funcionara pero mi intencion es que si
// algo parecido a lo que estabamos viendo en la clase del dado
// pero en vez de que salga algo aleatorio al presionar la pantalla
// se despleguen otras imagenes y texto en el canvas

//TIPOGRAFIA
// creo la tipografia en el universo
var oswald;

//IMAGENES
//aca declaro todas las imagenes que van a salir a continuacion
//sobre cada imagen ira la referencia de donde fue sacada
// los corcheres son como una caja donde metere todas las fotos
let misImagenes = [];

// VARIABLES DE CONTROL
// 1: El After, 2: El Break, 3: Venezuela Flotante
//guarda el numero de la escena
//esto significa que el juego siempre empieza en esta pantalla
let escena = 1;
// Aquí guardaremos las imágenes flotantes
//para que despues aparezcan en la 3ra escena
//igual con la cajita
let particulas = [];
// Variable para el botón HTML de p5.js
// esto lo saque del codigo del ayudante de la clase pasada
let boton;

function preload() {
  // Cargamos la tipografía
  //lo busca de la caja donde lo habia metido y lo carga en el archivo
  // la referencia de como cambiar la tipografia la saque de este video
  //https://www.youtube.com/watch?v=Vz-bEwmvzSw&t=375s
  oswald = loadFont("Oswald-VariableFont_wght.ttf");

  //loadImage busca las imagenes de la carpeta
  // el push lo mete en una lista con todas las imagenes
  //esta forma de poner las imagenes para que despues vuelen
  //la saque de un compañero que me ayudo
  //su codigo fue de mucha ayuda para llegar a la idea que tenia
  //a continuacion todas las referencias de cada imagen
  //https://i.pinimg.com/1200x/c3/5d/af/c35daf0bfccb525ed1385f94a553eaa5.jpg
  misImagenes.push(loadImage("venezuela.png"));
  //https://i.pinimg.com/736x/5d/8c/81/5d8c816fb526be892a969297f83c8e9b.jpg
  misImagenes.push(loadImage("tucan.png"));
  //https://i.pinimg.com/736x/02/b8/24/02b8240a64ca05ad7edb89297a0b42c2.jpg
  misImagenes.push(loadImage("tres flores.png"));
  //https://i.pinimg.com/1200x/a9/15/3d/a9153d0ebccd336353a1219c19eeb53f.jpg
  misImagenes.push(loadImage("sol playa.png"));
  //https://i.pinimg.com/1200x/45/7d/26/457d268339024a20e4758e2546a30a50.jpg
  misImagenes.push(loadImage("placa.png"));
  //https://i.pinimg.com/736x/de/b2/7d/deb27dbf787beef7ddd87184df0a90c2.jpg
  misImagenes.push(loadImage("palmera.png"));
  //https://i.pinimg.com/1200x/a7/13/81/a71381fb8b84ba35785a64a0f48fc0a8.jpg
  misImagenes.push(loadImage("ovomaltina.png"));
  //https://i.pinimg.com/736x/e9/ce/24/e9ce248983d700299dd64b1005236744.jpg
  misImagenes.push(loadImage("mujer con flor.png"));
  //https://i.pinimg.com/1200x/ef/6e/b9/ef6eb932b50fc2b54fe381cddcdb0e08.jpg
  misImagenes.push(loadImage("maduro.png"));
  //https://i.pinimg.com/736x/ef/78/53/ef7853b138d56f7fba8576275721157e.jpg
  misImagenes.push(loadImage("flores tres rojas.png"));
  //https://i.pinimg.com/736x/7a/4d/11/7a4d11c0446fac87214596c7dffa141e.jpg
  misImagenes.push(loadImage("disco.png"));
  //https://i.pinimg.com/736x/09/00/81/0900816a3420a517929500415c7154ab.jpg
  misImagenes.push(loadImage("cerveza.png"));
  //https://i.pinimg.com/1200x/ba/3f/19/ba3f19de65af471d8850cccdbe6ac058.jpg
  misImagenes.push(loadImage("bubbaloo.png"));
}

function setup() {
  //modela el lienzo
  //mide 500 px por 500 px
  createCanvas(500, 500);
  //evita que se le ponga borde a cualquier cosa que dibuje
  noStroke();

  // BOTON
  //aca llamo a la accion al boton
  //y seteo lo que estara escrito dentro
  boton = createButton("presiona para ir al after");
  // ubicacion del boton
  boton.position(170, 420);
  // Se muestra desde el primer frame
  boton.show();

  // CICLO
  // es como un vigilante
  //se queda esperando a que alguien presione el boton
  //para ejecutar las instrucciones que tiene dentro
  boton.mousePressed(() => {
    //pregunta ¿estas en la escena 1?
    //si es verdad pasa a la escena 2
    if (escena === 1) {
      // Del After pasa al Break
      escena = 2;
      // si ya estamos en la escena 2
      //pasa a la 3
    } else if (escena === 2) {
      // Del Break pasa a Venezuela
      escena = 3;
      //si ya estamos en la 3
      // pasa a la 1
      //y reinicia las fotos
    } else if (escena === 3) {
      // De Venezuela regresa al After (Cierra el ciclo)
      escena = 1;
      // Limpia la pantalla enviando las fotos abajo
      reiniciarFotos();
    }
  });

  // Creamos 60 partículas flotantes
  //es un ciclo repetitivo
  //el 60 le ordena a la maquina que repita la accion de crear la imagen 60 veces
  //https://editor.p5js.org/luxinocte/sketches/XFnBP-dT_
  //referencia codigo de compañero que comente que me explico
  for (let i = 0; i < 60; i++) {
    particulas.push(new RecuerdoFlotante());
  }
}

function draw() {
  textFont(oswald);
  //mantiene el texto alineado
  textAlign(CENTER, CENTER);

  // Forzamos que el botón siempre esté visible en todas las escenas del ciclo
  boton.show();

  if (escena === 1) {
    // si la escena es 1 pon el fondo amarillo
    background(252, 196, 66);

    //junto con expresar el color, tamaño y posicion de la frase
    fill(0, 0, 0);
    textSize(80);
    text("¿Dónde es", 220, 190);
    text("el after?", 290, 265);
  } else if (escena === 2) {
    //escena 2
    // Mismo Fondo Amarillo
    background(252, 196, 66);

    fill(0, 0, 0);
    textSize(25);
    text("relajate mami", width / 2, 90);

    fill(255);
    textSize(80);
    text("DAME", width / 2, 150);
    text("UN", width / 2, 220);
    text("BREAK", width / 2, 290);

    textSize(18);
    fill(0, 0, 0);
    text("vuelve a presionar", width / 2, 370);

    //es como el comando que le dice la computadora
    //Si la caja de la escena vale exactamente 3, deja de pintar el After y el Break
  } else if (escena === 3) {
    //fondo tricolor
    //crea como un temporizador
    //el 20 es la cantidad de frames que deberian pasar para que cambie al
    //siguiente color
    let velocidadCambio = 20;
    //framecout es como el reloj
    //el modulo esta obligando a que cualquier resultado se divida en 3
    //y quede la sobra
    // explicacion de vania
    //asi que a pesar de que vaya por un numero infinito siempre se mantendra
    //en un bucle de 3 digitos 0,1 y 2
    //el floor hace que redondee siempre hacia abajo
    //referencia de la clase
    //asi borra los decimales del numero y se queda asi un rato
    let cicloColor = floor(frameCount / velocidadCambio) % 3;

    //revisa el resultado de la matemática de arriba
    //si el residuo dio 0
    //hace la operacion de abajo
    if (cicloColor === 0) {
      //pinta el fondo de amarillo
      background(252, 196, 66);
      //si el numero avanzo y dio 1
      //haz la instruccion de abajo
    } else if (cicloColor === 1) {
      // pinta el fondo de azul
      background(0, 56, 168);
      //si la operacion dio 2
      //haz la ultima instruccion del ciclo
    } else if (cicloColor === 2) {
      // pinta el fondo de rojo
      background(206, 17, 38);
    }
    //llama a las fotos para darles ordenes
    //es como un jefe
    for (let p of particulas) {
      //ordena el movimiento de la foto
      // le dice que calcule cuanto puede subir
      //muevete un poquito de lado a lado con tu vaiven y
      //revisa si el mouse te está tocando para salir corriendo
      p.update();
      //dibuja la foto en la pantalla con la transparencia del png
      //o sea ejecuta la funcion
      //p es la particula
      p.display();
    }

    // escribe la palabra VENEZUELA
    // y le dice el color, la ubicacion y el tamaño
    fill(0, 0, 0);
    textSize(100);
    text("VENEZUELA", width / 2, 90);
  }
}

// desactivamos los clicks sueltos en la pantalla para que no interfieran con el botón
// ya no hace nada aquí, todo el control lo tiene el botón físico
function mousePressed() {}

// envía las imagenes de vuelta abajo del lienzo para el siguiente loop
function reiniciarFotos() {
  for (let p of particulas) {
    p.y = random(height, height + 400);
    p.x = random(width);
  }
}

//cada particula (o sea cada foto) se moldea con las siguientes instrucciones
class RecuerdoFlotante {
  constructor() {
    //define la posicion horizontal
    this.x = random(width);
    // esta la posicion vertical inicial de la foto
    // en un muero random entre 500 y 1100
    //porque si todas nacieran desde el 500
    //saldrian todas en una fila perfecta y no es la idea
    this.y = random(height, height + 600);
    //escoge el alto y el ancho de la foto de forma aleatoria
    this.size = random(45, 85);
    //dice la velocidad en la que se mueve la foto
    this.speed = random(0.6, 2.0);
    //representa el punto de partida de donde empezara a "bailar la foto"
    //el movimiento y balanceo de la misma
    //para evitar que se muevan de forma sincronizada
    //sino que vayan cada una por su lado
    this.offset = random(TWO_PI);
    //permite que las imagenes aparezcan de manera aleatoria
    // como sacando los papelitos de una bolsa con nombres
    this.img = random(misImagenes);
  }

  update() {
    //resta la velocidad a la posicion vertical
    //restar en y significa subir
    this.y -= this.speed;
    //es la funcion matematica del seno junto con el reloj de la maquina
    //el 0.02 controla que tan rapido tiembla
    //y el 0.4 la distancia del vaiven
    //esto es lo que hace que las imagenes se vean como
    //si fuesen hojas que les pega brisa
    this.x += sin(frameCount * 0.02 + this.offset) * 0.4;

    // MOUSE REPELENTE
    ////calcula la distancia entre la posicion del mouse
    //y el centro de la foto
    let d = dist(mouseX, mouseY, this.x, this.y);
    //condiciona el magnetismo
    //si la distancia es menor a 110px
    //el mouse esta muy cerca
    //asi que lo que hace es empujarla para que se aleje
    //le suma 0.06 a su distancia
    //eso es lo que hace el efecto
    if (d < 110) {
      this.x += (this.x - mouseX) * 0.06;
      this.y += (this.y - mouseY) * 0.06;
    }

    // Si la foto desaparece por arriba,
    //teletransporta la imagen y vuelve a salir por abajo
    //le vuelve a asignar alguna coordenada
    if (this.y < -this.size) {
      this.y = height + this.size;
      this.x = random(width);
      this.img = random(misImagenes);
    }
  }
  // obliga a que las coordenadas de la foto
  //se midan desde su centro exacto
  //asi el efecto del mouse no se ve desfasado
  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
  }
}
