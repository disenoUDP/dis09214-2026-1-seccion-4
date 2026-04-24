# sesion-06

#apuntes p5

``` js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  
  //teoría de conjuntos
  //dentro del if tiene que haber una pregunta
  if (frameCount < 100 || 
     (mouseIsPressed && mouseButton == "left")) {
      background(255, 50, 50);
    console.log(mouseButton);
     }
  
  //cuando se presione el boton derecho 
  //del mouse el fondo sea azul
  if (mouseIsPressed && mouseButton == "right" ) {
    background(0, 0, 255);
  }
  
  noCursor()
}
```
