import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


export interface NavBar {
  name: string;
  routerLink: string;
}


@Injectable()
export class NavBarService {

  constructor(public db: AngularFireDatabase) {
  };

  public getMenuItems() {

    return this.db.list('/Menu').map(res => {
      return res;
    });


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
