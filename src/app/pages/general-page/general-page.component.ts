import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, PageService } from './page.service';

@Component({
  selector: 'web-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss']
})
export class GeneralPageComponent implements OnInit {

  pageContent: Page;

  constructor(private router: Router, private route: ActivatedRoute, public pageService: PageService) { }

  ngOnInit() {
    let url = this.router.url;

    this.pageService.getPageContent(url).subscribe(res => {
      this.pageContent = res;
    })
  }

}
