import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'chart.js';

Chart.register(...registerables)


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  @Input() chartData: any = [];
  @Input() chartLabels: any = [];

  public lineChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLabels:string[] = [];
  public lineChartLabel:ChartDataset[] = [];

  public lineChartData:ChartDataset[] = [{data: []}];

  @Input()
  set indicatorData(indicData: any) {
    if(indicData.length > 0) {
      this.lineChartData = indicData
    }
  }

  @Input()
  set indicatorLabels(data: any) {
    this.lineChartLabels = data;
  }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    const linechart = new Chart('chart-line', {
      type: 'line',
      data: {
        labels: this.lineChartLabels,
        datasets: this.lineChartData
      },
      options: this.lineChartOptions
    });
  }
}
