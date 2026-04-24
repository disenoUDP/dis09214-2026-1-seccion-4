# sesion-07
## iteraciones con ciclo for
### primer codigo
Adjunto directo de p5.js junto con comentarios
```js
// sesion 07 - 24/04
// PREVIA A SOLEMNE
// Iteraciones
// for loop tiene que ver con loops(bucle)
// W3School
// hacen que un bloque de codigo se repita
// cierta cantidad de veces
// estos son fundamentales


let medioX;
let medioY;
let separacion = 7;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // punto medio lienzo en x,y
  medioX = width / 2
  medioY = height / 2
  
  // for(inicio de los tiempos;
  //    hasta cuando sigues con tus cosas;
  //    refresco o actualizacion
  //    ){}
  
    
  // dibujar lineas rectas entre punto
  // medio del lienzo y puntos
  // en el borde superior dwel lienzo
  // separadas dos pixeles

  for(let i = 0; i < width; i = i + separacion) {
    // primer punto x
    // primer punto y
    // 2do punto x
    // 2do punto y
    line(
    medioX,
    medioY,
    i,
    0);
    
  for(let i = 0; i < width; i = i + separacion) {
    line(
    medioX,
    medioY,
    i,
    height);
  }

  
  // i puede ser cualquier nombre
  //= i + 1 ( es lo mismo que i++)
  
    ellipse(
      random(width),
      random(height),
      10,
      10);
   }
  }


function draw() {
   // background(1);
}
```
### segundo codigo
```js
// sesion 07 - 24/04

let medioX;
let medioY;
let separacion = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // punto medio lienzo en x,y
  medioX = width / 2
  medioY = height / 2
  frameRate (25);

   }


function draw() {
    background(255);
    for(let i = 0; i < width; i = i + separacion) {
    line(
    medioX,
    medioY,
    i + frameCount % 15,
    0);
    line(
    medioX,
    medioY,
    i + frameCount % 15,
    height);
  }

}
```

### tercer codigo
```js
// variables para ´punto medio
let medioX;
let medioY;

// variable para movimiento de las lineas
let separacion = 7;

// variables para movimiento de las lineas
let poquito = 0;
let direccion = 1;

function setup() {
  createCanvas(400, 400);
  
  medioX = width / 2;
  medioY = height / 2;
}

function draw() {
  background(225);
  
  // ciclo for es una iteracion repeticion pero cada que se
  // repite llega con algo distinto
  // for (inicializacion;
  // mientras esto se cumpla;
  // como se actualiza)
  for(let x = 0; x < width; x = x + separacion)
    {
      //line (x1, y1, x2, y2)
      line(
      medioX, x,
      x, medioY - poquito
      );
    }
  
  // actualiza la posicion un poquito
  poquito = poquito + direccion * 10;
  
  // ahora uso la variable poquito para cambiar
  // el tamaño de un circulo
  stroke(1);
  ellipse(medioX, medioY, poquito, poquito);
  noFill();
  
  if (poquito > height / 2) {
    direccion = - 1;
 }
  
      if (poquito < - height / 2){
    direccion = 1;
}
  
}
```
## funcion push(); y pop();
### cuarto codigo
```js
// practicar mover el eje de coordenadas

let angulo= 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  noStroke();
  background(1);
  
  push();
  translate(width / 2, height / 2);
  fill(100);
  ellipse(0, 0, 100, 100);
  pop();
  
  /////////////////////////////////
  // guardar temporalemente
  // condiciones de dibujo
  // graba el estado actual para
  // volver al anterior
  // push();
  ////////////////////////////////
  
  push();
  fill(0, 0, 255);
  ellipse(width, height/2, 100, 100);
  pop();
  
  ///////////////////////////////////////////
  // vuelve a las condiciones que grabaste
  // cuando hiciste push();
  // pop();
  //////////////////////////////////////////
  
  push();
  rotate(angulo);
  translate(width / 2, height / 2);
  rect(0, 0, 100, 100);
  pop();
  
  angulo = angulo + 0.07
}
```

