import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { NewsSingleComponent } from './news-single/news-single.component';
import { NewsService } from './news.service';

const routes: Routes = [
  {
    path: 'news',
    component: NewsOverviewComponent
  },
  {
    path: 'news/:id',
    component: NewsSingleComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    NewsOverviewComponent,
    NewsSingleComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
