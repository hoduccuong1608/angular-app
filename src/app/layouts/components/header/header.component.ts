import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sidebar} from "../../models/Sidebar";
import {SidebarService} from "../../service/sidebar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sidebar: Sidebar = new Sidebar("desktop", true);
  @Output() callback = new EventEmitter<void>();

  onCallback(): void {
    this.callback.emit();
  }

}
