import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinasPage } from '../bocinas/bocinas';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocinas = BocinasPage;
lampara = LamparaPage
TV = TvPage;
smartphone = SmartphonePage;
  constructor(public navCtrl: NavController) {

  }
Bocina()
  {
    this.navCtrl.push(this.bocinas);
  }
  Lampara()
  {
    this.navCtrl.push(this.lampara);
  }
  Tv()
  {
    this.navCtrl.push(this.TV);
  }
  Smartphone()
  {
    this.navCtrl.push(this.smartphone);
  }
}
