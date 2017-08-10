import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsItem, NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'web-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss']
})
export class NewsSingleComponent implements OnInit, OnDestroy {

  newsItem: NewsItem;
  newsItemSubcription: Subscription;

  constructor(public newsService: NewsService, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit() {

    this.newsItemSubcription = this.route.params.subscribe(res => {
      let id = res.id;

      this.newsService.getSingleNewsItem(id).subscribe(newsitem => {
        this.newsItem = newsitem;
      });

    });
  }

  ngOnDestroy() {
    this.newsItemSubcription.unsubscribe();
  }

}
