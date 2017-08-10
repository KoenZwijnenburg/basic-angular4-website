import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


export interface NewsItem {
  title: string;
  body: string;
  img: string;
  $key: Number;
}


@Injectable()
export class NewsService {

  constructor(public db: AngularFireDatabase) {
  }


  getNewsItems() {
    return this.db.list('/news').map(res => {
      return res;
    });
  }

  getSingleNewsItem(id) {
    return this.db.object('/news/'+id).map(res => {
      return res;
    });
  }

}
