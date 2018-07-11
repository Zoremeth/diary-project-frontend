import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // Initial values
  private icon = 'close';
  private drawerState = true;

  constructor() { }

  openSidebar(): void {
    if (this.drawerState === true) {
      this.closeSidebar();
    } else {
      this.drawerState = true;
      this.setIcon('close');
    }
  }

  closeSidebar(): void {
    this.drawerState = false;
    this.setIcon('menu');
  }

  getState(): Observable<boolean> {
    return of(this.drawerState);
  }

  setState(state: boolean): void {
    this.drawerState = state;
  }

  getIcon(): Observable<string> {
    return of(this.icon);
  }

  setIcon(state: string): void {
    this.icon = state;
  }
}
