import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'appbar-user-component',
  templateUrl: './appbar-user.component.html',
  styleUrls: ['./appbar-user.component.scss'],
})
export class AppbarUserComponent {
  constructor(private router: Router) {}
}
