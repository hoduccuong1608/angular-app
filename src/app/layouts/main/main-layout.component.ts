import {Component, HostListener, OnInit} from '@angular/core';
import {SidebarService} from "../service/sidebar.service";
import {Sidebar} from "../models/Sidebar";
import {ActivatedRoute} from "@angular/router";
import {WindowService} from "../service/window.service";

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  sidebar: Sidebar = new Sidebar(this.windowService.getCurrentScreen(), false)
  constructor(private route: ActivatedRoute, private sidebarService: SidebarService, private windowService: WindowService
  ) {}

  ngOnInit() {
    this.sidebarService.setSidebar(this.windowService.getCurrentScreen(), false)
    this.sidebarService.sidebar$.subscribe(sidebar => {
      this.sidebar = sidebar
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   if(this.sidebar.state !== this.windowService.getCurrentScreen()) {
  //     this.sidebarService.setSidebar(this.windowService.getCurrentScreen(),false)
  //   }
  // }
}
