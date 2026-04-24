# sesion-02

viernes 20 marzo 2026

voy a anotar primero la materia que vimos, luego voy a incluir los códigos que hicimos en clases.

## herramienta p5.js

vamos a usar la herramienta p5.js, una biblioteca de JavaScript que nos permite dibujar y programar dentro de un lienzo gráfico, que se llama canvas en las páginas web. p5.js tiene muchas funciones predefinidas que nos facilitan la tarea de programar gráficos e interactividad.

p5.js fue creada por la artista y programadora Lauren Lee McCarthy, y es mantenida por una comunidad de artistas, programadores, y educadores de la Processing Foundation. es una herramienta muy popular en el ámbito del arte digital y la educación en programación creativa.

<https://p5js.org/>

## editor de p5.js

vamos a usar el editor en línea de p5.js, que es una plataforma web donde podemos escribir, guardar, y compartir nuestros códigos de p5.js. el editor tiene una interfaz sencilla, con un área para escribir código, un botón para correr el código, y una ventana para ver el resultado gráfico.

la única regla importante es que no se hagan una cuenta para p5.js, sino que inicien sesión con su cuenta de github, para permitir compartir en público nuestras croqueras de p5.js.

<https://editor.p5js.org/>

## funciones

las funciones en JavaScript tienen la siguiente sintaxis

```javascript
function nombreFuncion(parametro0, parametro1) {

}
```

la palabra clave `function` permite declarar una función, luego le damos un nombre a la función, el que queramos, y luego en los paréntesis anotamos los parámetros que necesita usar. a continuación entre llaves `{}` escribimos el código que correrá cada vez que llamemos a la función.

```javascript
function sumar(int x, int y) {
  return x + y;
}

function fondoMagentaTodoSinBordes() {
  // fondo magenta
  background(255, 0, 255);
  // sin bordes
  noStroke();
}
```

en estos ejemplos vemos varios constructors: la función `sumar` recibe dos parámetros, `x` e `y`, y retorna la suma de ambos. la función `fondoMagentaTodoSinBordes` no recibe ningún parámetro, y no retorna nada, solamente corre el código que está dentro de sus llaves.

## funciones setup() y draw()

en nuestros códigos iniciales empezaremos rellenando las funciones `setup()` y `draw()`. estas funciones son especiales, porque p5.js las reconoce y las corre automáticamente. `setup()` se corre una sola vez al principio, y `draw()` se corre en un loop infinito, o sea, una y otra vez, sin parar, hasta que cerremos la página.

## sistemas de coordenadas 2D en p5.js

en p5.js se usa por defecto un sistema de coordenadas cartesianas, donde el punto (0, 0) está en la esquina superior izquierda de la pantalla.

el eje x aumenta hacia la derecha y el eje y aumenta hacia abajo.

podemos hacer que el elemento canvas use la pantalla completa del navegador con las variables internas `windowWidth` y `windowHeight`.

- <https://p5js.org/reference/p5/windowWidth/>
- <https://p5js.org/reference/p5/windowHeight/>

## cursor

si queremos dejar de ver el cursor del ratón, podemos usar la función `noCursor()`. si queremos modificar su apariencia, podemos usar la función `cursor()`, que puede cambiar a diferentes formas predefinidas, o también a imágenes subidas.

- <https://p5js.org/reference/p5/noCursor/>
- <https://p5js.org/reference/p5/cursor/>

## declaración de variables

la sintaxis para declarar una variable es primero la palabra clave `let`, seguida del nombre de la variable, y finalmente un punto y coma.

por ahora vamos a declarar las variables de forma global, o sea, las vamos a declarar fuera de las funciones, al principio del código. esto hace que las podamos leer y modificar en cualquier otra parte del código, como por ejemplo dentro de `setup()` o `draw()`.

puede haber solamente una variable con un nombre en particular, el nombre debe ser único.

