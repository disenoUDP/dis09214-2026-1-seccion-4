# sesion-02
## sesion-07

### mis apuntes estan en p5.js
adjunto mi codigo

``` js


let mediox;
let medioy;


  
// for loop
// se usa para repetir codigo
// (para no copiar y pegar repetidamente)

function setup() {
  createCanvas(windowWidth, windowHeight);
  
// punto medio del lienzo en x,y
  
  mediox = width /2;
  medioy = height/2;
  
// dibujar linea recta
// desde el punto medio 
// ceparadas por ciertos pixeles
  for(let i = 0; i< width; i = i + 17){
    
    line(mediox, medioy, i , 0)
  
  }
  
// lineas rectas
// entre punto medio del lienzo
// lineas de abajo 
 for(let i = 0; i< width; i = i + 17){
    
    line(mediox, medioy, i, height)
  
  }

// i ++ = i = i + 1
// inicio de los tiempos hastaCuando sigues
// con tus cosas refresco o actualizacion)
  
// las cosas que no estan relacionadas no vale la pena ponerla en un "for"

for (let i = 0; i < 500; i++) {
     ellipse(random(width), random(height), 10, 10);
}
}
 
// cordenadas polares

function draw() {
 //  background(250);
  
}
```

## lineas en movimiento


``` js

let medioX;
let medioY;
// espacio entre las lineas 
let separacion = 6
let poquito = 0;
let direccion = 1;

function setup() {
  createCanvas(400, 400);

// variables para punto medio 
 medioX = width/2
 medioY = height/2
}

function draw() {
  background(220);
  
  
  for (let x = 0; x < width; x = x + separacion)
  {
    line(medioX, x,
         x,
         medioY - poquito);
    
  }
    
    
  poquito = poquito + direccion * 5;
   if(poquito > height/2){
     direccion = -4
    
   }
     if (poquito < - height/2){
       direccion = 4
       
     }
     
  // puch
  // permite crear otro universo
  // guarda las condiciones actuales 
 
  
  // pop es volver a las condiciones de antes de hacer puch
  // es volver al universo original 
  
  
  // translate modifica el punto 0,0
  // modifica el origen
}

```
rotate (permite rotar el objeto)

importa el orden de rotate y translate 

el orden de los factores si altera el producto

