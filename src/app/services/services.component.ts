import { EmpleadosService } from './empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public empleados = [];

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.getEmpleados();
  }

}
