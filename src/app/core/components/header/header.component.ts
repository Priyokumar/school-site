import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
