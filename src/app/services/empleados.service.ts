import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  getEmpleados() {
    return[
      {"id": 1, "nombre": "Oliver Brown", "edad": 30},
      {"id": 2, "nombre": "Martin Adam", "edad": 21},
      {"id": 3, "nombre": "Jairo Lara", "edad": 22},
      {"id": 4, "nombre": "Bryan Alberto", "edad": 20},
      {"id": 5, "nombre": "Leonardo Delgado", "edad": 23},
      {"id": 6, "nombre": "Randy Paula", "edad": 19},
      {"id": 7, "nombre": "Alexis Mella", "edad": 33}
    ];
  }

  constructor() { }
}
