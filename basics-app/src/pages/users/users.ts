import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController) { }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {
      userName: name
    });
  }

  ionViewCanEnter(): boolean | Promise<void> {
    console.log('in ionViewCanEnter');
    const random = Math.random();
    return random > 0.5;
  }

  ionViewDidLoad() {
    console.log('in ionViewDidLoad');
  }

  ionViewWillUnload() {
    console.log('in ionViewWillUnload');
  }

  ionViewWillEnter() {
    console.log('in ionViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<{}> {
    console.log('in ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('in ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('in ionViewDidLeave');
  }
}
