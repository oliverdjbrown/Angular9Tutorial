import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

public frameworkId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    // this.frameworkId = parseInt(this.route.snapshot.paramMap.get('id'));    

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.frameworkId = parseInt(params.get('id'));
    });
  }

  anterior() {
    this.frameworkId = this.frameworkId - 1;
    this.router.navigate(['/detail-page', this.frameworkId]);
  }

  siguiente() {
    this.frameworkId = this.frameworkId + 1;
    this.router.navigate(['/detail-page', this.frameworkId]);
  }

  regresar() {
    let selectedId = this.frameworkId ? this.frameworkId : null;
    // this.router.navigate(['/routing-navigation', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  ShowOverView() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  ShowContact() {
    this.router.navigate(['contacto'], {relativeTo: this.route});
  }

}
