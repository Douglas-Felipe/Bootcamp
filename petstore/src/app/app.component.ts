import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'petstore';
  menus = [
    { 'name': 'Home', 'router': '/' },
    { 'name': 'Contato', 'router': '/contact' }
  ];

  constructor(private router: Router) {}

  showPage(pageName: string, sidenav: MatSidenav) {
    this.router.navigate([pageName]);
    sidenav.close();
  }
}
