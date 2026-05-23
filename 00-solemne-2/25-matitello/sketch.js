// la obra escogida para este trabajo es la cancion
// "Bajo la piel" del cantante argentino Milo J
// Habla de sobre el peso del éxito rápido, las heridas emocionales que no se ven "tatuajes bajo de la piel"
// y la necesidad de frenar para no perder el eje.
// Es un viaje introspectivo donde Milo J se conecta con el dolor y el legado de sus antepasados
// para entender su propia identidad actual.
// En lo personal me encanta la letra, tiene frases muy poeticas
// Y mi inspiracion es el inicio del video musical:
// un eclipse que se va abriendo y una parte de la letra que dice
// "Luz, ¿donde estabas? te andaba buscando"

// Variable de flujo
let flujo = 0.0;

// Variable de control de estados: 1 será la escena del eclipse oscuro
// y 2 será el sol diurno
let escena = 1;

// Variable para el archivo de la tipografía Oswald
// https://www.youtube.com/watch?v=Vz-bEwmvzSw&t=375s
// ese es el link de un video tutorial de como poner una tipo aca
// y la tipo la saque de google fonts
var oswald;

// Variable destinada a guardar el objeto del botón físico creado con código HTML
let boton;

// Function preload(){ es para subir archivos pesados
// como el de la tipografia
function preload() {
  // Se busca el archivo de la tipografía en la carpeta del proyecto y lo cargamos en la variable oswald
  oswald = loadFont("Oswald-VariableFont_wght.ttf");
}

function setup() {
  // Creacion del lienzo de dibujo con dimensiones cuadradas exactas de 800 por 800 píxeles
  createCanvas(800, 800);
  // Desactive por completo los bordes o delineados negros
  noStroke();

  // Aqui quiero crear un boton para cambiar de lienzo y aprezca otra cosa
  // inspirado en el trbajo de solemnne - 02 de mava
  // luego le pregunte a la ia gemini como hacerlo en el mio
  // Como? mandandole mi trabajo (ya tenia el fondo con el eclipse) y le puse
  // "quiero poner un boton en la parte de abajo del lienzo que diga "si quieres que aparezca tienes que presioar aqui"
  // de manera centrada y tomando de referencia la siguiente codificacion" y le mande el trabajo de mava
  // La verdad es que intente sacarlo yo misma, pero me abrume con tanta cosa

  // Entonces aqui se inicia el codigo para el botón
  // poniendo el texto que se leerá en la pantalla
  boton = createButton("y la luz se hizo......solo si aprietas aquii 🪄");

  // Se posiciona el botón en el plano jugando con las coordenadas
  // del centro horizontal y la altura cerca del borde inferior
  boton.position(width / 2 - 158, height - 75);

  // Se le ordena al botón que adopte la misma tipografía Oswald que cargamos
  // anteriormente en el preload
  boton.style("font-family", "Oswald");

  // El fondo del botón en transparente para que no tenga la caja gris de Windows
  // que al parecer viene por consecuencia
  boton.style("background-color", "transparent");

  // Elimino el recuadro o borde por defecto que envuelve a los botones HTML tradicionales
  boton.style("border", "none");

  // CORRECCIÓN: Para elementos HTML como botones, el color se define obligatoriamente con .style('color')
  // El fill(); solo funciona para dibujos nativos del lienzo.
  boton.style("color", "rgb(200, 150, 50)");

  // Se modifica el tamaño de la fuente tipográfica del botón
  // y se fija en 18 píxeles y asi mantiene el mismo tamaño
  boton.style("font-size", "18px");

  // Cuando se pase la flecha del mouse sobre el texto, el cursor se va a transfromar en una manito
  // indicanco que ahi es
  boton.style("cursor", "pointer");

  // Se activa que si el botón recibe un clic, ejecutará el bloque de código interno
  boton.mousePressed(() => {
    // Se evalua la situacion, si la variable escena vale exactamente 1 (Estamos en el eclipse)
    if (escena === 1) {
      // Modifico el valor de la caja a 2 para obligar al draw a saltar a la pantalla del sol
      escena = 2;
      // De lo contrario, si la variable escena vale exactamente 2 (Estamos en el sol despejado)
    } else if (escena === 2) {
      // Reestablecemos el valor de la variable a 1 para cerrar el bucle y volver a la noche
      escena = 1;
    }
  });
}

