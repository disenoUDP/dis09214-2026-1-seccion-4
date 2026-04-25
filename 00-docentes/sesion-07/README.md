# sesion-07

¡PROCESSING COMMUNITY DAY! en chile!!!

## FOR

* El ciclo for:  (se inicializa, mientras esto se cumple, como se actualiza)
  
Tiene que ver con Loops/bucles.
<https://www.w3schools.com/js/js_loop_for.asp>

Hacen que un código corra un cierto número de veces (que se repita)
> Si algo se tiene que repetir - se usa un for

Una iteracion es una repetición que cada vez que se repite viene con algo distinto (como el cumpleaños).

* For es una de las sintaxis, hay más pero esta es la típica.

Ejemplo de For:

```
for(let i = 0; i < 5; i++){
  text += "The number is " + i + "<br>";
}
```
Dentro de los {} hay código.

> P5 es un subconjunto de javascript

```

for(inicio de los tiempos
   hasta cuando sigues con tus cosas
   refresco/actualización){
}
```
Usualmente se usa "i" de iterar. Entonces existe una variable que se llama "i" y vale "0" al principio de los tiempos. Luego usamos "i", en este caso nos preguntamos: ¿Es "i" menor que 5?, si, porque "0" es menor que "5".

Ahora, "i" lo que sea que vales, vales lo mismo + 1 (i++), cuando esto ocurra, se dibuja una elipse de 10x10 en un lugar random)

```
function setup() {
  createCanvas(400, 400);


for(let i = 0; i < 5; i++){
    ellipse(random(width), random(height), 10, 10);
}
}

function draw() {
  //background(220);
}
```

Se dibujan 5 elipses porque dijimos que si "i" vale menos que 5, esto pasa:
0, ,1, 2, 3, 4.

## For Estático
Linea recta entre punto medio del lienzo 

Si quiero que esta línea se mueva 2, le doy el valor de "i".

```
let medioX;
let medioY;
let separacion = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  // punto medio del lienzo en x,y
  medioX = width / 2;
  medioY = height / 2;
  
  // dibujar lineas rectas
  // entre punto medio del lienzo
  // y puntos en el borde superior del lienzo
  // y tambien entre punto medio del lienzo
  // y borde inferior del lienzo
  // separadas por ciertos pixeles
  for(let i = 0; i < width; i = i + separacion) {
    // primer punto x, y
    // segundo punto x, y
    // linea de arriba
    line(
      medioX, medioY,
      i, 0
    );
    // linea de abajo
     line(
      medioX, medioY,
      i, height
    );
  }

  
}

function draw() {}
```
> Pueden haber miles de líneas en un for.

## For dinámico
Poner el código en draw, "i" ya no vale "i", sino que ahora vale framecount %5.

```
let medioX;
let medioY;
let separacion = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  // punto medio del lienzo en x,y
  medioX = width / 2;
  medioY = height / 2;
  
  frameRate(3);
   
}

function draw() {
  
  background(255);
  
  medioX = random(width);
  medioY = random(height);
  
  
  // dibujar lineas rectas
  // entre punto medio del lienzo
  // y puntos en el borde superior del lienzo
  // y tambien entre punto medio del lienzo
  // y borde inferior del lienzo
  // separadas por ciertos pixeles
  for(let i = 0; i < width; i = i + separacion) {
    // primer punto x, y
    // segundo punto x, y
    // linea de arriba
    line(
      medioX, medioY,
      i + frameCount % 10, 0
    );
    // linea de abajo
     line(
      medioX, medioY,
      i - frameCount % 10, height
    );
  }
  
  
}
```

## Coordenadas cartesianas
Son fomes, van de x a y, no son las idelaes para un movimiento circular.
Para este tipo de movimiento existen otras coordenadas que son las **polares**.

Ambas sirven para medir cualquier punto en un plano pero diferentes maneras de llegar al mismo lugar.

