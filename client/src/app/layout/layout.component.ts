import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  start = false

  constructor() { }

  toggle() {
    this.start = !this.start
  }

  ngOnInit(): void {
  }
}
