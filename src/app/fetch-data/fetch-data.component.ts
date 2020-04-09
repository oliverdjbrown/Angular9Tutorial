import { EmpleadosService } from './../fetch-data/empleados.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  public empleados = [];

  constructor(private empleadosSerice: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosSerice.getEmpleados()
    .subscribe(datos => this.empleados = datos);
  }

}
