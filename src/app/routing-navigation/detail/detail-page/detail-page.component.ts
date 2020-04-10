import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

public frameworkId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.frameworkId = parseInt(this.route.snapshot.paramMap.get('id'));
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.frameworkId = id;
  }

}
