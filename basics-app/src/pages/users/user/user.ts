import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor(public navParams: NavParams) { }

  ngOnInit() {
    this.name = this.navParams.get('userName');
  }
}