# sesion-06
# apuntes
 ## mis apunte estan en p5.js 
 
 adjunto mi codigo

``` js
function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  background(220);
  
  
  //si frameCount vale menos que 100
  // o presiono el boton izquierdo
  // quiero hacer el fondo rojo
  if(frameCount < 100 ||
     (mouseIsPressed && mouseButton == "left")) {
    background(255,0,0);
    console.log(mouseButton);
  }
  
  // cuando presione el boton derecho
  // el fondo es azul
  // (cuando el de arriba deja de ser verdadse pregunta el "else")
  // si lo de arriba es verdad se salta todo lo demas
  if(mouseIsPressed && mouseButton == "right" ){
    background(0,0,255);
      
      }
  
}

```

## (``````js)
se agrega para igualar el lenguaje del codigo
(permite adjuntar el codigo)
