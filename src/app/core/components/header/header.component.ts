import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-material.component.html',
  styleUrls: ['./header-material.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle: boolean = false;
  openMenu() {
    this.toggle = !this.toggle;
    console.log(this.toggle);

  }
  
}
