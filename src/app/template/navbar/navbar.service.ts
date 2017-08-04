import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import  'rxjs/add/observable/of';

export interface NavBar {
  name: string;
  routerLink: string;
}


@Injectable()
export class NavBarService {

  constructor(public db: AngularFireDatabase) {};

  public getMenuItems() {

      // return Observable.of(this.db.list('/menus'));

    // return Observable.of([
    //     {
    //       name: 'Home',
    //       routerLink: ''
    //     },
    //     {
    //       name: 'About us',
    //       routerLink: 'about'
    //     },
    //     {
    //       name: 'News',
    //       routerLink: 'news'
    //     },
    //     {
    //       name: 'Contact',
    //       routerLink: 'contact'
    //     }
    //   ]
    // );
  }
}
