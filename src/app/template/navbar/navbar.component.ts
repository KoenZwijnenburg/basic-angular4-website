import { Component, Input, OnInit } from '@angular/core';
import { NavBar, NavBarService } from './navbar.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: any;

  constructor(public db: AngularFireDatabase) {
    db.list('/Menu').subscribe(res => {
      this.menuItems = res;
      console.log(this.menuItems);
    });


  }

  ngOnInit() {

  }

}
