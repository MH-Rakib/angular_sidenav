import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarServiceService {
  showNav: boolean = false;
  constructor() {}

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
