// --- VARIABLES PARA EL DISEÑO Y PROPORCIONES ---
let tamano = 80; 
// Define un valor numérico base para controlar el tamaño de las figuras de forma proporcional.
// Se usa como referencia para que, si se cambia este número, todo el diseño escale uniformemente.

let cantidadCirculos = 8; 
// Indica que el anillo de elipses principal tendrá exactamente ocho elipses distribuidas en su órbita.



let radio1 = 150; 
// Establece la distancia en píxeles desde el centro de la pantalla hasta el anillo de elipses.
// Determina qué tan "abierto" o "cerrado" se verá el círculo de elipses .


let img, fnd; 
// Declara los contenedores donde se guardarán las imágenes del gato y del fondo.
// Al estar aquí arriba, permiten que tanto setup como draw puedan trabajar con los archivos.

let coloresCirculos = [
  [56, 12, 10, 200], [115, 7, 7, 200], [233, 72, 69, 200], [196, 124, 132, 200], 
  [221, 174, 172, 200], [229, 166, 87, 200], [223, 188, 148, 200], [245, 226, 206, 200]
]; 
// Es una lista que almacena los códigos RGBA (Rojo, Verde, Azul, transparencia) de colores sólidos de las elipses.
// Cada sub-lista [R, G, B, A] define el color único y la transparencia de una de las 8 elipses.



// la imagen ilustracion ingresa desde abajo extremo inferior hasta el centro
let posIlusY = 0;



function preload() {
  img = loadImage('assets/sadcat.jpg'); 
  // Busca y carga la imagen del gato en la memoria del navegador antes de iniciar el sketch.
  // Es fundamental que el nombre del archivo coincida exactamente para que no dé error de carga.
  // sticker the wsp, al que le saque pantallazo para subirla.
  //nombre de la carpeta en la que se encuentra el sticker: 🫶🏻. AppTeam

  fnd = loadImage('assets/fondo.jpg'); 
  // Carga la imagen de fondo que le dará textura y profundidad a toda la composición visual.
  // https://texturelabs.org/textures/lensfx_247/
   
  ilus = loadImage('assets/ilus.png'); 
  // Carga la imagen  de la ilustracion que ingresa desde abajo del canvas.
  // instragram: joshMecouch @pantspants
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // Genera un lienzo de dibujo  que se adapta al ancho y alto total de la ventana.
  // Permite que el cavas se vea bien tanto en pantallas pequeñas como en monitores grandes.

  angleMode(DEGREES); 
  // Configura  p5 para entender los ángulos en grados (0-360) en lugar de radianes ppara poder generar el circulo de elipses.
  

  rectMode(CORNERS); 
  // Obliga a que  se puedan colocar las cordenadas de todas las puntas de los rectángulos. 
  

  imageMode(CENTER); 
  // Define que las imágenes se coloquen centradas en el punto donde se encuentra el mouse.
  // Logra que el gato (cursor) reemplaze la flecha blanca.

  noCursor(); 
  // Desactiva la visibilidad de la flecha blanca del mouse.
  
  
  posIlusY = height * 2
  // Posicion de inicio de la imagen ilustracion que ingresa desde abajo en movimiento
}


