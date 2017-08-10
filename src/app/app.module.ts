import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { appRoutes } from './routing';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './template/footer/footer.component';
import { NavBarService } from './template/navbar/navbar.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RoutingService } from './routing.service';
import { NewsModule } from './pages/news/news.module';
import { GeneralPageComponent } from './pages/general-page/general-page.component';
import { PageService } from './pages/general-page/page.service';
import { SidebarComponent } from './template/sidebar/sidebar.component';

const routing = new RoutingService();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    GeneralPageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NewsModule,
    RouterModule.forRoot(
      routing.getRoutes()
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    NavBarService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
