import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { IndicatorDetailRoutingModule } from './indicator-detail-routing.module';
import { IndicatorDetailComponent } from './indicator-detail.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { BartChartComponent } from '../bart-chart/bart-chart.component';
import { IndicatorModalComponent } from '../indicator-modal/indicator-modal.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorDetailRoutingModule,
    HttpClientModule, 
    MomentModule,
    HttpClientModule, 
    NgChartsModule, 
  ],
  declarations: [IndicatorDetailComponent, LoginModalComponent, BartChartComponent, IndicatorModalComponent, LineChartComponent, ],
})
export class IndicatorDetailModule { }
