# sesion-06

una iteracion es repeticion pero cada que se repite cambia de alguna forma 

en for primero se inicia, mientras esto se cumpla, como se actualiza 


push guarda las condiciones actuales 
pop es vuelve a tu estado de antes , (cuando hiciste push)

 translate hace que el origen este en otro lugar del lienzo dondole posicion en x; y 
 translate(x,y)


```
// for loop
// hace que un bloque de codigo se repita
// hace como un gif
// los compus son capaces de repetir

//se escribe asi
// for luego parentesis para decir parametros ()

// dentro d los murcielagos {}

//hay que darle un inicio y un final porque si no se repetira eternamente
// hay que actualizar

//inicio + fin + actualizacion
//esos son las 3 indicaciones que se le tiene que dar

//hay que poner primero for (let i=0) para darle el inicio con un valor inicial que seria 0
// ahora para que se detenga con el i ya creado hay que hacer la pregunta de si i vale menos que 5
//con i < 5

// se pone despues la variable inicial con un ++ para que aumente su posicio y se mueva
// esa parte del ++ ytiene que estar dentro de los murcielagos
// lo anterior del inicio y el fin tiene que estar entro de los parentesis
//todos separados por ;

//for (let i = 0; i < 5; i++) {variable movimiento()}

// los nombres no tienen espacio
let medioX;
let medioY;
let separacion

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    ellipse(random(width), random(height), 10, 10);
  }

  // punto medio del lienzo en x,y
  medioX = width / 2;
  medioY = height / 2;

  //quiero dibujar lineas rectas entre el medio del lienzo
  // y el borde superior del lienzo
  // y que poco a poco se vayan separando por 2 pixeles 
  for (let i = 0; i < width; i = i + 5) {

  // primer punto en x
  //primer punto en y
  //segundo punto en x
  //segudo punto en y
  line(medioX, medioY, i, 0);
    
 //ahora este seria para la mitad de abajo
  line(medioX, medioY, i, height);
    }
}

function draw() {
  //background(220);
}

```
