import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavParams } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MomentModule } from 'ngx-moment';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { IndicatorDataService } from '../services/indicator-data.service';
import { IndicatorDetailModule } from '../indicator-detail/indicator-detail.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule, 
    MomentModule,
    IndicatorDetailModule
  ],
  declarations: [HomePage],
  providers: [AuthService, IndicatorDataService, NavParams]
})
export class HomePageModule {}
