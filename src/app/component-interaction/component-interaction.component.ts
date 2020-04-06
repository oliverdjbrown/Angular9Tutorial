import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  public nombre = 'Nombre aplicacion';
  public mensaje = '';

  constructor() { }

  ngOnInit(): void {
  }

}
