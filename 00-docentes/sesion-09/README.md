# sesion-09

viernes 15 de mayo 2026

la semana del 01 de mayo no hubo clases por feriado, la semana del 08 no hubo clases por receso.

esta semana es de repaso de la materia anterior y de preparación para la solemne 2.

## Repaso de if 

Código **Dado Caritas**:

```
// definir dado
let dado;

let textoMostrar;

// definir cuantas caras
const dadoCaras = 6;

function setup() {
  createCanvas(400, 400);
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  console.log(dado);
  
  // en mi dado
  // si sale 1 pierdo
  // si sale par gano
  // si sale impar pero no 1 tristeza
  
  if (dado == 1) {
    textoMostrar = "perdisteeee";
  } else if (
    dado == 2 ||
    dado == 4 ||
    dado == 6
  ) {
    textoMostrar = ":)";
  } else if (
    dado == 3 ||
    dado == 5
  ) {
    textoMostrar = ":(";
  }
  
  
  else {
    textoMostrar = "perdiste"
  }
  
  text(textoMostrar, width/2, height/2);
  
  
}

// funcion que corre cuando presiono raton
function mousePressed() {
  // mostrar en consola
  console.log("click");
  
  // usar dadoCaras con random
  // resulta en valores entre 0 y dadoCaras
  // pero tiene parte decimal
  // aproximo con ceil()
  // use ceil() en vez de floor()
  // porque queria partir desde 1
  dado = ceil(random(dadoCaras));
}

```


Código **te faltó pucha**:

```
// definir dado
let dadoActual = 0;
let dadoAnterior = 0;
let suma = 0;

let textoMostrar;

// definir cuantas caras
const dadoCaras = 6;



function setup() {
  createCanvas(400, 400);
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // en mi dado
  // si la suma
  // de actual mas anterior
  // resulta 7, gano
  // si no, no po, pierdo
  
  if (suma == 7) {
    textoMostrar = "le achuntaste";
  } else if (suma < 7) {
    textoMostrar = "te falto pucha";
  } else if (suma > 7) {
    textoMostrar = "con todo sino pa que";
  }

  
  text(textoMostrar, width/2, height/2);
  
  
}

// funcion que corre cuando presiono raton
function mousePressed() {
  // mostrar en consola
  console.log("click");
  
  // usar dadoCaras con random
  // resulta en valores entre 0 y dadoCaras
  // pero tiene parte decimal
  // aproximo con ceil()
  // use ceil() en vez de floor()
  // porque queria partir desde 1
  dadoAnterior = dadoActual;
  dadoActual = ceil(random(dadoCaras));
  suma = dadoAnterior + dadoActual;
  console.log(dadoActual, dadoAnterior, suma);
}

```
<https://www.w3schools.com/js/js_logical.asp>

## For
For nos permite decir: Quiero que pase **tal** cosa, **tanta**s veces.
<https://www.w3schools.com/js/js_loop_for.asp>

```
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

### Solemne 02

1. Tomar una obra de arte (amplio) en Español o en América, describirlo brevemente en el encabezado del código como comentario para entenderlo.
2. Responder a esta obra. ¿Cómo? Con un sketch en p5 que debe usar if, for, moverse (framecound, sinusoide, etc) y cada línea extremadamente comentada justo arriba.
3. Antes de sere enviada deben hacer click en edit/tiny code

Debe llamarse Solemne-02

* 1 punto entero por uso de FOR
* 1 punto entero por uso de IF
* 2 puntos entero por BUENOS COMENTARIOS
* 1 punto entero por MOVERSE
* 1 punto entero por tidy code

* **5 puntos MENOS**, si NO se hace TINY CODE
* **3 puntos MENOS**, si HAY faltas de ortografía (no cuentan los tildes)
* **6 puntos MENOS** si es que les preguntasmo ¿que hace? una línea, y no saben. (si se hace alguna cosa con IA describir TODO y dar crédito en los comentarios)




