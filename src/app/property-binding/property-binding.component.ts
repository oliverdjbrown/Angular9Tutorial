import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId = 'testId';
  public estado = false;
  public buttonName = 'Habilitar';


  Habilitar() {
    if (this.estado === true) {
      this.estado = false;
      this.buttonName = 'Deshabilitar';
    } else {
      this.estado = true;
      this.buttonName = 'Habilitar';
    }
  }

constructor() { }

  ngOnInit(): void {
  }

}
