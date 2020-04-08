import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  public pipes1 = 'LOWERCASE';
  public pipes2 = 'uppercase';
  public pipes3 = 'title case';
  public pipes4 = 'Slice';
  public pipes5 = {
    'primerNombre': 'Pedro',
    'primerApellido': 'Miguel'
  };
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
