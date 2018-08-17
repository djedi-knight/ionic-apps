import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;

  constructor(public navCtrl: NavController) { }

  onGoToUsers() {
    this.navCtrl.push(this.usersPage)
      .then((response) => console.log(response)) // this logs
      .catch((error) => console.log('Access Denied! Error: '+error)); // this doesn't
  }
}
