import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'appbar-component',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  currentTabIndex = 0;
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.router.url === '/admin/loan') {
      this.currentTabIndex = 0;
    } else if (this.router.url === '/admin/inventory') {
      this.currentTabIndex = 1;
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
    if (event.index === 0) {
      this.router.navigateByUrl('/admin/loan');
    } else {
      this.router.navigateByUrl('/admin/inventory');
    }
  }
}
