import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrls: ['./routing-navigation.component.css']
})
export class RoutingNavigationComponent implements OnInit {

  frameworks = [
    {"id": 1, "nombre": "Angular"},
    {"id": 2, "nombre": "Node"},
    {"id": 3, "nombre": "MongoDB"},
    {"id": 4, "nombre": "Ruby"},
    {"id": 5, "nombre": "Bootstrap"}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(framework) {
    this.router.navigate(['/detail-page', framework.id]);
  }

}
