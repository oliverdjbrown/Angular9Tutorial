import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrls: ['./routing-navigation.component.css']
})
export class RoutingNavigationComponent implements OnInit {

public selectedId;

  frameworks = [
    {"id": 1, "nombre": "Angular"},
    {"id": 2, "nombre": "Node"},
    {"id": 3, "nombre": "MongoDB"},
    {"id": 4, "nombre": "Ruby"},
    {"id": 5, "nombre": "Bootstrap"}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
  }

  onSelect(framework) {
    this.router.navigate(['/detail-page', framework.id]);
    // this.router.navigate([framework.id], {relativeTo: this.route});
  }

  isSelected(framework) {
    return framework.id === this.selectedId;
  }

}
