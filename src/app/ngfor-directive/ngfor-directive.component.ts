import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

 public colores = ['rojo', 'azul', 'green', 'yellow'];

  constructor() { }

  ngOnInit(): void {
  }

}
