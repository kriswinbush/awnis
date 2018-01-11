import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awnis-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
 public isNavbarCollapsed: boolean = true; 
  constructor() { }

  ngOnInit() {
  }

}
