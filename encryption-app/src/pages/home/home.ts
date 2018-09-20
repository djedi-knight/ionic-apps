import { Component } from '@angular/core';
import { FileEncryption } from '@ionic-native/file-encryption';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fileEncryption: FileEncryption) {

  }

  onEncrypt() {
    this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');
  }

}
