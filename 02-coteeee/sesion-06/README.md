# sesion-06
## apuntes clase

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //si frameCount vale menos que 100 o presiono
  //el boton izquierdo quiero hacer el fondo azul
  if(frameCount < 100 || 
    (mouseIsPressed && mouseButton == "left")) {
     background(41, 52, 105);
    console.log(mouseButton);
    
     }
  //cuando presione el boton derecho del mouse
  //el fondo sea celeste 
  else if (mouseIsPressed && mouseButton == "right")
    {
    background(118, 167, 204);
}
  
}
```
