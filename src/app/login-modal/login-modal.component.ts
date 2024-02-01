import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  indicator: any = {};
  nameCode: string = "";
  username:any;
  pass: any;
  error: string = "";
  nextPage: any;
  waiting: boolean = false;

  constructor(public navCtrl: NavController, public authService: AuthService, public modalCtrl:ModalController ) {
    let params = new NavParams()
    this.indicator = params.get('indicator');
    this.nameCode = params.get('nameCode');
    this.nextPage = params.get('nextPage');
   }

   dismiss():void {
    this.modalCtrl.dismiss();
  }

  loginUser() {
    this.error = "";
    this.waiting = true;
    if(!this.username || this.username.trim() === "" || !this.pass || this.pass.trim() === "") {
      this.waiting = false;
      return this.error = "Por favor complete usuario y contraseña";
    } 
    this.authService.login(this.username, this.pass)
    .then(result => {
      if(result) {
        this.navCtrl.navigateForward(this.nextPage,{ state: {pk: this.indicator.pk, nameClass: this.nameCode}});       
        this.modalCtrl.dismiss();

      } else {
        // this.error = result.message;
      }
      this.waiting = false;
    }).catch(error => {
        this.error = "Hubo un error, por favor intente nuevamente más tarde."
        this.waiting = false;
      });
  }

  ngOnInit() {}

}
