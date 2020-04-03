import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {
 public estado = true;

 estadoMenaje() {
   if (this.estado === true) {
this.estado = false;
   } else {
     this.estado = true;
   }
 }
  constructor() { }

  ngOnInit(): void {
  }

}
