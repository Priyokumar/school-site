import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-mat.component.html',
  styleUrls: ['./header-mat.component.scss']
})
export class HeaderComponent {

  @Input() sideNavToggle: any
  scrSize$ = this.layoutService.scrSize

  constructor(private layoutService: LayoutService){
  }
  
}
