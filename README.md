# AngularTutorial9

Este es un proyecto de Angular 9 construido unicamente para probar las caracteristicas que destacan este framework

## Hello World
1) Eliminare la documentacion de "app.component.html"
2) Para esta prueba creare un componente utilizando Angular CLI (ng g c "hello-world") el cual genera un componente.
3) Modificare el archivo "hello-world.component.html" y "hello-world.component.ts" para mostrar el mensaje Hola mundo de forma directa y utilizand la interpolacion.  
4) Creare un componente "tool-bar" que contrendra un navbar para desplazarnos dentro de las practicas de este proyecto.

## Components
Definicion: Los componentes en angular son como pequeñas partes de nuestra aplicacion, el componente sera un bloque que contiene un template compuesto por (Vista(HTML), Logica(TS) y Estilos(Css)), estos componentes se declaran y luego pueden ser llamados para utilizarse. 

1) Creare 1 componente llamado "components" que fungira como el padre.
2) Luego creare 3 componenetes (componente1, componente2, componente3) que seran hijos del componente padre
3) Los componentes hijos se mostraran dentro del padre. 

## Interpolacion
Definicion: La interpolación de cadenas, también conocida en inglés como "string interpolation", o simplemente como interpolación, es un mecanismo de Angular de sustitución de una expresión por un valor de cadena en un template.

Cuando Angular ve en un template algo escrito entre dobles llaves {{}} lo evalúa y lo trata de convertir en una cadena, para luego volcarlo en el template.

1) creare un componente llamado "interpolation".
2) Declarare una variable publica llamada "mensaje" en "interpolation.component.ts".
3) dentro de mi vista "interpolation.component.html" colocare la variable entre la doble llave para que se muestre el mensaje.
4) probare propiedades para concatenar strings con mi interpolacion, mostrar en mayuscula, llamar funciones, mostrar caracteres en mayuscula.

## Property Binding
Property Binding es una tecnica con la cual puedes unir valores a propiedades de los elementos de un HTML
cuando realizamos la union de propiedad de un valor estamos haciendo la union con el DOM (Document Objetc Model) y podemos hacer que las propiedades en vez de ser hardcode puedan ser dinamicas.

1) crearemos la variable publica estado (boleano) y la iniciaremos en false.
2) crearemos un input en el html y dentro usamos la propiedad "disabled".
3) vamos a encerrar "disabled" en [] para poder enlazar nuestra variable boleana (estado) y asi dinamicamente pasar el estado quedando "[disabled] = false".
4) crearemos una variable llamada "buttonName" = habilitado.
5) crearemos un boton en la vista HTML y usando la interpolacion le pasamos el nombre dinamico a nuestro boton.
6) creamos un metodo el cual valide la variable boleana "estado" y  la cambie de true a false y vice versa para habilitar o deshabilitar nuestro input dinaicamente.

## Class Binding
Al igual que property binding esta es una tecnica para unir valores a propiedades y aplicar estilos a los elementos HTML

1) primero crearemos en la hoja de estilos unas clases para aplicar los siguientes estilos, color verde, rojo y cursiva.
2) luego declararemos la variable "formato" en el TS y sera igual al atributo que deseamos aplicarle a nuestro elemento.
3) declaramos la variable, "error", "especial" y "claseMensaje" para utilizar sus atributos con ngClass. 
4) por ultimo declaramos la propiedad ngClass y le especificamos la clase mensaje para que se aplique la condicion basado en los estados de las variables.