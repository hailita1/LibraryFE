import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {DocumentService} from 'src/app/service/document/document.service';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(
    private documentService: DocumentService
  ) {
  }

  listDocument = [];

  ngOnInit() {
    this.getDocument();
  }

  getDocument() {
    this.documentService.getAll().subscribe(res => {
      res = res.sort((a, b) => {
        return b.visitNumber - a.visitNumber;
      });
      this.listDocument = res.slice(0, 5);
      this.initChart();
    });
  }

  initChart() {
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    var listLabel = this.listDocument.map(item => item.name);
    var listData = this.listDocument.map(item => item.visitNumber);

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: listLabel,
        datasets: [{
          label: 'Số lượt xem',
          data: listData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
