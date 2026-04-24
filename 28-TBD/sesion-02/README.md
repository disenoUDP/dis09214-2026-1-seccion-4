# sesion-02
codigo lineas 24.04
// quiero que desde un punto medio del lienzo primero haya un punto

// al principio se dibuje nada y luego vaya de a poquito subiendo


let medioX;
let medioY;
let separacion =25;
let direccion = 1;
let poquito = 0;

function setup() {
  createCanvas(400, 400);
  
  medioX = width/2;
  medioY = height/2;
  
}

function draw() {
  background(220);
  
  
  
  for(let x = 0; x < width ; x = x + separacion )
  {
    line(medioX, medioY, x , medioY - poquito);
    
  }
  
poquito = poquito + direccion * 5;
  
  if(poquito > height/2){
     direccion = -1;
     }
   if(poquito > - height/2){
     direccion = 1;
     }
}
