import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url : any;
  constructor(public navCtrl: NavController,private sanitize: DomSanitizer,) {

    let addurl = "YOUR_URL";


     this.url = this.sanitize.bypassSecurityTrustResourceUrl(addurl);

  }

}
