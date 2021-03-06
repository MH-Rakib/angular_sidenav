import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Side Nav';
  showNav: boolean = true;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
