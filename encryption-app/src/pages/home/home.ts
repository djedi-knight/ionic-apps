import { Component } from '@angular/core';
import { FileEncryption } from '@ionic-native/file-encryption';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string;

  constructor(public navCtrl: NavController, private fileEncryption: FileEncryption) {

  }

  onEncrypt() {
    this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey').then(
      (value) => {
        this.message = 'File Encrypted! ' + value;
      },
      (error) => {
        this.message = 'File Encryption Error! ' + error;
      }
    );
  }

  onDecrypt() {
    this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey').then(
      (value) => {
        this.message = 'File Decrypted! ' + value;
      },
      (error) => {
        this.message = 'File Decryption Error! ' + error;
      }
    );
  }
}
