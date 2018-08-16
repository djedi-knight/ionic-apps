import { Component, OnInit } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor(public navParams: NavParams, public navCtrl: NavController) { }

  ngOnInit() {
    this.name = this.navParams.get('userName');
  }

  onGoBack() {
    // this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }
}