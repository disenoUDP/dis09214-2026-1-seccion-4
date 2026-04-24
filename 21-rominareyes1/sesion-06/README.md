# sesion-06

## if / else 
### Apuntes en p5.js
adjunto el codigo
``` js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // IF para hacer cosas con condiciones
  // existe el mayor que, menor que
  // y el igual
  
  // IO in put out
  
  // si frameCount vale menos que 100
  // o presiono el boton izq
  // quiero hacer el fondo salmon

  if(frameCount < 100 || 
    (mouseIsPressed && mouseButton == "right"   )) {
    background(210, 100, 100);
    console.log(mouseButton);
    
  }
  // cuando el boton del mouse derecho se presionado
  // el fondo sera azul
  else if (mouseIsPressed && mouseButton == "left" ) {
    background(10, 100, 210);
  }
  
  
}
``
