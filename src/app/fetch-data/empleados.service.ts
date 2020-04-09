import { IEmpleados } from './../empleados';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url = '/assets/data/empleados.json';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<IEmpleados[]> {
    return this.http.get<IEmpleados[]>(this.url);
  }
}
