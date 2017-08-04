import { Component, OnInit } from '@angular/core';
import { NavBar } from '../navbar/navbar.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
