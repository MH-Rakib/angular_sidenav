import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() data: boolean | undefined;
  @Output() data2: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  showText: boolean = true;

  ngOnInit(): void {}

  setShowMobileNav() {
    this.data = !this.data;
    this.data2.emit(this.data);
  }

  toggleText() {
    this.showText = !this.showText;
  }
}
