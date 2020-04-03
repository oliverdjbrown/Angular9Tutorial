import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

public formato = 'text-success';
public error = false;
public especial = true;
public claseMensaje = {
  'text-success': !this.error,
  'text-danger': this.error,
  'text-special': this.especial
}

  constructor() { }

  ngOnInit(): void {
  }

}
