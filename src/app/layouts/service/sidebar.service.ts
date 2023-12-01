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

  setSidebar(state: string, collapse: boolean) {
    this.sidebar = new Sidebar(state, collapse);
    this.sidebarSubject.next(this.sidebar);
  }

  setStateSidebar(state: string) {
    this.sidebar.state = state

  }

  setCollapseSidebar(collapse: boolean) {
    this.sidebar.collapse = collapse
  }

  invertSidebarCollapse() {
    this.sidebar.collapse = !this.sidebar.collapse
  }
}
