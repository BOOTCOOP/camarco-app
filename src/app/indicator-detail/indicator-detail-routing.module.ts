import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BartChartComponent } from '../bart-chart/bart-chart.component';
import { IndicatorModalComponent } from '../indicator-modal/indicator-modal.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { IndicatorDetailComponent } from './indicator-detail.component';

const routes: Routes = [
  {
      path: '',
      component: IndicatorDetailComponent,
      pathMatch: 'full',
    
    children:[
      {
      path: 'login-modal',
      component: LoginModalComponent
    },
    {
      path: 'bart-chart',
      component: BartChartComponent
    },
    {
      path: 'indicator-modal',
      component: IndicatorModalComponent
    },
    {
      path: 'line-chart',
      component: LineChartComponent
    },
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorDetailRoutingModule {}