function draw() {
  background(225, 211, 169); 
  // color de base para el canvas 
 
  noStroke(); 
  // Elimina los bordes o líneas negras alrededor de todas las figuras que se dibujen .
  

  tint(255, 200); 
  // Aplica un filtro de opacidad del 50% (127 de 255) a la imágen de fondo.
  // Permite que el color de fondo se mezcle con la imagen 'fnd'.

  image(fnd, width / 2, height / 2, windowWidth, windowHeight); 
  // Dibuja la imagen de fondo estirada para cubrir toda la pantalla, centrada en el lienzo.


  noTint(); 
  // Desactiva la transparencia para que solo se aplique a la foto de fondo.


  
  
  fill(76, 61, 25, 150); 

  // El cuarto valor (150) permite que la textura del fondo se asome levemente .
  // color cafe para el primer rectangulo

  rect(width , 0, width/4, height/4); 
  // Dibuja el primer rectángulo en la parte superior.
 // rectmode(corners) activado

  fill(53, 64, 36, 150); 
  // segundo rectangulo en la parte inferior derecha con transparencia.
 

  rect( width , height, width/4, height/2); 
  // Ubica un segundo rectángulo  en la parte inferior izquierda de la pantalla.
  // rectmode(corners) activado


  fill(136, 64, 36, 150); 
  //tercer rectangulo  color terracota, izquieda del canvas.
 

  rect(0, height/2, 300, 200); 
  // Dibuja el tercer rectángulo cerca de la zona central,  desplazado a la orilla izquieda del canvas.
  // rectmode(corners) activado
 

  push(); 
  //  configuración para islar otras configuraciones si que afecte a todo.
  // Todo lo que pase dentro del 'push' se puede mover o rotar sin afectar al resto.

    translate(width / 2, height / 2); 
    // Mueve el centro (coordenada 0,0) al centro exacto de la ventana del navegador.
    // para poder generar el anillo de elipses desde el centro.

    push(); 
    //  segunda configuracion de aislamiento para aplicar el modo de color HSB .
    // para que solo modifique los colores de los dos circulos de colores dinamico del centro.

      colorMode(HSB, 360, 100, 100); 
      // Activa el modo Tono, Saturación y Brillo, se configura para que los colores convinen con los demas colores del canvas . saturacion y brillo bajo
      // Define que el ciclo de colores se complete al llegar al número 360.

      let tonoBase = frameCount % 360; 
      // Crea una variable que aumenta con el tiempo y vuelve a cero cada 360 cuadros.
      // hace que el color central cambie de forma infinita .

      fill((tonoBase + 180) % 360, 40, 50); 
      // Selecciona el color opuesto al tono actual para crear un contraste .
      // un círculo exterior que siempre combina con el círculo interior.

      ellipse(0, 0, 300, 300); 
      // Dibuja la elipse central grande.
      // Al usar el modo HSB, cambia de tono .

      fill(tonoBase, 40, 70); 
      // Elige el tono base actual con un brillo más alto para resaltar el circulo pequeño del centro.
      

      ellipse(0, 0, 120, 120); 
      // Dibuja el círculo más pequeño justo encima del grande.
      // Ambos círculos cambian de color juntos pero con tonos complementarios.

    pop(); 
    // Cierra la configuracion HSB y devuelve el programa al modo de color RGB normal.
    // Permite que el anillo de elipses vuelva a usar tus colores sólidos originales.

    for (let i = 0; i < cantidadCirculos; i++) { 
    // Ejecuta una serie de instrucciones ocho veces para colocar cada pieza del anillo.
    // La variable 'i' rastrea en qué posición se configuraron los anillos de elipses.

      let angulo = i * (360 / cantidadCirculos); 
      // Divide el círculo completo en 8 partes iguales (45 grados cada una).
      // elipses quedan perfectamente alineadas en cruz y en diagonal.

      let x = cos(angulo) * radio1; 
      // Calcula la posición horizontal (X) usando trigonometría.
      // Multiplicar por 'radio1' proyecta la figura fuera del centro hacia su órbita.

      let y = sin(angulo) * radio1; 
      // posición vertical (Y) necesaria para formar una trayectoria circular.
      // El seno y el coseno trabajan juntos para dibujar un anillo perfecto de objetos.

      let c = coloresCirculos[i]; 
      // Extrae el color correspondiente de la lista 'coloresCirculos' usando el índice 'i'.
      // Permite que cada una de las 8 piezas tenga su propio color sólido predefinido.

      fill(c[0], c[1], c[2], c[3]); 
      // Aplica los valores de Rojo, Verde, Azul y Transparencia aplicados en let.
      

      if (i % 2 === 0) { 
      // Pregunta si la posición actual es par (0, 2, 4, 6) para decidir la forma.
      // Es el posicionamiento deseado para el anillo de elipses se complete intercalado con elipses verticales y diagonales.

        ellipse(x, y, 90, 120); 
        // Dibuja una elipse en posición vertical (más alta que ancha) en los puntos pares.
        

      } else { 
      // Se activa si la posición es impar (1, 3, 5, 7) para la otra mitad del anillo de elipses.
      // Completa los espacios diagonales con la elipse horizontal para que se complete el circulo de elipses .

        ellipse(x, y, 120, 90); 
        // Dibuja una elipse en posición horizontal (más ancha que alta) en los puntos impares.
        
      }
    }

  pop(); 
  // Finaliza el desplazamiento al centro y restaura el punto de origen a la esquina (0,0).



  image(ilus,width / 2, posIlusY , windowWidth, windowHeight);
  
  if (posIlusY > height / 2) { 
     posIlusY = posIlusY - 7;
    
  // si la posicion de la imagen de la ilustracion no esta en el centro, esta leera la variable para que suba continuamenta. 
    
  }
    
image(img, mouseX, mouseY, 30, 30);
  // Dibuja la imagen del gato exactamente en las coordenadas X e Y del cursor del usuario.
  // Al ser lo último en dibujarse, siempre se mantiene flotando por encima .
    
  

}

