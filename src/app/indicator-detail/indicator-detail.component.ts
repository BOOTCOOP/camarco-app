import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, NavController, NavParams } from '@ionic/angular';
import { IndicatorModalComponent } from '../indicator-modal/indicator-modal.component';
import { IndicatorDataService } from '../services/indicator-data.service';
import moment from 'moment';
import * as _ from 'lodash';
import { Router } from '@angular/router';


@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.scss'],
})

export class IndicatorDetailComponent implements OnInit {

  @ViewChild('datePicker') datePicker: any = false;
  indicator: any = {};
  chart: string = "";
  navbarColor: string = "";
  lastData: any = {};
  toDate: any = "";
  indicatorData: any = [];
  tableData: any = [];
  minDate: any;
  maxDate: any; 
  showDecimals: boolean = true;
  chartLabels: any = [];
  chartData: any = [];
  showSpecialTable: boolean = false;
  showIndicatorDetails: boolean = false;
  titleDescription: any = [];
  extraTitle: any = [];
  loading:any;
  navigation:any 
  update_date:any;
  general_value:any;

  
  constructor(public router: Router, public navParams: NavParams, public navCtrl: NavController, public indicatorsData: IndicatorDataService, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { 
    
    this.navigation = this.getDataNavigation();
    this.navbarColor = this.navigation?.['nameClass'];
    this.showSpecialTable = this.navigation?.['pk'] !== 19;
    this.showIndicatorDetails = this.navigation?.['pk'] !==  13;
    this.general_value = this.navigation?.['generalValue'];
    this.update_date = moment(this.navigation?.['last_date']).format("YYYY-MM-01");
    
    this.indicatorsData.getIndicator(this.navigation?.['pk']).subscribe((indicator:any) => {
      
      this.indicator = indicator;    
      this.indicator.tableTitles = [];
      if(indicator.data_indicators.length > 0) {
        this.indicator.tableTitles = this.clearTitleDescription(indicator.headers);
        this.indicator.last_date = indicator.data_indicators[0].value_date;
      }

      if(this.indicator.data_indicators.length > 0 && this.showSpecialTable) {
        this.maxDate = this.indicator.data_indicators[0].value_date;
        this.minDate = this.indicator.data_indicators[this.indicator.data_indicators.length -1].value_date;
        console.log(this.indicator.data_indicators);
        console.log(this.maxDate);
        
        this.filterByDate(this.indicator.data_indicators[0].value_date);
      } else {
        this.indicatorData = this.indicator.data_indicators.reverse();
      }
    });

  }

  ngOnInit(): void {
    
  }

  getDataNavigation():any{
    if (this.router.getCurrentNavigation() != null) {
      return this.router.getCurrentNavigation()?.extras.state;
    }
  }

  filterByDate(date:any) {
    console.log(date);
    this.toDate = date;
    this.toDate = moment(this.toDate).format("YYYY-MM-DD")

    let indexFound = this.indicator.data_indicators.findIndex((data:any) => data.value_date === this.toDate);
    if(indexFound > -1) {
      if(this.indicator.data_indicators[indexFound].extra_data.length > 0) {
        this.indicatorsData.addIndicatorValues(this.indicator, this.indicator.data_indicators[indexFound].extra_data);
        
      }
      let selectedData = this.indicator.data_indicators.slice(indexFound, 12 + indexFound);
      selectedData = this.filterProperties(selectedData, this.indicator.headers);
      this.setChartValues(selectedData);
      this.indicatorData = selectedData.reverse();
      console.log(this.indicatorData);

      
    }

  }

  clearTitleDescription(titles:any) {
    let extraTitleString:any = "";
    titles = _.filter(titles, {'showInTable': true});
    return titles.map((titleObj:any, index:any) => {
      if(titleObj.name) {
        if(titleObj.title) {
          if(titleObj.title != extraTitleString) {
            extraTitleString = titleObj.title;
            this.extraTitle.push({title: extraTitleString, qty: 1});
          } else {
            this.extraTitle[this.extraTitle.length -1].qty += 1;
          }
        }
        var simpleTitle = titleObj.name.substring(titleObj.name.lastIndexOf("(")+1, titleObj.name.lastIndexOf(")"));
        if(simpleTitle.length > 0) {
          this.titleDescription.push((index + 1) + ': ' + simpleTitle);
          return titleObj.name.replace(/ *\([^)]*\) */g, "") + ' ' + (index + 1);
        } else {
          return titleObj.name;
        }
      }  
    });
  }

  filterProperties(indicatorData:any, headers:any) {
    return indicatorData.map((indicatorData:any) => {
      indicatorData.table_data = [];
      indicatorData.graphs_data = [];
      indicatorData.extra_data.map((value:any, index:any) => {
        let key = Object.keys(value)[0];
        let header = this.indicator.headers[index];
        if(header && header.showInTable) {
          indicatorData.table_data.push({"value": value[key] });
        }
        if(header && header.showInGraphs) {
          indicatorData.graphs_data.push({"value": value[key], "name": key });
        }
      });
      return indicatorData;
    });
  }


  /* CHART VALUES */
  setChartValues(values:any) {
    this.chartLabels = this.getLabels(values);
    this.chartData = this.getValuesForChart(values);
    this.chart = 'bar'
  }

  getLabels(values:any) {
    return values.map((val:any) => moment(val.value_date).format('MMM YY')).reverse();
  }

  getValuesForChart(values:any) {
    if(values && values.length) {
      let labelList: any[] = [];
      values.map((val:any) => {
        val.graphs_data.map((gdata:any) => {
          this.addLabelValue(gdata.name, gdata.value, labelList);
        });
      });;
      return labelList;
    } else {
      return [];
    }
  }

  addLabelValue(labelName:any, value:any, labelList:any):void {
    let labelIndex = labelList.findIndex((label:any) => label.label === labelName);
    if(labelIndex === -1) {
      labelList.push({label: labelName, data: [], fill: false, borderWidth: 3});
      labelIndex = labelList.length - 1;
    }
    labelList[labelIndex].data.unshift(parseFloat(value || null));
  }
  
  /* CHART VALUES */

  async informationAlert():Promise<any>{
    let modal = await this.modalCtrl.create({
      component: IndicatorModalComponent, 
      componentProps:{
        indicator: this.indicator}
    });
    return await modal.present();
  }

  getValueFormatted(value:any) {
    return this.indicatorsData.formatDecimalSeparator(value);
  }

  getLastFormattedIndicator(value:any){
    let val:any = this.indicatorsData.formatDecimalSeparator(value)
  }


}