function draw() {
  // Aplico la tipografía Oswald para que todos los texto sean el mismo
  textFont(oswald);

  // Se setea la alineación de texto centralizada tanto horizontal como verticalmente respecto a su coordenada
  textAlign(CENTER, CENTER);

  // Pregunto al sistema en tiempo real si se encuentra bajo las reglas de la Escena 1
  if (escena === 1) {
    // Ponemos el botón de texto interactivo para que se mantenga visible en esta escena
    boton.show();

    // Pongo el color del texto del botón a su tono dorado cálido para la noche
    boton.style("color", "rgb(200, 150, 50)");

    // Pinto el fondo del lienzo con tu tonalidad marrón
    // insiprado en los tonos del eclipse del video oficial
    background(15, 8, 0);

    // Cuando estaba buscando inpiracion de que hacer, vi trabajos de mis compañeros
    // y vi el trabajo de solemne - 02 de violeta2006 que tiene una flores con movimiento mas orgánico
    // y lo quise para el sol de mi trabajo
    // Lei su trabajo y fui viendo cuales eran las coordenadas que lograban hacer ese moviento
    // Solo fui copiando, pegando y viendo que eran realmente
    // hasta llegar a lo siguiente
    // (fue de mucha prueba y no tan segura de lo que estaba haciendo jj,
    // pero no queria recurrir de nuevo a la ia, perdon si lo explico mal)

    // Se necesita un bucle `for` para superponer muchas capas de círculos
    // con diferentes transparencias y tamaños. Sin este bucle, sería
    // imposible crear un degradado de luz suave
    // Se calcula el nivel de transparencia basado en el tamaño actual
    // Los círculos más grandes (s=350) serán casi invisibles (poca transparencia)
    // y los más pequeños (s=150) serán los más opacos
    for (let s = 350; s > 150; s -= 3) {
      // Busque que es alphaValue en p5js.org y es para la transparencia
      // Se dibuja el círculo en el centro del lienzo
      let alphaValue = map(s, 150, 350, 150, 10);
      // Color dorado/amarillo con transparencia
      fill(255, 200, 50, alphaValue);

      // Aqui puse esto para la luz, movimiento mas "organico"
      // y logre un movimiento mas como de un latido, pero me gusto y lo deje asi
      // Solo fui jugando con los numeros para ver que tan rapido y sutil queria que fuese
      let tamanoDinamico = s + sin(flujo + s * 0.08) * 6;

      // Se dibuja el elipse usando el tamaño dinámico que oscila de forma relajante
      ellipse(width / 2, height / 2, tamanoDinamico, tamanoDinamico);
    }

    // Luego hice este circulo para la luna
    // y es de un color marrón oscuro, casi idéntico al fondo
    fill(10, 5, 2);

    // Aqui hiuce el círculo plano (la luna)
    // pero desplazado 20 unidades a la izquierda para que no tame del todo el sol de atras
    // asi dar un efecto de eclipse
    ellipse(width / 2 - 20, height / 2, 330, 330);

    // TEXTOS FIJOS DE LA ESCENA 1
    // El color de relleno es de un amarilllo clarito para asegurar una legibilidad sobre la oscuridad
    fill(247, 241, 163);

    // Escojo el tamaño de la letra
    textSize(70);

    // Y la posiciono arriba del eclipse de manera centrada
    text("Luz", width / 2, 93);

    // Luego reduzco el tamaño de la frase "donde estas?"
    //para que se vea mas armonico
    textSize(40);

    // Y la dejo centrada abajo, dejando un espacio con la frase del boton
    text("¿dónde estabas?", width / 2, height - 140);

    // Si la variable escena no vale 1, pregunto si es equivalente al estado de la Escena 2
  } else if (escena === 2) {
    // ESCENA 2: EL SOL EN CIELO DESPEJADO
    // Pinto el fondo de un color azul celeste claro que simula un dia soleando
    background(223, 245, 245);

    // Mantengo el botón para posibilitar el regreso interactivo a la noche mediante un nuevo clic
    boton.show();

    // Ahora el botón es de un azul marino profundo para que contraste suavemente sobre el cielo celeste
    boton.style("color", "rgb(40, 70, 90)");

    // Aqui hare lo mismo que hice mas arriba con el sol de eclipse
    // para simular un solcito, pero con tamaño mas grande
    // ahora s=550  para hacer circulos mas grandes
    for (let s = 550; s > 150; s -= 10) {
      // Se calcula el nivel de transparencia basado en el tamaño actual
      let alphaValue = map(s, 150, 550, 150, 10);
      // Color dorado/amarillo con transparencia
      fill(247, 235, 139, alphaValue);

      // Movimiento orgánico estilo latido
      let tamanoDinamico = s + sin(flujo + s * 0.03) * 10;

      // Y luego el dibujo del sol en el centro del lienzo
      ellipse(width / 2, height / 2, tamanoDinamico, tamanoDinamico);
    }
  }

  // El siguiente codigo es para ajustar
  // la función sin() simulando un latido constante y fluido
  flujo += 0.03;
}
