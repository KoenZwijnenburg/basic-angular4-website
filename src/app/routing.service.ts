import { Injectable } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsModule } from './pages/news/news.module';
import { GeneralPageComponent } from './pages/general-page/general-page.component';

@Injectable()
export class RoutingService {

  public routes;

  constructor() { }

  getRoutes() {

    this.routes = [
      {path: '', component: HomeComponent},
      {path: 'about', component: GeneralPageComponent},
      {path: 'information', component: GeneralPageComponent},
      {path: 'news', component: NewsModule},
      {path: 'contact', component: ContactComponent}
    ];

    return this.routes;
  }
}
