import {Component, Input} from '@angular/core';
import {Sidebar} from "../../models/Sidebar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebar: Sidebar = new Sidebar("desktop", true);
}
