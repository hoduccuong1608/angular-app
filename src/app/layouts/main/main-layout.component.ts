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
  sidebarMaxWidth: number = 80*3.5;
  sidebarMinWidth: number = 80;

  sidebar: Sidebar = new Sidebar(this.windowService.getCurrentScreen(), false)
  constructor(private route: ActivatedRoute, private sidebarService: SidebarService,
              private windowService: WindowService
  ) {}

  ngOnInit() {
    this.sidebarService.setSidebar(this.windowService.getCurrentScreen(), false)
    this.sidebarService.sidebar$.subscribe(sidebar => {
      this.sidebar = sidebar
    });
  }

  invertSidebarCollapse(): void {
    if (this.sidebarService) {
      this.sidebarService.invertSidebarCollapse()
      if(this.sidebar.state === 'mobile') {
        this.sidebarMaxWidth = this.windowService.getBrowserWidth()
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if(this.sidebar.state !== this.windowService.getCurrentScreen()) {
      this.sidebarService.setStateSidebar(this.windowService.getCurrentScreen())
    }
  }
}
