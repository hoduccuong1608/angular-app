import {Component, Input} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";
import {Sidebar} from "../../models/Sidebar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() sidebar: Sidebar = new Sidebar("desktop", true);

  constructor(private  sidebarService: SidebarService) {
  }
   setSideBar() {
    this.sidebarService.setOpenCustomSidebar()
   }

}
