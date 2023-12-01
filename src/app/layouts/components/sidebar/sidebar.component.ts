import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sidebar} from "../../models/Sidebar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebar: Sidebar = new Sidebar("desktop", true);
  @Output() callback = new EventEmitter<void>();

  onCallback(): void {
    this.callback.emit();
  }
}