```
// quiero que
// desde punto medio del lienzo
// primero haya un punto
// y luego vayan dibujandose lineas
// hacia los bordes superior e inferior
// pero que vayan creciendo de a poco

// al principio se dibuje
// nada
// y luego vaya de a poquito
// subiendo

let medioX;
let medioY;
let separacion = 25;
let poquito = 0;
let direccion = 1;

function setup() {
  createCanvas(400, 400);
  
  medioX = width/2;
  medioY = height/2;
}

function draw() {
  background(220);
  
  
  
  for (let x = 0; x < width; x = x + separacion) 
  {
    line(
    medioX, medioY,
    x,
    medioY - poquito
    );
  }
  
  poquito = poquito + direccion * 5;
  
  if (poquito > height/2) {
    direccion = - 1;
  }
  
    if (poquito < - height/2) {
    direccion = 1;
  }
}
```
> Las variables da lo mismo como las llame

* Necesito un lugar de entrada, salida y una variante propia.
* For se pregunta si se está cumpliendo lo que se está preguntando.
* Son múltiples líneas, que tienen una separación que se determina de acuerdo al ciclo for.

### Poquito

* Poquito parte siendo "0"
* Cuando lo actualizo va a ser si mismo + la dirección x 10
* Ahora poquito es 10 y sigue con su vida..
* Luego se lo vuelve a preguntar y ahora es 20...

```
// quiero que
// desde punto medio del lienzo
// primero haya un punto
// y luego vayan dibujandose lineas
// hacia los bordes superior e inferior
// pero que vayan creciendo de a poco

// al principio se dibuje
// nada
// y luego vaya de a poquito
// subiendo


// variables para punto medio
let medioX;
let medioY;

// variable para separacion entre lineas
let separacion = 5;

// variables para movimiento de las lineas
let poquito = 0;
let direccion = 1;

function setup() {
  
  // creacion del lienzo
  createCanvas(400, 400);
  
  // calculo de punto medio
  medioX = width/2;
  medioY = height/2;
}

function draw() {
  background(220);
  
  //ciclo for es una iteración
  //for (inicialización; mientras esto se cumpla ;como se actualiza)
  for (let x = 0; x < width; x = x + separacion) 
  {
    //line (x1, y1, x2, y2)
    line(
    medioX, x,
    x, medioY - poquito
    );

  }
  
  //actualiza la posición un poquito
  poquito = poquito + direccion * 10;
  
  //ahora uso la variable poquito para cambiar el tamaño de un circulo    
  noFill();
  ellipse(medioX, medioY, poquito, poquito);
  
  if (poquito > height/2) {
    direccion = - 1;
  }
  
    if (poquito < - height/2) {
    direccion = 1;
  }
  
}
```
### Mover el eje de coordenadas / push y pop
Graba el estado actual para poder volver al anterior.

* **push:** pausa/ guarda las condiciones actuales/ guarda quien eres para poder volver a restaurarlo.
* **pop:** vuelve a como era el mundo antes/ a las condiciones que grabaste cuando hiciste push

> Aislan los cambios del universo del código, nos permiten hacer estos cambios destructivos extraños.

* **Translate** dice que "este lugar de origen estará en este otro lugar"

```

let angulo = 0;

//vamos a practicar mover el eje de coordenadas
function setup() {
  
  // creacion del lienzo
  createCanvas(400, 400);

}

function draw() {
  

  background(220);
  
  push();
  translate(width/2, height/2);
  ellipse(0,0,100,100);
  pop();
  
  push();
  fill(255, 0, 0);
  ellipse(width, height/2, 100, 100);
  pop();
  
  push();
  //translate(width/2, height/2);
  rotate(angulo);
  translate(width/2, height/2);
  
  rectMode(CENTER);
  fill(0, 255, 0);
  rect(0, 0, 50, 50);
  pop();
  
  angulo = angulo + 0.01;
  
}
```
