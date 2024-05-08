import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, map, Observable, Observer, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorDataService {

  indicators: any = {};
  webToken: String = "";
  url: String;

  constructor(public http: HttpClient) {
   
    this.url = 'https://indicadores.camarco.org.ar/';
    // this.url = 'http://localhost:8000/';
    // this.url = 'https://t2bf1hwv-8000.brs.devtunnels.ms/'

    this.webToken = "781329f3f61df183dbf81fcd38f524117a52181d";
    // this.webToken = "4af0a610241f06a7076f84fe88bd34296a63694c"

   }

  load(provinciales = false):any{
    return this.getIndicators(this.webToken, provinciales)
  }

  getWebToken(): String {
    return this.webToken;
  }

  getServerUrl(): String {
    return this.url;
  }

  getUploadData():Observable<Object>{
    let headers: HttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + this.webToken, 'Content-Type': 'application/json'});
    console.log(headers);
    
    return this.http.get(this.url + 'upload-data/?format=json', { headers: headers })
    // return this.http.get(this.url + 'upload-data/?format=json')
    .pipe(tap((response:any) => {
      if (response){
        return response.date
      } else {
          console.error('Hay un error al obtener la lista')
      }}),catchError(this.handleError)
  )}

  getIndicators(token:any, provinciales:boolean):Observable<Object>{
    let headers: HttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + token, 'Content-Type': 'application/json'});
    console.log(headers);
    return this.http.get(this.url + 'indices/?format=json&provinciales=' + provinciales, { headers: headers })
    .pipe(map((data: any) => {
      let newData = this.processData(data)
      console.log(newData)
      return newData;
      }),catchError(this.handleError)
    )
  }

  processData(data:any):Object[]{
    data.sort((a:any, b:any) => {   
      if (a.category.name > b.category.name) {
        return 1;
      }
      if (a.category.name < b.category.name) {
        return -1;
      }
      return 0;
    });

    let categories:any = [];
    let category:any;

    clearCategory();
    console.log(data);
    
    data.map((indicator:any) => {
      if(category.name != indicator.category.name) {
        if(category.name != '') {
          addCategory(category);
          clearCategory();
        }
        category.name = indicator.category.name;
        if(category.name.length > 0) {
          category.nameCode = category.name.toLowerCase().split(' ')[0];
        }
      }
      if(indicator.data_indicator.data) {
        category.indicators.push(this.addIndicatorValues(indicator, indicator.data_indicator.data.extra_data));
      }
    });

    addCategory(category);
    return categories;

    function addCategory(cat:any) {
      cat.indicators.sort((a:any, b:any) => a.order - b.order );
      if(cat.indicators.length > 0) {
        categories.push(cat);
      }
    }

    function clearCategory() {
      category = {name: '', indicators: [], nameCode: ''};
    }
  }

  getIndicatorList(provinciales=false):any {
    return this.load(provinciales)
  }

  processDataProvinciales(data:any){
    data = data.map((d:any) => {
      d.indicators = d.indicators.sort((a:any, b:any) => {
      if(a.province.name && b.province.name) {
        a = a.name_code + a.province.name.toLowerCase();
        b = b.name_code + b.province.name.toLowerCase();
        if(a > b) {
            return 1;
          }
          if(a < b) {
            return -1;
          }
          return 0;
          }
        });
            return d;
      })
      return data
    }
      
  
  getIndicator(pk:any) {
    let headers:HttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + this.webToken});
    return this.http.get(this.url + 'indices/' + pk + '/?format=json', { headers: headers })
      .pipe(indicatorResponse => {
        this.indicators = indicatorResponse;
        return this.indicators;
      },catchError(this.handleError));
  }


  addIndicatorValues(indicator:any, extra_data:any) {
    if(indicator.pk != 19 && indicator.pk != 13) {
      if(indicator.use_variation_in_listing) {
        indicator.generalValue = this.getValue(extra_data, 3);
      } else {   
        
        indicator.generalValue = this.getValue(extra_data, 0);
      }
      indicator.monthly = this.getValue(extra_data, 1);
      
      if(indicator.pk != 17 && indicator.pk != 18 && indicator.pk != 11 ) {
        indicator.interannual = this.getValue(extra_data, 2);
        indicator.accumulated = this.getValue(extra_data, 3);
      }
     
      if(indicator.pk == 11 ){
        indicator.accumulated = this.getValue(extra_data, 3);
      }else if(indicator.pk == 17 || indicator.pk == 18 ){
        indicator.accumulated = this.getValue(extra_data, 2);
      }
    }

    extra_data.map((extraValue:any) => {
      let key = Object.keys(extraValue)[0];

      if(!indicator.interannual && key.toLowerCase().indexOf("igual mes del año anterior") > -1) {
        indicator.interannual = extraValue[key];
      }
    });

    // Implementacion anterior
    // extra_data.map((extraValue:any) => {
    //   let key = Object.keys(extraValue)[0];
    //   if(!indicator.accumulated && key.toLowerCase().indexOf("acumulado anual") > -1) {
    //     indicator.accumulated = extraValue[key];
    //     
    //   }
    // });

    return indicator;
  }

  getValue(values:any, index:any) {
    let key = values[index] ? Object.keys(values[index])[0] : "";
    return values.length > index ? values[index][key] : '';
  }

  getIndicatorDetails(pk:any) {
    let data:any = this.getIndicator(pk);
    return data.map;
  }

  formatDecimalSeparator(value:any) {
    if(value === "-%") {
      return "-";
    }
    let valueFinal = value.toString().replace('.', ',');
    return valueFinal.split("").reverse().join("")
                  .replace(/(\d{3}\B)/g, "$1.")
                  .split("").reverse().join("");
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
