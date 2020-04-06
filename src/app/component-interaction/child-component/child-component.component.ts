import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() public parentData;
  @Output() public eventoHijo = new EventEmitter();

  constructor() { }

  onClick() {
    this.eventoHijo.emit('mensaje desde el formulario hijo');
  }

  ngOnInit(): void {
  }

}
