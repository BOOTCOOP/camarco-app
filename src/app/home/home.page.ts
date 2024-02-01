import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { IndicatorDetailComponent } from '../indicator-detail/indicator-detail.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../services/auth.service';
import { IndicatorDataService } from '../services/indicator-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AuthService, IndicatorDataService]
})
export class HomePage{

  categories:any[] = []
  provinciales:any = [];
  errorMessage: String = "";
  update_date:any;
  loggedIn: Boolean = false;
  region: String = "nacionales";
  indicatorProvinceCat: String = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public indicatorsData: IndicatorDataService, public authProvider: AuthService, public router: Router) {
    //Trae la fecha
    this.indicatorsData.getUploadData().subscribe((data:any) => {
      this.update_date = data.date;
    });
    //Trae indicadores nacionales
    this.indicatorsData.getIndicatorList(false)
    
    .subscribe((data:any)=>{
      console.log(data)
      this.categories = data;
    })

    //Trae indicadores proviciales
    this.indicatorsData.getIndicatorList(true)
    
    .subscribe((data:any)=>{
      this.provinciales = data;
      this.indicatorsData.processDataProvinciales(data)
    })
  }

  goToIndicator(indicator:any, nameCode:string):any {
    //Envia estos datos al componente indicator-detail
    let navigationExtras: NavigationExtras = {
      state: {
        pk: indicator.pk, 
        nameClass: nameCode,
        generalValue: indicator.generalValue,
        monthly: indicator.monthly,
        interannual: indicator.interannual,
        accumulated: indicator.accumulated,
        last_date: indicator.data_indicator.data.value_date
      }
    };

    //Chequea que el indicador no necesite logeo, si lo necesita y no esta logeado abre modal login
    if (indicator.useLogin) {
      this.authProvider.isLoggedIn().then((loggedIn:any) => {
      if(loggedIn) {          
       return this.router.navigate(['/indicator-detail/', indicator.pk], navigationExtras);
      } else {
        this.showLoginModal(indicator, nameCode, IndicatorDetailComponent);
    }
     });    
    } else {
        return this.router.navigate(['/indicator-detail/', indicator.pk], navigationExtras);
    }
  }

  ionViewDidEnter():void {
    this.authProvider.isLoggedIn().then((loggedIn:any) => {
      this.loggedIn = loggedIn;
    });
  }

  showProvinceIndicatorTitle(category:any):any {
    if(category !== this.indicatorProvinceCat) {
      this.indicatorProvinceCat = category;
      return true;
    }
  }

  async showLoginModal(indicator:any, nameCode:string, nextPage:any):Promise<void>{
    //Se pasan estos parametros en componentProps: chequear. Utilizar @import para recuperar esos datos
    // , {indicator: indicator, nameCode: nameCode, nextPage: nextPage}
    let modal = await this.modalCtrl.create({
      component: LoginModalComponent,
      componentProps: {
        indicator: indicator, 
        nameCode: nameCode, 
        nextPage: nextPage
      }
    });
    modal.present();
  }

  getValueFormatted(value:any):any {
    return this.indicatorsData.formatDecimalSeparator(value);
  }
}
