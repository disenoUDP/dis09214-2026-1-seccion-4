# sesion-06
## apuntes clase 17.04.2026
### titulos p5js
en p5js, cuando uno abre el panel de la izquierda, encontramos index.html, y para escribir titulos para nuestras creaciones, funciona igual que acá, con doble hashtag.

### link
<a> </a> hace que un link se vea como una palabra en nuestro lienzo, ejemplo: <a href="https:algoalgo.com"target="_blank">nombrevisibledellink</a>  y de esta forma el link no aparecerá como link, si no que se linkea a una palabra, y al clickear la palabra nos llevará al link.

### Código p5js "IF"
```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
    // || significa o
    //si framecount vale menos de 100 o presiono el botón izquierdo, se hace fondo rojo
  if(frameCount<100 || (mouseIsPressed && mouseButton == "left" )){
    background (55,0,0);
    
    //el console log sube cada vez que presiono el botón izquierdo del mouse
  console.log(mouseButton);
  
  }
  
    //cuando se presione el botón derecho se hace el fondo azul
 else if(mouseIsPressed && mouseButton == "right"){
  background(0,50,0);
  
    //si presiono el botón derecho, el console log se reinicia, y lo mismo si apreto el botón izquierdo
   console.log(mouseButton);
  }
}
```


(```js 

```) <- ayuda a visualizar el código como tal y no como apuntes, en este caso de JavaScript. En el primero se escribe antes del código, y el último para cerrar el código, abarcando así todo lo seleccionado.
