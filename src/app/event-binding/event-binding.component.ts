import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public saludos = '';
  public tipoEvento = '';
  public valorTemplate = '';
  
  eventoVentana() {
    alert('Mensaje que se mostrara en la ventana');
  }
  eventoConsola() {
    console.log('Mensaje que se mostrara en la consola');
  }
  mostrarMensaje() {
    this.saludos = 'Bienvenido';
  }
  mostrarInfoEvento(event) {
    console.log(event);
  }

  mostrarTipoEvento() {
    this.tipoEvento = event.type;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
