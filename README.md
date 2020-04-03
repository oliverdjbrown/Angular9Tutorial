# AngularTutorial9

Este es un proyecto de Angular 9 construido unicamente para probar las caracteristicas que destacan este framework y tener un recordatorio a mano de todo lo que se puede hacer con el.

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
Property Binding es una practica con la cual puedes atar valores o atributos  a propiedades de los elementos de un HTML
cuando realizamos la union de propiedad de un valor estamos haciendo la union con el DOM (Document Objetc Model) y podemos hacer que las propiedades en vez de ser hardcode puedan ser dinamicas.

1) crearemos la variable publica estado (boleano) y la iniciaremos en false.
2) crearemos un input en el html y dentro usamos la propiedad "disabled".
3) vamos a encerrar "disabled" en [] para poder enlazar nuestra variable boleana (estado) y asi dinamicamente pasar el estado quedando "[disabled] = false".
4) crearemos una variable llamada "buttonName" = habilitado.
5) crearemos un boton en la vista HTML y usando la interpolacion le pasamos el nombre dinamico a nuestro boton.
6) creamos un metodo el cual valide la variable boleana "estado" y  la cambie de true a false y vice versa para habilitar o deshabilitar nuestro input dinaicamente.

## Class Binding
Al igual que property binding esta es una practica para atar valores o atributos a propiedades y aplicar estilos a los elementos HTML

1) primero crearemos en la hoja de estilos unas clases para aplicar los siguientes estilos, color verde, rojo y cursiva.
2) luego declararemos la variable "formato" en el TS y sera igual al atributo que deseamos aplicarle a nuestro elemento.
3) declaramos la variable, "error", "especial" y "claseMensaje" para utilizar sus atributos con ngClass. 
4) por ultimo declaramos la propiedad ngClass y le especificamos la clase mensaje para que se aplique la condicion basado en los estados de las variables.

## Style Binding
Al igual que property binding esta es una practica para atar valores o atributos a propiedades y aplicar estilos a los elementos HTML.

1) creamos un titulo en el documento HTML y de forma directa le establecemos un estilo (hardcode).
2) creamos un titulo en el documento HTML y establecemos que el estilo se aplique por medio de una condicion dependiendo del estado de una vaiable boleana.
3) creamos un titulo y por medio de ngStyle atamos nuestro objeto con los atributos establecidos.

## Event Binding

Este ayudará a crear aplicaciones web interactivas con el flujo de datos del componente al elemento y del elemento al componente, ambos extremos.

para esta practica creamos los siguientes botones.

1) crear boton que llame el evento y muestre mensaje en la ventana.
2) crear boton que llame el evento y muestre mensaje en la consola.
3) crear boton que llame un evento y asigne el valor a una vaiable que se mostrara con la interpolacion.
4) crear boton que llame un evento y muestre info del evento por consola.
5) crear boton que llame un evento y muestre e tipo de evento.
6) crear un boton que directamente asigne el valor a una variable que se mostrara con la interpolacion.

## Template Reference Vaiables

Una variable de referencia de plantilla suele ser una referencia a un elemento DOM dentro de una plantilla. También puede ser una referencia a un componente o directiva angular o un componente web. Eso significa que puede acceder fácilmente a la variable en cualquier lugar de la plantilla.

1) crear un element input y asignarle un #.
2) crear un boton con el evento click llamando un metodo que muestra un valor por consola.
3) pasar el # asignado al input como parametro para que lo reciba nuestro metodo.

## Two Way Binding

El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor también se actualiza en el modelo de datos. Resumiendo cambiamos el valor de una propiedad con una caja de texto en la vista, ese valor se cambia en la vista y también en el componente.

1) crearemos un imput en el template al cual le vamos a añadir la directiva ngModel que sea igual a la variable "nombre".
2) en nuestro TS declararemos la variable "nombre" y la dejaremos en blanco.
3) usando la interpolacion en el template renderizaremos la variable "nombre".
4) en "app.module.ts" vamos a agregar al import "FormsModule" para que angular reconozca la directiva ngModel.
5) en "app.module.ts" importaremos "import { FormsModule } from '@angular/forms';".

## ngIf Directive

ngIf: Permite mostrar / ocultar elementos del DOM en la vista.

1) crear un titulo h1 con directiva ngIf el cual se mostrara si la variable estado es igual a true, de lo contrario no se mostrara.
2) declarar variable boleana "estado".
3) crear boton que llama funcion para cambiar el estado de variable de verdadero a falso y viceversa.
4) crear un titulo h1 con directiva ngIf el cual se mostrara si la variable "estado" es igual a true, de lo contrario mostrara un bloque de codigo que fue referenciado.
5) crear un titulo h1 con directiva ngIf que mostrara entre un bloque de codigo u otro dependiendo del estado de la variable "estado".

## ngSwitch

ngSwitch: Permite ejecutar casos condicionales sobre elementos del DOM.

1) Establecer la variable "color".
2) establecer un div con la directiva ngSwitch estableciendo 3 casos de seleccion.
3) establecer un caso por defecto en caso de que no se seleccione uno de los 3 casos.

## ngFor
ngFor: Permite ejecutar bucles sobre elementos del DOM.

1) crear directiva ngFor que despliegue una lista de objetos.
2) crear directiva ngFor que despliegue una lista de objetos + indice.
3) crear directiva ngFor que despliegue una lista de objetos + validar si es el primero.
4) crear directiva ngFor que despliegue una lista de objetos + validar si es el ultimo.
5) crear directiva ngFor que despliegue una lista de objetos + alternar.