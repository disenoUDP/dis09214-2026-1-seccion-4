# sesion-01
## ejemplo clase 17.04.2026

así se escriben
los parrafos

tada!


![texto que explica una imagen](./digi.png)

## apuntes clase 17.04.2026
### titulos p5js
en p5js, cuando uno abre el panel de la izquierda, encontramos index.html, y para escribir titulos para nuestras creaciones, funciona igual que acá, con doble hashtag.

### link
<a> </a> hace que un link se vea como una palabra en nuestro lienzo, ejemplo: <a href="https:algoalgo.com"target="_blank">nombrevisibledellink</a>  y de esta forma el link no aparecerá como link, si no que se linkea a una palabra, y al clickear la palabra nos llevará al link.



# CLASE 24.04.2026
## for loop

Los *bucles for* hace que un código se repita sin necesidad de ponerlo varias veces

se escribe for(let i =0; i<5; i++) {elemento o acción
}

### Código p5js "for estatico"
https://editor.p5js.org/millaray-huichaman/sketches/m97P-MoKl 


### Código p5js "for dinamico intento 1"
se me multiplican sólo los circulos

https://editor.p5js.org/millaray-huichaman/sketches/mCPzOyhGy


### Código p5js "for dinámico intento 2"
ahora se me multiplica todo

![descripción gráfica de mi reacción en ese momento](./muñeco_grito.png)

lo que cambié fue que pasé el:

    medioX = width/2;

    medioY = height/2;

de draw a setup, y añadí a draw:

    medioX = random(width);

    medioY = random(height);

https://editor.p5js.org/millaray-huichaman/sketches/JydIiEjMo


### Código p5js "for dinámico intento 3"
ahora va más lento, añadí 

    frameRate(3);

y cambié el:
 
    for (let i = 0; i < width; i= i+20)

por
   
    for (let i = 0; i < width; i= i+separacion)
   
https://editor.p5js.org/millaray-huichaman/sketches/Fzkj3JKni


### Código p5js "for dinamico ahora sí salió"
tenía que añadirle el fondo, supongo que debe ser que sin el fondo estos movimientos quedan registrados y se ven en la pantalla, mientras que con el fondo estos cambios pasan "detrás" del fondo y el más reciente es el que se ve

    background (0,0,0);

https://editor.p5js.org/millaray-huichaman/sketches/n6Frm32kx

al menos ahora se que pasa si no tengo fondo 

![descripción gráfica de mi reacción en ese momento](./yo-cansada.png)

### Código p5js cambio de profes
https://editor.p5js.org/millaray-huichaman/sketches/upuB1We2Z
