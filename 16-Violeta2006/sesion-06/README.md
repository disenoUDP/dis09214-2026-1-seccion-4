# sesion-06
## apuntes p5
### mis apuntes son los codigos trabajados en clase
#### dejo el codigo p5
``` js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //|| es un o con logica
  //hacer dos preguntas por un solo if
  //si freameCount vael menos de 100 o presiono el boton izquierdo el fondo es verde
  
  if(frameCount<100 ||
     (mouseIsPressed && mouseButton == "left" )) {
     background(0,225,0);
    console.log(mouseButton);
     }
  
  
  //cuando el boton derecho se presiona el fondo es azul
  //else if tiene que ir despues de un if principal
  //else if solo funciona cuando el if superior es inactivo, es un no
 else if(mouseIsPressed && mouseButton == "right")
 {
     background(0,0,225);
  }
  
  
  
  
}
```
