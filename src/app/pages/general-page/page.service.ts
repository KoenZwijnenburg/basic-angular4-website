import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

export interface Page {
  title: string;
  body: string;
  img?: string;
  template?: string;
}

@Injectable()
export class PageService {

  constructor(public db: AngularFireDatabase) { }


  getPageContent(page) {
    return this.db.object('/pages' + page);
  }

}
