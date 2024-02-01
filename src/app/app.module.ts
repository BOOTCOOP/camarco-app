import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { HomePageModule } from './home/home.module';
import { IndicatorDetailModule } from './indicator-detail/indicator-detail.module';
import 'moment/locale/es';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, NgChartsModule, CommonModule, HomePageModule, IndicatorDetailModule,  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, NavParams],
  bootstrap: [AppComponent],
})
export class AppModule {}
