import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  src = "http://localhost:5000/files/VuQuangMinhCV.pdf";
  constructor() { }

  ngOnInit() {
  }

}
