import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import moment from 'moment';

@Component({
  selector: 'app-indicator-modal',
  templateUrl: './indicator-modal.component.html',
  styleUrls: ['./indicator-modal.component.scss'],
})
export class IndicatorModalComponent implements OnInit {

  indicator:any = {};
 
  constructor(params: NavParams, public modalCtrl: ModalController) {

    this.indicator = params.get('indicator');
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