una de las gracias del lenguaje que estamos usando, JavaScript, es que podemos declarar la variable sin asignarle un tipo de memoria, en muchos otros lenguajes de programación, debemos decidir qué tipo de dato contendrá la variable, por ejemplo, si es un número entero, un número con parte decimal, un caracter, un texto, etc. esto no es necesario en JavaScript, lo que lo hace un lenguaje más moderno.

```javascript
// algunos ejemplos de declaracion de variables

let creadora;

let x;

let corazon;

let modo;
```

## asignación de valores a variables

para asignar un valor a una variable, usamos el símbolo `=`, que se llama operador de asignación. escribimos a la izquierda del signo `=` el nombre de la variable, y a la derecha el valor que queremos asignarle.

el valor que está a la derecha no tiene por qué ser explícito, puede ser una operación matemática, o una función que retorna un valor, o combinaciones.

las variables podemos asignarles valor en cualquier momento, siempre y cuando alguna vez las hayamos declarado.

```javascript
// las mismas variables de arriba, con valores asignados
// notar que es sin let, porque solamente se usa para declarar

creadora = "Ada";

x = width/2;

corazon = true;

modo = "auraFarming";
```

## valor inicial para variables

cuando declaramos una variable con `let` y luego terminamos en `;` no nos estamos haciendo cargo de su valor inicial, por lo que parte con un valor indefinido, literalmente `undefined`.

si queremos asignarle un valor inicial, podemos en la misma línea de declaración, asignarle un valor inicial, lo que es opcional.

```javascript
let creadora = "Ada";
```

es importante distinguir que esta línea es especial porque es dos operaciones a la vez: la declaración obligatoria que ocurre una vez, y a continuación la asignación de un valor. para las próximas veces que usemos el nombre de la variable no usaremos `let`.

## funciones de pintar y colores

vimos que hay muchas funciones que permiten pintar y reciben como parámetros internos.

para pintar el fondo completo usamos la función `background()`.

para pintar formas, tenemos 3 parámetros importantes:

- `stroke()`: el color del borde de la forma
- `fill()`: el color de relleno de la forma
- `strokeWeight()`: el grosor del borde de la forma, se mide en pixeles, no recibe un color

`background()`, `stroke()`, y `fill()` reciben como parámetros un color, que puede ser declarado de varias formas:

en clases vimos dos maneras de describir color:

- con 1 parámetro entre 0 y 255, para escala de grises.
- con 3 parámetros entre 0 y 255, para rojo, verde, azul (RGB).

existen más modos y más colores, más info aquí <https://p5js.org/reference/p5/colorMode/>

- <https://p5js.org/reference/p5/color/>
- <https://p5js.org/reference/p5/background/>
- <https://p5js.org/reference/p5/stroke/>
- <https://p5js.org/reference/p5/fill/>

si queremos no pintar el borde de una forma, podemos usar la función `noStroke()`, y si queremos no pintar el relleno, podemos usar la función `noFill()`.

- <https://p5js.org/reference/p5/noFill/>
- <https://p5js.org/reference/p5/noStroke/>

no usa color, pero por completitud:  <https://p5js.org/reference/p5/strokeWeight>

## orden en p5.js

en general todo ocurre de arriba hacia abajo en secuencia.

si queremos que algo ocurra antes que otra cosa, lo escribimos antes en el código.

si queremos pintar una figura atrás de otra, la figura que queremos que quede atrás, la escribimos antes en el código, y la figura que queremos que quede adelante, la escribimos después.

si la última línea dentro de `draw()` es `background(220)`, entonces cada vez que `draw()` corra, se va a pintar un fondo gris claro por encima de todo lo demás, lo que hará que no veamos nada más que el fondo, ojo con el orden de las cosas.

## figuras en 2D: elipse

para dibujar una elipse, usamos la función `ellipse()`, que recibe 4 parámetros: coordenada x, coordenada y, ancho, alto.

