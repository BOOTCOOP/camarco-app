import { Component, Input, OnInit } from '@angular/core';
import { Colors } from 'chart.js';


@Component({
  selector: 'app-bart-chart',
  templateUrl: './bart-chart.component.html',
  styleUrls: ['./bart-chart.component.scss'],
})
export class BartChartComponent implements OnInit {
  
  public colors:any[] = ['#c6c0c0','#ed8260','#905da3','#5dc2a5'];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
  };

  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [{ data: [], label: ''}];

  @Input()
  set indicatorData(indicData: any) {
    if(indicData.length > 0) {
      this.barChartData = indicData;
    }
    length = this.barChartData.length
    for(let i = 0; i<length; i++){
      this.barChartData[i].backgroundColor = this.colors[i];
      this.barChartData[i].borderColor = this.colors[i]
      this.barChartData[i].pointBackgroundColor =this.colors[i]
    }
  }

  @Input()
  set indicatorLabels(data: any) {
    this.barChartLabels = data;
  }
  
  constructor() { }

  ngOnInit() {}

}

