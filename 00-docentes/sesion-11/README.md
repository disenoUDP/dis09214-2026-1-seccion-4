# sesion-11

29 de Mayo 2026

---

El examen podría ser un lienzo de 500 x 500px y si son 30 estudiantes, en una pantalla de 6x6, podrimas ponerlos todos en una mega pantalla!!

> PROCESSING COMMUNITY DAY!! 26 y 27 de junio

En las versiones, por ejemplo: 1.11.1, 1.12.4, 2.0.0, etc... cada número tiene un significado.
- El primer número significa que la nueva versión no es compatible con la version anterior, por ejemplo: 1.0.0 a 2.0.0
- El segundo número significa que es compatible con la versión anterior, por ejemplo: 1.13.0 a 1.14.0
- El tercer número son detalles pequeños, usualmente errores que se dieron cuenta los usuarios y se arreglaron, por ejemplo: 1.12.1 a 1.12.2

_En **AGOSTO** abrá una nueva versión de p5.js!! que será la 2.0._

Aarón está escribiendo un libro: <https://github.com/disenoUDP/apuntes-pensamiento-computacional>

## Arreglos 💐

Cuando piensas en una composición musical de música contemporánea (partituras), como esta:

![partitura](./imagenes/xenakis.jpg)

Es un sistema de composición sonora, ¿que es? es disponer elementos en el espacio-tiempo.

* La música es un subconjunto fome del sonido
* Digital significa dedos.

Los arreglos son importantes en la composición, arreglos en inglés es **'array'**

Nos van a permitir ordenar y trabajar desde un contexto mucho más amplio. Por ejemplo si creamos la variable 'let gabrielamistral;' y 'let akrilla;' ¿por qué no hacemos un conjunto de poetas y las llamamos todas al mismo tiempo? para esto son los arreglos.

<https://www.chromium.org/chromium-projects/>

<https://thecodingtrain.com>!!!

Array para nosotros será una forma de ordenar.

### ¿Cómo usar array en p5?

<https://p5js.org/es/reference/p5/Array/>

Ejemplo:
let myArray = ['deeppink', 'darkorchid', 'magenta'];

- Un array se declara : `let`
- Le pones un nombre : `myArray`
- Le dices cuanto vale : `= ['deeppink', 'darkorchid', 'magenta'];`
   - En este caso
   - 'deeppink' es index 0
   - 'darkorchid' es index 1
   - 'magenta' es index 2

 Importantes las comillas, simples o dobles, es decir: `' '` o `" "`, importante terminar con la misma que se empezó, no combinarlas. Sino ponemos comillas el computador no sabe lo que es.

 Lo puedo declarar donde lo necesite, usualmente antes de setup, así las podemos usar en todas partes.
 
 Si las declaro en Septup o draw, las encasillo en ese lugar, pero también se puede.

Ejemplo en clases: 

``` js
// arreglo array
// fue declarado de forma global
let seccion4 = ["javiera", "kati4ska", "mish", "juan", "luciana", "pepito"];

function setup() {
  createCanvas(400, 400);
  // variable local
  let x = 5;
  background(255);
  frameRate(5);
}

function draw() {
  for (let i = 0; i < 6; i++) {
    text(
      seccion4[i],
      random(width),
      random(height));
    console.log(seccion4[i]);
  }
}

```

Ejemplo array 2

``` js
// arreglo array
// fue declarado de forma global
let seccion4 = ["javiera", "kati4ska", "mish", "juan", "luciana", "pepito"];

function setup() {
  createCanvas(800, 600);
  // variable local
  let x = 5;
  background(255);
  frameRate(5);
}

function draw() {
  fill(255, 50);
  rect(0, 0, width, height);
  fill(0);
  for (let i = 0; i < 6; i++) {
    text(
      seccion4[i],
      random(width),
      random(height));
    console.log(seccion4[i]);
  }
}

```
### ¿Cómo hacer un arreglo con imágenes?

1. Guardar imágenes en el computador.
2. Crear carpeta en p5 en donde subiremos las imágenes.
3. Esperar y ver lo que se subió.
4. Crear un arreglo con un nombre `let nombre =` lo que define que es una imagen es dónde vive una imagen.
5. `["nombreDeLaCarpeta/nombreDeLaImagen", "nombreDeLaCarpeta/nombreDeLaImagen2", "nombreDeLaCarpeta/nombreDeLaImagen3"]`
6. Crear un arreglo que mostrará las imágenes `let nombre1 =`
7. Ahora creamos un `for(let i = 0; i < dirs.length; i++) {nombre2.push(loadImage(nombre[i]));}`

Push hace que la fila hace lo que tenga que hacer, añade un espacio al final de esta.


Ejemplo 1: 
**for:** Anda a las direcciones, dime cuantas direcciones hay, por cada direccion carga loadimage y las colocas en el arreglo álbumes.

```js
// quiero crear un arreglo de imagenes
// quiero celebrar mis albumes favoritos

// crear un arreglo de direcciones
let dirs = ["albumes/javiera.png", "albumes/gepe.jpg", "albumes/inti.jpg"];

// crear un arreglo vacio de albumes
let albumes = [];

// en preload() quiero cargar las imagenes
// quiero recorrer todas las direcciones
// y cargar las imagenes correspondientes
function preload() {
  
  for(let i = 0; i < dirs.length; i++) {
    albumes.push(loadImage(dirs[i]));
  }
  
  
  // javiera = loadImage("albumes/javiera.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(3);
  background(255);
}

function draw() {
  // background(220);
  // image(javiera, mouseX, mouseY);
  image(albumes[frameCount%3],
       random(width),
       random(height),
       random(100),
       random(100)
       );
}
```