si queremos una circunferencia, el ancho y el alto deben ser iguales, o de frentón usar `circle()`, que recibe 3 parámetros: coordenada x, coordenada y, diámetro.

- <https://p5js.org/reference/p5/ellipse/>
- <https://p5js.org/reference/p5/circle/>

todas las circunferencias son elipses, pero no todas las elipses son circunferencias.

## aleatoreidad

usamos la función `random()` para generar números aleatorios dentro de un rango.

si la usamos con un parámetro, es el límite superior, y el límite inferior es 0.

si la usamos con dos parámetros, el primer parámetro es el límite inferior (incluido), y el segundo parámetro es el límite superior(excluido).

si queremos un número aleatorio entre 0 y 255, escribimos `random(255)`, si queremos un número aleatorio entre 100 y 200, escribimos `random(100, 200)`.

ojo que en estos dos casos los límites superiores 255 y 200 no se incluyen en los resultados.

## obra de vania paredes que mostró en clases

aquí el código en javascript para copiar y pegar, y también en mi croquera de p5.js

<https://editor.p5js.org/montoyamoraga/sketches/wf_g0bNRg>

```javascript
// let es para declarar
let x = 0;
let direccion = 1;

function setup() {
  //página de 600 de ancho y 400 de alto
  createCanvas(1000, 400); 
  noCursor();
}

function draw() {
   background(135, 206, 235);
  // = es para asignar valor
  // cada vez que draw corra, sumale 1 al valor de x
  x = x + 1 * direccion;
  //Cielo azul
  if (x > 400) {
      direccion = -1;
    background(0, 0, 0)
  }
  if (x < 0) {
    direccion = 1;
     background(0, 0, 0)
  }
  
  background(135, 206, 235);
  //sol a la derecha arriba
  //Sol amarillo con orilla naranja
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  
   circle(300, x, 100);
  //Pasto
  stroke(0);
  strokeWeight(0);
  fill("green");
  rect(0, 250, 600, 150);

  
  textSize(75)
  text("🐛", mouseX, mouseY);
  text("🌷", 150, 250);
  
  textSize(250)
  text("🏡", 300, 250)
}
```

## código de primera mitad de la clase

<https://editor.p5js.org/montoyamoraga/sketches/aTgiP97wG>

```javascript
let x = 0;

function setup() {
  // el primer parametro
  // es la coordenada X
  // el segundo es Y
  createCanvas(400, 400);
}

function draw() {
  x = x + 1;
  background(220, 150, 0);
  noStroke();
  ellipse(x, 100, 20, 20);
}


// function limpiarCasa()  {
  // trapear();
  // encerar();
  // alimentarRingo();
  // barrer();
// }

```

## segunda parte de la clase

<https://editor.p5js.org/montoyamoraga/sketches/obUKbIOOK>

```javascript
// let es para declarar
// declarar en lenguaje actual
// la gente lola le llama manifestar
// despues de let viene el nombre
// puedo hacer el nombre que quiera
// despues viene = que es para asignar valor
let nombreBacan;
let x = 0;
let y = 100;
let direccion = 1;

function setup() {
  // el primer parametro
  // es la coordenada X
  // el segundo es Y
  createCanvas(400, 400);
}

function draw() {
  // = es para asignar valor
  // nombre = valor
  // esto sobreescribe el valor
  // olvidate todo
  // deja tu vida anterior atras
  // y ahora solamente hay un presente
  // el valor de la derecha
  x = x + 10 * direccion;
  y = x/2;
  
  if(x > 400){
     direccion = -1;
    background(
      random(255),
      random(255),
      random(255)
    );
  }
  if (x < 0) {
     direccion = 1;
    background(
      random(255),
      random(255),
      random(255)
    );
  }
  
  // background(220, 150, 0);
  noStroke();
  ellipse(x, y, 20, 20);
}


// function limpiarCasa()  {
  // trapear();
  // encerar();
  // alimentarRingo();
  // barrer();
// }

```
