import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
public mensaje = 'este mensaje esta almacenado en una variable publica para luego ser mostrado gracias a la interpolacion';

mostrarMensaje() {
return 'Hola, este mensaje es el return de una funcion: ' + this.mensaje;
}

constructor() { }

  ngOnInit(): void {
  }

}
