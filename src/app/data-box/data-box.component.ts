import { Component, OnInit } from '@angular/core';

import { MarsData } from '../marsdata';
import { MarsService } from '../mars.service';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.scss'],
  providers: [ MarsService ]
})
export class DataBoxComponent implements OnInit {
  marsData: any;

  constructor(private marsService: MarsService) { }

  fetchData() {
    this.marsService.fetchData()
      .subscribe(dat => this.marsData = dat);
  }

  ngOnInit(): void {
    this.marsService.fetchData().subscribe( d => console.log(d));
  }

}
