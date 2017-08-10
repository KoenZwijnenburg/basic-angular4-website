import { Component, OnInit } from '@angular/core';
import { NewsItem, NewsService } from '../news.service';

@Component({
  selector: 'web-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.scss']
})
export class NewsOverviewComponent implements OnInit {

  public newsItems: NewsItem[];

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsItems().subscribe(res => {
        this.newsItems = res;
    });
  }

}
