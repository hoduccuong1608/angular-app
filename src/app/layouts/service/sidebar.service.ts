import { Injectable } from '@angular/core';
import {Sidebar} from "../models/Sidebar";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private arrayStates:string[] = ['mobile', 'tablet', 'laptop', 'desktop']
  private sidebar: Sidebar = new Sidebar(this.arrayStates[3], true);

  private sidebarSubject = new BehaviorSubject(this.sidebar);

  sidebar$ = this.sidebarSubject.asObservable();

  setSidebar(state: string, open: boolean) {
    this.sidebar = new Sidebar(state, open);
    this.sidebarSubject.next(this.sidebar);
  }

  setOpenSidebar(open: boolean) {
    this.sidebar.open = open
  }

  setOpenCustomSidebar() {
    this.sidebar.open = !this.sidebar.open
  }
}
