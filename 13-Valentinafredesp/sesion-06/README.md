# sesion-06

#apuntes p5

``` js 
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  
  
  // el fondo es rosa los primeros 1000fr
  // || cuando se presiona el mouse izq se pinta rosa
  
  if(frameCount < 100 || 
     (mouseIsPressed && mouseButton == 'left' )) {
    background(255, 100, 150);
    console.log(mouseButton);
    
  }
  //cuando se presiona el mouse der se pinta naranjo
  if (mouseIsPressed && mouseButton == 'right') {

  background (255, 128, 0);
  }
  ```
  
